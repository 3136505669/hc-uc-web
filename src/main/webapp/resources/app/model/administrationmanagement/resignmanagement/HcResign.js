/**
 * Description: 辞职管理 view
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
Ext.define('Hc_Framework.model.HcResign', {
    extend: Ext.data.Model,

    alias: 'model.hcresign',

    fields: [
        {name: 'resignCode'},
        {name: 'resignByCode'},
        {name: 'resignByName'},
        
        {name: 'resignType'},
        {name: 'perReasons'},
        {name: 'drawByCode'},
        
        {name: 'drawByName'},
        {name: 'resignDate'},
        {name: 'resignReason'},
        
        {name: 'remark'},
   ],

    idProperty: 'resignCode'
});