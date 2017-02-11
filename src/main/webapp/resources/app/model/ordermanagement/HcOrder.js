/**
 * Description: 订单管理 view
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
Ext.define('Hc_Framework.model.HcOrder', {
    extend: Ext.data.Model,

    alias: 'model.hcorder',

    fields: [
        {name: 'orderCode'},
        {name: 'perLiabCode'},
        {name: 'perLiabName'},
        
        {name: 'warehouseCode'},
        {name: 'warehouseName'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'takDelivAddr'},
        {name: 'takDelivBy'},
        
        {name: 'contactTel'},
        {name: 'orNotPrepay'},
        {name: 'otherCharges'},
        
        {name: 'invoice'},
        {name: 'transportMode'},
        {name: 'contractCode'},
        
        {name: 'paymentMode'},
        {name: 'paymentDayQty'},
        {name: 'custDelivTime'},
        
        {name: 'freightBurden'},
        {name: 'freightSum'},
        {name: 'currency'},
        
        {name: 'orderDate'},
        {name: 'bank'},
        {name: 'exaApprByCode'},
        
        {name: 'exaApprByName'},
        {name: 'remark'}
    ],

    idProperty: 'orderCode'
});