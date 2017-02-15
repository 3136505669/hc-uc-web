/**
 * Description: 佣金管理 view
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
Ext.define('Hc_Framework.model.HcCommission', {
    extend: Ext.data.Model,

    alias: 'model.hccommission',

    fields: [
        {name: 'commiApplyCode'},
        {name: 'applyEmployCode'},
        {name: 'applyEmployName'},
        
        {name: 'locationDept'},
        {name: 'applyDate'},
        {name: 'businessId'},
        
        {name: 'commApplyReason'},
        {name: 'commCollectByContent'},
        {name: 'commPaymentMode'},
        
        {name: 'paymentBank'},
        {name: 'commPaymentDate'},
        {name: 'commPaymentedDate'},
        
        {name: 'remark'}
   ],

    idProperty: 'commiApplyCode'
});