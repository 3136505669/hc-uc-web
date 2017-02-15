/**
 * Description: 日程管理 view
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
Ext.define('Hc_Framework.model.HcAgendaForDay', {
    extend: Ext.data.Model,

    alias: 'model.hcagendaforday',

    fields: [
        {name: 'agendaForDayCode'},
        {name: 'agendaForDayType'},
        {name: 'agendaForDayName'},
        
        {name: 'agendaForDayEmploy'},
        {name: 'startDate'},
        {name: 'endDate'},
        
        {name: 'orNotRemind'},
        {name: 'remindDate'},
        {name: 'locationDept'},
        
        {name: 'orNotShare'},
        {name: 'agendaForDayDescribe'},
        {name: 'remark'},
   ],

    idProperty: 'agendaForDayCode'
});