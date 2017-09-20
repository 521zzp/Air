import * as types from '../mutation-types'
import { NEWS_ITEM } from '@/config/url'
import { postModelOne, analy } from '@/tool/net'

const state = {
	item: {
		title: '',
		content: ''
	}
}


const actions = {
	getNews ({ commit }, obj){
		fetch(NEWS_ITEM, postModelOne(obj)).then(analy)
				.then((datas)=>{
				commit(types.NEWS_ITEM, datas);
			}).catch(function(error) {
			    commit(types.NEWS_ITEM, {
			    	title: '新闻信息异常',
			    	content: '<p style="text-align: center;">您的网络有问题或该条新闻不存在！</p>'
			    });
			  });
  	}
}

const mutations = {
	[types.NEWS_ITEM] (state, {title, content}) {
		state.item = { title, content }
    }
}


export default{
	state,
	actions,
	mutations
}
