/**
 * Description: 商品编码申请管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月21日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.HcGoodsNoApply', {
    extend: Ext.data.Model,

    alias: 'model.hcgoodsnoapply',

    fields: [
        {name: 'goodsNoApplCode'},
        {name: 'applyEmployCode'},
        {name: 'applyEmployName'},
        
        {name: 'locationDept'},
        {name: 'applyDate'},
        {name: 'goodsCode'},
        
        {name: 'goodsName'},
        {name: 'theLargeAssortment'},
        {name: 'specModel'},
        
        {name: 'specParameters'},
        {name: 'colour'},
        {name: 'sizeStructure'},
        
        {name: 'venderCode'},
        {name: 'venderName'},
        {name: 'imageLog'},
        
        {name: 'remark'},
   ],

    idProperty: 'goodsNoApplCode'
});