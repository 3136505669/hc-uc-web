/**
 * Description: 项目管理 view
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
Ext.define('Hc_Framework.model.HcProject', {
    extend: Ext.data.Model,

    alias: 'model.hcproject',

    fields: [
        {name: 'projtCode'},
        {name: 'projtName'},
        {name: 'applByCode'},
        
        {name: 'applByName'},
        {name: 'perChargeByCode'},
        {name: 'perChargeByName'},
        
        {name: 'projtSum'},
        {name: 'projtStage'},
        {name: 'projtApprDate'},
        
        {name: 'projtSource'},
        {name: 'sucRateEstimate'},
        {name: 'currentState'},
        
        {name: 'endReason'},
        {name: 'custCode'},
        {name: 'custName'},
        
        {name: 'contactBy'},
        {name: 'contactTel'},
        {name: 'introduction'},
        
        {name: 'rootMeasure'},
        {name: 'coopRootMeasure'},
        {name: 'result'},
        
        {name: 'summary'},
        {name: 'remark'}
    ],

    idProperty: 'projtCode'
});