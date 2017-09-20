import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Inner from '@/components/Inner'


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
  require.ensure(['@/components/page/general/Register2.vue'], () => {
    resolve(require('@/components/page/general/Register2.vue'))
  })
}
const News = resolve => {
  require.ensure(['@/components/page/general/News.vue'], () => {
    resolve(require('@/components/page/general/News.vue'))
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




import store from '@/store'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	routes: [
		{
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: {
      	weight: 100000
      }
		},
		{
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
      	weight: 1000000
      }
		},
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
		{
      path: '/inner',
      name: 'inner',
      component: Inner,
      meta: {
      	weight: 1000
      }
		},
		{
      path: '/*',
      name: 'notFound',
      component: NotFound
    },
    ],
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