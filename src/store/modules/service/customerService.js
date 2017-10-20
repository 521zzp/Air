import * as types from '../../mutation-types'
import { CUSTOMER_SERVICE_WEBSOCKET, CUSTOMER_SERVICE_ENQUIRE } from '@/config/url'
import { postModelTwo, analy } from '@/tool/net'

const state = {
	socket: null,
	enquireFlag: 0,
	connectable: false,
	socketOn: false,
	serviceId: '',
	userId: '',
	records: [],
	more: false, //是否还有更多
	scroll: 0,//是否触发滚动
	scrollBehavior: 'bottom',// top, bottom, stable
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
		    commit(types.CUSTOMER_SERVICE_CONNECT_STATUS, true)
		};
		state.socket.onerror = function(){
		    console.log('已断开连接')
		    commit(types.CUSTOMER_SERVICE_CONNECT_STATUS, false)
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
  		state.socket.send(JSON.stringify({ ...obj, socketType: 'COMMON_SEND', userId: state.userId, serviceId: state.serviceId, type: 1 }))
  	},
  	customerServiceSocketGetHistoryRecords({ commit }, obj) {
  		state.socket.send(JSON.stringify({
  			socketType: 'CHAT_HISTORY_RECORDS', 
  			userId: state.userId, 
  			serviceId: state.serviceId,
  			id: state.records[0].id
  		}))
  	}
}

const mutations = {
    [types.CUSTOMER_SERVICE_ENQUIRE] (state, { connectable }) {
   		state.connectable = connectable
   		state.enquireFlag++
    },
    [types.CUSTOMER_SERVER_RECEIVE] (state, obj) {
    	switch (obj.socketType){
			case 'CUSTOMER_CONNECT':
				state.serviceId = obj.serviceId
				state.userId = obj.userId
				state.records = obj.records
				state.scrollBehavior = 'bottom'
				state.scroll++
				state.more = obj.more
				break;
			case 'CLERK_SEND':
				state.records = state.records.concat(obj.record)
				state.scrollBehavior = 'bottom'
				state.scroll++
				break;
			case 'CUSTOMER_SEND':
				state.records = state.records.concat(obj.record)
				state.scrollBehavior = 'bottom'
				state.scroll++
				break;
			case 'CLERK_CONNECT':
				
				break;
			case 'CHAT_HISTORY_RECORDS':
				state.records = obj.records.concat(state.records)
				state.more = obj.more
				break;
				
			default:
				break;
		}
    },
    [types.CUSTOMER_SERVICE_CONNECT_STATUS] (state, obj) {
    	state.socketOn = true
    }
}


export default{
	state,
	actions,
	mutations
}

