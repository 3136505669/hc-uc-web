/**
 * Description: 客户联系人 view
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
Ext.define('Hc_Framework.model.HcSupplierCustomerContact', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliercustomercontact',

    fields: [
        {name: 'customerContactNo'},//客户联系人编码
        {name: 'customerContactName'},//客户联系人名称
        {name: 'customerContactAddres'},//客户联系人地址
        
        {name: 'customerContactTel'},//客户联系人电话
        {name: 'position'},//职　　位
        {name: 'sex'},//性　　别
        
        {name: 'email'},//电子邮件
        {name: 'department'},//部　　门
        {name: 'dateOfBirth'},//出生日期
        
        {name: 'graduateSchool'},//毕业学校
        {name: 'highestEducation'},//最高学历
        {name: 'placeOfOrigin'},//籍　　贯
        
        {name: 'projectRole'},//项目角色
        {name: 'qqNo'},//QQ号码
        {name: 'mobileTelephone'},//移动电话
        
        {name: 'country'},//国　　家
        {name: 'province'},//省份
        {name: 'city'},//城市
        
        {name: 'createUser'},//创建用户
        {name: 'createDate'},//创建日期
        {name: 'whetherToShare'},//是否共享
        
        {name: 'localDepartment'},//所在部门
        {name: 'modifyUser'},//修改用户 
        {name: 'modifyDate'},//修改日期
        
        {name: 'hobbiesAndInterests'},//兴趣爱好
        {name: 'impressionEvaluation'},//印象评价
        {name: ' currentPolicy'},//往来策略
        
        {name: 'remarks'},//备　　注
    ],

    idProperty: 'customerContactNo'
});