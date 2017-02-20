'use strict';

var _createApp = require('compox/src/createApp');

var _adjustMetaFunc = require('./adjustMetaFunc');

var _dataTable = require('./dataTable');

var _comp = require('./comp');

var _validate = require('./validate');

var _cache = require('./cache');

var _iwebCore = require('./iwebCore');

var _ajax = require('./ajax');

var _serverEvent = require('./serverEvent');

var _util = require('./util');

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