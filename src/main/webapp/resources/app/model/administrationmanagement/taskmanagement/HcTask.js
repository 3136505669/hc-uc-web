/**
 * Description: 任务管理 view
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
Ext.define('Hc_Framework.model.HcTask', {
    extend: Ext.data.Model,

    alias: 'model.hctask',

    fields: [
        {name: 'taskCode'},
        {name: 'issuedTaskDate'},
        {name: 'finishTaskDate'},
        
        {name: 'taskSubject'},
        {name: 'taskContent'},
        {name: 'taskRespBy'},
        
        {name: 'taskInvolvBy'},
        {name: 'associatedBy'},
        {name: 'issuedTaskBy'},
        
        {name: 'taskFinSituation'},
        {name: 'remart'}
   ],

    idProperty: 'taskCode'
});