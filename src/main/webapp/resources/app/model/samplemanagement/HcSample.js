/**
 * Description: 样品管理 view
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
Ext.define('Hc_Framework.model.HcSample', {
    extend: Ext.data.Model,

    alias: 'model.hcsample',

    fields: [
        {name: 'sampleCode'},
        {name: 'perLiableCode'},
        {name: 'perLiableName'},
        
        {name: 'warehouseCode'},
        {name: 'warehouseName'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'takDelivAddr'},
        {name: 'contactBy'},
        
        {name: 'contactTel'},
        {name: 'registerDate'},
        {name: 'sampleCurrency'},
        
        {name: 'transportMode'},
        {name: 'delivDate'},
        {name: 'freight'},
        
        {name: 'insurance'},
        {name: 'adHocRequest'},
        {name: 'remark'}
    ],

    idProperty: 'sampleCode'
});