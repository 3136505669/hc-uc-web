/**
 * Description: 请假管理 view
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
Ext.define('Hc_Framework.model.HcLeave', {
    extend: Ext.data.Model,

    alias: 'model.hcleave',

    fields: [
        {name: 'leaveCode'},
        {name: 'leaveByCode'},
        {name: 'leaveByName'},
        
        {name: 'leaveType'},
        {name: 'drawByCode'},
        {name: 'drawByName'},
        
        {name: 'leaveStartDate'},
        {name: 'leaveEndDate'},
        {name: 'totalLeaveDate'},
        
        {name: 'leaveReason'},
        {name: 'remark'}
   ],

    idProperty: 'leaveCode'
});