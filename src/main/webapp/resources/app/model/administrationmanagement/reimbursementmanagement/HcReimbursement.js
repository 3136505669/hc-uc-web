/**
 * Description: 报销管理 view
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
Ext.define('Hc_Framework.model.HcReimbursement', {
    extend: Ext.data.Model,

    alias: 'model.hcreimbursement',

    fields: [
        {name: 'reimburCode'},
        {name: 'drawByCode'},
        {name: 'drawByName'},
        
        {name: 'exacct'},
        {name: 'reimburByCode'},
        {name: 'reimburBy'},
        
        {name: 'reimburDept'},
        {name: 'reimburDate'},
        {name: 'reimburAmount'},
        
        {name: 'ApplicaDesc'},
        {name: 'examApprovSituat'},
        {name: 'firstExamAppruser'},
        
        {name: 'secondExamAppruser'},
        {name: 'thirdExamAppruser'},
        {name: 'examApprOpinion'},
        
        {name: 'remark'}

   ],

    idProperty: 'reimburCode'
});