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
Ext.define('Hc_Framework.model.HcSupplierWarehouse', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierwarehouse',

    fields: [
        {name: 'productNo'},
        {name: 'typeSpecification'},
        {name: 'productName'},
        
        {name: 'minimalPackaging'},
        {name: 'costUnitPrice'},
        {name: 'taxRate'},
        
        {name: 'openQuotation'},
        {name: 'recommendedSellingPrice'},
        {name: 'floorPrice'},
        
        {name: 'salesDiscount'},
        {name: 'initialInventory'},
        {name: 'salesStatus'},
        
        {name: 'minimumStock'},
        {name: 'maximumStock'},
        {name: 'brands'},
        
        {name: 'supplierName'},
        {name: 'productCategories'},
        {name: 'warehouseName'},
        
        {name: 'salesCommissions'},
        {name: 'storageLocation'},
        {name: 'batch'},
        
        {name: 'productDescription'},
        {name: 'technicalCharacteristics'},
        {name: 'appliedRange'},
        
        {name: 'remarks'},
    ],

    idProperty: 'productNo'
});