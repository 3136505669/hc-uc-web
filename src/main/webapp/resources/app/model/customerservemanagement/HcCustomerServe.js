/**
 * Description: 客户服务管理 view
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
Ext.define('Hc_Framework.model.HcCustomerServe', {
    extend: Ext.data.Model,

    alias: 'model.hccustomerserve',

    fields: [
        {name: 'custServeCode'},
        {name: 'custServeTheme'},
        {name: 'serveType'},
        
        {name: 'serveLevel'},
        {name: 'currentState'},
        {name: 'serveDate'},
        
        {name: 'orderNo'},
        {name: 'pactNo'},
        {name: 'endDate'},
        
        {name: 'prodCode'},
        {name: 'prodModel'},
        {name: 'prodName'},
        
        {name: 'qty'},
        {name: 'unit'},
        {name: 'locationDept'},
        
        {name: 'deptCode'},
        {name: 'technicalMatters'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'businessBy'},
        {name: 'serveContent'},
        
        {name: 'registerBy'},
        {name: 'registerDate'},
        {name: 'answerForBy'},
        
        {name: 'remark'}
    ],

    idProperty: 'custServeCode'
});