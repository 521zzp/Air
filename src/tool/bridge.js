
/*var ua = navigator.userAgent;

function isAndroid() {
    return ua.indexOf('Android') > 0;
}

function isIOS() {
    return /(iPhone|iPad|iPod)/i.test(ua);
}
*/

import { os } from './tool'
var init = false

const connectWebViewJavascriptBridge = (callback) => {
	if (window.WebViewJavascriptBridge) {
        callback(WebViewJavascriptBridge)
    } else {
        document.addEventListener(
            'WebViewJavascriptBridgeReady'
            , function() {
                callback(WebViewJavascriptBridge)
            },
            false
        );
    }
}


export const callAppRouter = (method, params, callback) => {
	var req = {
		'Method': method,
		'Data': params
	};
	if(os().isPhone) {
		window.bridge.callRouter(req, function(err, result) {
			var resultObj = null;
			var errorMsg = null;
			if(typeof(result) !== 'undefined' && result !== 'null' && result !== null) {
				resultObj = JSON.parse(result);
				if(resultObj) {
					resultObj = resultObj['result'];
				}
			}
			if(err !== 'null' && typeof(err) !== 'undefined' && err !== null) {
				errorMsg = err;
			}
			callback(err, resultObj);
		});
	} else if(os().isAndroid) { //生成回调函数方法名称
		/*var cbName = 'CB_' + Date.now() + '_' + Math.ceil(Math.random() * 10); //挂载一个临时函数到window变量上，方便app回调
		window[cbName] = function(err, result) { 
			var resultObj; 
			if (typeof(result) !== 'undefined' && result !== null) { 
				resultObj = JSON.parse(result)['result']; 
			} callback(err, resultObj); //回调成功之后删除挂载到window上的临时函数
			delete window[cbName]; 
		}; 
		window.bridge.callRouter(JSON.stringify(req), cbName); */
		if (!init) {
			connectWebViewJavascriptBridge(function(bridge) {
	            bridge.init(function(message, responseCallback) {
	                responseCallback(data);
	            });
	        })
			init = true
		}
		window.WebViewJavascriptBridge.callHandler(
            method, params, function(responseData) {
            	const { err, result } = JSON.parse(responseData);
            	callback(err, result);
            }
        );
		
	} 
}