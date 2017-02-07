/**
 * Description: 销售计划 view
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
Ext.define('Hc_Framework.model.HcSupplierMarketingPlan', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliermarketingplan',

    fields: [
        {name: 'marketingplanNo'},//销售计划编码
        {name: 'planDept'},//计划部门
        {name: 'planYM'},//计划年月
        
        {name: 'recordDate'},//登记日期
        {name: 'taskQuantity'},//任 务 量
        {name: 'taskAmount'},//任务金额
        
        {name: 'schemer'},//计划人
        {name: 'contentOfPlan'},//计划内容
        {name: 'auditLeadership'},//审核领导
    ],

    idProperty: 'marketingplanNo'
});