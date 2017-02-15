/**
 * Description: 任务管理  view
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
Ext.define("Hc_Framework.view.hc.HcTask", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hctask',

    requires: [
        'Hc_Framework.model.HcTask',
        'Hc_Framework.view.hc.HcTaskController',
        'Hc_Framework.view.hc.HcTaskModel'
    ],

    controller: "hctaskcontroller",

    viewModel: {
        type: "hctaskmodel"
    },
    title_:'任务管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '任务编码', 
			    name: 'taskCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcTask',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '任务编码', 
                          	dataIndex: 'taskCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '下达任务', 
                          	dataIndex: 'issuedTaskDate', 
                          	width: 250
                          },
                          {
              				dataIndex: 'finishTaskDate',
              				header: '完成日期',
              				width: 150
                          },
                          {
                				dataIndex: 'taskSubject',
                				header: '任务主题',
                				width: 150
                          },
                          {
                				dataIndex: 'taskRespBy',
                				header: '负责人 ',
                				width: 150
                          },
                          {
              				dataIndex: 'taskInvolvBy',
              				header: '参与人 ',
              				width: 150
                          },
                          {
            				dataIndex: 'associatedBy',
            				header: '关联着 ',
            				width: 150
                          },
                          {
              				dataIndex: 'taskFinSituation',
              				header: '完成情况 ',
              				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'taskCode',
            gridLoadUrl: Hc.basePath + 'hc_task_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_task_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_task_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_task_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_task_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_task_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcTask',
            subformActivate:false
        });
        me.callParent();
    }
});