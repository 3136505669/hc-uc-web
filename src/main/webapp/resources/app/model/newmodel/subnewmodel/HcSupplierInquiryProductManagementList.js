/**
 * Description: 供应商管理 view
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
Ext.define('Hc_Framework.model.HcSupplierInquiryProductManagementList', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierinquiryproductmanagementlist',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'ID',type: 'int',},
        {name: 'inquiryNo'},
        {name: 'productModel'},
        
        {name: 'chineseName'},
        {name: 'inquiredQTY'},
        
        {name: 'englishName'},
        {name: 'quotedPrice',
        	type: 'float',
        	convert:function formatFloat(val){
        	  return Number(Number(val).toFixed(6));
        	}
        },
        {name: 'dateOfArrival'},

        {name: 'inquiredQTY_quotedPrice$',
        	type: 'float',
        	convert:function formatFloat(val){
        	  return Number(Number(val).toFixed(6));
        	}
        },
        {name: 'inquiredQTY_unit'},
        
        {name: 'unit'},
        {name: 'remark'}
    ],

   // idProperty: 'inquiryNo'
});