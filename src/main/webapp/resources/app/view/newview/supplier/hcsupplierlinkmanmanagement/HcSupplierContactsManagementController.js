/**
 * Description: 供应商管理 view
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

Ext.define('Hc_Framework.view.hc.HcSupplierContactsManagementController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliercontactsmanagementcontroller',
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
		
		
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:this.view.grid.store.getAt(rowIndex),
	    		me_:this
	    	}).show();
		}
		this.onBtnCancelClick();
    }
	
});