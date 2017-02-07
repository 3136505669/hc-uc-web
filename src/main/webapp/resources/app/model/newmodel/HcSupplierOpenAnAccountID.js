/**
 * Description: 资金管理 view
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
Ext.define('Hc_Framework.model.HcSupplierOpenAnAccountID', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplieropenanaccountID',

    fields: [
        {name: 'openAnAccountID'},//开户编码
        {name: 'accountName'},//开户名称 
        {name: 'bankOfDeposit'},//开户银行
        
        {name: 'bankAccount'},//银行帐号
        {name: 'initialBalance'},//初始余额
        {name: 'totalBalance'},//合计余额
        
        {name: 'recordDate'},//登记日期
        {name: 'subordinateDepartment'},//所属部门
    ],

    idProperty: 'openAnAccountID'
});