/**
 * Description: 样品管理 view
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
Ext.define("Hc_Framework.view.hc.HcSample", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsample',

    requires: [
        'Hc_Framework.model.HcSample',
        'Hc_Framework.view.hc.HcSampleController',
        'Hc_Framework.view.hc.HcSampleModel'
    ],

    controller: "hcsamplecontroller",

    viewModel: {
        type: "hcsamplemodel"
    },
    title_:'样品管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '样品单编码', 
			    name: 'sampleCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSample',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '样品单编码', 
                          	dataIndex: 'sampleCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '客户名称', 
                          	dataIndex: 'custName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'perLiableName',
              				header: '责任人',
              				width: 150
                          },
                          {
                				dataIndex: 'warehouseName',
                				header: '仓库',
                				width: 150
                          },
                          {
                				dataIndex: 'contactBy',
                				header: '联系人 ',
                				width: 150
                          },
                          {
              				dataIndex: 'sampleCurrency',
              				header: '样品货币',
              				width: 150
                          },
                          {
                				dataIndex: 'delivDate',
                				header: '发货日期',
                				width: 150
                          },
                          {
              				dataIndex: 'freight',
              				header: '运费',
              				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'sampleCode',
            gridLoadUrl: Hc.basePath + 'hc_sample_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_sample_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_sample_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_sample_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_sample_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_sample_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSample',
            subformActivate:false
        });
        me.callParent();
    }
});