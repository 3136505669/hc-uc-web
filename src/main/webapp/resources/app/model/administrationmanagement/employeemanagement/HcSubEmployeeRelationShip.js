/**
 * Description: 员工家庭关系管理子表 view
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
Ext.define('Hc_Framework.model.HcSubEmployeeRelationShip', {
    extend: Ext.data.Model,

    alias: 'model.hcsubemployeerelationship',

    fields: [
        {name: 'id'},
        {name: 'membersId'},
        {name: 'name'},
        
        {name: 'relationship'},
        {name: 'workUnits'},
        {name: 'holdOffice'},
        
        {name: 'contactPhone'}

    ],

    idProperty: 'id'
});