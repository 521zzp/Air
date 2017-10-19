export const BASEURL = '/mapi' //服务器地址陈


//export const IMG = 'http://192.168.3.10/assets/mobile' //本地图片服务器地址
export const IMG = '/assets/mobile'//服务器移动端图片地址





//登录&注册
export const REGISTER_SEND_CODE = BASEURL + '/sendIdentifyingCode.do'  //发送验证码
export const REGISTER = BASEURL + '/regist.do' //注册接口


//其他通用部分
export const NEWS_ITEM = BASEURL + '/news' //获取新闻详情信息
export const ACTIVITY_SHOW_IMG = BASEURL + '/getActivityImg.do' //普通展示新闻展示图片

//服务
export const CUSTOMER_SERVICE_ENQUIRE = BASEURL + '/websocket/test.do' //询问是否可以连接
export const CUSTOMER_SERVICE_WEBSOCKET = 'ws://192.168.3.8:8080/p2p_zgjf/websocket'


//固定不变部分
export const LOAN_AGREEMENT = BASEURL + '/agreement.do'  //借款协议


//产品相关
export const PRODUCT_INFO = BASEURL + '/getProductDes.do' //产品详情，根据产品id获取产品详情