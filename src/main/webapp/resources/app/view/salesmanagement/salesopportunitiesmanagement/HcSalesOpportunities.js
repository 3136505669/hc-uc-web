/**
 * Description: 销售机会管理 view
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
Ext.define("Hc_Framework.view.hc.HcSalesOpportunities", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsalesopportunities',

    requires: [
        'Hc_Framework.model.HcSalesOpportunities',
        'Hc_Framework.view.hc.HcSalesOpportunitiesController',
        'Hc_Framework.view.hc.HcSalesOpportunitiesModel'
    ],

    controller: "hcsalesopportunitiescontroller",

    viewModel: {
        type: "hcsalesopportunitiesmodel"
    },
    title_:'销售机会管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '销售机会单编码', 
			    name: 'salesOpportCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSalesOpportunities',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '销售机会单编码', 
                          	dataIndex: 'salesOpportCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '销售机会', 
                          	dataIndex: 'salesOpport', 
                          	width: 250
                          },
                          {
              				dataIndex: 'opportSource',
              				header: '机会来源',
              				width: 150
                          },
                          {
                				dataIndex: 'salesName',
                				header: '销售员名称',
                				width: 150
                          },
                          {
                				dataIndex: 'compName',
                				header: '公司名称 ',
                				width: 150
                          },
                          {
              				dataIndex: 'compContactBy',
              				header: '公司联系人',
              				width: 150
                          },
                          {
                				dataIndex: 'currentState',
                				header: '当前状态',
                				width: 150
                          },
                          {
              				dataIndex: 'expectSum',
              				header: '预计金额',
              				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'salesOpportCode',
            gridLoadUrl: Hc.basePath + 'hc_sales_opportunities_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_sales_opportunities_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_sales_opportunities_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_sales_opportunities_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_sales_opportunities_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_sales_opportunities_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSalesOpportunities',
            subformActivate:false
        });
        me.callParent();
    }
});