/**
 * Description: 合同管理子表 view
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
Ext.define('Hc_Framework.model.HcSubContract', {
    extend: Ext.data.Model,

    alias: 'model.hcsubcontract',

    fields: [
        {name: 'id'},
        {name: 'prodCode'},
        {name: 'prodName'},
        
        {name: 'typeModel'},
        {name: 'prodDesc'},
        {name: 'custType'},
        
        {name: 'qty'},
        {name: 'unit'},
        {name: 'univalent'},
        
        {name: 'currency'},
        {name: 'remark'}
 
    ],

    idProperty: 'id'
});