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
Ext.define('Hc_Framework.model.SubHcSupplierAccountReceivable', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplieraccountreceivable',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},//产品编号
        {name: 'typeSpecification'},//型号规格
        
        {name: 'productName'},//产品名称
        {name: 'orderQuantity'},//订单数量
        
        {name: 'shippingQty'},//出货数量
        
        {name: 'salePrice'},//销售单价
        {name: 'totalOrder'},//订单合计
        
        {name: 'totalShipment'},//出货合计

    ],

    idProperty: 'productNo'
});