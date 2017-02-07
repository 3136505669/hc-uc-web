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
Ext.define('Hc_Framework.model.HcSupplierContactsManagementList', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliercontactsmanagementlist',

    fields: [
        {name: 'contactsNo'},
        {name: 'contactsName'},
        
        {name: 'sex'},
        {name: 'job'},
        
        {name: 'contactsTel'},
        {name: 'email'},
        {name: 'department'},
        {name: 'dateOfBirth'},
        {name: 'graduateSchool'},
        {name: 'highestDegree'},
        
        {name: 'placeOfOrigin'},
        {name: 'companyName'},
        {name: 'createUser'},
        {name: 'localDepartment'},
        {name: 'whetherToShare'},
        {name: 'companyTel'},
        
        
        {name: 'companyFax'},
        {name: 'projectRole'},
        {name: 'mobilePhone'},
        {name: 'mailingAddress'},
        {name: 'companyAddr'},
        
        {name: 'loginDate'},
        {name: 'modifyUser'},
        {name: 'modifyDate'},
        {name: 'hobbiesAndInterests'},
        {name: 'impressionEvaluation'},
        {name: 'currentPolicy'},
        
        {name: 'describee'},
        {name: 'companyNo'}
        
    ],

    idProperty: 'contactsNo'
});