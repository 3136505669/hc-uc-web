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
Ext.define('Hc_Framework.model.HcSupplierInvoice', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierinvoice',

    fields: [
        {name: 'invoiceNo'},//发票编号
        {name: 'orderNo'},//订单编号
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编号
        {name: 'paidInAmount'},//实收金额
        {name: 'otherExpenses'},//其它费用
        
        {name: 'freightAmount'},//运费金额
        {name: 'theTargetDateOfDispatch'},//目标起运日
        {name: 'theActualSateOfDispatch'},//实际起运日
        
        {name: 'expectedCollectionAmount'},//预计收款日期
        {name: 'paymentMethod'},//付款方式
        {name: 'currency'},//币　　值
        
        {name: 'invoices'},//发票
        {name: 'makeOutAnInvoiceAmount'},//开票金额
        {name: 'makeOutAnInvoiceDate'},//开票日期
        
        {name: 'ticketReceiptNo'},//票据号
        {name: 'salesPerson'},//销售员
        {name: 'localDepartment'},//所在部门
        
        {name: 'collectionSituation'},//收款情况
        
    ],

    idProperty: 'invoiceNo'
});