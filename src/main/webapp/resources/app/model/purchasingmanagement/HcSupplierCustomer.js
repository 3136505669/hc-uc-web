/**
 * Description: 客户管理 view
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
Ext.define('Hc_Framework.model.HcSupplierCustomer', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliercustomer',

    fields: [
        {name: 'customerNo'},//客户编码
        {name: 'customerName'},//客户名称
        {name: 'customerAddres'},//客户地址
        
        {name: 'customerTel'},//客户电话
        {name: 'customerFax'},//客户传真
        
        {name: 'customerWebSite'},//客户网址
        {name: 'email'},//电子邮件
        
        {name: 'zipCode'},//邮　　编
        {name: 'country'},//国　　家
        {name: 'province'},//省份
        {name: 'city'},//城市
        
        {name: 'organizationForm'},//组织形式
        {name: 'createUser'},//创建用户
        {name: 'createDate'},//创建日期

        {name: 'modifyUser'},//修改用户 
        {name: 'modifyDate'},//修改日期
        
        {name: 'businessLicence'},//营业执照
        {name: 'industryType'},//行业类型
        {name: 'customerLevel'},//客户级别
        
        {name: 'customerSource'},//客户来源
        {name: 'customerBank'},//客户银行
        {name: 'bankAccount'},//银行帐号
        
        {name: 'contacts'},//联系人  
        {name: 'customerProfile'},//客户简介
        {name: ' lineOfCredit'},//信用额度
        
        {name: 'shareSale'},//共享销售
        {name: 'purchasingCycle'},//采购周期
        {name: 'followUpPeriod'},//跟进周期
        {name: 'firstPurchase'},//首次购买
        {name: 'recentlyPurchased'},//最近购买
        
        {name: 'downPayment'},//首次付款
        {name: 'recentPayment'},//最近付款
        {name: 'firstFollowUp'},//首次跟进
        {name: 'recentFollowUp'},//最近跟进
        
        {name: 'useCurrency'},//使用货币
        {name: 'taxNumber'},//纳税编号
        {name: 'paymentMethod'},//付款方式
        {name: 'merchandiser'},//业务跟单
        
        {name: 'localDepartment'},//所在部门
        {name: 'remarks'},//备注

    ],

    idProperty: 'customerNo'
});