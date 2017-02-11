/**
 * Description: 内部签呈管理 view
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
Ext.define('Hc_Framework.model.HcInsidePetition', {
    extend: Ext.data.Model,

    alias: 'model.hcinsidepetition',

    fields: [
        {name: 'insiPetiCode'},
        {name: 'applyEmployCode'},
        {name: 'applyEmployName'},
        
        {name: 'locationDept'},
        {name: 'applyDate'},
        {name: 'dense'},
        
        {name: 'urgenTimeLimit'},
        {name: 'fileName'},
        {name: 'fileSend'},
        
        {name: 'postTo'},
        {name: 'forwardTo'},
        {name: 'ccTo'},
        
        {name: 'circulatTo'},
        {name: 'emailTo'},
        {name: 'content'},
        
        {name: 'remark'}

   ],

    idProperty: 'insiPetiCode'
});