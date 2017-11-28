
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
		/*
		 * 老方法
		 */
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
		
		/*setupWebViewJavascriptBridge(function(bridge) {
			bridge.callHandler(method, params, function(response) {
				try { 
					const { err, res } = JSON.parse(response)
					callback(err, res)
				} catch (e) {
					callback(false)
				}
			})
		})*/
		
		
	} else if(os().isAndroid) { 
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
            	
            	const { err, res } = JSON.parse(responseData);
            	
            	callback(err, res);
            }
        );
	} 
}

/*
 * 新的与APP交互
 */
function setupWebViewJavascriptBridge(callback) {
	/*if(os().isPhone) {*/
		if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }
        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }
        window.WVJBCallbacks = [callback];
        var WVJBIframe = document.createElement('iframe');
        WVJBIframe.style.display = 'none';
        WVJBIframe.src = 'https://__bridge_loaded__';
        document.documentElement.appendChild(WVJBIframe);
        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
		
	/*} else if(os().isAndroid) { 
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
	}*/
}


export const callAppRouter2 = (method, params, callback) => {
	setupWebViewJavascriptBridge(function(bridge) {
		bridge.callHandler(method, params, function(response) {
			try { 
				const { err, res } = JSON.parse(response)
				callback(err, res)
			} catch (e) {
				callback(response, typeof response)
			}
		})
	})
	
}
