import * as types from './mutation-types'
/*import {EXIT, } from '@/config/url'*/
import {postModelOne, analy, getModel} from '@/tool/net'

export const actions = {
	/*exit ({commit},obj){
		confirmMoadl('退出','是否退出当前账号？',() => {
			fetch(EXIT, postModelOne(obj)).then(analy)
				.then((datas)=>{
				commit(types.EXIT,datas);
				}).catch(function(error) {
			   	commit(types.EXIT,{});
			  })
		},()=>{} )
	},*/
	
	nvaAnimationChange ({ commit }, obj) {
		commit(types.NAV_CHANGE_TYPE, obj)
	}
}