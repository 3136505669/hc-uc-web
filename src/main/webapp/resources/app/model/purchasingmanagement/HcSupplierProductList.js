/**
 * Description: 产品列表 view
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
Ext.define('Hc_Framework.model.HcSupplierProductList', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierproductlist',

    fields: [
        {name: 'productNo'},//产品编号 
        {name: 'typeSpecification'},//型号规格
        {name: 'productName'},//产品名称
        
        {name: 'productClass'},//产品类别
        {name: 'openingInventory'},//期初库存
        {name: 'currentInventory'},//当前库存
        
        {name: 'minimumStock'},//最少存量
        {name: 'maximumStock'},//最多存量
        {name: 'salesCommissions'},//销售提成
        
        {name: 'publicOffer'},//公开报价
        {name: 'recommendedSellingPrice'},//建议售价
        {name: 'lowestPriceLimits'},//最低限价
        
        {name: 'discountOnSale'},//销售折扣
        {name: 'salesStatus'},//销售状态
        {name: 'brands'},//品　　牌
        
        {name: 'warehouseName'},//仓库名称
        {name: 'modificationDate'},//修改日期
        {name: 'personInCharge'},//负 责 人
        
        {name: 'initialSalesDate'},//首次销售日期
        {name: 'firstSalePrice'},//首次销售单价
        {name: 'recentSalesDate'},//最近销售日期
        
        {name: 'recentSalesPrice'},//最近销售单价
        {name: 'productDescription'},//产品描述
        {name: 'technicalCharacteristics'},//技术特性
        
        {name: 'appliedRange'},//应用范围
        {name: 'remarks'},//备　　注
    ],

    idProperty: 'productNo'
});