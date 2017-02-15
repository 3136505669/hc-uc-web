/**
 * Description: 出差管理 view
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
Ext.define("Hc_Framework.view.hc.HcEvection", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcevection',

    requires: [
        'Hc_Framework.model.HcEvection',
        'Hc_Framework.view.hc.HcEvectionController',
        'Hc_Framework.view.hc.HcEvectionModel'
    ],

    controller: "hcevectioncontroller",

    viewModel: {
        type: "hcevectionmodel"
    },
    title_:'出差管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '出差单编码', 
			    name: 'evectionCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcEvection',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '出差单编码', 
                          	dataIndex: 'evectionCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '出差员工', 
                          	dataIndex: 'evectionEmployName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'drawBy',
              				header: '提请人',
              				width: 150
                          },
                          {
                				dataIndex: 'applyDate',
                				header: '申请日期',
                				width: 150
                          },
                          {
                				dataIndex: 'visitCompName',
                				header: '访问公司 ',
                				width: 150
                          },
                          {
              				dataIndex: 'evectionDate',
              				header: '出差日期',
              				width: 150
                          },
                          {
                				dataIndex: 'contactName',
                				header: '联系人',
                				width: 150
                          },
                          {
              				dataIndex: 'visitReason',
              				header: '访问主要事由',
              				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'evectionCode',
            gridLoadUrl: Hc.basePath + 'hc_evection_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_evection_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_evection_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_evection_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_evection_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_evection_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcEvection',
            subformActivate:false
        });
        me.callParent();
    }
});