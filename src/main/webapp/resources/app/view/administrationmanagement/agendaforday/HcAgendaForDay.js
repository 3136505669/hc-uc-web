/**
 * Description: 日程管理 view
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
Ext.define("Hc_Framework.view.hc.HcAgendaForDay", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcagendaforday',

    requires: [
        'Hc_Framework.model.HcAgendaForDay',
        'Hc_Framework.view.hc.HcAgendaForDayController',
        'Hc_Framework.view.hc.HcAgendaForDayModel'
    ],

    controller: "hcagendafordaycontroller",

    viewModel: {
        type: "hcagendafordaymodel"
    },
    title_:'日程管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '日程編碼', 
			    name: 'agendaForDayCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcAgendaForDay',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '日程編碼', 
                          	dataIndex: 'agendaForDayCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '日程类型', 
                          	dataIndex: 'agendaForDayType', 
                          	width: 250
                          },
                          {
              				dataIndex: 'agendaForDayName',
              				header: '日程名称',
              				width: 150
                          },
                          {
                				dataIndex: 'agendaForDayEmploy',
                				header: '员工',
                				width: 150
                          },
                          {
                				dataIndex: 'startDate',
                				header: '开始时间 ',
                				width: 150
                          },
                          {
              				dataIndex: 'endDate',
              				header: '结束时间',
              				width: 150
                          },
                          {
                				dataIndex: 'locationDept',
                				header: '所在部门',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'agendaForDayCode',
            gridLoadUrl: Hc.basePath + 'hc_agenda_for_day_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_agenda_for_day_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_agenda_for_day_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_agenda_for_day_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_agenda_for_day_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_agenda_for_day_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcAgendaForDay',
            subformActivate:false
        });
        me.callParent();
    }
});