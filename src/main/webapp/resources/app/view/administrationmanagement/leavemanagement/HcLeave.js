/**
 * Description: 请假管理  view
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
Ext.define("Hc_Framework.view.hc.HcLeave", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcleave',

    requires: [
        'Hc_Framework.model.HcLeave',
        'Hc_Framework.view.hc.HcLeaveController',
        'Hc_Framework.view.hc.HcLeaveModel'
    ],

    controller: "hcleavecontroller",

    viewModel: {
        type: "hcleavemodel"
    },
    title_:'请假管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '请假单编码', 
			    name: 'leaveCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcLeave',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '请假单', 
                          	dataIndex: 'leaveCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '请假人', 
                          	dataIndex: 'leaveByName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'leaveType',
              				header: '请假类别',
              				width: 150
                          },
                          {
                				dataIndex: 'drawByName',
                				header: '提请人',
                				width: 150
                          },
                          {
                				dataIndex: 'leaveStartDate',
                				header: '开始时间 ',
                				width: 150
                          },
                          {
              				dataIndex: 'leaveEndDate',
              				header: '结束时间',
              				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                     }             
            ],
            allendflag:false,
            gridPrimaryKey: 'leaveCode',
            gridLoadUrl: Hc.basePath + 'hc_leave_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_leave_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_leave_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_leave_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_leave_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_leave_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcLeave',
            subformActivate:false
        });
        me.callParent();
    }
});