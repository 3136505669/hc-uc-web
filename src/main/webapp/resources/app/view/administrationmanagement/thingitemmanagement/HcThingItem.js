/**
 * Description: 事物项目管理  view
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
Ext.define("Hc_Framework.view.hc.HcThingItem", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcthingitem',

    requires: [
        'Hc_Framework.model.HcThingItem',
        'Hc_Framework.view.hc.HcThingItemController',
        'Hc_Framework.view.hc.HcThingItemModel'
    ],

    controller: "hcthingitemcontroller",

    viewModel: {
        type: "hcthingitemmodel"
    },
    title_:'事物项目',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '事物项目', 
			    name: 'thingItemCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcThingItem',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '事物项目', 
                          	dataIndex: 'thingItemCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '立项人', 
                          	dataIndex: 'projtApprByName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'projtApprDate',
              				header: '立项日期',
              				width: 150
                          },
                          {
                				dataIndex: 'startDate',
                				header: '开始日期',
                				width: 150
                          },
                          {
                				dataIndex: 'expecCompletDate',
                				header: '预计完成日期 ',
                				width: 150
                          },
                          {
              				dataIndex: 'projectName',
              				header: '项目名称 ',
              				width: 150
                          },
                          {
            				dataIndex: 'projtPerCharges',
            				header: '负责人 ',
            				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'thingItemCode',
            gridLoadUrl: Hc.basePath + 'hc_thing_item_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_thing_item_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_thing_item_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_thing_item_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_thing_item_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_thing_item_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcThingItem',
            subformActivate:false
        });
        me.callParent();
    }
});