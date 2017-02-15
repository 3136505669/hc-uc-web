/**
 * Description: 新品换货管理子表 view
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
Ext.define('Hc_Framework.model.HcSubNewBarterApply', {
    extend: Ext.data.Model,

    alias: 'model.hcsubnewbarterapply',

    fields: [
        {name: 'id'},
        {name: 'model'},
        {name: 'serialNo'},
        
        {name: 'requiBartReason'},
        {name: 'jre'},
        {name: 'buyDate'},
        
        {name: 'remark'}

    ],

    idProperty: 'id'
});