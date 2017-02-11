/**
 * Description: 员工经历管理子表 view
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
Ext.define('Hc_Framework.model.HcSubEmployeeExperience', {
    extend: Ext.data.Model,

    alias: 'model.hcsubemployeeexperience',

    fields: [
        {name: 'id'},
        {name: 'experienceId'},
        {name: 'startDate'},
        
        {name: 'endDate'},
        {name: 'workUnitsDept'},
        {name: 'holdOffice'},
        
        {name: 'contactPhone'}
    ],

    idProperty: 'id'
});