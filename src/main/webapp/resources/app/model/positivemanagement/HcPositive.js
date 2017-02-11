/**
 * Description: 转正申请管理 view
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
Ext.define('Hc_Framework.model.HcPositive', {
    extend: Ext.data.Model,

    alias: 'model.hcpositive',

    fields: [
        {name: 'positApplyCode'},
        {name: 'PositiEmploCode'},
        {name: 'PositiEmploName'},
        
        {name: 'drawBy'},
        {name: 'position'},
        {name: 'toGangDate'},
        
        {name: 'applyDate'},
        {name: 'shouPosiDate'},
        {name: 'posiApplyContents'},
        
        {name: 'positiveState'},
        {name: 'remark'},
   ],

    idProperty: 'positApplyCode'
});