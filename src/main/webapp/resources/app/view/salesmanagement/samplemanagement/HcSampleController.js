/**
 * Description: 样品管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSampleController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsamplecontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSample',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['quoteCode'] = record.data.quoteCode; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});