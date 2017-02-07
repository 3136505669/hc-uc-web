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
Ext.define('Hc_Framework.model.SubHcSupplierReturnGoods', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplierreturngoods',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},//产品编号
        {name: 'typeSpecification'},//型号规格
        
        {name: 'productName'},//产品名称
        {name: 'quantity'},//数量
        
        {name: 'unitPrice'},//单价
    ],

    idProperty: 'productNo'
});