/**
 * Description: 事物项目管理 view
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
Ext.define('Hc_Framework.model.HcThingItem', {
    extend: Ext.data.Model,

    alias: 'model.hcthingitem',

    fields: [
        {name: 'thingItemCode'},
        {name: 'projtApprByCode'},
        {name: 'projtApprByName'},
        
        {name: 'projtApprDate'},
        {name: 'startDate'},
        {name: 'expecCompletDate'},
        
        {name: 'projectCode'},
        {name: 'projectName'},
        {name: 'urgencyLevel'},
        
        {name: 'projtPerCharges'},
        {name: 'partakeBys'},
        {name: 'assistBys'},
        
        {name: 'projtSynopsis'},
        {name: 'remark'}
   ],

    idProperty: 'thingItemCode'
});