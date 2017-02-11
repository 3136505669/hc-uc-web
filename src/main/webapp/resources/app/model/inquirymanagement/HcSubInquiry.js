/**
 * Description: 询价管理子表 view
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
Ext.define('Hc_Framework.model.HcSubInquiry', {
    extend: Ext.data.Model,

    alias: 'model.hcsubinquiry',

    fields: [
        {name: 'id'},
        {name: 'prodCode'},
        {name: 'prodName'},
        
        {name: 'typeModel'},
        {name: 'qty'},
        {name: 'unit'},
        
        {name: 'univalent'},
        {name: 'currency'},
        {name: 'manufaCode'},
        
        {name: 'manufaName'},
        {name: 'delivTime'},
        {name: 'remark'},
      
    ],

    idProperty: 'id'
});