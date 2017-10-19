import * as types from '../../mutation-types'
import { CUSTOMER_SERVICE_WEBSOCKET, CUSTOMER_SERVICE_ENQUIRE } from '@/config/url'
import { postModelTwo, analy } from '@/tool/net'

const state = {
	socket: null,
	enquireFlag: 0,
	connectable: false,
	socketOn: false,
	serviceId: '',
	records: [],
	content: {
	},
	type: [ 'CUSTOMER_CONNECT', 'CUSTOMER_SEND', 'CLERK_SEND', 'CUSTOMER_DISCONNECT' ],
	
}


const actions = {
	customerServiceEnquire ({ commit }, obj) {
		fetch(CUSTOMER_SERVICE_ENQUIRE, postModelTwo(obj)).then(analy).then(
			data => commit(types.CUSTOMER_SERVICE_ENQUIRE, data)
		)
	},
	customerServiceSocketConnect ({ commit }, obj) {
		console.log('尝试连接')
		state.socket = new WebSocket(CUSTOMER_SERVICE_WEBSOCKET + '/1/' + obj.account)
		
		state.socket.onopen = function(){
		    console.log('已连接')
		};
		state.socket.onmessage = function (evt) { 
            var data = JSON.parse(evt.data);
            console.log("数据已接收...");
            console.log(data)
            console.log(evt.data);
            commit(types.CUSTOMER_SERVER_RECEIVE, data)
          
            
	      };
		
		
		
  	},
  	customerServiceSocketSend({ commit }, obj) {
  		state.socket.send(JSON.stringify({ ...obj, serviceId: state.serviceId, type: 1 }))
  	}
}

const mutations = {
	[types.LOAN_AGREEMENT] (state, obj) {
		if (obj.msg) {
			delete obj.msg
		}
		state.content = obj
    },
    [types.CUSTOMER_SERVICE_ENQUIRE] (state, { connectable }) {
   		state.connectable = connectable
   		state.enquireFlag++
    },
    [types.CUSTOMER_SERVER_RECEIVE] (state, obj) {
    	switch (obj.type){
			case 'CUSTOMER_CONNECT':
				state.serviceId = obj.serviceId
				break;
			case 'CLERK_SEND':
				state.records.push(obj.record)
				break;
			case 'CLERK_CONNECT':
				break;
				
			default:
				break;
		}
    }
}


export default{
	state,
	actions,
	mutations
}

