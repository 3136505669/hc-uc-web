/**
 * Description: 项目管理 view
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
Ext.define("Hc_Framework.view.hc.HcProject", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcproject',

    requires: [
        'Hc_Framework.model.HcOrder',
        'Hc_Framework.view.hc.HcProjectController',
        'Hc_Framework.view.hc.HcProjectModel'
    ],

    controller: "hcprojectcontroller",

    viewModel: {
        type: "hcprojectmodel"
    },
    title_:'项目管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '项目编码', 
			    name: 'projtCode'
			},{
			    xtype: 'textfield', 
			    fieldLabel: '项目名称', 
			    name: 'projtName'
			}
            ],

            gridModel: 'Hc_Framework.model.HcProject',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '项目编码', 
                          	dataIndex: 'projtCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '项目名称', 
                          	dataIndex: 'projtName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'applByName',
              				header: '申请人',
              				width: 150
                          },
                          {
                				dataIndex: 'perChargeByName',
                				header: '负责人',
                				width: 150
                          },
                          {
                				dataIndex: 'projtStage',
                				header: '项目阶段 ',
                				width: 150
                          },
                          {
              				dataIndex: 'projtApprDate',
              				header: '立项日期',
              				width: 150
                          },
                          {
                				dataIndex: 'projtSource',
                				header: '项目来源',
                				width: 150
                          },
                          {
              				dataIndex: 'currentState',
              				header: '当前状态',
              				width: 150
                          },
                          {
              				dataIndex: 'custName',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'contactBy',
                				header: '联系人',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'projtCode',
            gridLoadUrl: Hc.basePath + 'hc_project_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_project_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_project_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_project_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_project_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_project_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcProject',
            subformActivate:false
        });
        me.callParent();
    }
});