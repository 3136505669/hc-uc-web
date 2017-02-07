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
Ext.define('Hc_Framework.model.HcSupplierReturnGoods', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierreturngoods',

    fields: [
        {name: 'returnGoodsNo'},//退货编号
        {name: 'realRetreatAmount'},//实退金额
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编号
        {name: 'returnGoodsDate'},//退货日期
     
        {name: 'currency'},//币　　值

        {name: 'salesPerson'},//销售员
        {name: 'localDepartment'},//所在部门

        
    ],

    idProperty: 'invoiceNo'
});