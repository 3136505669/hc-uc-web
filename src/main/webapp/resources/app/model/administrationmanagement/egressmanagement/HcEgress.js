/**
 * Description: 外出管理 view
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
Ext.define('Hc_Framework.model.HcEgress', {
    extend: Ext.data.Model,

    alias: 'model.hcegress',

    fields: [
        {name: 'egressCode'},
        {name: 'egressEmployId'},
        {name: 'egressEmployName'},
        
        {name: 'drawBy'},
        {name: 'applyDate'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'custAddr'},
        {name: 'custContactBy'},
        
        {name: 'custContactTel'},
        {name: 'businessProcess'},
        {name: 'egressDate'},
        
        {name: 'reservaReturnDate'},
        {name: 'practReturnDate'},
        {name: 'businProcStatus'},
        
        {name: 'examApprSitu'},
        {name: 'firstExamAppruser'},
        {name: 'secondExamAppruser'},
        
        {name: 'thirdExamAppruser'},
        {name: 'examApprOpinion'}
   ],

    idProperty: 'egressCode'
});