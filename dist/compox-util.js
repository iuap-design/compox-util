/*!
 * compox-util v3.1.26
 * 
 * author : yonyou FED
 * homepage : https://github.com/iuap-design/compox-util#readme
 * bugs : https://github.com/iuap-design/compox-util/issues
 */
!function(modules) {
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: !1,
            exports: {}
        };
        return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
        module.l = !0, module.exports;
    }
    var installedModules = {};
    __webpack_require__.m = modules, __webpack_require__.c = installedModules, __webpack_require__.i = function(value) {
        return value;
    }, __webpack_require__.d = function(exports, name, getter) {
        __webpack_require__.o(exports, name) || Object.defineProperty(exports, name, {
            configurable: !1,
            enumerable: !0,
            get: getter
        });
    }, __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module.default;
        } : function() {
            return module;
        };
        return __webpack_require__.d(getter, "a", getter), getter;
    }, __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 17);
}([ function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__(15);
    __webpack_require__.d(__webpack_exports__, "c", function() {
        return hasClass;
    }), __webpack_require__.d(__webpack_exports__, "a", function() {
        return getOffset;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return getScroll;
    });
    var hasClass = function(element, value) {
        return !!element && ((!element.nodeName || "#text" !== element.nodeName && "#comment" !== element.nodeName) && (void 0 === element.classList ? u._hasClass ? u._hasClass(element, value) : $(element).hasClass(value) : element.classList.contains(value)));
    }, getOffset = function(Node, offset) {
        return offset || (offset = {}, offset.top = 0, offset.left = 0), Node == document.body ? offset : (offset.top += Node.offsetTop, 
        offset.left += Node.offsetLeft, Node.offsetParent ? getOffset(Node.offsetParent, offset) : offset);
    }, getScroll = function(Node, offset) {
        return offset || (offset = {}, offset.top = 0, offset.left = 0), Node == document.body ? (offset.top += Node.scrollTop || document.documentElement.scrollTop, 
        offset.left += Node.scrollLeft || document.documentElement.scrollLeft, offset) : ("INPUT" != Node.tagName && (offset.top += Node.scrollTop, 
        offset.left += Node.scrollLeft), Node.parentNode ? getScroll(Node.parentNode, offset) : offset);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__extend__ = __webpack_require__(16);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return env;
    });
    var u = {};
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__extend__.a)(u, {
        isIE: !1,
        isFF: !1,
        isOpera: !1,
        isChrome: !1,
        isSafari: !1,
        isWebkit: !1,
        isIE8_BEFORE: !1,
        isIE8: !1,
        isIE8_CORE: !1,
        isIE9: !1,
        isIE9_CORE: !1,
        isIE10: !1,
        isIE10_ABOVE: !1,
        isIE11: !1,
        isEdge: !1,
        isIOS: !1,
        isIphone: !1,
        isIPAD: !1,
        isStandard: !1,
        version: 0,
        isWin: !1,
        isUnix: !1,
        isLinux: !1,
        isAndroid: !1,
        isAndroidPAD: !1,
        isAndroidPhone: !1,
        isMac: !1,
        hasTouch: !1,
        isMobile: !1
    }), function() {
        var version, userAgent = navigator.userAgent, rMsie = /(msie\s|trident.*rv:)([\w.]+)/, rFirefox = /(firefox)\/([\w.]+)/, rOpera = /(opera).+version\/([\w.]+)/, rChrome = /(chrome)\/([\w.]+)/, rSafari = /version\/([\w.]+).*(safari)/, ua = userAgent.toLowerCase(), browserMatch = {
            browser: "",
            version: ""
        }, match = rMsie.exec(ua);
        if (null != match && (browserMatch = {
            browser: "IE",
            version: match[2] || "0"
        }), match = rFirefox.exec(ua), null != match && (browserMatch = {
            browser: match[1] || "",
            version: match[2] || "0"
        }), match = rOpera.exec(ua), null != match && (browserMatch = {
            browser: match[1] || "",
            version: match[2] || "0"
        }), match = rChrome.exec(ua), null != match && (browserMatch = {
            browser: match[1] || "",
            version: match[2] || "0"
        }), match = rSafari.exec(ua), null != match && (browserMatch = {
            browser: match[2] || "",
            version: match[1] || "0"
        }), userAgent.indexOf("Edge") > -1 && (u.isEdge = !0), ua.match(/opera.([\d.]+)/) ? u.isOpera = !0 : "IE" == browserMatch.browser && 11 == browserMatch.version ? (u.isIE11 = !0, 
        u.isIE = !0) : ua.match(/chrome\/([\d.]+)/) ? (u.isChrome = !0, u.isStandard = !0) : ua.match(/version\/([\d.]+).*safari/) ? (u.isSafari = !0, 
        u.isStandard = !0) : ua.match(/gecko/) ? (u.isFF = !0, u.isStandard = !0) : ua.match(/msie ([\d.]+)/) ? u.isIE = !0 : ua.match(/firefox\/([\d.]+)/) && (u.isFF = !0, 
        u.isStandard = !0), ua.match(/webkit\/([\d.]+)/) && (u.isWebkit = !0), ua.match(/ipad/i) && (u.isIOS = !0, 
        u.isIPAD = !0, u.isStandard = !0), ua.match(/iphone/i) && (u.isIOS = !0, u.isIphone = !0), 
        "Mac68K" != navigator.platform && "MacPPC" != navigator.platform && "Macintosh" != navigator.platform && "MacIntel" != navigator.platform || (u.isMac = !0), 
        "Win32" != navigator.platform && "Windows" != navigator.platform && "Win64" != navigator.platform || (u.isWin = !0), 
        "X11" != navigator.platform || u.isWin || u.isMac || (u.isUnix = !0), String(navigator.platform).indexOf("Linux") > -1 && (u.isLinux = !0), 
        (ua.indexOf("Android") > -1 || ua.indexOf("android") > -1 || ua.indexOf("Adr") > -1 || ua.indexOf("adr") > -1) && (u.isAndroid = !0), 
        u.version = version && browserMatch.version ? browserMatch.version : 0, u.isAndroid && (window.screen.width >= 768 && window.screen.width < 1024 && (u.isAndroidPAD = !0), 
        window.screen.width <= 768 && (u.isAndroidPhone = !0)), u.isIE) {
            var intVersion = parseInt(u.version), mode = document.documentMode;
            null == mode ? 6 != intVersion && 7 != intVersion || (u.isIE8_BEFORE = !0) : (7 == mode ? u.isIE8_BEFORE = !0 : 8 == mode ? u.isIE8 = !0 : 9 == mode ? (u.isIE9 = !0, 
            u.isSTANDARD = !0) : 10 == mode ? (u.isIE10 = !0, u.isSTANDARD = !0, u.isIE10_ABOVE = !0) : u.isSTANDARD = !0, 
            8 == intVersion ? u.isIE8_CORE = !0 : 9 == intVersion ? u.isIE9_CORE = !0 : 11 == browserMatch.version && (u.isIE11 = !0));
        }
        "ontouchend" in document && (u.hasTouch = !0), (u.isIphone || u.isAndroidPhone) && (u.isMobile = !0);
    }();
    var env = u;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "b", function() {
        return isArray;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return inArray;
    }), __webpack_require__.d(__webpack_exports__, "a", function() {
        return each;
    });
    var isArray = Array.isArray || function(val) {
        return "[object Array]" === Object.prototype.toString.call(val);
    }, inArray = function(node, arr) {
        if (!arr instanceof Array) throw "arguments is not Array";
        for (var i = 0, k = arr.length; i < k; i++) if (node == arr[i]) return !0;
        return !1;
    }, each = function(obj, callback) {
        if (obj.forEach) obj.forEach(function(v, k) {
            callback(k, v);
        }); else {
            if (!(obj instanceof Object)) return;
            for (var k in obj) callback(k, obj[k]);
        }
    };
    try {
        NodeList.prototype.forEach = Array.prototype.forEach;
    } catch (e) {}
    String.prototype.lengthb = function() {
        return this.replace(/[^\x00-\xff]/g, "**").length;
    }, String.prototype.replaceAll = function(AFindText, ARepText) {
        var raRegExp = new RegExp(AFindText, "g");
        return this.replace(raRegExp, ARepText);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return setAdjustMetaFunc;
    });
    var setAdjustMetaFunc = function(adjustFunc) {
        this.adjustFunc = adjustFunc;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_ajax__ = __webpack_require__(13);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ajax;
    });
    var ajax = function(params) {
        params = _wrapAjax.call(this, params), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_ajax__.a)(params);
    }, _wrapAjax = function(params) {
        var self = this;
        this.serverEventObj = this.serverEvent();
        var orignSuccess = params.success, orignError = params.error, deferred = params.deferred;
        return deferred && deferred.resolve || (deferred = {
            resolve: function() {},
            reject: function() {}
        }), params.success = function(data, state, xhr) {
            "string" == typeof data && (data = JSON.parse(data)), self.serverEventObj.processXHRError(self, data, state, xhr) ? (orignSuccess.call(null, data), 
            _successFunc(data, deferred)) : deferred.reject();
        }, params.error = function(data, state, xhr) {
            "string" == typeof data && (data = JSON.parse(data)), self.serverEventObj.processXHRError(self, data, state, xhr) ? (orignError.call(null, data), 
            _successFunc(data, deferred)) : deferred.reject();
        }, params.data ? params.data.environment = ko.utils.stringifyJson(u.core.collectEnvironment()) : params.data = {
            environment: ko.utils.stringifyJson(u.core.collectEnvironment())
        }, params;
    }, _successFunc = function(data, deferred) {
        deferred.resolve();
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return setUserCache;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return getUserCache;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return removeUserCache;
    }), __webpack_require__.d(__webpack_exports__, "d", function() {
        return setCache;
    }), __webpack_require__.d(__webpack_exports__, "e", function() {
        return getCache;
    }), __webpack_require__.d(__webpack_exports__, "f", function() {
        return removeCache;
    }), __webpack_require__.d(__webpack_exports__, "g", function() {
        return setSessionCache;
    }), __webpack_require__.d(__webpack_exports__, "h", function() {
        return getSessionCache;
    }), __webpack_require__.d(__webpack_exports__, "i", function() {
        return removeSessionCache;
    });
    var setUserCache = function(key, value) {
        var userCode = this.getEnvironment().usercode;
        userCode && localStorage.setItem(userCode + key, value);
    }, getUserCache = function(key) {
        var userCode = this.getEnvironment().usercode;
        if (userCode) return localStorage.getItem(userCode + key);
    }, removeUserCache = function(key) {
        var userCode = this.getEnvironment().usercode;
        userCode && localStorage.removeItem(userCode + key);
    }, setCache = function(key, value) {
        localStorage.setItem(key, value);
    }, getCache = function(key) {
        return localStorage.getItem(key);
    }, removeCache = function(key) {
        localStorage.removeItem(key);
    }, setSessionCache = function(key, value) {
        sessionStorage.setItem(key, value);
    }, getSessionCache = function(key) {
        return sessionStorage.getItem(key);
    }, removeSessionCache = function(key) {
        sessionStorage.removeItem(key);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_compox_src_compMgr__ = __webpack_require__(12), __WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_util__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_2_tinper_sparrow_src_dom__ = __webpack_require__(0);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return createComp;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return getComp;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return getCompsByDataTable;
    }), __webpack_require__.d(__webpack_exports__, "d", function() {
        return getCompsByType;
    }), __webpack_require__.d(__webpack_exports__, "e", function() {
        return getComps;
    }), __webpack_require__.d(__webpack_exports__, "f", function() {
        return showComp;
    });
    var createComp = function(ele, viewModel) {
        var options = JSON.parse(ele.getAttribute("u-meta"));
        if (options && options.type) {
            var comp = __WEBPACK_IMPORTED_MODULE_0_compox_src_compMgr__.a.createDataAdapter({
                el: ele,
                options: options,
                model: viewModel,
                app: this
            });
            ele["u-meta"] = comp;
        }
        return comp;
    }, getComp = function(compId) {
        var returnComp = null;
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_util__.a)(this.elements, function(i, element) {
            "string" == typeof element && (element = document.querySelector(element)), element && element.querySelectorAll("[u-meta]").forEach(function(ele) {
                if (ele["u-meta"]) {
                    var comp = ele["u-meta"];
                    if (comp.id === compId) return returnComp = comp, !1;
                }
            });
        }), returnComp;
    }, getCompsByDataTable = function(dataTableId, element) {
        for (var comps = this.getComps(element), targetComps = [], i = 0; i < comps.length; i++) (comps[i].dataModel && comps[i].dataModel.id == dataTableId || comps[i].dataTable && comps[i].dataTable.id == dataTableId) && targetComps.push(comps[i]);
        return targetComps;
    }, getCompsByType = function(type, element) {
        var elements = element ? element : this.elements, returnComps = [];
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_util__.b)(elements) || (elements = [ elements ]), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_util__.a)(elements, function(i, element) {
            element && element.querySelectorAll("[u-meta]").forEach(function(ele) {
                if (ele["u-meta"]) {
                    var comp = ele["u-meta"];
                    comp && comp.type == type && returnComps.push(comp);
                }
            });
        }), returnComps;
    }, getComps = function(element) {
        var elements = element ? element : this.elements, returnComps = [];
        return "string" == typeof elements && (elements = document.querySelectorAll(elements)), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_util__.b)(elements) || elements instanceof NodeList || (elements = [ elements ]), 
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_util__.a)(elements, function(i, element) {
            element && element.querySelectorAll("[u-meta]").forEach(function(ele) {
                if (ele["u-meta"]) {
                    var comp = ele["u-meta"];
                    comp && returnComps.push(comp);
                }
            });
        }), returnComps;
    }, showComp = function(comp) {
        var ele = comp.element, off = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_tinper_sparrow_src_dom__.a)(ele), scroll = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_tinper_sparrow_src_dom__.b)(ele), top = off.top - scroll.top, bodyHeight = document.body.clientHeight, nowTop = document.body.scrollTop;
        (top > bodyHeight || top < 0) && (document.body.scrollTop = nowTop + top);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return addDataTable;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return getDataTable;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return getDataTables;
    });
    var addDataTable = function(dataTable) {
        return this.dataTables[dataTable.id] = dataTable, this;
    }, getDataTable = function(id) {
        return this.dataTables[id];
    }, getDataTables = function() {
        return this.dataTables;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return getEnvironment;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return setClientAttribute;
    }), __webpack_require__.d(__webpack_exports__, "c", function() {
        return getClientAttribute;
    });
    var getEnvironment = function() {
        return u.core.collectEnvironment();
    }, setClientAttribute = function(k, v) {
        u.core.setClientAttribute(k, v);
    }, getClientAttribute = function(k) {
        return u.core.getClientAttributes()[k];
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return serverEvent;
    });
    var serverEvent = function() {
        return new ServerEvent(this);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_util__ = __webpack_require__(2);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return setEnable;
    });
    var setEnable = function(enable) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_util__.a)(this.elements, function(i, element) {
            element && element.querySelectorAll("[u-meta]").each(function() {
                if (this["u-meta"]) {
                    var comp = this["u-meta"];
                    comp.setEnable && comp.setEnable(enable);
                }
            });
        });
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_env__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_dom__ = __webpack_require__(0);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return compsValidate;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return compsValidateMultiParam;
    });
    var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, compsValidate = function(element, retUnpass) {
        for (var comps = this.getComps(element), passed = !0, unpassed = [], i = 0; i < comps.length; i++) if (comps[i].doValidate) {
            var result = comps[i].doValidate({
                trueValue: !0,
                showMsg: !0
            });
            result = "object" === (void 0 === result ? "undefined" : _typeof(result)) ? result.passed : result, 
            passed = result && passed, result || unpassed.push(comps[i]);
        }
        return retUnpass ? unpassed : passed;
    }, compsValidateMultiParam = function(options) {
        for (var element = options.element, comps = this.getComps(element), passed = !0, showMsg = options.showMsg, notPassedArr = new Array(), i = 0; i < comps.length; i++) if (comps[i].doValidate) {
            var result = comps[i].doValidate({
                trueValue: !0,
                showMsg: showMsg
            });
            if (passed && !result.passed) {
                var off = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_dom__.a)(comps[i].element);
                window.scrollTo(0, off.top - 80), __WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_env__.a.isIPAD && window.top.scrollTo(0, off.top - 80);
            }
            passed = result.passed && passed, result.passed || notPassedArr.push(result);
        }
        return {
            passed: passed,
            notPassedArr: notPassedArr
        };
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    function _findRegisteredClass(name, optReplace) {
        for (var i = 0; i < CompMgr.registeredControls.length; i++) if (CompMgr.registeredControls[i].className === name) return void 0 !== optReplace && (CompMgr.registeredControls[i] = optReplace), 
        CompMgr.registeredControls[i];
        return !1;
    }
    function _getUpgradedListOfElement(element) {
        var dataUpgraded = element.getAttribute("data-upgraded");
        return null === dataUpgraded ? [ "" ] : dataUpgraded.split(",");
    }
    function _isElementUpgraded(element, jsClass) {
        return _getUpgradedListOfElement(element).indexOf(jsClass) != -1;
    }
    function _upgradeElement(element, optJsClass) {
        if (!("object" == typeof element && element instanceof Element)) throw new Error("Invalid argument provided to upgrade MDL element.");
        var upgradedList = _getUpgradedListOfElement(element), classesToUpgrade = [];
        if (optJsClass) _isElementUpgraded(element, optJsClass) || classesToUpgrade.push(_findRegisteredClass(optJsClass)); else for (var className = element.className, i = 0; i < CompMgr.registeredControls.length; i++) {
            var component = CompMgr.registeredControls[i];
            className.indexOf(component.cssClass) > -1 && classesToUpgrade.indexOf(component) === -1 && !_isElementUpgraded(element, component.className) && classesToUpgrade.push(component);
        }
        for (var registeredClass, i = 0, n = classesToUpgrade.length; i < n; i++) {
            if (!(registeredClass = classesToUpgrade[i])) throw new Error("Unable to find a registered component for the given class.");
            if (!element[registeredClass.className]) {
                upgradedList.push(registeredClass.className), element.setAttribute("data-upgraded", upgradedList.join(","));
                var instance = new registeredClass.classConstructor(element);
                CompMgr.createdControls.push(instance);
                for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) registeredClass.callbacks[j](element);
                element[registeredClass.className] = instance;
            }
        }
    }
    function _upgradeDomInternal(optJsClass, optCssClass, ele) {
        if (void 0 === optJsClass && void 0 === optCssClass) for (var i = 0; i < CompMgr.registeredControls.length; i++) _upgradeDomInternal(CompMgr.registeredControls[i].className, registeredControls[i].cssClass, ele); else {
            var jsClass = optJsClass;
            if (!optCssClass) {
                var registeredClass = _findRegisteredClass(jsClass);
                registeredClass && (optCssClass = registeredClass.cssClass);
            }
            var elements;
            elements = ele ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_dom__.c)(ele, optCssClass) ? [ ele ] : ele.querySelectorAll("." + optCssClass) : document.querySelectorAll("." + optCssClass);
            for (var n = 0; n < elements.length; n++) _upgradeElement(elements[n], jsClass);
        }
    }
    var __WEBPACK_IMPORTED_MODULE_0_tinper_sparrow_src_dom__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_util__ = __webpack_require__(2);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return compMgr;
    });
    var CompMgr = {
        plugs: {},
        dataAdapters: {},
        registeredControls: [],
        createdControls: [],
        apply: function(options) {
            if (options) var _el = options.el || document.body, model = options.model;
            "string" == typeof _el && (_el = document.body.querySelector(_el)), null != _el && "object" == typeof _el || (_el = document.body), 
            _el.querySelectorAll("[u-meta]").forEach(function(element) {
                if (!element.comp) {
                    var options = JSON.parse(element.getAttribute("u-meta"));
                    if (options && options.type) {
                        var comp = CompMgr.createDataAdapter({
                            el: element,
                            options: options,
                            model: model
                        });
                        comp && (element.adpt = comp, element["u-meta"] = comp);
                    }
                }
            });
        },
        addPlug: function(config) {
            var plug = config.plug, name = config.name;
            if (this.plugs || (this.plugs = {}), this.plugs[name]) throw new Error("plug has exist:" + name);
            plug.compType = name, this.plugs[name] = plug;
        },
        addDataAdapter: function(config) {
            var adapter = config.adapter, name = config.name;
            if (this.dataAdapters || (dataAdapters = {}), this.dataAdapters[name]) throw new Error("dataAdapter has exist:" + name);
            this.dataAdapters[name] = adapter;
        },
        getDataAdapter: function(name) {
            if (name) return this.dataAdapters || (dataAdapters = {}), this.dataAdapters[name];
        },
        createDataAdapter: function(options) {
            var opt = options.options, type = opt.type, id = opt.id, adpt = this.dataAdapters[type];
            if (!adpt) return null;
            var comp = new adpt(options);
            return comp.type = type, comp.id = id, comp;
        },
        _createComp: function(options) {
            var opt = options.options, type = opt.type, plug = this.plugs[type];
            if (!plug) return null;
            var comp = new plug(options);
            return comp.type = type, comp;
        },
        regComp: function(config) {
            var newConfig = {
                classConstructor: config.comp,
                className: config.compAsString || config.compAsString,
                cssClass: config.css || config.css,
                callbacks: [],
                dependencies: config.dependencies || []
            };
            config.comp.prototype.compType = config.compAsString;
            for (var i = 0; i < this.registeredControls.length; i++) {
                var item = this.registeredControls[i];
                if (item.cssClass === newConfig.cssClass) throw new Error("The provided cssClass has already been registered: " + item.cssClass);
                if (item.className === newConfig.className) throw new Error("The provided className has already been registered");
            }
            this.registeredControls.push(newConfig);
        },
        updateComp: function(ele) {
            this._reorderComps();
            for (var n = 0; n < this.registeredControls.length; n++) _upgradeDomInternal(this.registeredControls[n].className, null, ele);
        },
        _reorderComps: function() {
            function traverse(control) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_tinper_sparrow_src_util__.c)(control, tmpArray)) {
                    if (control.dependencies.length > 0) for (var i = 0, len = control.dependencies.length; i < len; i++) {
                        var childControl = dictory[control.dependencies[i]];
                        traverse(childControl);
                    }
                    tmpArray.push(control);
                }
            }
            for (var tmpArray = [], dictory = {}, n = 0; n < this.registeredControls.length; n++) dictory[this.registeredControls[n].className] = this.registeredControls[n];
            for (var n = 0; n < this.registeredControls.length; n++) traverse(this.registeredControls[n]);
            this.registeredControls = tmpArray;
        }
    }, compMgr = CompMgr;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(1);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return ajax;
    });
    var XmlHttp = {
        get: "get",
        post: "post",
        reqCount: 4,
        createXhr: function() {
            var xmlhttp = null;
            return __WEBPACK_IMPORTED_MODULE_0__env__.a.isIE8 ? xmlhttp = new ActiveXObject("Microsoft.XMLHTTP") : __WEBPACK_IMPORTED_MODULE_0__env__.a.isIE ? xmlhttp = new ActiveXObject("Msxml2.XMLHTTP") : window.XMLHttpRequest && (xmlhttp = new XMLHttpRequest()), 
            xmlhttp;
        },
        ajax: function(_json) {
            var url = _json.url, callback = _json.success, async = void 0 == _json.async || _json.async, error = _json.error, params = _json.data || {}, method = (void 0 == _json.type ? XmlHttp.post : _json.type).toLowerCase();
            params.compressType;
            url = XmlHttp.serializeUrl(url), params = XmlHttp.serializeParams(params), method == XmlHttp.get && null != params && (url += "&" + params, 
            params = null);
            var xmlhttp = XmlHttp.createXhr();
            xmlhttp.open(method, url, async), method == XmlHttp.post && xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            var execount = 0;
            async ? (xmlhttp.onreadystatechange = function() {
                execount++, xmlhttp.readyState == XmlHttp.reqCount && XmlHttp.execBack(xmlhttp, callback, error);
            }, xmlhttp.send(params)) : (xmlhttp.send(params), XmlHttp.execBack(xmlhttp, callback, error));
        },
        execBack: function(xmlhttp, callback, error) {
            if (200 == xmlhttp.status || 304 == xmlhttp.status || 4 == xmlhttp.readyState) callback(xmlhttp.responseText, xmlhttp.status, xmlhttp); else if (error) error(xmlhttp.responseText, xmlhttp.status, xmlhttp); else {
                var errorMsg = "no error callback function!";
                xmlhttp.responseText && (errorMsg = xmlhttp.responseText), alert(errorMsg);
            }
        },
        serializeUrl: function(url) {
            var cache = "cache=" + Math.random();
            return url += url.indexOf("?") > 0 ? "&" + cache : "?" + cache;
        },
        serializeParams: function(params) {
            if (void 0 == params || null == params || "" == params) return null;
            if (params.constructor == Object) {
                var result = "";
                for (var p in params) result += p + "=" + encodeURIComponent(params[p]) + "&";
                return result.substring(0, result.length - 1);
            }
            return params;
        }
    }, ajax = XmlHttp.ajax;
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return enumerables;
    });
    var enumerables = !0, enumerablesTest = {
        toString: 1
    };
    Object.prototype.toString;
    for (var i in enumerablesTest) enumerables = null;
    enumerables && (enumerables = [ "hasOwnProperty", "valueOf", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "constructor" ]);
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__env__ = __webpack_require__(1);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return on;
    }), __webpack_require__.d(__webpack_exports__, "b", function() {
        return stopEvent;
    });
    var u = {};
    u.event = {};
    var touchStartEvent = __WEBPACK_IMPORTED_MODULE_0__env__.a.hasTouch ? "touchstart" : "mousedown", touchStopEvent = __WEBPACK_IMPORTED_MODULE_0__env__.a.hasTouch ? "touchend" : "mouseup", touchMoveEvent = __WEBPACK_IMPORTED_MODULE_0__env__.a.hasTouch ? "touchmove" : "mousemove";
    u.event.tap = {
        tapholdThreshold: 750,
        emitTapOnTaphold: !0,
        touchstartFun: function() {
            trigger(this, "vmousedown");
        },
        touchendFun: function() {
            trigger(this, "vmouseup"), trigger(this, "vclick");
        },
        setup: function() {
            var thisObject = this, isTaphold = !1;
            on(thisObject, "vmousedown", function(event) {
                function clearTapTimer() {
                    clearTimeout(timer);
                }
                function clearTapHandlers() {
                    clearTapTimer(), off(thisObject, "vclick"), off(thisObject, "vmouseup"), off(document, "vmousecancel");
                }
                function clickHandler(event) {
                    clearTapHandlers(), isTaphold || origTarget !== event.target ? isTaphold && event.preventDefault() : trigger(thisObject, "tap");
                }
                if (isTaphold = !1, event.which && 1 !== event.which) return !1;
                var timer, origTarget = event.target;
                on(thisObject, "vmouseup", clearTapTimer), on(thisObject, "vclick", clickHandler), 
                on(document, "vmousecancel", clearTapHandlers), timer = setTimeout(function() {
                    u.event.tap.emitTapOnTaphold || (isTaphold = !0), trigger(thisObject, "taphold"), 
                    clearTapHandlers();
                }, u.event.tap.tapholdThreshold);
            }), on(thisObject, "touchstart", u.event.tap.touchstartFun), on(thisObject, "touchend", u.event.tap.touchendFun);
        },
        teardown: function() {
            off(thisObject, "vmousedown"), off(thisObject, "vclick"), off(thisObject, "vmouseup"), 
            off(document, "vmousecancel");
        }
    }, u.event.taphold = u.event.tap, u.event.swipe = {
        scrollSupressionThreshold: 30,
        durationThreshold: 1e3,
        horizontalDistanceThreshold: 30,
        verticalDistanceThreshold: 30,
        getLocation: function(event) {
            var winPageX = window.pageXOffset, winPageY = window.pageYOffset, x = event.clientX, y = event.clientY;
            return 0 === event.pageY && Math.floor(y) > Math.floor(event.pageY) || 0 === event.pageX && Math.floor(x) > Math.floor(event.pageX) ? (x -= winPageX, 
            y -= winPageY) : (y < event.pageY - winPageY || x < event.pageX - winPageX) && (x = event.pageX - winPageX, 
            y = event.pageY - winPageY), {
                x: x,
                y: y
            };
        },
        start: function(event) {
            var data = event.touches ? event.touches[0] : event, location = u.event.swipe.getLocation(data);
            return {
                time: new Date().getTime(),
                coords: [ location.x, location.y ],
                origin: event.target
            };
        },
        stop: function(event) {
            var data = event.touches ? event.touches[0] : event, location = u.event.swipe.getLocation(data);
            return {
                time: new Date().getTime(),
                coords: [ location.x, location.y ]
            };
        },
        handleSwipe: function(start, stop, thisObject, origTarget) {
            if (stop.time - start.time < u.event.swipe.durationThreshold && Math.abs(start.coords[0] - stop.coords[0]) > u.event.swipe.horizontalDistanceThreshold && Math.abs(start.coords[1] - stop.coords[1]) < u.event.swipe.verticalDistanceThreshold) {
                var direction = start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight";
                return trigger(thisObject, "swipe"), trigger(thisObject, direction), !0;
            }
            return !1;
        },
        eventInProgress: !1,
        setup: function() {
            var events, thisObject = this, context = {};
            events = thisObject["mobile-events"], events || (events = {
                length: 0
            }, thisObject["mobile-events"] = events), events.length++, events.swipe = context, 
            context.start = function(event) {
                if (!u.event.swipe.eventInProgress) {
                    u.event.swipe.eventInProgress = !0;
                    var stop, start = u.event.swipe.start(event), origTarget = event.target, emitted = !1;
                    context.move = function(event) {
                        start && (stop = u.event.swipe.stop(event), emitted || (emitted = u.event.swipe.handleSwipe(start, stop, thisObject, origTarget)) && (u.event.swipe.eventInProgress = !1), 
                        Math.abs(start.coords[0] - stop.coords[0]) > u.event.swipe.scrollSupressionThreshold && event.preventDefault());
                    }, context.stop = function() {
                        emitted = !0, u.event.swipe.eventInProgress = !1, off(document, touchMoveEvent, context.move), 
                        context.move = null;
                    }, on(document, touchMoveEvent, context.move), on(document, touchStopEvent, context.stop);
                }
            }, on(thisObject, touchStartEvent, context.start);
        },
        teardown: function() {
            var events, context;
            events = thisObject["mobile-events"], events && (context = events.swipe, delete events.swipe, 
            0 === --events.length && (thisObject["mobile-events"] = null)), context && (context.start && off(thisObject, touchStartEvent, context.start), 
            context.move && off(document, touchMoveEvent, context.move), context.stop && off(document, touchStopEvent, context.stop));
        }
    }, u.event.swipeleft = u.event.swipe, u.event.swiperight = u.event.swipe;
    var event = u.event, on = function(element, eventName, child, listener) {
        if (element) {
            if (arguments.length < 4) listener = child, child = void 0; else var childlistener = function(e) {
                if (e) {
                    element.querySelectorAll(child).forEach(function(node) {
                        node == e.target && listener.call(e.target, e);
                    });
                }
            };
            if (element.uEvent || (element.uEvent = {}), element.uEvent[eventName]) {
                var lis = child ? childlistener : listener, hasLis = !1;
                element.uEvent[eventName].forEach(function(fn) {
                    fn == lis && (hasLis = !0);
                }), hasLis || element.uEvent[eventName].push(child ? childlistener : listener);
            } else element.uEvent[eventName] = [ child ? childlistener : listener ], u.event && u.event[eventName] && u.event[eventName].setup && u.event[eventName].setup.call(element), 
            element.uEvent[eventName + "fn"] = function(e) {
                e || (e = void 0 !== event && event ? event : window.event), element.uEvent[eventName].forEach(function(fn) {
                    try {
                        e.target = e.target || e.srcElement;
                    } catch (ee) {}
                    fn && fn.call(element, e);
                });
            }, element.addEventListener ? element.addEventListener(eventName, element.uEvent[eventName + "fn"]) : element.attachEvent ? element.attachEvent("on" + eventName, element.uEvent[eventName + "fn"]) : element["on" + eventName] = element.uEvent[eventName + "fn"];
        }
    }, off = function(element, eventName, listener) {
        if (listener) return void (element && element.uEvent && element.uEvent[eventName] && element.uEvent[eventName].forEach(function(fn, i) {
            fn == listener && element.uEvent[eventName].splice(i, 1);
        }));
        var eventfn;
        element && element.uEvent && element.uEvent[eventName + "fn"] && (eventfn = element.uEvent[eventName + "fn"]), 
        element.removeEventListener ? element.removeEventListener(eventName, eventfn) : element.removeEvent ? element.removeEvent("on" + eventName, eventfn) : delete element["on" + eventName], 
        u.event && u.event[eventName] && u.event[eventName].teardown && u.event[eventName].teardown.call(element), 
        element && element.uEvent && element.uEvent[eventName] && (element.uEvent[eventName] = void 0), 
        element && element.uEvent && element.uEvent[eventName + "fn"] && (element.uEvent[eventName + "fn"] = void 0);
    }, trigger = function(element, eventName) {
        element.uEvent && element.uEvent[eventName] && element.uEvent[eventName + "fn"]();
    }, stopEvent = function(e) {
        void 0 !== e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0, 
        e && e.preventDefault ? e.preventDefault() : window.event.returnValue = !1);
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var __WEBPACK_IMPORTED_MODULE_0__enumerables__ = __webpack_require__(14);
    __webpack_require__.d(__webpack_exports__, "a", function() {
        return extend;
    });
    var extend = function(object, config) {
        var options, args = arguments;
        if (args.length > 1) for (var len = 1; len < args.length; len++) if (options = args[len], 
        object && options && "object" == typeof options) {
            var i, j, k;
            for (i in options) object[i] = options[i];
            if (__WEBPACK_IMPORTED_MODULE_0__enumerables__.a) for (j = __WEBPACK_IMPORTED_MODULE_0__enumerables__.a.length; j--; ) k = __WEBPACK_IMPORTED_MODULE_0__enumerables__.a[j], 
            options.hasOwnProperty && options.hasOwnProperty(k) && (object[k] = options[k]);
        }
        return object;
    };
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    Object.defineProperty(__webpack_exports__, "__esModule", {
        value: !0
    });
    var __WEBPACK_IMPORTED_MODULE_0__adjustMetaFunc__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_1__dataTable__ = __webpack_require__(7), __WEBPACK_IMPORTED_MODULE_2__comp__ = __webpack_require__(6), __WEBPACK_IMPORTED_MODULE_3__validate__ = __webpack_require__(11), __WEBPACK_IMPORTED_MODULE_4__cache__ = __webpack_require__(5), __WEBPACK_IMPORTED_MODULE_5__iwebCore__ = __webpack_require__(8), __WEBPACK_IMPORTED_MODULE_6__ajax__ = __webpack_require__(4), __WEBPACK_IMPORTED_MODULE_7__serverEvent__ = __webpack_require__(9), __WEBPACK_IMPORTED_MODULE_8__util__ = __webpack_require__(10);
    App.prototype.setAdjustMetaFunc = __WEBPACK_IMPORTED_MODULE_0__adjustMetaFunc__.a, 
    App.prototype.addDataTable = __WEBPACK_IMPORTED_MODULE_1__dataTable__.a, App.prototype.getDataTable = __WEBPACK_IMPORTED_MODULE_1__dataTable__.b, 
    App.prototype.getDataTables = __WEBPACK_IMPORTED_MODULE_1__dataTable__.c, App.prototype.createComp = __WEBPACK_IMPORTED_MODULE_2__comp__.a, 
    App.prototype.getComp = __WEBPACK_IMPORTED_MODULE_2__comp__.b, App.prototype.getCompsByDataTable = __WEBPACK_IMPORTED_MODULE_2__comp__.c, 
    App.prototype.getCompsByType = __WEBPACK_IMPORTED_MODULE_2__comp__.d, App.prototype.getComps = __WEBPACK_IMPORTED_MODULE_2__comp__.e, 
    App.prototype.showComp = __WEBPACK_IMPORTED_MODULE_2__comp__.f, App.prototype.compsValidate = __WEBPACK_IMPORTED_MODULE_3__validate__.a, 
    App.prototype.compsValidateMultiParam = __WEBPACK_IMPORTED_MODULE_3__validate__.b, 
    App.prototype.setUserCache = __WEBPACK_IMPORTED_MODULE_4__cache__.a, App.prototype.getUserCache = __WEBPACK_IMPORTED_MODULE_4__cache__.b, 
    App.prototype.removeUserCache = __WEBPACK_IMPORTED_MODULE_4__cache__.c, App.prototype.setCache = __WEBPACK_IMPORTED_MODULE_4__cache__.d, 
    App.prototype.getCache = __WEBPACK_IMPORTED_MODULE_4__cache__.e, App.prototype.removeCache = __WEBPACK_IMPORTED_MODULE_4__cache__.f, 
    App.prototype.setSessionCache = __WEBPACK_IMPORTED_MODULE_4__cache__.g, App.prototype.getSessionCache = __WEBPACK_IMPORTED_MODULE_4__cache__.h, 
    App.prototype.removeSessionCache = __WEBPACK_IMPORTED_MODULE_4__cache__.i, App.prototype.getEnvironment = __WEBPACK_IMPORTED_MODULE_5__iwebCore__.a, 
    App.prototype.setClientAttribute = __WEBPACK_IMPORTED_MODULE_5__iwebCore__.b, App.prototype.getClientAttribute = __WEBPACK_IMPORTED_MODULE_5__iwebCore__.c, 
    App.prototype.ajax = __WEBPACK_IMPORTED_MODULE_6__ajax__.a, App.prototype.serverEvent = __WEBPACK_IMPORTED_MODULE_7__serverEvent__.a, 
    App.prototype.setEnable = __WEBPACK_IMPORTED_MODULE_8__util__.a;
} ]);