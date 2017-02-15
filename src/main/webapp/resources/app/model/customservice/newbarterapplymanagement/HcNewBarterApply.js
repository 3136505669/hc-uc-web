/**
 * Description:新品换货管理 view
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
Ext.define('Hc_Framework.model.HcNewBarterApply', {
    extend: Ext.data.Model,

    alias: 'model.hcnewbarterapply',

    fields: [
        {name: 'newBarApplyCode'},
        {name: 'applyEmployeeCode'},
        {name: 'applyEmployeeName'},
        
        {name: 'locationDept'},
        {name: 'applyDate'},
        {name: 'fromCompCode'},
        
        {name: 'fromCompName'},
        {name: 'toCompCode'},
        {name: 'toCompName'},
        
        {name: 'fromCompTel'},
        {name: 'fromCompFax'},
        {name: 'fromCompAddr'},
        
        {name: 'fromCompZip'},
        {name: 'fromCompContastBy'},
        {name: 'toCompTel'},
        
        {name: 'toCompFax'},
        {name: 'toCompZip'},
        {name: 'toCompContastBy'},
        
        {name: 'piOrderNo'},
        {name: 'consigneeDate'},
        {name: 'salesDate'},
        
        {name: 'checkoutDate'},
        {name: 'PhenomenonDesc'},
        {name: 'conclusion'},
        
        {name: 'techOpinion'},
        {name: 'managerOpinion'},
        {name: 'chargeOpinion'},
        
        {name: 'orNotGetBad'},
        {name: 'opHandleOpinion'},
        {name: 'remark'}
   ],

    idProperty: 'newBarApplyCode'
});