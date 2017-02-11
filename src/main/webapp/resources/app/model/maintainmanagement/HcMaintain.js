/**
 * Description:维修管理 view
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
Ext.define('Hc_Framework.model.HcMaintain', {
    extend: Ext.data.Model,

    alias: 'model.hcmaintain',

    fields: [
        {name: 'maintainCode'},
        {name: 'salesmanCode'},
        {name: 'salesmanName'},
        
        {name: 'maintainByCode'},
        {name: 'maintainByName'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'custAddr'},
        {name: 'custTel'},
        
        {name: 'custFax'},
        {name: 'custContactBy'},
        {name: 'custEmail'},
        
        {name: 'maintainType'},
        {name: 'puttOutFactCode'},
        {name: 'puttOutFactName'},
        
        {name: 'prodCode'},
        {name: 'prodName'},
        {name: 'airframeNo'},
        
        {name: 'processMode'},
        {name: 'freightPayment'},
        {name: 'guarantee'},
        
        {name: 'freight'},
        {name: 'transportMode'},
        {name: 'qty'},
        
        {name: 'unit'},
        {name: 'costPayment'},
        {name: 'consigneeDate'},
        
        {name: 'faultPhenomenon'},
        {name: 'faultReason'},
        {name: 'maintainRecord'},
        
        {name: 'maintainCost'},
        {name: 'remark'}
   ],

    idProperty: 'maintainCode'
});