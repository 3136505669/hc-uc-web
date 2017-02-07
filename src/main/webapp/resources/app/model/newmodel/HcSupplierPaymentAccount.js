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
Ext.define('Hc_Framework.model.HcSupplierPaymentAccount', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierpaymentaccount',

    fields: [
        {name: 'paymentAccountNo'},//付款编号
        {name: 'purchaseNo'},//采购编号
        {name: 'supplierNo'},//供应商编号
        
        {name: 'supplierName'},//供应商名称
        {name: 'paymentMethod'},//付款方式
        
        {name: 'purchaseAmount'},//采购金额
        {name: 'actualPaymentAmount'},//实付金额
        {name: 'purchaseDate'},//采购日期
        
        {name: 'estimatedDateOfPayment'},//预计付款日期
        {name: 'currency'},//币值
        {name: 'ticketReceiptNo'},//票据号
        
        {name: 'invoiceAmount'},//发票金额
        {name: 'billingDate'},//开票日期
        {name: 'buyer'},//采 购 员
        
        {name: 'paymentSituation'},//付款情况
    ],

    idProperty: 'paymentAccountNo'
});