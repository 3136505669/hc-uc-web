/**
 * Description: 盖章管理 view
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
Ext.define('Hc_Framework.model.HcSeal', {
    extend: Ext.data.Model,

    alias: 'model.hcseal',

    fields: [
        {name: 'sealCode'},
        {name: 'borrowDept'},
        {name: 'handleByCode'},
        
        {name: 'handleByName'},
        {name: 'borrowIndiaByCode'},
        {name: 'borrowIndiaByName'},
        
        {name: 'loanDate'},
        {name: 'useTerm'},
        {name: 'borrowIndiaType'},
        
        {name: 'imporContentDesc'},
        {name: 'useScope'},
        {name: 'indiaPromise'},
        
        {name: 'indiaContent'},
        {name: 'indiaWitnBy'},
        {name: 'remark'},

   ],

    idProperty: 'sealCode'
});