export const BASEURL = '/mapi' //服务器地址陈


//export const IMG = 'http://192.168.3.10/assets/mobile' //本地图片服务器地址
export const IMG = '/assets/mobile'//服务器移动端图片地址



//图片上传接口
export const UPLOAD_IMAGE = BASEURL + '/safafa' //通用图片上传接口

//验证身份证号
export const VALICODE_IDCARD = BASEURL + '/confirmIdentity'  //验证身份证号码接口
//通用验证码验证
export const VALICODE_PHONE_CODE = BASEURL + '/confirmCode' //验证验证码
//根据经纬度获取地理位置
export const GET_GEOLOCATION = BASEURL + '/getPosition'  //

//登录&注册
export const REGISTER_SEND_CODE = BASEURL + '/sendIdentifyingCode'  //发送验证码
export const REGISTER = BASEURL + '/regist' //注册接口
//新注册，推广注册活动
export const PROMOTE_REGISTER_SEND_CODE = BASEURL + '/ASFASGF' //发送验证码  暂时无效
export const PROMOTE_REGISTER_VALI_CODE = BASEURL + '/confirmCode' //验证验证码
export const PROMOTE_IMAGE_UPLOAD = BASEURL + '/uploadImage' //推广上传照片
export const PROMOTE_REGISTER = BASEURL + '/newRegist' //推广最终注册
//商户注册认证
export const MERCHANT_REGISTER = BASEURL + '/newRegist' //商户最终注册
export const MERCHANT_IMAGE_UPLOAD = BASEURL + '/uploadImage' //推广上传照片

//其他通用部分
export const NEWS_ITEM = BASEURL + '/news' //获取新闻详情信息
export const ACTIVITY_SHOW_IMG = BASEURL + '/getActivityImg' //普通展示新闻展示图片
export const INVITE_RED_PACKET_INFO = BASEURL + '/invite/red/packet/info' //邀请记录统计
export const INVITE_RED_PACKET_TOTAL = BASEURL + '/invite/red/packet/total' //邀请总人数
export const INVITE_RED_PACKET_LIST = BASEURL + '/invite/red/packet/list' //邀请人数集合


//服务
export const CUSTOMER_SERVICE_ENQUIRE = BASEURL + '/websocket/test' //询问是否可以连接
//export const CUSTOMER_SERVICE_WEBSOCKET = 'ws://192.168.3.8:8090/websocket' //socket连接地址
export const CUSTOMER_SERVICE_WEBSOCKET = 'ws://www.zhangguijf.com:8090/websocket' //socket连接地址
export const CUSTOMER_SERVICE_UPLOAD_IMAGE = BASEURL + '/websocket/uploadImage' //上传图片


//固定不变部分
export const LOAN_AGREEMENT = BASEURL + '/agreement'  //借款协议


//产品相关
export const PRODUCT_INFO = BASEURL + '/getProductDes' //产品详情，根据产品id获取产品详情