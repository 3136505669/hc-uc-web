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
Ext.define('Hc_Framework.model.SubHcSupplierRetail', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplierretail',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},
        {name: 'typeSpecification'},
        
        {name: 'productName'},
        {name: 'orderQuantity'},
        
        {name: 'unitPrice'},
        
        {name: 'WarehouseName'},
        {name: 'remarks'},

    ],

    idProperty: 'productNo'
});