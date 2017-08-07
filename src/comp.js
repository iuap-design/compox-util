/**
 * Module : compox-util comp
 * Author : liuyk(liuyk@yonyou.com)
 * Date   : 2017-01-18 09:34:01
 */
import {
    compMgr
} from 'compox/src/compMgr';
import {
    each,
    isArray
} from 'tinper-sparrow/src/util';
import {
    getOffset,
    getScroll
} from 'tinper-sparrow/src/dom';

/**
 * 渲染制定的u-meta的kero控件
 */
const createComp = function(ele, viewModel) {
    var options = JSON.parse(ele.getAttribute('u-meta'));
    if (options && options['type']) {
        var comp = compMgr.createDataAdapter({
            el: ele,
            options: options,
            model: viewModel,
            app: this
        });
        ele['u-meta'] = comp;
        this.comps.push(comp)
    }
    return comp;
}

const getComp = function(compId) {
    var comps = this.getComps();
    for (var i = 0; i < comps.length; i++) {
        var comp = comps[i];
        if (comp.id == compId) {
            return comp;
        }
    }
    return null;
}

const getCompsByDataTable = function(dataTableId, element) {
    var comps = this.getComps(element),
        targetComps = []
    for (var i = 0; i < comps.length; i++) {
        if ((comps[i].dataModel && comps[i].dataModel['id'] == dataTableId) || (comps[i].dataTable && comps[i].dataTable['id'] == dataTableId))
            targetComps.push(comps[i])
    }
    return targetComps;
}

/**
 * 根据类型获取控件
 * @param {String} type
 * @param {object} element
 */
const getCompsByType = function(type, element) {
    var comps = this.getComps(element),
        targetComps = [];
    for (var i = 0; i < comps.length; i++) {
        var comp = comps[i];
        if (comp && comp.type == type)
            targetComps.push(comp)
    }
    return targetComps;
}

/**
 * 获取某区域中的所有控件
 * @param {object} element
 */
const getComps = function(element) {
    if (element) {
        return this.getCompsByElement(element);
    } else {
        return this.comps;
    }
}

/**
 * 获取某区域中的所有控件
 * @param {object} element
 */
const getCompsByElement = function(element) {
    var elements = element ? element : this.elements;
    var returnComps = [];
    if (typeof elements == 'string') {
        elements = document.querySelectorAll(elements);
    }
    if (!isArray(elements) && !(elements instanceof NodeList))
        elements = [elements];
    each(elements, function(i, element) {
        if (element) {
            element.querySelectorAll('[u-meta]').forEach(function(ele) {
                if (ele['u-meta']) {
                    var comp = ele['u-meta'];
                    if (comp)
                        returnComps.push(comp);
                }
            })
        }

    });
    return returnComps;
}

/**
 * 将comp显示到顶端（此方法只支持body上存在滚动条的情况）
 * @param {object} comp对象
 */
const showComp = function(comp) {
    var ele = comp.element,
        off = getOffset(ele),
        scroll = getScroll(ele),
        top = off.top - scroll.top,
        bodyHeight = document.body.clientHeight,
        nowTop = document.body.scrollTop;
    if (top > bodyHeight || top < 0) {
        document.body.scrollTop = nowTop + top;
    }
}

export {
    createComp,
    getComp,
    getCompsByDataTable,
    getCompsByType,
    getComps,
    getCompsByElement,
    showComp
}
