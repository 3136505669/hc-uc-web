/**
 * Description: 付款管理 view
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
Ext.define('Hc_Framework.model.HcPayment', {
    extend: Ext.data.Model,

    alias: 'model.hcpayment',

    fields: [
        {name: 'paymentCode'},
        {name: 'paymentDate'},
        {name: 'applyBy'},
        
        {name: 'applyDept'},
        {name: 'receivOrganiz'},
        {name: 'receivAccount'},
        
        {name: 'bankAccount'},
        {name: 'paymentMode'},
        {name: 'amount'},
        
        {name: 'paymentDesc'},
        {name: 'examApprSitu'},
        {name: 'firstExamAppruser'},
        
        {name: 'secondExamAppruser'},
        {name: 'thirdExamAppruser'},
        {name: 'fourthExamAppruser'},
        
        {name: 'examApprOpinion'}

   ],

    idProperty: 'paymentCode'
});