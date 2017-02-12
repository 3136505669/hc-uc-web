/**
 * Description: 询价管理 view
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
Ext.define('Hc_Framework.model.HcInquiry', {
    extend: Ext.data.Model,

    alias: 'model.hcinquiry',

    fields: [
        {name: 'inquCode'},
        {name: 'inquName'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'custTel'},
        {name: 'custAddr'},
        
        {name: 'custContactBy'},
        {name: 'custContactByTel'},
        {name: 'custContactByEmail'},
        
        {name: 'custContactByPhone'},
        {name: 'notifierCode'},
        {name: 'notifierName'},
        
        {name: 'remark'}
    ],

    idProperty: 'inquCode'
});