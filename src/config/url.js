export const BASEURL = '/mapi' //服务器地址陈


//export const IMG = 'http://192.168.3.10/assets/mobile' //本地图片服务器地址
export const IMG = '/assets/mobile'//服务器移动端图片地址





//登录&注册
export const REGISTER_SEND_CODE = BASEURL + '/sendIdentifyingCode'  //发送验证码
export const REGISTER = BASEURL + '/regist' //注册接口


//其他通用部分
export const NEWS_ITEM = BASEURL + '/news' //获取新闻详情信息
export const ACTIVITY_SHOW_IMG = BASEURL + '/getActivityImg' //普通展示新闻展示图片

//服务
export const CUSTOMER_SERVICE_ENQUIRE = BASEURL + '/websocket/test' //询问是否可以连接
//export const CUSTOMER_SERVICE_WEBSOCKET = 'ws://192.168.3.8:8090/websocket' //socket连接地址
export const CUSTOMER_SERVICE_WEBSOCKET = 'ws://www.shangnongtou.com:8090/websocket' //socket连接地址
export const CUSTOMER_SERVICE_UPLOAD_IMAGE = BASEURL + '/websocket/uploadImage' //上传图片


//固定不变部分
export const LOAN_AGREEMENT = BASEURL + '/agreement'  //借款协议


//产品相关
export const PRODUCT_INFO = BASEURL + '/getProductDes' //产品详情，根据产品id获取产品详情