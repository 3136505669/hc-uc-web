/**
 * Description: 供应商管理 view
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
Ext.define('Hc_Framework.model.HcSupplierComeAndGoAccount', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliercomeandgoaccount',

    fields: [
        {name: 'voucherNo'},//凭据编号
        {name: 'voucherMakingPerson'},//制单人
        {name: 'ticketReceiptNo'},//票据号
        
        {name: 'accountOfFinance'},//财务科目
        {name: 'accountOfClass'},//财务类别
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编码
        {name: 'voucherDate'},//凭证日期
        {name: 'currency'},//货　　币
        
        {name: 'exchangeRate'},//汇　　率
        {name: 'voucherSumOfMoney'},//凭证金额
        {name: 'reconciledSumOfMoney'},//已对帐金额
        
        {name: 'beginningBalances'},//期初余额
        {name: 'offsetBalance'},//冲消余额
        {name: 'abstract'},//摘　　要
        
        {name: 'bankOfDeposit'},//开户银行
        {name: 'bankAccount'},//银行帐号
        {name: 'remarks'},//备　　注
        
        {name: 'examinationAndApprovalPerson'},//审 批 人
        {name: 'examinationAndApprovalDate'},//审批日期
        {name: 'examinationAndApprovalObjection'},//审 批 意见
        
    ],

    idProperty: 'voucherNo'
});