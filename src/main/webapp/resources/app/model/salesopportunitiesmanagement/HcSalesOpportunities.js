/**
 * Description: 销售机会管理 view
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
Ext.define('Hc_Framework.model.HcSalesOpportunities', {
    extend: Ext.data.Model,

    alias: 'model.hcsalesopportunities',

    fields: [
        {name: 'salesOpportCode'},
        {name: 'salesOpport'},
        {name: 'salesOpportSch'},
        
        {name: 'opportSource'},
        {name: 'salesCode'},
        {name: 'salesName'},
        
        {name: 'compCode'},
        {name: 'compName'},
        {name: 'compZip'},
        
        {name: 'compAddr'},
        {name: 'compContactBy'},
        {name: 'compTel'},
        
        {name: 'compFax'},
        {name: 'expectSum'},
        {name: 'creatyBy'},
        
        {name: 'endDate'},
        {name: 'SucRateEstimate'},
        {name: 'currentState'},
        
        {name: 'endReason'},
        {name: 'updatedByCode'},
        {name: 'updatedByName'},
        
        {name: 'relatDesc'},
        {name: 'remark'}
       
    ],

    idProperty: 'salesOpportCode'
});