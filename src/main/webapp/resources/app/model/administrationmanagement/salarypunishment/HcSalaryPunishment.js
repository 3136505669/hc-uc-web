/**
 * Description: 薪资异动管理 view
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
Ext.define('Hc_Framework.model.HcSalaryPunishment', {
    extend: Ext.data.Model,

    alias: 'model.hcsalarypunishment',

    fields: [
        {name: 'salaryPunishCode'},
        {name: 'employeeCode'},
        {name: 'employeeName'},
        
        {name: 'drawBy'},
        {name: 'position'},
        {name: 'checkDate'},
        
        {name: 'applyDate'},
        {name: 'serviDate'},
        {name: 'noticeMatters'},
        
        {name: 'originalSalary'},
        {name: 'adjustRate'},
        {name: 'adjustAmount'},
        
        {name: 'adjustedAmount'},
        {name: 'desc'},
        {name: 'remark'},
   ],

    idProperty: 'salaryPunishCode'
});