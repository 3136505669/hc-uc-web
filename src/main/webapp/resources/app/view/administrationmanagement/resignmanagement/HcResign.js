/**
 * Description: 辞职管理  view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcResign", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcresign',

    requires: [
        'Hc_Framework.model.HcResign',
        'Hc_Framework.view.hc.HcResignController',
        'Hc_Framework.view.hc.HcResignModel'
    ],

    controller: "hcresigncontroller",

    viewModel: {
        type: "hcresignmodel"
    },
    title_:'辞职管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '辞职单编码', 
			    name: 'resignCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcResign',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '辞职单', 
                          	dataIndex: 'resignCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '辞职人', 
                          	dataIndex: 'resignByName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'resignType',
              				header: '辞职类别',
              				width: 150
                          },
                          {
                				dataIndex: 'drawByName',
                				header: '提请人',
                				width: 150
                          },
                          {
                				dataIndex: 'resignDate',
                				header: '辞职时间 ',
                				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                     }             
            ],
            allendflag:false,
            gridPrimaryKey: 'resignCode',
            gridLoadUrl: Hc.basePath + 'hc_resign_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_resign_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_resign_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_resign_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_resign_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_resign_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcResign',
            subformActivate:false
        });
        me.callParent();
    }
});