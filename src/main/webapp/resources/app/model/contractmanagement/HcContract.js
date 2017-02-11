/**
 * Description: 合同管理 view
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
Ext.define('Hc_Framework.model.HcContract', {
    extend: Ext.data.Model,

    alias: 'model.hccontract',

    fields: [
        {name: 'contractCode'},
        {name: 'buyCode'},
        {name: 'buyName'},
        
        {name: 'buyAddr'},
        {name: 'buyTel'},
        {name: 'buyFax'},
        
        {name: 'buyContactBy'},
        {name: 'salesCode'},
        {name: 'salesName'},
        
        {name: 'salesAddr'},
        {name: 'salesTel'},
        {name: 'salesFax'},
        
        {name: 'salesContactBy'},
        {name: 'contractContent'},
        {name: 'contractFile'},
        
        {name: 'contractFile1'},
        {name: 'contractFile2'},
        {name: 'contractImage1'},
        
        {name: 'contractImage2'},
        {name: 'contractImage3'},
        {name: 'buyRepreCode'},
        
        {name: 'buyRepreName'},
        {name: 'buySignDate'},
        {name: 'salesRepreCode'},
        
        {name: 'salesRepreName'},
        {name: 'salesSignDate'},
        {name: 'applByCode'},
        
        {name: 'applByName'},
        {name: 'examApprByCode'},
        {name: 'examApprByName'},
        
        {name: 'examApprOpinion'},
        {name: 'FinalJudgeCode'},
        {name: 'FinalJudgeName'},
        
        {name: 'reviewOpinion'},
        {name: 'remark'}
    ],

    idProperty: 'contractCode'
});