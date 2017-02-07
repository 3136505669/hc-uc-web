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
Ext.define('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierdeliveryofcargofromstorage',

    fields: [
        {name: 'deliveryOfCargoFromTorageNo'},
        {name: 'orderNo'},
        {name: 'personInCharge'},
        
        {name: 'selectWarehouse'},
        {name: 'deliveryOfCargoFromTorageType'},
        {name: 'customerName'},
        
        {name: 'customerNo'},
        {name: 'otherExpenses'},
        {name: 'currency'},
        
        {name: 'invoices'},
        {name: 'whetherPrepaid'},
        {name: 'orderDate'},
        
        {name: 'contractNO'},
        {name: 'typeOfShipping'},
        {name: 'deliverGoodsDate'},
        
        {name: 'freightPaymentParty'},
        {name: 'freightAmount'},
        {name: 'receiptAddress'},
        
        {name: 'consignee'},
        {name: 'receivingPhone'},
        {name: 'remarks'},
        
    ],

    idProperty: 'deliveryOfCargoFromTorageNo'
});