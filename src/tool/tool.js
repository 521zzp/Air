
/*
 * 判断浏览器类型
 */
export const browser = () => {
    let userAgent = navigator.userAgent;
   	
    let isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; 
    if (userAgent.indexOf("Firefox") > -1) {
        return "Firefox";
    } 
    if (userAgent.indexOf("Edge") > -1){
	  return "Edge";
	 }
    if (userAgent.indexOf("Chrome") > -1){
	  return "Chrome";
	 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } 
    if ((userAgent.indexOf(".NET") > -1 || userAgent.indexOf("MSIE") > -1 )&& !isOpera) {
        return "IE";
    }; 
}
/*
 * 判断操作系统
 */
export const os = () => {  
     var ua = navigator.userAgent,  
     isWindowsPhone = /(?:Windows Phone)/.test(ua),  
     isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,   
     isAndroid = /(?:Android)/.test(ua),   
     isFireFox = /(?:Firefox)/.test(ua),   
     isChrome = /(?:Chrome|CriOS)/.test(ua),  
     isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),  
     isPhone = /(?:iPhone)/.test(ua) && !isTablet,  
     isPc = !isPhone && !isAndroid && !isSymbian;  
     return {  
          isTablet: isTablet,  
          isPhone: isPhone,  
          isAndroid : isAndroid,  
          isPc : isPc  
     };  
};

/*
 * 判断是否是PC
 */

export const isPc = () => os().isPc


/*
 * 动态载入js文件
 */
export const loadJs = (loadUrl,callBack,argObj) =>{
	let loadScript=document.createElement('script');
        loadScript.setAttribute("type","text/javascript");
        loadScript.setAttribute('src',loadUrl);
        document.getElementsByTagName("head")[0].appendChild(loadScript);
        //judge browser typ
        if(navigator.userAgent.indexOf("IE") >=0){
            //old trash ie download js event
            loadScript.onreadystatechange=function(){
                if(loadScript && (loadScript.readyState == "loaded" || loadScript.readyState == "complete")){
                    //js download succeed
                    loadScript.onreadystatechange=null;
                    callBack()
                }
            }
        }
        else{
            loadScript.onload=function(){
                loadScript.onload=null;
                callBack();
            }
        }
}

//滚动条在Y轴上的滚动距离
export const getScrollTop = () => { 
   let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}

//文档的总高度
export const getScrollHeight = () => {
    let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
}

//浏览器视口的高度

export const getWindowHeight = () => {
	let windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}


//判断是否滑倒底部
export const isFoot = () => {
	return (getScrollTop() + getWindowHeight()) == getScrollHeight()
}


export const getQueryString = (name) => {
	let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	let r = window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]);
	return null;
}


