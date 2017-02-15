/**
 * Description: 客户投诉管理 view
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
Ext.define('Hc_Framework.model.HcCustomerComplain', {
    extend: Ext.data.Model,

    alias: 'model.hccustomercomplain',

    fields: [
        {name: 'custComplainCode'},
        {name: 'custComplainName'},
        {name: 'complainType'},
        
        {name: 'complainLevel'},
        {name: 'currentState'},
        {name: 'complainDate'},
        
        {name: 'invoiceNo'},
        {name: 'batchNo'},
        {name: 'orderNo'},
        
        {name: 'pactNo'},
        {name: 'prodCode'},
        {name: 'prodModel'},
        
        {name: 'prodName'},
        {name: 'qty'},
        {name: 'unit'},
        
        {name: 'qualityStrd'},
        {name: 'transportStrd'},
        {name: 'supplierCode'},
        
        {name: 'supplierName'},
        {name: 'suppliDelivDate'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'delivDate'},
        {name: 'complainContent'},
        
        {name: 'registerBy'},
        {name: 'registerDate'},
        {name: 'answerForBy'},
        
        {name: 'remark'}

    ],

    idProperty: 'custComplainCode'
});