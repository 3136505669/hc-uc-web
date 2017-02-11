/**
 * Description: 佣金管理子表 view
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
Ext.define('Hc_Framework.model.HcSubCommission', {
    extend: Ext.data.Model,

    alias: 'model.hcsubcommission',

    fields: [
        {name: 'id'},
        {name: 'businessId'},
        {name: 'CustCode'},
        
        {name: 'CustName'},
        {name: 'piNo'},
        {name: 'nameOfaPart'},
        
        {name: 'amount'},
        {name: 'amountUnit'},
        {name: 'qty'},
        
        {name: 'qtyUnit'},
        {name: 'commission'},
        {name: 'remark'},

    ],

    idProperty: 'id'
});