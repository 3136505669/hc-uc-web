/**
 * Description: 出差管理 view
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
Ext.define('Hc_Framework.model.HcEvection', {
    extend: Ext.data.Model,

    alias: 'model.hcevection',

    fields: [
        {name: 'evectionCode'},
        {name: 'evectionEmployId'},
        {name: 'evectionEmployName'},
        
        {name: 'drawBy'},
        {name: 'applyDate'},
        {name: 'destination'},
        
        {name: 'evectionDate'},
        {name: 'evectionGoal'},
        {name: 'visitCompName'},
        
        {name: 'visitCompCode'},
        {name: 'contactCode'},
        {name: 'contactName'},
        
        {name: 'contactTel'},
        {name: 'visitReason'},
        {name: 'visitRemark'},
        
        {name: 'trafficCost'},
        {name: 'boardLodCost'},
        {name: 'otherCost'},
        
        {name: 'costRemark'}

    ],

    idProperty: 'evectionCode'
});