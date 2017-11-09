import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'


const Activity = resolve => {
  // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
  // （代码分块）
  require.ensure(['@/components/page/activity/Activity.vue'], () => {
    resolve(require('@/components/page/activity/Activity.vue'))
  })
}
const ActivityProduct = resolve => {
  require.ensure(['@/components/page/activity/ActivityProduct.vue'], () => {
    resolve(require('@/components/page/activity/ActivityProduct.vue'))
  })
}
const ActivityShow = resolve => {
  require.ensure(['@/components/page/activity/ActivityShow.vue'], () => {
    resolve(require('@/components/page/activity/ActivityShow.vue'))
  })
}

/*
 * 一般通用功能
 */
const Register = resolve => {
  require.ensure(['@/components/page/general/Register.vue'], () => {
    resolve(require('@/components/page/general/Register.vue'))
  })
}
const News = resolve => {
  require.ensure(['@/components/page/general/News.vue'], () => {
    resolve(require('@/components/page/general/News.vue'))
  })
}
const InviteRedPacket = resolve => {
  require.ensure(['@/components/page/general/InviteRedPacket.vue'], () => {
    resolve(require('@/components/page/general/InviteRedPacket.vue'))
  })
}
const InviteReceiveRecord = resolve => {
  require.ensure(['@/components/page/general/InviteReceiveRecord.vue'], () => {
    resolve(require('@/components/page/general/InviteReceiveRecord.vue'))
  })
}
const RegisterOne = resolve => {
  require.ensure(['@/components/page/general/register/RegisterOne.vue'], () => {
    resolve(require('@/components/page/general/register/RegisterOne.vue'))
  })
}
const RegisterTwo = resolve => {
  require.ensure(['@/components/page/general/register/RegisterTwo.vue'], () => {
    resolve(require('@/components/page/general/register/RegisterTwo.vue'))
  })
}
/*
 * 服务功能
 */
//在线客服
const CustomerService = resolve => {
  require.ensure(['@/components/page/service/CustomerService.vue'], () => {
    resolve(require('@/components/page/service/CustomerService.vue'))
  })
} 


/*
 * stationary 固定不变的一些页面
 */
const AppDownload = resolve => {
  require.ensure(['@/components/page/stationary/AppDownload.vue'], () => {
    resolve(require('@/components/page/stationary/AppDownload.vue'))
  })
}
const Guide = resolve => {
  require.ensure(['@/components/page/stationary/Guide.vue'], () => {
    resolve(require('@/components/page/stationary/Guide.vue'))
  })
}
const Guarantee = resolve => {
  require.ensure(['@/components/page/stationary/Guarantee.vue'], () => {
    resolve(require('@/components/page/stationary/Guarantee.vue'))
  })
}
const Agreement = resolve => {
  require.ensure(['@/components/page/stationary/Agreement.vue'], () => {
    resolve(require('@/components/page/stationary/Agreement.vue'))
  })
}
const RiskReveal = resolve => {
  require.ensure(['@/components/page/stationary/RiskReveal.vue'], () => {
    resolve(require('@/components/page/stationary/RiskReveal.vue'))
  })
}
const Disclaimer = resolve => {
  require.ensure(['@/components/page/stationary/Disclaimer.vue'], () => {
    resolve(require('@/components/page/stationary/Disclaimer.vue'))
  })
}
const NotFound = resolve => {
  require.ensure(['@/components/page/stationary/NotFound.vue'], () => {
    resolve(require('@/components/page/stationary/NotFound.vue'))
  })
}
const AboutUs = resolve => {
  require.ensure(['@/components/page/stationary/AboutUs.vue'], () => {
    resolve(require('@/components/page/stationary/AboutUs.vue'))
  })
}
const LoanAgreement = resolve => {
  require.ensure(['@/components/page/stationary/LoanAgreement.vue'], () => {
    resolve(require('@/components/page/stationary/LoanAgreement.vue'))
  })
}

/*
 * 产品相关信息
 */
const ProductInfo = resolve => {
  require.ensure(['@/components/page/product/ProductInfo.vue'], () => {
    resolve(require('@/components/page/product/ProductInfo.vue'))
  })
}
/*
 * 扩展功能
 */
//每日抽奖
/*const LuckyDraw = resolve => {
  require.ensure(['@/components/page/expand/LuckyDraw.vue'], () => {
    resolve(require('@/components/page/expand/LuckyDraw.vue'))
  })
}*/
//视频播放
/*const VideoPlayer = resolve => {
  require.ensure(['@/components/page/expand/VideoPlayer.vue'], () => {
    resolve(require('@/components/page/expand/VideoPlayer.vue'))
  })
}*/

/*
 * 活动页面
 */
//邀请好友
const InviteFriend = resolve => {
  require.ensure(['@/components/page/activity/17-09/InviteFriend.vue'], () => {
    resolve(require('@/components/page/activity/17-09/InviteFriend.vue'))
  })
}
//新手福利
const JackarooWelfare = resolve => {
  require.ensure(['@/components/page/activity/17-09/JackarooWelfare.vue'], () => {
    resolve(require('@/components/page/activity/17-09/JackarooWelfare.vue'))
  })
}
//双节活动
const TwoFestival = resolve => {
  require.ensure(['@/components/page/activity/17-09/TwoFestival.vue'], () => {
    resolve(require('@/components/page/activity/17-09/TwoFestival.vue'))
  })
}
//三重好礼
const ThreeGifts = resolve => {
  require.ensure(['@/components/page/activity/17-11/ThreeGifts.vue'], () => {
    resolve(require('@/components/page/activity/17-11/ThreeGifts.vue'))
  })
}

import store from '@/store'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
      	weight: 1000000
      }
		},
		/*
		 * 产品相关信息
		 */
		{
      path: '/projectIntroduction/:id',
      name: 'ProductInfo',
      component: ProductInfo,
      meta: {
      	weight: 1
      }
		},
		/*
		 * 通用功能
		 */
		{
      path: '/news/:id',
      name: 'News',
      component: News,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/app',
      name: 'AppDownload',
      component: AppDownload,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/inviteRedPacket/:account',
      name: 'InviteRedPacket',
      component: InviteRedPacket,
      meta: {
      	weight: 2
      }
		},
		{
      path: '/inviteReceiveRecord/:account',
      name: 'InviteReceiveRecord',
      component: InviteReceiveRecord,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/promote-register/:type/:account',
      name: 'RegisterOne',
      component: RegisterOne,
      meta: {
      	weight: 3
      }
		},
		{
      path: '/promote-register-more/:type/:account',
      name: 'RegisterTwo',
      component: RegisterTwo,
      meta: {
      	weight: 2
      }
  },
		/*
		 * 服务
		 */
		{
      path: '/customerService/:account',
      name: 'CustomerService',
      component: CustomerService,
      meta: {
      	weight: 1
      }
		},
		/*
		 * 固定功能
		 */
		{
      path: '/guide',
      name: 'Guide',
      component: Guide,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/guarantee',
      name: 'Guarantee',
      component: Guarantee,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/agreement',
      name: 'Agreement',
      component: Agreement,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/disclaimer',
      name: 'disclaimer',
      component: Disclaimer,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/aboutUs',
      name: 'AboutUs',
      component: AboutUs,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/loanAgreement/:id/:account/:money',
      name: 'LoanAgreement',
      component: LoanAgreement,
      meta: {
      	weight: 1
      }
		},
		/*
		 * 活动
		 */
		{
      path: '/riskReveal/:product',
      name: 'RiskReveal',
      component: RiskReveal,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/activity/buy/:id',
      name: 'activityProduct',
      component: ActivityProduct,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/activity/show/:id',
      name: 'ActivityShow',
      component: ActivityShow,
      meta: {
      	weight: 1
      }
		},
		
		{
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
      	weight: 10000
      }
		},
		//扩展功能
		/*{
      path: '/videoPlayer',
      name: 'videoPlayer',
      component: VideoPlayer,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/luckyDraw',
      name: 'luckyDraw',
      component: LuckyDraw,
      meta: {
      	weight: 1
      }
		},*/
		//各种活动
		{
      path: '/17-09/inviteFriend',
      name: 'InviteFriend',
      component: InviteFriend,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/17-09/jackarooWelfare',
      name: 'JackarooWelfare',
      component: JackarooWelfare,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/17-09/twoFestival',
      name: 'TwoFestival',
      component: TwoFestival,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/17-11/threeGifts',
      name: 'ThreeGifts',
      component: ThreeGifts,
      meta: {
      	weight: 1
      }
		},
		{
      path: '/*',
      name: 'notFound',
      component: NotFound
    },
  ],
  scrollBehavior (to, from, savedPosition) {
	  if (savedPosition) {
	    return savedPosition
	  } else {
	    return { x: 0, y: 0 }
	  }
	}
})

router.beforeEach((to, from, next) => {
	const origin = from.meta.weight
	const target = to.meta.weight
	
	if ( !from.name || (origin && target && origin >= target)) {
		store.dispatch('nvaAnimationChange', 'vux-pop-in')
	} else {
		store.dispatch('nvaAnimationChange', 'vux-pop-out')
	}
	next()
})

export default router