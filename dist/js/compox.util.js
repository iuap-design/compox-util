/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createApp = __webpack_require__(1);

	var _adjustMetaFunc = __webpack_require__(11);

	var _dataTable = __webpack_require__(12);

	var _comp = __webpack_require__(13);

	var _validate = __webpack_require__(14);

	var _cache = __webpack_require__(15);

	var _iwebCore = __webpack_require__(16);

	var _ajax = __webpack_require__(17);

	var _serverEvent = __webpack_require__(19);

	var _util = __webpack_require__(20);

	// setAdjustMetaFunc
	/**
	 * Module : compox-util webpack entry app index
	 * Author : huyue(huyueb@yonyou.com)
	 * Date	  : 2017-01-18 09:34:01
	 */

	//相关依赖导入
	_createApp.App.prototype.setAdjustMetaFunc = _adjustMetaFunc.setAdjustMetaFunc;
	// dataTable
	_createApp.App.prototype.addDataTable = _dataTable.addDataTable;
	_createApp.App.prototype.getDataTable = _dataTable.getDataTable;
	_createApp.App.prototype.getDataTables = _dataTable.getDataTables;
	// comp
	_createApp.App.prototype.createComp = _comp.createComp;
	_createApp.App.prototype.getComp = _comp.getComp;
	_createApp.App.prototype.getCompsByDataTable = _comp.getCompsByDataTable;
	_createApp.App.prototype.getCompsByType = _comp.getCompsByType;
	_createApp.App.prototype.getComps = _comp.getComps;
	_createApp.App.prototype.showComp = _comp.showComp;
	// validate
	_createApp.App.prototype.compsValidate = _validate.compsValidate;
	_createApp.App.prototype.compsValidateMultiParam = _validate.compsValidateMultiParam;
	// cache
	_createApp.App.prototype.setUserCache = _cache.setUserCache;
	_createApp.App.prototype.getUserCache = _cache.getUserCache;
	_createApp.App.prototype.removeUserCache = _cache.removeUserCache;
	_createApp.App.prototype.setCache = _cache.setCache;
	_createApp.App.prototype.getCache = _cache.getCache;
	_createApp.App.prototype.removeCache = _cache.removeCache;
	_createApp.App.prototype.setSessionCache = _cache.setSessionCache;
	_createApp.App.prototype.getSessionCache = _cache.getSessionCache;
	_createApp.App.prototype.removeSessionCache = _cache.removeSessionCache;
	// iwebCode
	_createApp.App.prototype.getEnvironment = _iwebCore.getEnvironment;
	_createApp.App.prototype.setClientAttribute = _iwebCore.setClientAttribute;
	_createApp.App.prototype.getClientAttribute = _iwebCore.getClientAttribute;
	// ajax
	_createApp.App.prototype.ajax = _ajax.ajax;
	// serverEvent
	_createApp.App.prototype.serverEvent = _serverEvent.serverEvent;
	// util
	_createApp.App.prototype.setEnable = _util.setEnable;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.createApp = exports.App = undefined;

	var _compMgr = __webpack_require__(2);

	var _util = __webpack_require__(8);

	var _hotKeys = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * Module : compox createApp
	                                                                                                                                                           * Author : huyue(huyueb@yonyou.com)
	                                                                                                                                                           * Date   : 2017-01-17 10:13:10
	                                                                                                                                                           */


	var App = function App() {
	    _classCallCheck(this, App);

	    // init
	    this.init = init;
	    this.dataTables = {};
	};

	var init = function init(viewModel, element, doApplyBindings) {
	    var self = this;
	    element = element || document.body;
	    if (!(0, _util.isArray)(element)) {
	        element = [element];
	    }
	    this.elements = element;
	    (0, _util.each)(this.elements, function (i, element) {
	        if (typeof element === 'string') {
	            element = document.querySelector(element);
	        }
	        if (element) {
	            element.querySelectorAll('[u-meta]').forEach(function (ele) {
	                var options = JSON.parse(ele.getAttribute('u-meta'));
	                options['type'] = options['type'] || 'string';
	                if (options && options['type']) {
	                    if (self.adjustFunc) self.adjustFunc.call(self, options);
	                    var comp = _compMgr.compMgr.createDataAdapter({ el: ele, options: options, model: viewModel, app: self });
	                    ele['u-meta'] = comp;
	                }
	            });
	        }

	        if (_hotKeys.hotkeys) _hotKeys.hotkeys.scan(element);
	        if (typeof doApplyBindings == 'undefined' || doApplyBindings == true) ko.applyBindings(viewModel, element);
	        _compMgr.compMgr.updateComp(element);
	    });

	    _getDataTables(this, viewModel);
	};

	var _getDataTables = function _getDataTables(app, viewModel) {
	    for (var key in viewModel) {
	        if (viewModel[key] && viewModel[key] instanceof u.DataTable) {
	            viewModel[key].id = key;
	            viewModel[key].parent = viewModel;
	            app.addDataTable(viewModel[key]);
	        }
	    }
	};

	var createApp = function createApp() {
	    var app = new App();
	    if (arguments.length > 0) {
	        var arg = arguments[0];
	        app.init(arg.model, arg.el);
	    }
	    return app;
	};
	exports.App = App;
	exports.createApp = createApp;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.compMgr = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Module : compox compMgr
	                                                                                                                                                                                                                                                                               * Author : huyue(huyueb@yonyou.com)
	                                                                                                                                                                                                                                                                               * Date	  : 2016-07-28 18:41:06
	                                                                                                                                                                                                                                                                               * Update : 2017-01-18 09:26:00
	                                                                                                                                                                                                                                                                               */

	var _dom = __webpack_require__(3);

	var _util = __webpack_require__(8);

	function _findRegisteredClass(name, optReplace) {
	    for (var i = 0; i < CompMgr.registeredControls.length; i++) {
	        if (CompMgr.registeredControls[i].className === name) {
	            if (typeof optReplace !== 'undefined') {
	                CompMgr.registeredControls[i] = optReplace;
	            }
	            return CompMgr.registeredControls[i];
	        }
	    }
	    return false;
	}

	function _getUpgradedListOfElement(element) {
	    var dataUpgraded = element.getAttribute('data-upgraded');
	    // Use `['']` as default value to conform the `,name,name...` style.
	    return dataUpgraded === null ? [''] : dataUpgraded.split(',');
	}

	function _isElementUpgraded(element, jsClass) {
	    var upgradedList = _getUpgradedListOfElement(element);
	    return upgradedList.indexOf(jsClass) != -1;
	}

	function _upgradeElement(element, optJsClass) {
	    if (!((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element instanceof Element)) {
	        throw new Error('Invalid argument provided to upgrade MDL element.');
	    }
	    var upgradedList = _getUpgradedListOfElement(element);
	    var classesToUpgrade = [];
	    if (!optJsClass) {
	        var className = element.className;
	        for (var i = 0; i < CompMgr.registeredControls.length; i++) {
	            var component = CompMgr.registeredControls[i];
	            if (className.indexOf(component.cssClass) > -1 && classesToUpgrade.indexOf(component) === -1 && !_isElementUpgraded(element, component.className)) {
	                classesToUpgrade.push(component);
	            }
	        }
	    } else if (!_isElementUpgraded(element, optJsClass)) {
	        classesToUpgrade.push(_findRegisteredClass(optJsClass));
	    }

	    // Upgrade the element for each classes.
	    for (var i = 0, n = classesToUpgrade.length, registeredClass; i < n; i++) {
	        registeredClass = classesToUpgrade[i];
	        if (registeredClass) {
	            if (element[registeredClass.className]) {
	                continue;
	            }
	            // Mark element as upgraded.
	            upgradedList.push(registeredClass.className);
	            element.setAttribute('data-upgraded', upgradedList.join(','));
	            var instance = new registeredClass.classConstructor(element);
	            CompMgr.createdControls.push(instance);
	            // Call any callbacks the user has registered with this component type.
	            for (var j = 0, m = registeredClass.callbacks.length; j < m; j++) {
	                registeredClass.callbacks[j](element);
	            }
	            element[registeredClass.className] = instance;
	        } else {
	            throw new Error('Unable to find a registered component for the given class.');
	        }
	    }
	}

	function _upgradeDomInternal(optJsClass, optCssClass, ele) {
	    if (typeof optJsClass === 'undefined' && typeof optCssClass === 'undefined') {
	        for (var i = 0; i < CompMgr.registeredControls.length; i++) {
	            _upgradeDomInternal(CompMgr.registeredControls[i].className, registeredControls[i].cssClass, ele);
	        }
	    } else {
	        var jsClass = optJsClass;
	        if (!optCssClass) {
	            var registeredClass = _findRegisteredClass(jsClass);
	            if (registeredClass) {
	                optCssClass = registeredClass.cssClass;
	            }
	        }
	        var elements;
	        if (ele) {
	            elements = (0, _dom.hasClass)(ele, optCssClass) ? [ele] : ele.querySelectorAll('.' + optCssClass);
	        } else {
	            elements = document.querySelectorAll('.' + optCssClass);
	        }
	        for (var n = 0; n < elements.length; n++) {
	            _upgradeElement(elements[n], jsClass);
	        }
	    }
	}

	var CompMgr = {
	    plugs: {},
	    //用来存储控件的名称对应列表
	    dataAdapters: {},
	    /** 注册的控件*/
	    registeredControls: [],
	    createdControls: [],
	    /**
	     *
	     * @param options  {el:'#content', model:{}}
	     */
	    apply: function apply(options) {
	        if (options) {
	            var _el = options.el || document.body;
	            var model = options.model;
	        }
	        if (typeof _el == 'string') {
	            _el = document.body.querySelector(_el);
	        }
	        if (_el == null || (typeof _el === 'undefined' ? 'undefined' : _typeof(_el)) != 'object') _el = document.body;
	        var comps = _el.querySelectorAll('[u-meta]');
	        comps.forEach(function (element) {
	            if (element['comp']) return;
	            var options = JSON.parse(element.getAttribute('u-meta'));
	            if (options && options['type']) {
	                //var comp = CompMgr._createComp({el:element,options:options,model:model});
	                var comp = CompMgr.createDataAdapter({
	                    el: element,
	                    options: options,
	                    model: model
	                });
	                if (comp) {
	                    element['adpt'] = comp;
	                    element['u-meta'] = comp;
	                }
	            }
	        });
	    },
	    addPlug: function addPlug(config) {
	        var plug = config['plug'],
	            name = config['name'];
	        this.plugs || (this.plugs = {});
	        if (this.plugs[name]) {
	            throw new Error('plug has exist:' + name);
	        }
	        plug.compType = name;
	        this.plugs[name] = plug;
	    },
	    addDataAdapter: function addDataAdapter(config) {
	        var adapter = config['adapter'],
	            name = config['name'];
	        //dataType = config['dataType'] || ''
	        //var key = dataType ? name + '.' + dataType : name;
	        this.dataAdapters || (dataAdapters = {});
	        if (this.dataAdapters[name]) {
	            throw new Error('dataAdapter has exist:' + name);
	        }
	        this.dataAdapters[name] = adapter;
	    },
	    getDataAdapter: function getDataAdapter(name) {
	        if (!name) return;
	        this.dataAdapters || (dataAdapters = {});
	        //var key = dataType ? name + '.' + dataType : name;
	        return this.dataAdapters[name];
	    },
	    /**
	     * 创建dataAdapter,通过识别控件的type，来找到它对应的adapter
	     * @param  {[type]} options [description]
	     * @return {[type]}         [description]
	     */
	    createDataAdapter: function createDataAdapter(options) {
	        var opt = options['options'];
	        var type = opt['type'],
	            id = opt['id'];
	        var adpt = this.dataAdapters[type];
	        if (!adpt) return null;
	        var comp = new adpt(options);
	        comp.type = type;
	        comp.id = id;
	        return comp;
	    },
	    _createComp: function _createComp(options) {
	        var opt = options['options'];
	        var type = opt['type'];
	        var plug = this.plugs[type];
	        if (!plug) return null;
	        var comp = new plug(options);
	        comp.type = type;
	        return comp;
	    },
	    /**
	     * 注册UI控件
	     */
	    regComp: function regComp(config) {
	        var newConfig = {
	            classConstructor: config.comp,
	            className: config.compAsString || config['compAsString'],
	            cssClass: config.css || config['css'],
	            callbacks: [],
	            dependencies: config.dependencies || []
	        };
	        config.comp.prototype.compType = config.compAsString;
	        for (var i = 0; i < this.registeredControls.length; i++) {
	            var item = this.registeredControls[i];
	            //registeredControls.forEach(function(item) {
	            if (item.cssClass === newConfig.cssClass) {
	                throw new Error('The provided cssClass has already been registered: ' + item.cssClass);
	            }
	            if (item.className === newConfig.className) {
	                throw new Error('The provided className has already been registered');
	            }
	        };
	        this.registeredControls.push(newConfig);
	    },
	    updateComp: function updateComp(ele) {
	        this._reorderComps();
	        for (var n = 0; n < this.registeredControls.length; n++) {
	            _upgradeDomInternal(this.registeredControls[n].className, null, ele);
	        }
	    },
	    // 后续遍历registeredControls，重新排列
	    _reorderComps: function _reorderComps() {
	        var tmpArray = [];
	        var dictory = {};

	        for (var n = 0; n < this.registeredControls.length; n++) {
	            dictory[this.registeredControls[n].className] = this.registeredControls[n];
	        }
	        for (var n = 0; n < this.registeredControls.length; n++) {
	            traverse(this.registeredControls[n]);
	        }

	        this.registeredControls = tmpArray;

	        function traverse(control) {
	            if ((0, _util.inArray)(control, tmpArray)) return;
	            if (control.dependencies.length > 0) {
	                for (var i = 0, len = control.dependencies.length; i < len; i++) {
	                    var childControl = dictory[control.dependencies[i]];
	                    traverse(childControl);
	                }
	            }
	            tmpArray.push(control);
	        }
	    }
	};

	var compMgr = CompMgr;
	exports.compMgr = compMgr;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getElementTop = exports.getElementLeft = exports.showPanelByEle = exports.getScroll = exports.getOffset = exports.makeModal = exports.makeDOM = exports.getZIndex = exports.getStyle = exports.wrap = exports.css = exports.closest = exports.toggleClass = exports.hasClass = exports.removeClass = exports.addClass = undefined;

	var _event = __webpack_require__(4);

	/**
	 * 元素增加指定样式
	 * @param value
	 * @returns {*}
	 */
	var addClass = function addClass(element, value) {
		if (element) {
			if (typeof element.classList === 'undefined') {
				if (u._addClass) {
					u._addClass(element, value);
				} else {
					$(element).addClass(value);
				}
			} else {
				element.classList.add(value);
			}
		}

		return this;
	};
	/**
	 * 删除元素上指定样式
	 * @param {Object} element
	 * @param {Object} value
	 */
	/**
	 * Module : Sparrow dom
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-08-16 13:59:17
	 */
	var removeClass = function removeClass(element, value) {
		if (element) {
			if (typeof element.classList === 'undefined') {
				if (u._removeClass) {
					u._removeClass(element, value);
				} else {
					$(element).removeClass(value);
				}
			} else {
				element.classList.remove(value);
			}
		}
		return this;
	};
	/**
	 * 元素上是否存在该类
	 * @param {Object} element
	 * @param {Object} value
	 */
	var hasClass = function hasClass(element, value) {
		if (!element) return false;
		if (element.nodeName && (element.nodeName === '#text' || element.nodeName === '#comment')) return false;
		if (typeof element.classList === 'undefined') {
			if (u._hasClass) {
				return u._hasClass(element, value);
			} else {
				return $(element).hasClass(value);
			}

			return false;
		} else {
			return element.classList.contains(value);
		}
	};
	/**
	 * 选择元素类切换
	 * @param {Object} element
	 * @param {Object} value
	 */
	var toggleClass = function toggleClass(element, value) {
		if (typeof element.classList === 'undefined') {
			return u._toggleClass(element, value);
		} else {
			return element.classList.toggle(value);
		}
	};

	/**
	 * 向上查找指定类元素
	 * @param {Object} element
	 * @param {Object} selector
	 */
	var closest = function closest(element, selector) {
		var tmp = element;
		while (tmp != null && !hasClass(tmp, selector) && tmp != document.body) {
			tmp = tmp.parentNode;
		}
		if (tmp == document.body) return null;
		return tmp;
	};

	/**
	 * 元素CSS操作
	 * @param {Object} element
	 * @param {Object} csstext
	 * @param {Object} val
	 */
	var css = function css(element, csstext, val) {
		//TO DO : 实现u.相关方法
		if (csstext instanceof Object) {
			for (var k in csstext) {
				var tmpcss = csstext[k];
				if (["width", "height", "top", "bottom", "left", "right"].indexOf(k) > -1 && isNumber(tmpcss)) {
					tmpcss = tmpcss + "px";
				}
				element.style[k] = tmpcss;
			}
		} else {
			if (arguments.length > 2) {
				element.style[csstext] = val;
			} else {
				return getStyle(element, csstext);
			}
		}
	};

	var wrap = function wrap(element, parent) {
		var p = makeDOM(parent);
		element.parentNode.insertBefore(p, element);
		p.appendChild(element);
	};
	var getStyle = function getStyle(element, key) {
		//不要在循环里用
		var allCSS;
		if (window.getComputedStyle) {
			allCSS = window.getComputedStyle(element);
		} else {
			allCSS = element.currentStyle;
		}
		if (allCSS[key] !== undefined) {
			return allCSS[key];
		} else {
			return "";
		}
	};
	var globalZIndex;
	/**
	 * 统一zindex值, 不同控件每次显示时都取最大的zindex，防止显示错乱
	 */
	var getZIndex = function getZIndex() {
		if (!globalZIndex) {
			globalZIndex = 2000;
		}
		return globalZIndex++;
	};
	var makeDOM = function makeDOM(htmlString) {
		var tempDiv = document.createElement("div");
		tempDiv.innerHTML = htmlString;
		var _dom = tempDiv.children[0];
		return _dom;
	};
	/**
	 * element
	 */
	var makeModal = function makeModal(element, parEle) {
		var overlayDiv = document.createElement('div');
		$(overlayDiv).addClass('u-overlay');
		overlayDiv.style.zIndex = getZIndex();
		// 如果有父元素则插入到父元素上，没有则添加到body上
		if (parEle && parEle != document.body) {
			addClass(overlayDiv, 'hasPar');
			parEle.appendChild(overlayDiv);
		} else {
			document.body.appendChild(overlayDiv);
		}

		element.style.zIndex = getZIndex();
		(0, _event.on)(overlayDiv, 'click', function (e) {
			(0, _event.stopEvent)(e);
		});
		return overlayDiv;
	};

	var getOffset = function getOffset(Node, offset) {
		if (!offset) {
			offset = {};
			offset.top = 0;
			offset.left = 0;
		}
		if (Node == document.body) {
			return offset;
		}
		offset.top += Node.offsetTop;
		offset.left += Node.offsetLeft;
		if (Node.offsetParent) return getOffset(Node.offsetParent, offset);else return offset;
	};
	var getScroll = function getScroll(Node, offset) {
		if (!offset) {
			offset = {};
			offset.top = 0;
			offset.left = 0;
		}
		if (Node == document.body) {
			offset.top += Node.scrollTop || document.documentElement.scrollTop;
			offset.left += Node.scrollLeft || document.documentElement.scrollLeft;
			return offset;
		}
		if (Node.tagName != 'INPUT') {
			offset.top += Node.scrollTop;
			offset.left += Node.scrollLeft;
		}

		if (Node.parentNode) return getScroll(Node.parentNode, offset);else return offset;
	};
	var showPanelByEle = function showPanelByEle(obj) {
		var ele = obj.ele,
		    panel = obj.panel,
		    position = obj.position,

		// off = u.getOffset(ele),scroll = u.getScroll(ele),
		// offLeft = off.left,offTop = off.top,
		// scrollLeft = scroll.left,scrollTop = scroll.top,
		// eleWidth = ele.offsetWidth,eleHeight = ele.offsetHeight,
		// panelWidth = panel.offsetWidth,panelHeight = panel.offsetHeight,
		bodyWidth = document.body.clientWidth,
		    bodyHeight = document.body.clientHeight,
		    position = position || 'top',

		// left = offLeft - scrollLeft,top = offTop - scrollTop,
		eleRect = obj.ele.getBoundingClientRect(),
		    panelRect = obj.panel.getBoundingClientRect(),
		    eleWidth = eleRect.width || 0,
		    eleHeight = eleRect.height || 0,
		    left = eleRect.left || 0,
		    top = eleRect.top || 0,
		    panelWidth = panelRect.width || 0,
		    panelHeight = panelRect.height || 0,
		    docWidth = document.documentElement.clientWidth,
		    docHeight = document.documentElement.clientHeight;

		// 基准点为Ele的左上角
		// 后续根据需要完善
		if (position == 'left') {
			left = left - panelWidth;
			top = top + (eleHeight - panelHeight) / 2;
		} else if (position == 'right') {
			left = left + eleWidth;
			top = top + (eleHeight - panelHeight) / 2;
		} else if (position == 'top' || position == 'topCenter') {
			left = left + (eleWidth - panelWidth) / 2;
			top = top - panelHeight;
		} else if (position == 'bottom' || position == 'bottomCenter') {
			left = left + (eleWidth - panelWidth) / 2;
			top = top + eleHeight;
		} else if (position == 'bottomLeft') {
			left = left;
			top = top + eleHeight;
		}

		if (left + panelWidth > docWidth) left = docWidth - panelWidth - 10;
		if (left < 0) left = 0;

		if (top + panelHeight > docHeight) {
			top = docHeight - panelHeight - 10;
		}

		if (top < 0) top = 0;
		panel.style.left = left + 'px';
		panel.style.top = top + 'px';
	};

	var getElementLeft = function getElementLeft(element) {
		var actualLeft = element.offsetLeft;
		var current = element.offsetParent;
		while (current !== null) {
			actualLeft += current.offsetLeft;
			current = current.offsetParent;
		}
		if (document.compatMode == "BackCompat") {
			var elementScrollLeft = document.body.scrollLeft;
		} else {
			var elementScrollLeft = document.documentElement.scrollLeft;
		}
		return actualLeft - elementScrollLeft;
	};
	var getElementTop = function getElementTop(element) {
		var actualTop = element.offsetTop;
		var current = element.offsetParent;
		while (current !== null) {
			actualTop += current.offsetTop;
			current = current.offsetParent;
		}
		if (document.compatMode == "BackCompat") {
			var elementScrollTop = document.body.scrollTop;
		} else {
			var elementScrollTop = document.documentElement.scrollTop;
		}
		return actualTop - elementScrollTop;
	};
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.hasClass = hasClass;
	exports.toggleClass = toggleClass;
	exports.closest = closest;
	exports.css = css;
	exports.wrap = wrap;
	exports.getStyle = getStyle;
	exports.getZIndex = getZIndex;
	exports.makeDOM = makeDOM;
	exports.makeModal = makeModal;
	exports.getOffset = getOffset;
	exports.getScroll = getScroll;
	exports.showPanelByEle = showPanelByEle;
	exports.getElementLeft = getElementLeft;
	exports.getElementTop = getElementTop;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.event = exports.stopEvent = exports.trigger = exports.off = exports.on = undefined;

	var _env = __webpack_require__(5);

	var u = {}; /**
	             * Module : Sparrow touch event
	             * Author : Kvkens(yueming@yonyou.com)
	             * Date	  : 2016-07-28 14:41:17
	             */

	u.event = {};

	var touchStartEvent = _env.env.hasTouch ? "touchstart" : "mousedown",
	    touchStopEvent = _env.env.hasTouch ? "touchend" : "mouseup",
	    touchMoveEvent = _env.env.hasTouch ? "touchmove" : "mousemove";

	// tap和taphold
	u.event.tap = {
		tapholdThreshold: 750,
		emitTapOnTaphold: true,
		touchstartFun: function touchstartFun() {
			trigger(this, 'vmousedown');
		},
		touchendFun: function touchendFun() {
			trigger(this, 'vmouseup');
			trigger(this, 'vclick');
		},
		setup: function setup() {
			var thisObject = this,
			    isTaphold = false;

			on(thisObject, "vmousedown", function (event) {
				isTaphold = false;
				if (event.which && event.which !== 1) {
					return false;
				}

				var origTarget = event.target,
				    timer;

				function clearTapTimer() {
					clearTimeout(timer);
				}

				function clearTapHandlers() {
					clearTapTimer();

					off(thisObject, 'vclick');
					off(thisObject, 'vmouseup');
					off(document, 'vmousecancel');
				}

				function clickHandler(event) {
					clearTapHandlers();

					// ONLY trigger a 'tap' event if the start target is
					// the same as the stop target.
					if (!isTaphold && origTarget === event.target) {
						trigger(thisObject, 'tap');
					} else if (isTaphold) {
						event.preventDefault();
					}
				}
				on(thisObject, 'vmouseup', clearTapTimer);
				on(thisObject, 'vclick', clickHandler);
				on(document, 'vmousecancel', clearTapHandlers);

				timer = setTimeout(function () {
					if (!u.event.tap.emitTapOnTaphold) {
						isTaphold = true;
					}
					trigger(thisObject, "taphold");
					clearTapHandlers();
				}, u.event.tap.tapholdThreshold);
			});

			on(thisObject, 'touchstart', u.event.tap.touchstartFun);
			on(thisObject, 'touchend', u.event.tap.touchendFun);
		},
		teardown: function teardown() {
			off(thisObject, 'vmousedown');
			off(thisObject, 'vclick');
			off(thisObject, 'vmouseup');
			off(document, 'vmousecancel');
		}
	};

	u.event.taphold = u.event.tap;

	u.event.swipe = {

		// More than this horizontal displacement, and we will suppress scrolling.
		scrollSupressionThreshold: 30,

		// More time than this, and it isn't a swipe.
		durationThreshold: 1000,

		// Swipe horizontal displacement must be more than this.
		horizontalDistanceThreshold: 30,

		// Swipe vertical displacement must be less than this.
		verticalDistanceThreshold: 30,

		getLocation: function getLocation(event) {
			var winPageX = window.pageXOffset,
			    winPageY = window.pageYOffset,
			    x = event.clientX,
			    y = event.clientY;

			if (event.pageY === 0 && Math.floor(y) > Math.floor(event.pageY) || event.pageX === 0 && Math.floor(x) > Math.floor(event.pageX)) {

				// iOS4 clientX/clientY have the value that should have been
				// in pageX/pageY. While pageX/page/ have the value 0
				x = x - winPageX;
				y = y - winPageY;
			} else if (y < event.pageY - winPageY || x < event.pageX - winPageX) {

				// Some Android browsers have totally bogus values for clientX/Y
				// when scrolling/zooming a page. Detectable since clientX/clientY
				// should never be smaller than pageX/pageY minus page scroll
				x = event.pageX - winPageX;
				y = event.pageY - winPageY;
			}

			return {
				x: x,
				y: y
			};
		},

		start: function start(event) {
			var data = event.touches ? event.touches[0] : event,
			    location = u.event.swipe.getLocation(data);
			return {
				time: new Date().getTime(),
				coords: [location.x, location.y],
				origin: event.target
			};
		},

		stop: function stop(event) {
			var data = event.touches ? event.touches[0] : event,
			    location = u.event.swipe.getLocation(data);
			return {
				time: new Date().getTime(),
				coords: [location.x, location.y]
			};
		},

		handleSwipe: function handleSwipe(start, stop, thisObject, origTarget) {
			if (stop.time - start.time < u.event.swipe.durationThreshold && Math.abs(start.coords[0] - stop.coords[0]) > u.event.swipe.horizontalDistanceThreshold && Math.abs(start.coords[1] - stop.coords[1]) < u.event.swipe.verticalDistanceThreshold) {
				var direction = start.coords[0] > stop.coords[0] ? "swipeleft" : "swiperight";

				trigger(thisObject, "swipe");
				trigger(thisObject, direction);
				return true;
			}
			return false;
		},

		// This serves as a flag to ensure that at most one swipe event event is
		// in work at any given time
		eventInProgress: false,

		setup: function setup() {
			var events,
			    thisObject = this,
			    context = {};

			// Retrieve the events data for this element and add the swipe context
			events = thisObject["mobile-events"];
			if (!events) {
				events = {
					length: 0
				};
				thisObject["mobile-events"] = events;
			}
			events.length++;
			events.swipe = context;

			context.start = function (event) {

				// Bail if we're already working on a swipe event
				if (u.event.swipe.eventInProgress) {
					return;
				}
				u.event.swipe.eventInProgress = true;

				var stop,
				    start = u.event.swipe.start(event),
				    origTarget = event.target,
				    emitted = false;

				context.move = function (event) {
					// if ( !start || event.isDefaultPrevented() ) {
					if (!start) {
						return;
					}

					stop = u.event.swipe.stop(event);
					if (!emitted) {
						emitted = u.event.swipe.handleSwipe(start, stop, thisObject, origTarget);
						if (emitted) {

							// Reset the context to make way for the next swipe event
							u.event.swipe.eventInProgress = false;
						}
					}
					// prevent scrolling
					if (Math.abs(start.coords[0] - stop.coords[0]) > u.event.swipe.scrollSupressionThreshold) {
						event.preventDefault();
					}
				};

				context.stop = function () {
					emitted = true;

					// Reset the context to make way for the next swipe event
					u.event.swipe.eventInProgress = false;
					off(document, touchMoveEvent, context.move);
					context.move = null;
				};

				on(document, touchMoveEvent, context.move);
				on(document, touchStopEvent, context.stop);
			};
			on(thisObject, touchStartEvent, context.start);
		},

		teardown: function teardown() {
			var events, context;

			events = thisObject["mobile-events"];
			if (events) {
				context = events.swipe;
				delete events.swipe;
				events.length--;
				if (events.length === 0) {
					thisObject["mobile-events"] = null;
				}
			}

			if (context) {
				if (context.start) {
					off(thisObject, touchStartEvent, context.start);
				}
				if (context.move) {
					off(document, touchMoveEvent, context.move);
				}
				if (context.stop) {
					off(document, touchStopEvent, context.stop);
				}
			}
		}
	};

	u.event.swipeleft = u.event.swipe;

	u.event.swiperight = u.event.swipe;

	var event = u.event;

	var on = function on(element, eventName, child, listener) {
		if (!element) return;
		if (arguments.length < 4) {
			listener = child;
			child = undefined;
		} else {
			var childlistener = function childlistener(e) {
				if (!e) {
					return;
				}
				var tmpchildren = element.querySelectorAll(child);
				tmpchildren.forEach(function (node) {
					if (node == e.target) {
						listener.call(e.target, e);
					}
				});
			};
		}
		//capture = capture || false;

		if (!element["uEvent"]) {
			//在dom上添加记录区
			element["uEvent"] = {};
		}
		//判断是否元素上是否用通过on方法填加进去的事件
		if (!element["uEvent"][eventName]) {
			element["uEvent"][eventName] = [child ? childlistener : listener];
			if (u.event && u.event[eventName] && u.event[eventName].setup) {
				u.event[eventName].setup.call(element);
			}
			element["uEvent"][eventName + 'fn'] = function (e) {
				//火狐下有问题修改判断
				if (!e) e = typeof event != 'undefined' && event ? event : window.event;
				element["uEvent"][eventName].forEach(function (fn) {
					try {
						e.target = e.target || e.srcElement; //兼容IE8
					} catch (ee) {}
					if (fn) fn.call(element, e);
				});
			};
			if (element.addEventListener) {
				// 用于支持DOM的浏览器
				element.addEventListener(eventName, element["uEvent"][eventName + 'fn']);
			} else if (element.attachEvent) {
				// 用于IE浏览器
				element.attachEvent("on" + eventName, element["uEvent"][eventName + 'fn']);
			} else {
				// 用于其它浏览器
				element["on" + eventName] = element["uEvent"][eventName + 'fn'];
			}
		} else {
			//如果有就直接往元素的记录区添加事件
			var lis = child ? childlistener : listener;
			var hasLis = false;
			element["uEvent"][eventName].forEach(function (fn) {
				if (fn == lis) {
					hasLis = true;
				}
			});
			if (!hasLis) {
				element["uEvent"][eventName].push(child ? childlistener : listener);
			}
		}
	};

	var off = function off(element, eventName, listener) {
		//删除事件数组
		if (listener) {
			if (element && element["uEvent"] && element["uEvent"][eventName]) {
				element["uEvent"][eventName].forEach(function (fn, i) {
					if (fn == listener) {
						element["uEvent"][eventName].splice(i, 1);
					}
				});
			}
			return;
		}
		var eventfn;
		if (element && element["uEvent"] && element["uEvent"][eventName + 'fn']) eventfn = element["uEvent"][eventName + 'fn'];
		if (element.removeEventListener) {
			// 用于支持DOM的浏览器
			element.removeEventListener(eventName, eventfn);
		} else if (element.removeEvent) {
			// 用于IE浏览器
			element.removeEvent("on" + eventName, eventfn);
		} else {
			// 用于其它浏览器
			delete element["on" + eventName];
		}
		if (u.event && u.event[eventName] && u.event[eventName].teardown) {
			u.event[eventName].teardown.call(element);
		}

		if (element && element["uEvent"] && element["uEvent"][eventName]) element["uEvent"][eventName] = undefined;
		if (element && element["uEvent"] && element["uEvent"][eventName + 'fn']) element["uEvent"][eventName + 'fn'] = undefined;
	};
	var trigger = function trigger(element, eventName) {
		if (element["uEvent"] && element["uEvent"][eventName]) {
			element["uEvent"][eventName + 'fn']();
		}
	};

	/**
	 * 阻止冒泡
	 */
	var stopEvent = function stopEvent(e) {
		if (typeof e != "undefined") {
			if (e.stopPropagation) e.stopPropagation();else {
				e.cancelBubble = true;
			}
			//阻止默认浏览器动作(W3C)
			if (e && e.preventDefault) e.preventDefault();
			//IE中阻止函数器默认动作的方式
			else window.event.returnValue = false;
		}
	};

	exports.on = on;
	exports.off = off;
	exports.trigger = trigger;
	exports.stopEvent = stopEvent;
	exports.event = event;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.env = undefined;

	var _extend = __webpack_require__(6);

	var u = {}; /**
	             * Module : Sparrow browser environment
	             * Author : Kvkens(yueming@yonyou.com)
	             * Date	  : 2016-07-27 21:46:50
	             */

	(0, _extend.extend)(u, {
		isIE: false,
		isFF: false,
		isOpera: false,
		isChrome: false,
		isSafari: false,
		isWebkit: false,
		isIE8_BEFORE: false,
		isIE8: false,
		isIE8_CORE: false,
		isIE9: false,
		isIE9_CORE: false,
		isIE10: false,
		isIE10_ABOVE: false,
		isIE11: false,
		isEdge: false,
		isIOS: false,
		isIphone: false,
		isIPAD: false,
		isStandard: false,
		version: 0,
		isWin: false,
		isUnix: false,
		isLinux: false,
		isAndroid: false,
		isAndroidPAD: false,
		isAndroidPhone: false,
		isMac: false,
		hasTouch: false,
		isMobile: false
	});

	(function () {
		var userAgent = navigator.userAgent,
		    rMsie = /(msie\s|trident.*rv:)([\w.]+)/,
		    rFirefox = /(firefox)\/([\w.]+)/,
		    rOpera = /(opera).+version\/([\w.]+)/,
		    rChrome = /(chrome)\/([\w.]+)/,
		    rSafari = /version\/([\w.]+).*(safari)/,
		    version,
		    ua = userAgent.toLowerCase(),
		    s,
		    browserMatch = {
			browser: "",
			version: ''
		},
		    match = rMsie.exec(ua);

		if (match != null) {
			browserMatch = {
				browser: "IE",
				version: match[2] || "0"
			};
		}
		match = rFirefox.exec(ua);
		if (match != null) {
			browserMatch = {
				browser: match[1] || "",
				version: match[2] || "0"
			};
		}
		match = rOpera.exec(ua);
		if (match != null) {
			browserMatch = {
				browser: match[1] || "",
				version: match[2] || "0"
			};
		}
		match = rChrome.exec(ua);
		if (match != null) {
			browserMatch = {
				browser: match[1] || "",
				version: match[2] || "0"
			};
		}
		match = rSafari.exec(ua);
		if (match != null) {
			browserMatch = {
				browser: match[2] || "",
				version: match[1] || "0"
			};
		}

		if (userAgent.indexOf("Edge") > -1) {
			u.isEdge = true;
		}
		if (s = ua.match(/opera.([\d.]+)/)) {
			u.isOpera = true;
		} else if (browserMatch.browser == "IE" && browserMatch.version == 11) {
			u.isIE11 = true;
			u.isIE = true;
		} else if (s = ua.match(/chrome\/([\d.]+)/)) {
			u.isChrome = true;
			u.isStandard = true;
		} else if (s = ua.match(/version\/([\d.]+).*safari/)) {
			u.isSafari = true;
			u.isStandard = true;
		} else if (s = ua.match(/gecko/)) {
			//add by licza : support XULRunner
			u.isFF = true;
			u.isStandard = true;
		} else if (s = ua.match(/msie ([\d.]+)/)) {
			u.isIE = true;
		} else if (s = ua.match(/firefox\/([\d.]+)/)) {
			u.isFF = true;
			u.isStandard = true;
		}
		if (ua.match(/webkit\/([\d.]+)/)) {
			u.isWebkit = true;
		}
		if (ua.match(/ipad/i)) {
			u.isIOS = true;
			u.isIPAD = true;
			u.isStandard = true;
		}

		if (ua.match(/iphone/i)) {
			u.isIOS = true;
			u.isIphone = true;
		}

		if (navigator.platform == "Mac68K" || navigator.platform == "MacPPC" || navigator.platform == "Macintosh" || navigator.platform == "MacIntel") {
			//u.isIOS = true;
			u.isMac = true;
		}

		if (navigator.platform == "Win32" || navigator.platform == "Windows" || navigator.platform == "Win64") {
			u.isWin = true;
		}

		if (navigator.platform == "X11" && !u.isWin && !u.isMac) {
			u.isUnix = true;
		}
		if (String(navigator.platform).indexOf("Linux") > -1) {
			u.isLinux = true;
		}

		if (ua.indexOf('Android') > -1 || ua.indexOf('android') > -1 || ua.indexOf('Adr') > -1 || ua.indexOf('adr') > -1) {
			u.isAndroid = true;
		}

		u.version = version ? browserMatch.version ? browserMatch.version : 0 : 0;
		if (u.isAndroid) {
			if (window.screen.width >= 768 && window.screen.width < 1024) {
				u.isAndroidPAD = true;
			}
			if (window.screen.width <= 768) {
				u.isAndroidPhone = true;
			}
		}
		if (u.isIE) {
			var intVersion = parseInt(u.version);
			var mode = document.documentMode;
			if (mode == null) {
				if (intVersion == 6 || intVersion == 7) {
					u.isIE8_BEFORE = true;
				}
			} else {
				if (mode == 7) {
					u.isIE8_BEFORE = true;
				} else if (mode == 8) {
					u.isIE8 = true;
				} else if (mode == 9) {
					u.isIE9 = true;
					u.isSTANDARD = true;
				} else if (mode == 10) {
					u.isIE10 = true;
					u.isSTANDARD = true;
					u.isIE10_ABOVE = true;
				} else {
					u.isSTANDARD = true;
				}
				if (intVersion == 8) {
					u.isIE8_CORE = true;
				} else if (intVersion == 9) {
					u.isIE9_CORE = true;
				} else if (browserMatch.version == 11) {
					u.isIE11 = true;
				}
			}
		}
		if ("ontouchend" in document) {
			u.hasTouch = true;
		}
		if (u.isIphone || u.isAndroidPhone) u.isMobile = true;
	})();

	var env = u;
	exports.env = env;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.extend = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Module : Sparrow extend
	                                                                                                                                                                                                                                                                               * Author : Kvkens(yueming@yonyou.com)
	                                                                                                                                                                                                                                                                               * Date	  : 2016-07-27 21:46:50
	                                                                                                                                                                                                                                                                               */

	var _enumerables = __webpack_require__(7);

	/**
	 * 复制对象属性
	 *
	 * @param {Object}  目标对象
	 * @param {config} 源对象
	 */
	var extend = function extend(object, config) {
		var args = arguments,
		    options;
		if (args.length > 1) {
			for (var len = 1; len < args.length; len++) {
				options = args[len];
				if (object && options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
					var i, j, k;
					for (i in options) {
						object[i] = options[i];
					}
					if (_enumerables.enumerables) {
						for (j = _enumerables.enumerables.length; j--;) {
							k = _enumerables.enumerables[j];
							if (options.hasOwnProperty && options.hasOwnProperty(k)) {
								object[k] = options[k];
							}
						}
					}
				}
			}
		}
		return object;
	};

	exports.extend = extend;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Module : Sparrow extend enum
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-07-27 21:46:50
	 */

	var U_LANGUAGES = "i_languages";
	var U_THEME = "u_theme";
	var U_LOCALE = "u_locale";
	var U_USERCODE = "usercode";

	var enumerables = true,
	    enumerablesTest = {
		toString: 1
	},
	    toString = Object.prototype.toString;
	for (var i in enumerablesTest) {
		exports.enumerables = enumerables = null;
	}
	if (enumerables) {
		exports.enumerables = enumerables = ['hasOwnProperty', 'valueOf', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'constructor'];
	}

	exports.enumerables = enumerables;
	exports.U_LANGUAGES = U_LANGUAGES;
	exports.U_THEME = U_THEME;
	exports.U_LOCALE = U_LOCALE;
	exports.U_USERCODE = U_USERCODE;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	/**
	 * Module : Sparrow util tools
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-07-27 21:46:50
	 */

	/**
	 * 创建一个带壳的对象,防止外部修改
	 * @param {Object} proto
	 */
	var createShellObject = function createShellObject(proto) {
		var exf = function exf() {};
		exf.prototype = proto;
		return new exf();
	};
	var execIgnoreError = function execIgnoreError(a, b, c) {
		try {
			a.call(b, c);
		} catch (e) {}
	};

	var getFunction = function getFunction(target, val) {
		if (!val || typeof val == 'function') return val;
		if (typeof target[val] == 'function') return target[val];else if (typeof window[val] == 'function') return window[val];else if (val.indexOf('.') != -1) {
			var func = getJSObject(target, val);
			if (typeof func == 'function') return func;
			func = getJSObject(window, val);
			if (typeof func == 'function') return func;
		}
		return val;
	};
	var getJSObject = function getJSObject(target, names) {
		if (!names) {
			return;
		}
		if ((typeof names === 'undefined' ? 'undefined' : _typeof(names)) == 'object') return names;
		var nameArr = names.split('.');
		var obj = target;
		for (var i = 0; i < nameArr.length; i++) {
			obj = obj[nameArr[i]];
			if (!obj) return null;
		}
		return obj;
	};
	var isDate = function isDate(input) {
		return Object.prototype.toString.call(input) === '[object Date]' || input instanceof Date;
	};
	var isNumber = function isNumber(obj) {
		//return obj === +obj
		//加了个typeof 判断，因为'431027199110.078573'会解析成number
		return obj - parseFloat(obj) + 1 >= 0;
	};
	var isArray = Array.isArray || function (val) {
		return Object.prototype.toString.call(val) === '[object Array]';
	};
	var isEmptyObject = function isEmptyObject(obj) {
		var name;
		for (name in obj) {
			return false;
		}
		return true;
	};
	var inArray = function inArray(node, arr) {
		if (!arr instanceof Array) {
			throw "arguments is not Array";
		}
		for (var i = 0, k = arr.length; i < k; i++) {
			if (node == arr[i]) {
				return true;
			}
		}
		return false;
	};
	var isDomElement = function isDomElement(obj) {
		if (window['HTMLElement']) {
			return obj instanceof HTMLElement;
		} else {
			return obj && obj.tagName && obj.nodeType === 1;
		}
	};
	var each = function each(obj, callback) {
		if (obj.forEach) {
			obj.forEach(function (v, k) {
				callback(k, v);
			});
		} else if (obj instanceof Object) {
			for (var k in obj) {
				callback(k, obj[k]);
			}
		} else {
			return;
		}
	};
	try {
		NodeList.prototype.forEach = Array.prototype.forEach;
	} catch (e) {}

	/**
	 * 获得字符串的字节长度
	 */
	String.prototype.lengthb = function () {
		//	var str = this.replace(/[^\x800-\x10000]/g, "***");
		var str = this.replace(/[^\x00-\xff]/g, "**");
		return str.length;
	};

	/**
	 * 将AFindText全部替换为ARepText
	 */
	String.prototype.replaceAll = function (AFindText, ARepText) {
		//自定义String对象的方法
		var raRegExp = new RegExp(AFindText, "g");
		return this.replace(raRegExp, ARepText);
	};

	var dateFormat = function dateFormat(str) {
		//如果不是string类型  原型返回
		if (typeof str !== 'string') {
			return str;
		}
		//判断 str 格式如果是 yy-mm-dd
		if (str && str.indexOf('-') > -1) {
			//获取当前是否是 ios版本,>8是因为ios不识别new Date（“2016/11”）格式
			var ua = navigator.userAgent.toLowerCase();
			if (/iphone|ipad|ipod/.test(ua)) {
				//转换成 yy/mm/dd
				str = str.replace(/-/g, "/");
				str = str.replace(/(^\s+)|(\s+$)/g, "");
				if (str.length <= 8) {
					str = str += "/01";
				}
			}
		}

		return str;
	};

	exports.createShellObject = createShellObject;
	exports.execIgnoreError = execIgnoreError;
	exports.getFunction = getFunction;
	exports.getJSObject = getJSObject;
	exports.isDate = isDate;
	exports.isNumber = isNumber;
	exports.isArray = isArray;
	exports.isEmptyObject = isEmptyObject;
	exports.inArray = inArray;
	exports.isDomElement = isDomElement;
	exports.each = each;
	exports.dateFormat = dateFormat;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.hotkeys = undefined;

	var _class = __webpack_require__(10);

	var _extend = __webpack_require__(6);

	var _util = __webpack_require__(8);

	var hotkeys = {}; /**
	                   * Module : Sparrow hotKeys
	                   * Author : Kvkens(yueming@yonyou.com)
	                   * Date	  : 2016-07-28 20:25:39
	                   */

	hotkeys.special_keys = {
	    27: 'esc', 9: 'tab', 32: 'space', 13: 'enter', 8: 'backspace', 145: 'scroll', 20: 'capslock',
	    144: 'numlock', 19: 'pause', 45: 'insert', 36: 'home', 46: 'del', 35: 'end', 33: 'pageup',
	    34: 'pagedown', 37: 'left', 38: 'up', 39: 'right', 40: 'down', 112: 'f1', 113: 'f2', 114: 'f3',
	    115: 'f4', 116: 'f5', 117: 'f6', 118: 'f7', 119: 'f8', 120: 'f9', 121: 'f10', 122: 'f11', 123: 'f12'
	};

	hotkeys.shift_nums = {
	    "`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
	    "8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ":", "'": "\"", ",": "<",
	    ".": ">", "/": "?", "\\": "|"
	};

	hotkeys.add = function (combi, options, callback) {
	    if ((0, _class.isFunction)(options)) {
	        callback = options;
	        options = {};
	    }
	    var opt = {},
	        defaults = { type: 'keydown', propagate: false, disableInInput: false, target: document.body, checkParent: true },
	        that = this;
	    opt = (0, _extend.extend)(opt, defaults, options || {});
	    combi = combi.toLowerCase();

	    // inspect if keystroke matches
	    var inspector = function inspector(event) {
	        //event = $.event.fix(event); // jQuery event normalization.
	        var element = this; //event.target;
	        // @ TextNode -> nodeType == 3
	        element = element.nodeType == 3 ? element.parentNode : element;

	        if (opt['disableInInput']) {
	            // Disable shortcut keys in Input, Textarea fields
	            var target = element; //$(element);
	            if (target.tagName == "INPUT" || target.tagName == "TEXTAREA") {
	                return;
	            }
	        }
	        var code = event.which,
	            type = event.type,
	            character = String.fromCharCode(code).toLowerCase(),
	            special = that.special_keys[code],
	            shift = event.shiftKey,
	            ctrl = event.ctrlKey,
	            alt = event.altKey,
	            propagate = true,
	            // default behaivour
	        mapPoint = null;

	        // in opera + safari, the event.target is unpredictable.
	        // for example: 'keydown' might be associated with HtmlBodyElement
	        // or the element where you last clicked with your mouse.
	        if (opt.checkParent) {
	            //              while (!that.all[element] && element.parentNode){
	            while (!element['hotkeys'] && element.parentNode) {
	                element = element.parentNode;
	            }
	        }

	        //          var cbMap = that.all[element].events[type].callbackMap;
	        var cbMap = element['hotkeys'].events[type].callbackMap;
	        if (!shift && !ctrl && !alt) {
	            // No Modifiers
	            mapPoint = cbMap[special] || cbMap[character];
	        }
	        // deals with combinaitons (alt|ctrl|shift+anything)
	        else {
	                var modif = '';
	                if (alt) modif += 'alt+';
	                if (ctrl) modif += 'ctrl+';
	                if (shift) modif += 'shift+';
	                // modifiers + special keys or modifiers + characters or modifiers + shift characters
	                mapPoint = cbMap[modif + special] || cbMap[modif + character] || cbMap[modif + that.shift_nums[character]];
	            }
	        if (mapPoint) {
	            mapPoint.cb(event);
	            if (!mapPoint.propagate) {
	                event.stopPropagation();
	                event.preventDefault();
	                return false;
	            }
	        }
	    };
	    // first hook for this element
	    var data = opt.target['hotkeys'];
	    if (!data) {
	        opt.target['hotkeys'] = data = { events: {} };
	    }
	    //      if (!hotkeys.all[opt.target]){
	    //          hotkeys.all[opt.target] = {events:{}};
	    //      }
	    if (!data.events[opt.type]) {
	        data.events[opt.type] = { callbackMap: {} };
	        on(opt.target, opt.type, inspector);
	        //$.event.add(opt.target, opt.type, inspector);
	    }
	    //      if (!hotkeys.all[opt.target].events[opt.type]){
	    //          hotkeys.all[opt.target].events[opt.type] = {callbackMap: {}}
	    //          $.event.add(opt.target, opt.type, inspector);
	    //      }
	    data.events[opt.type].callbackMap[combi] = { cb: callback, propagate: opt.propagate };
	    //      hotkeys.all[opt.target].events[opt.type].callbackMap[combi] =  {cb: callback, propagate:opt.propagate};
	    return hotkeys;
	};
	hotkeys.remove = function (exp, opt) {
	    opt = opt || {};
	    target = opt.target || document.body;
	    type = opt.type || 'keydown';
	    exp = exp.toLowerCase();

	    delete target['hotkeys'].events[type].callbackMap[exp];
	};

	hotkeys.scan = function (element, target) {
	    element = element || document.body;
	    element.querySelectorAll('[u-enter]').forEach(function (el) {
	        var enterValue = el.getAttribute('u-enter');
	        if (!enterValue) return;
	        if (enterValue.substring(0, 1) == '#') hotkeys.add('enter', { target: this }, function () {
	            var _el = element.querySelector(enterValue);
	            if (_el) {
	                _el.focus();
	            }
	        });else {
	            target = target || window;
	            var func = h(target, enterValue);
	            hotkeys.add('enter', { target: this }, function () {
	                func.call(this);
	            });
	        }
	    });
	    element.querySelectorAll('[u-hotkey]').forEach(function (el) {
	        var hotkey = el.getAttribute('u-hotkey');
	        if (!hotkey) return;
	        hotkeys.add(hotkey, function () {
	            el.click();
	        });
	    });
	};

	var hotkeys = hotkeys;

	exports.hotkeys = hotkeys;

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Module : Sparrow class
	 * Author : Kvkens(yueming@yonyou.com)
	 * Date	  : 2016-07-28 08:45:39
	 */

	var Class = function Class(o) {
		if (!(this instanceof Class) && isFunction(o)) {
			return classify(o);
		}
	};

	// Create a new Class.
	//
	//  var SuperPig = Class.create({
	//    Extends: Animal,
	//    Implements: Flyable,
	//    initialize: function() {
	//      SuperPig.superclass.initialize.apply(this, arguments)
	//    },
	//    Statics: {
	//      COLOR: 'red'
	//    }
	// })
	//
	Class.create = function (parent, properties) {
		if (!isFunction(parent)) {
			properties = parent;
			parent = null;
		}

		properties || (properties = {});
		parent || (parent = properties.Extends || Class);
		properties.Extends = parent;

		// The created class constructor
		function SubClass() {
			var ret;
			// Call the parent constructor.
			parent.apply(this, arguments);

			// Only call initialize in self constructor.
			if (this.constructor === SubClass && this.initialize) {
				ret = this.initialize.apply(this, arguments);
			}
			return ret ? ret : this;
		}

		// Inherit class (static) properties from parent.
		if (parent !== Class) {
			mix(SubClass, parent, parent.StaticsWhiteList);
		}

		// Add instance properties to the subclass.
		implement.call(SubClass, properties);

		// Make subclass extendable.
		return classify(SubClass);
	};

	function implement(properties) {
		var key, value;

		for (key in properties) {
			value = properties[key];

			if (Class.Mutators.hasOwnProperty(key)) {
				Class.Mutators[key].call(this, value);
			} else {
				this.prototype[key] = value;
			}
		}
	}

	// Create a sub Class based on `Class`.
	Class.extend = function (properties) {
		properties || (properties = {});
		properties.Extends = this;

		return Class.create(properties);
	};

	function classify(cls) {
		cls.extend = Class.extend;
		cls.implement = implement;
		return cls;
	}

	// Mutators define special properties.
	Class.Mutators = {

		'Extends': function Extends(parent) {
			var existed = this.prototype;
			var proto = createProto(parent.prototype);

			// Keep existed properties.
			mix(proto, existed);

			// Enforce the constructor to be what we expect.
			proto.constructor = this;

			// Set the prototype chain to inherit from `parent`.
			this.prototype = proto;

			// Set a convenience property in case the parent's prototype is
			// needed later.
			this.superclass = parent.prototype;
		},

		'Implements': function Implements(items) {
			isArray(items) || (items = [items]);
			var proto = this.prototype,
			    item;

			while (item = items.shift()) {
				mix(proto, item.prototype || item);
			}
		},

		'Statics': function Statics(staticProperties) {
			mix(this, staticProperties);
		}
	};

	// Shared empty constructor function to aid in prototype-chain creation.
	function Ctor() {}

	// See: http://jsperf.com/object-create-vs-new-ctor
	var createProto = Object.__proto__ ? function (proto) {
		return {
			__proto__: proto
		};
	} : function (proto) {
		Ctor.prototype = proto;
		return new Ctor();
	};

	// Helpers
	// ------------

	function mix(r, s, wl) {
		// Copy "all" properties including inherited ones.
		for (var p in s) {
			if (s.hasOwnProperty(p)) {
				if (wl && indexOf(wl, p) === -1) continue;

				// 在 iPhone 1 代等设备的 Safari 中，prototype 也会被枚举出来，需排除
				if (p !== 'prototype') {
					r[p] = s[p];
				}
			}
		}
	}

	var toString = Object.prototype.toString;

	var isArray = Array.isArray || function (val) {
		return toString.call(val) === '[object Array]';
	};

	var isFunction = function isFunction(val) {
		return toString.call(val) === '[object Function]';
	};

	var indexOf = function indexOf(arr, item) {
		if (Array.prototype.indexOf && arr.indexOf) {
			return arr.indexOf(item);
		} else {
			for (var i = 0, len = arr.length; i < len; i++) {
				if (arr[i] === item) {
					return i;
				}
			}
			return -1;
		}
	};

	exports.Class = Class;
	exports.isFunction = isFunction;

/***/ },
/* 11 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Module : compox-util setAdjustMetaFunc
	 * Author : huyue(huyueb@yonyou.com)
	 * Date	  : 2017-01-18 09:34:01
	 */

	var setAdjustMetaFunc = function setAdjustMetaFunc(adjustFunc) {
	  this.adjustFunc = adjustFunc;
	};

	exports.setAdjustMetaFunc = setAdjustMetaFunc;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Module : compox-util dataTable
	 * Author : huyue(huyueb@yonyou.com)
	 * Date	  : 2017-01-18 09:34:01
	 */

	var addDataTable = function addDataTable(dataTable) {
	    this.dataTables[dataTable.id] = dataTable;
	    return this;
	};
	var getDataTable = function getDataTable(id) {
	    return this.dataTables[id];
	};

	var getDataTables = function getDataTables() {
	    return this.dataTables;
	};

	exports.addDataTable = addDataTable;
	exports.getDataTable = getDataTable;
	exports.getDataTables = getDataTables;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.showComp = exports.getComps = exports.getCompsByType = exports.getCompsByDataTable = exports.getComp = exports.createComp = undefined;

	var _compMgr = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tinper-sparrow/js/compMgr\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _util = __webpack_require__(8);

	var _dom = __webpack_require__(3);

	var createComp = function createComp(ele, viewModel) {
	    var options = JSON.parse(ele.getAttribute('u-meta'));
	    if (options && options['type']) {
	        var comp = _compMgr.compMgr.createDataAdapter({ el: ele, options: options, model: viewModel, app: this });
	        ele['u-meta'] = comp;
	    }
	    return comp;
	}; /**
	    * Module : compox-util comp
	    * Author : liuyk(liuyk@yonyou.com)
	    * Date   : 2017-01-18 09:34:01
	    */


	var getComp = function getComp(compId) {
	    var returnComp = null;
	    (0, _util.each)(this.elements, function (i, element) {
	        if (typeof element === 'string') {
	            element = document.querySelector(element);
	        }
	        if (element) {
	            element.querySelectorAll('[u-meta]').forEach(function (ele) {
	                if (ele['u-meta']) {
	                    var comp = ele['u-meta'];
	                    if (comp.id === compId) {
	                        returnComp = comp;
	                        return false;
	                    }
	                }
	            });
	        }
	    });
	    return returnComp;
	};

	var getCompsByDataTable = function getCompsByDataTable(dataTableId, element) {
	    var comps = this.getComps(element),
	        targetComps = [];
	    for (var i = 0; i < comps.length; i++) {
	        if (comps[i].dataModel && comps[i].dataModel['id'] == dataTableId || comps[i].dataTable && comps[i].dataTable['id'] == dataTableId) targetComps.push(comps[i]);
	    }
	    return targetComps;
	};

	/**
	 * 根据类型获取控件
	 * @param {String} type
	 * @param {object} element
	 */
	var getCompsByType = function getCompsByType(type, element) {
	    var elements = element ? element : this.elements;
	    var returnComps = [];
	    if (!(0, _util.isArray)(elements)) elements = [elements];
	    (0, _util.each)(elements, function (i, element) {
	        if (element) {
	            element.querySelectorAll('[u-meta]').forEach(function (ele) {
	                if (ele['u-meta']) {
	                    var comp = ele['u-meta'];
	                    if (comp && comp.type == type) returnComps.push(comp);
	                }
	            });
	        }
	    });
	    return returnComps;
	};

	/**
	 * 获取某区域中的所有控件
	 * @param {object} element
	 */
	var getComps = function getComps(element) {
	    var elements = element ? element : this.elements;
	    var returnComps = [];
	    if (typeof elements == 'string') {
	        elements = document.querySelectorAll(elements);
	    }
	    if (!(0, _util.isArray)(elements) && !(elements instanceof NodeList)) elements = [elements];
	    (0, _util.each)(elements, function (i, element) {
	        if (element) {
	            element.querySelectorAll('[u-meta]').forEach(function (ele) {
	                if (ele['u-meta']) {
	                    var comp = ele['u-meta'];
	                    if (comp) returnComps.push(comp);
	                }
	            });
	        }
	    });
	    return returnComps;
	};

	/**
	 * 将comp显示到顶端（此方法只支持body上存在滚动条的情况）
	 * @param {object} comp对象
	 */
	var showComp = function showComp(comp) {
	    var ele = comp.element,
	        off = (0, _dom.getOffset)(ele),
	        scroll = (0, _dom.getScroll)(ele),
	        top = off.top - scroll.top,
	        bodyHeight = document.body.clientHeight,
	        nowTop = document.body.scrollTop;
	    if (top > bodyHeight || top < 0) {
	        document.body.scrollTop = nowTop + top;
	    }
	};

	exports.createComp = createComp;
	exports.getComp = getComp;
	exports.getCompsByDataTable = getCompsByDataTable;
	exports.getCompsByType = getCompsByType;
	exports.getComps = getComps;
	exports.showComp = showComp;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.compsValidateMultiParam = exports.compsValidate = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * Module : compox-util validate
	                                                                                                                                                                                                                                                                               * Author : huyue(huyueb@yonyou.com)
	                                                                                                                                                                                                                                                                               * Date   : 2017-01-18 09:34:01
	                                                                                                                                                                                                                                                                               */

	var _env = __webpack_require__(5);

	var _dom = __webpack_require__(3);

	/**
	 * 控件数据校验
	 * @param {Object} element
	 */
	var compsValidate = function compsValidate(element, retUnpass) {
	    var comps = this.getComps(element),
	        passed = true,
	        unpassed = [];
	    for (var i = 0; i < comps.length; i++) {
	        if (comps[i].doValidate) {
	            var result = comps[i].doValidate({ trueValue: true, showMsg: true });
	            result = (typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' ? result['passed'] : result;
	            passed = result && passed;
	            if (!result) unpassed.push(comps[i]);
	        }
	    }
	    if (retUnpass) return unpassed;
	    return passed;
	};

	var compsValidateMultiParam = function compsValidateMultiParam(options) {
	    var element = options.element,
	        comps = this.getComps(element),
	        passed = true,
	        showMsg = options.showMsg,
	        notPassedArr = new Array();
	    for (var i = 0; i < comps.length; i++) {
	        if (comps[i].doValidate) {
	            var result = comps[i].doValidate({ trueValue: true, showMsg: showMsg });
	            // 如果passed为true,result.passed为false说明第一次出现错误校验
	            if (passed && !result.passed) {
	                var off = (0, _dom.getOffset)(comps[i].element);
	                //滚动到第一次出现错误的地方
	                window.scrollTo(0, off.top - 80);
	                if (_env.env.isIPAD) {
	                    // ipad上面云表单提交校验的时候没有滚动到对应位置
	                    window.top.scrollTo(0, off.top - 80);
	                }
	            }
	            passed = result.passed && passed;
	            if (!result.passed) {
	                notPassedArr.push(result);
	            }
	        }
	    }
	    return { passed: passed,
	        notPassedArr: notPassedArr };
	};

	exports.compsValidate = compsValidate;
	exports.compsValidateMultiParam = compsValidateMultiParam;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Module : compox-util cache
	 * Author : huyue(huyueb@yonyou.com)
	 * Date   : 2017-01-18 09:34:01
	 */

	var setUserCache = function setUserCache(key, value) {
	    var userCode = this.getEnvironment().usercode;
	    if (!userCode) return;
	    localStorage.setItem(userCode + key, value);
	};

	var getUserCache = function getUserCache(key) {
	    var userCode = this.getEnvironment().usercode;
	    if (!userCode) return;
	    return localStorage.getItem(userCode + key);
	};

	var removeUserCache = function removeUserCache(key) {
	    var userCode = this.getEnvironment().usercode;
	    if (!userCode) return;
	    localStorage.removeItem(userCode + key);
	};

	var setCache = function setCache(key, value) {
	    localStorage.setItem(key, value);
	};

	var getCache = function getCache(key) {
	    return localStorage.getItem(key);
	};

	var removeCache = function removeCache(key) {
	    localStorage.removeItem(key);
	};

	var setSessionCache = function setSessionCache(key, value) {
	    sessionStorage.setItem(key, value);
	};

	var getSessionCache = function getSessionCache(key) {
	    return sessionStorage.getItem(key);
	};

	var removeSessionCache = function removeSessionCache(key) {
	    sessionStorage.removeItem(key);
	};

	exports.setUserCache = setUserCache;
	exports.getUserCache = getUserCache;
	exports.removeUserCache = removeUserCache;
	exports.setCache = setCache;
	exports.getCache = getCache;
	exports.removeCache = removeCache;
	exports.setSessionCache = setSessionCache;
	exports.getSessionCache = getSessionCache;
	exports.removeSessionCache = removeSessionCache;

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Module : compox-util iwebCore
	 * Author : huyue(huyueb@yonyou.com)
	 * Date	  : 2017-01-18 09:34:01
	 */

	var getEnvironment = function getEnvironment() {
	    return u.core.collectEnvironment();
	};

	var setClientAttribute = function setClientAttribute(k, v) {
	    u.core.setClientAttribute(k, v);
	};

	var getClientAttribute = function getClientAttribute(k) {
	    return u.core.getClientAttributes()[k];
	};

	exports.getEnvironment = getEnvironment;
	exports.setClientAttribute = setClientAttribute;
	exports.getClientAttribute = getClientAttribute;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ajax = undefined;

	var _ajax = __webpack_require__(18);

	var ajax = function ajax(params) {
	    params = _wrapAjax.call(this, params);
	    (0, _ajax.ajax)(params);
	};

	/**
	 * 对ajax的请求的数据进行处理
	 * @param  {[type]} params [description]
	 * @return {[type]}        [description]
	 */
	/**
	 * Module : compox-util ajax
	 * Author : huyue(huyueb@yonyou.com)
	 * Date   : 2017-01-18 09:34:01
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

	exports.ajax = ajax;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ajax = undefined;

	var _env = __webpack_require__(5);

	var XmlHttp = {
		get: "get",
		post: "post",
		reqCount: 4,
		createXhr: function createXhr() {
			var xmlhttp = null;
			/*if (window.XMLHttpRequest) {
	    xmlhttp = new XMLHttpRequest();
	  } else {
	    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	  }*/
			if (_env.env.isIE8) {
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //IE低版本创建XMLHTTP
			} else if (_env.env.isIE) {
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP"); //IE高版本创建XMLHTTP
			} else if (window.XMLHttpRequest) {
				xmlhttp = new XMLHttpRequest();
			}
			return xmlhttp;
		},
		ajax: function ajax(_json) {
			var url = _json["url"];
			var callback = _json["success"];
			var async = _json["async"] == undefined ? true : _json["async"];
			var error = _json["error"];
			var params = _json["data"] || {};
			var method = (_json["type"] == undefined ? XmlHttp.post : _json["type"]).toLowerCase();
			var gzipFlag = params.compressType;
			url = XmlHttp.serializeUrl(url);
			params = XmlHttp.serializeParams(params);
			if (method == XmlHttp.get && params != null) {
				url += "&" + params;
				params = null; //如果是get请求,保证最终会执行send(null)
			}

			var xmlhttp = XmlHttp.createXhr();
			//xmlhttp.open(method, url+ escape(new Date()), async);
			xmlhttp.open(method, url, async);

			if (method == XmlHttp.post) {
				xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
			}

			var execount = 0;
			// 异步
			if (async) {
				// readyState 从 1~4发生4次变化
				xmlhttp.onreadystatechange = function () {
					execount++;
					// 等待readyState状态不再变化之后,再执行回调函数
					//if (execount == XmlHttp.reqCount) {// 火狐下存在问题，修改判断方式
					if (xmlhttp.readyState == XmlHttp.reqCount) {
						XmlHttp.execBack(xmlhttp, callback, error);
					}
				};
				// send方法要在在回调函数之后执行
				xmlhttp.send(params);
			} else {
				// 同步 readyState 直接变为 4
				// 并且 send 方法要在回调函数之前执行
				xmlhttp.send(params);
				XmlHttp.execBack(xmlhttp, callback, error);
			}
		},
		execBack: function execBack(xmlhttp, callback, error) {
			//if (xmlhttp.readyState == 4
			if (xmlhttp.status == 200 || xmlhttp.status == 304 || xmlhttp.readyState == 4) {
				callback(xmlhttp.responseText, xmlhttp.status, xmlhttp);
			} else {
				if (error) {
					error(xmlhttp.responseText, xmlhttp.status, xmlhttp);
				} else {
					var errorMsg = "no error callback function!";
					if (xmlhttp.responseText) {
						errorMsg = xmlhttp.responseText;
					}
					alert(errorMsg);
					// throw errorMsg;
				}
			}
		},
		serializeUrl: function serializeUrl(url) {
			var cache = "cache=" + Math.random();
			if (url.indexOf("?") > 0) {
				url += "&" + cache;
			} else {
				url += "?" + cache;
			}
			return url;
		},
		serializeParams: function serializeParams(params) {
			var ud = undefined;
			if (ud == params || params == null || params == "") {
				return null;
			}
			if (params.constructor == Object) {
				var result = "";
				for (var p in params) {
					result += p + "=" + encodeURIComponent(params[p]) + "&";
				}
				return result.substring(0, result.length - 1);
			}
			return params;
		}
	}; /**
	    * Module : Sparrow ajax
	    * Author : Kvkens(yueming@yonyou.com)
	    * Date	  : 2016-07-28 19:06:36
	    */

	var ajax = XmlHttp.ajax;
	exports.ajax = ajax;

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	/**
	 * Module : compox-util serverEvent
	 * Author : huyue(huyueb@yonyou.com)
	 * Date	  : 2017-01-18 09:34:01
	 */

	var serverEvent = function serverEvent() {
	  return new ServerEvent(this);
	};

	exports.serverEvent = serverEvent;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.setEnable = undefined;

	var _util = __webpack_require__(8);

	var setEnable = function setEnable(enable) {
	    (0, _util.each)(this.elements, function (i, element) {
	        if (element) {
	            element.querySelectorAll('[u-meta]').each(function () {
	                if (this['u-meta']) {
	                    var comp = this['u-meta'];
	                    if (comp.setEnable) comp.setEnable(enable);
	                }
	            });
	        }
	    });
	}; /**
	    * Module : compox-util util
	    * Author : huyue(huyueb@yonyou.com)
	    * Date   : 2017-01-18 09:34:01
	    */

	exports.setEnable = setEnable;

/***/ }
/******/ ]);