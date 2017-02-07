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
Ext.define('Hc_Framework.model.HcSupplierManagementList', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliermanagementlist',

    fields: [
        {name: 'createUser'},
        {name: 'companyNo'},
        {name: 'companyName'},
        
        {name: 'companyAddr'},
        {name: 'companyTel'},
        
        {name: 'companyFax'},
        {name: 'email'},
        {name: 'companyNet'},
        {name: 'companyZipCode'},
        {name: 'country'},
        {name: 'companyZipCode'},
        
        {name: 'province'},
        {name: 'city'},
        {name: 'legalRepresentative'},
        {name: 'organizationForm'},
        {name: 'supplierTypes'},
        {name: 'registeredCapital'},
        
        {name: 'businessLicense'},
        {name: 'industryTypes'},
        {name: 'useCurrency'},
        {name: 'linkMan'},
        {name: 'supplierLevel'},
        
        {name: 'yearEarning'},
        {name: 'docPurchasing'},
        {name: 'linkManTel'},
        {name: 'bankOfDeposit'},
        {name: 'bankAccount'},
        {name: 'dateOfEstablishment'},
        
        {name: 'paymentMethod'},
        {name: 'valueCategory'},
        {name: 'whetherToShare'},
        {name: 'modifyUser'},
        
        {name: 'loginDate'},
        {name: 'localDepartment'},
        {name: 'modifyDate'},
        {name: 'companyScale'},
        {name: 'abilityToSell'},
        
        {name: 'qualityControl'},
        {name: 'companyProfile'},
        {name: 'categoryOfTheProduct'},
        {name: 'cooperationOpportunities'},
        {name: 'describee'},
        
        {name: 'provincesAndCities'},
        
        {name: 'accountPayable', text: '应付款', type: 'int'},
        {name: 'overduePayment', text: '逾期款', type: 'int'}
    ],

    idProperty: 'companyNo'
});