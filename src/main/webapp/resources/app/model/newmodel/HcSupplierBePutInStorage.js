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
Ext.define('Hc_Framework.model.HcSupplierBePutInStorage', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierbeputinstorage',

    fields: [
        {name: 'storageNo'},
        {name: 'supplierName'},
        {name: 'supplierNo'},
        
        {name: 'storageClass'},
        {name: 'monetaryUnit'},
        {name: 'storageDate'},
        
        {name: 'billNo'},
        {name: 'register'},
        {name: 'remark'},
        
        {name: 'whetherProductInspection'},
        {name: 'qualityInspector'},
        {name: 'eExaminationAndApproval'},
        
        {name: 'storageConfirmation'},
        {name: 'approvalOpinion'},
        {name: 'storageStatus'},
        
    ],

    idProperty: 'storageNo'
});