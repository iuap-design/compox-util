/**
 * Module : compox-util ajax
 * Author : huyue(huyueb@yonyou.com)
 * Date   : 2017-01-18 09:34:01
 */

import { ajax as uAjax } from 'tinper-sparrow/src/ajax';

var ajax = function ajax(params) {
    params = _wrapAjax.call(this, params);
    uAjax(params);
};

/**
 * 对ajax的请求的数据进行处理
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
var _wrapAjax = function _wrapAjax(params) {
    var self = this;
    this.serverEventObj = this.serverEvent();
    var orignSuccess = params.success;
    var orignError = params.error;
    var deferred = params.deferred;
    if (!deferred || !deferred.resolve) {
        deferred = {
            resolve: function resolve() {}, reject: function reject() {}
        };
    }
    params.success = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.serverEventObj.processXHRError(self, data, state, xhr)) {
            orignSuccess.call(null, data);
            _successFunc(data, deferred);
        } else {
            deferred.reject();
        }
    };
    params.error = function (data, state, xhr) {
        if (typeof data === 'string') data = JSON.parse(data);
        if (self.serverEventObj.processXHRError(self, data, state, xhr)) {
            orignError.call(null, data);
            _successFunc(data, deferred);
        } else {
            deferred.reject();
        }
    };
    if (params.data) params.data.environment = ko.utils.stringifyJson(u.core.collectEnvironment());else params.data = { environment: ko.utils.stringifyJson(u.core.collectEnvironment()) };
    return params;
};

var _successFunc = function _successFunc(data, deferred) {
    deferred.resolve();
};

export { ajax };