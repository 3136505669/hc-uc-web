/**
 * Description: 用车管理 view
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
Ext.define('Hc_Framework.model.HcUseCar', {
    extend: Ext.data.Model,

    alias: 'model.hcusecar',

    fields: [
        {name: 'useCarCode'},
        {name: 'placeDeparture'},
        {name: 'orNotOneWay'},
        
        {name: 'destination'},
        {name: 'applyReason'},
        {name: 'useCarByCode'},
        
        {name: 'useCarByName'},
        {name: 'useCarByQty'},
        {name: 'applyUseCarDate'},
        
        {name: 'useCarEndDate'},
        {name: 'expectUseFatalism'},
        {name: 'dept'},
        
        {name: 'plateNumber'},
        {name: 'driverCode'},
        {name: 'driverName'},
        
        {name: 'departDate'},
        {name: 'Kilometer'},
        {name: 'departRecordBy'},
        
        {name: 'backDate'},
        {name: 'bacKilometer'},
        {name: 'actualRun'},
        
        {name: 'backRecordBy'},
        {name: 'actualUseFatalism'},
        {name: 'remark'},
   ],

    idProperty: 'useCarCode'
});