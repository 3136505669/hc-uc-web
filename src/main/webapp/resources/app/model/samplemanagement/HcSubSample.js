/**
 * Description: 样品管理子表 view
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
Ext.define('Hc_Framework.model.HcSubSample', {
    extend: Ext.data.Model,

    alias: 'model.hcsubsample',

    fields: [
        {name: 'id'},
        {name: 'prodCode'},
        {name: 'prodName'},
        
        {name: 'typeModel'},
        {name: 'prodDesc'},
        {name: 'qty'},
        
        {name: 'unit'},
        {name: 'univalent'},
        {name: 'currency'},
        
        {name: 'remark'}
    ],

    idProperty: 'id'
});