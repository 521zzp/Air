export const BASEURL = '/mapi' //服务器地址陈


//export const IMG = 'http://192.168.3.10/assets/mobile' //本地图片服务器地址
export const IMG = '/assets/mobile'//服务器移动端图片地址
//export const IMG = 'http://139.196.25.57/res' //57图片服务器地址





//登录&注册
export const REGISTER_SEND_CODE = BASEURL + '/sendIdentifyingCode.do'  //发送验证码
export const REGISTER = BASEURL + '/regist.do' //注册接口


//其他通用部分
export const NEWS_ITEM = BASEURL + '/news' //获取新闻详情信息
export const ACTIVITY_SHOW_IMG = BASEURL + '/getActivityImg.do' //普通展示新闻展示图片


//产品相关
export const PRODUCT_INFO = BASEURL + '/getProductDes.do' //产品详情，根据产品id获取产品详情