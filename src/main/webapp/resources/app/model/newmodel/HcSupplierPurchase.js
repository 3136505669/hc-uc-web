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
Ext.define('Hc_Framework.model.HcSupplierPurchase', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierpurchase',

    fields: [
        {name: 'purchaseNo'},
        {name: 'personInCharge'},
        {name: 'salesNo'},
        
        {name: 'selectWarehouse'},
        {name: 'supplierNo'},
        {name: 'invoices'},
        
        {name: 'supplierName'},
        {name: 'whetherProductInspection'},
        {name: 'contactsName'},
        
        {name: 'contactsTel'},
        {name: 'typeOfShipping'},
        {name: 'deliveryPeriod'},
        
        {name: 'paymentMethod'},
        {name: 'placeOfDelivery'},
        {name: 'qualityAssurance'},
        
        {name: 'purchaseDate'},
        {name: 'purchaseCurrency'},
        {name: 'billingInformation'},
        
        {name: 'remarks'},
        {name: 'approvalStatus'},
        {name: 'secondApprovalOfUsers'},
        
        {name: 'firstApprovalOfUsers'},
        {name: 'approvalOpinion'},
        {name: 'purchaseStates'},
        
        {name: 'whetherToPurchase'},
    ],

    idProperty: 'purchaseNo'
});