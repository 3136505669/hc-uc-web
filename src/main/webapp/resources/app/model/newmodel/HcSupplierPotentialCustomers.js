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
Ext.define('Hc_Framework.model.HcSupplierPotentialCustomers', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierpotentialcustomers',

    fields: [
        {name: 'potentialCustomerNo'},//潜在客户编码
        {name: 'potentialCustomerName'},//潜在客户名称
        {name: 'potentialCustomerAddres'},//潜在客户地址
        
        {name: 'potentialCustomerTel'},//潜在客户电话
        {name: 'potentialCustomerFax'},//传真
        {name: 'potentialCustomerWebsite'},//网址
        
        {name: 'email'},//电子邮件
        {name: 'potentialCustomerZipCode'},//邮　　编
        {name: 'country'},//国　　家
        
        {name: 'province'},//省份
        {name: 'city'},//城市
        {name: 'typeOfOrganization'},//组织形式
        
        {name: 'createUser'},//创建用户
        {name: 'businessLicense'},//营业执照
        {name: 'industryType'},//行业类型
        
        {name: 'customerLevel'},//客户级别
        {name: 'customerSource'},//客户来源
        {name: 'customerBank'},//客户银行
        
        {name: 'bankAccount'},//银行帐号
        {name: 'contacts'},//联系人 
        {name: 'position'},//职位
        
        {name: 'officePhone'},//办公电话
        {name: 'mobileTelephone'},//移动电话
        {name: 'contactsEmail'},//邮件地址
        
        {name: 'customerProfile'},//客户简介
        {name: 'shareSale'},//共享销售
        {name: ' lineOfCredit'},//信用额度
        
        {name: 'useCurrency'},//使用货币
        {name: 'purchasingCycle'},//采购周期
        {name: 'followUpPeriod'},//跟进周期
        
        {name: 'taxNumber'},//纳税编号
        {name: 'paymentMethod'},//付款方式
        {name: 'merchandisingBusiness'},//跟单业务
        
        {name: 'localDepartment'},//所在部门
        {name: 'modifyUser'},//修改用户 
        {name: 'modifyDate'},//修改日期
        
        {name: 'billingInformation'},//开票信息
        {name: 'recommendProducts'},//推荐产品
        {name: 'remarks'},//备　　注
    ],

    idProperty: 'potentialCustomerNo'
});