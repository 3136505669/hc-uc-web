/**
 * Description: 员工管理 view
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
Ext.define('Hc_Framework.model.HcEmployee', {
    extend: Ext.data.Model,

    alias: 'model.hcemployee',

    fields: [
        {name: 'employeeCode'},
        {name: 'employeeName'},
        {name: 'locationDept'},
        
        {name: 'position'},
        {name: 'entryDate'},
        {name: 'dateOfBirth'},
        
        {name: 'sex'},
        {name: 'politicalStatus'},
        {name: 'nation'},
        
        {name: 'height'},
        {name: 'idCardNo'},
        {name: 'specialty'},
        
        {name: 'placeOfResidence'},
        {name: 'presentResidence'},
        {name: 'imageLog'},
        
        {name: 'nativePlace'},
        {name: 'maritalStatus'},
        {name: 'contactPhone'},
        
        {name: 'graduateSchool'},
        {name: 'atDate'},
        {name: 'professional'},
        
        {name: 'lengthSschool'},
        {name: 'degree'},
        {name: 'degreePosition'},
        
        {name: 'orNotTurnover'},
        {name: 'turnoverDate'},
        {name: 'foreignLanLevel'},
        
        {name: 'computerLevel'},
        {name: 'emergencyBy'},
        {name: 'emergencyTel'},
        
        {name: 'emergencyAddress'},
        {name: 'membersId'},
        {name: 'experienceId'},
        
        {name: 'posiSituation'},
        {name: 'insuredSituation'},
        {name: 'contractSignSituat'},
        
        {name: 'remark'},
   ],

    idProperty: 'employeeCode'
});