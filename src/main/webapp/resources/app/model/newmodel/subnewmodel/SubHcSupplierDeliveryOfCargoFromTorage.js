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
Ext.define('Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplierdeliveryofcargofromstorage',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},
        {name: 'typeSpecification'},
        
        {name: 'productName'},
        {name: 'preOutQuantity'},
        
        {name: 'actualQuantity'},
        
        {name: 'currentInventory'},
        {name: 'canSupplyStock'},
        
        {name: 'remarks'},
        {name: 'WarehouseName'},

    ],

    idProperty: 'productNo'
});