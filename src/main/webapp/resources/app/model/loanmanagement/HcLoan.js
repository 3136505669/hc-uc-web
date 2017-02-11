/**
 * Description: 借款管理 view
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
Ext.define('Hc_Framework.model.HcLoan', {
    extend: Ext.data.Model,

    alias: 'model.hcloan',

    fields: [
        {name: 'loanCode'},
        {name: 'loanTheme'},
        {name: 'loanBy'},
        
        {name: 'loanDate'},
        {name: 'loanAmount'},
        {name: 'loanReason'},
        
        {name: 'expRepayReimburDate'},
        {name: 'drawBy'},
        {name: 'examApprovSituat'},
        
        {name: 'firstExamAppruser'},
        {name: 'secondExamAppruser'},
        {name: 'thirdExamAppruser'},
        
        {name: 'examApprOpinion'}

   ],

    idProperty: 'loanCode'
});