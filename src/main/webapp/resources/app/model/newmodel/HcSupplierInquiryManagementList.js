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
Ext.define('Hc_Framework.model.HcSupplierInquiryManagementList', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierinquirymanagementlist',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
        {name: 'inquiryNo'},
        {name: 'personInCharge'},
        
        {name: 'supplierNo'},
        {name: 'supplierName'},
        
        {name: 'contactsName'},
        {name: 'contactsTel'},
        {name: 'contactsFax'},
        {name: 'typeOfShipping'},
        {name: 'inquiryDate'},
        {name: 'inquiryCurrency'},
        
        {name: 'subject'},
        {name: 'remarks'}
    ],

    idProperty: 'inquiryNo'
});