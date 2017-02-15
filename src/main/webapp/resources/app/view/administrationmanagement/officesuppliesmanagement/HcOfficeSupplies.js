/**
 * Description: 办公用品管理  view
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
Ext.define("Hc_Framework.view.hc.HcOfficeSupplies", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcofficesupplies',

    requires: [
        'Hc_Framework.model.HcOfficeSupplies',
        'Hc_Framework.view.hc.HcOfficeSuppliesController',
        'Hc_Framework.view.hc.HcOfficeSuppliesModel'
    ],

    controller: "hcofficesuppliescontroller",

    viewModel: {
        type: "hcofficesuppliesmodel"
    },
    title_:'办公用品管理 ',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '办公用品编码', 
			    name: 'offSupplCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcOfficeSupplies',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '办公用品编码', 
                          	dataIndex: 'offSupplCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '申 请 人', 
                          	dataIndex: 'applyBy', 
                          	width: 250
                          },
                          {
              				dataIndex: 'applyForBy',
              				header: '申 领 人',
              				width: 150
                          },
                          {
                				dataIndex: 'category',
                				header: '类　　别',
                				width: 150
                          },
                          {
                				dataIndex: 'applyDate',
                				header: '申请日期 ',
                				width: 150
                          },
                          {
              				dataIndex: 'examineandapproveBy',
              				header: '审 批 人',
              				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'offSupplCode',
            gridLoadUrl: Hc.basePath + 'hc_office_supplies_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_office_supplies_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_office_supplies_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_office_supplies_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_office_supplies_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_office_supplies_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcOfficeSupplies',
            subformActivate:false
        });
        me.callParent();
    }
});