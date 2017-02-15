/**
 * Description: 办公用品管理 view
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
Ext.define('Hc_Framework.model.HcOfficeSupplies', {
    extend: Ext.data.Model,

    alias: 'model.hcofficesupplies',

    fields: [
        {name: 'offSupplCode'},
        {name: 'applyBy'},
        {name: 'applyDate'},
        
        {name: 'applyForBy'},
        {name: 'contactBy'},
        {name: 'contactTel'},
        
        {name: 'category'},
        {name: 'currency'},
        {name: 'examineandapproveBy'},
        
        {name: 'remark'}
    ],

    idProperty: 'offSupplCode'
});