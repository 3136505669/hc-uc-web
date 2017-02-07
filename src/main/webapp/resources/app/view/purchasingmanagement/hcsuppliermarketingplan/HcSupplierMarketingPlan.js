/**
 * Description:销售计划 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierMarketingPlan", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliermarketingplan',

    requires: [
        'Hc_Framework.model.HcSupplierMarketingPlan',
        'Hc_Framework.view.hc.HcSupplierMarketingPlanController',
        'Hc_Framework.view.hc.HcSupplierMarketingPlanModel'
    ],

    controller: "hcsuppliermarketingplancontroller",

    viewModel: {
        type: "hcsuppliermarketingplanmodel"
    },
    title_:'销售计划',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '计划编码', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '计划编码', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '计划部门', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '年月',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '预计销售量',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '预计销售额(元)',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '计划员工',
              				width: 150
                          },
                          {
                				dataIndex: 'storageStatus',
                				header: '计划日期',
                				width: 150
                            },
                            {
                  				dataIndex: 'storageStatus',
                  				header: '审核领导',
                  				width: 150
                              },
                              {
                    				dataIndex: 'storageStatus',
                    				header: '当前状态',
                    				width: 150
                                }       
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierMarketingPlan',
            subformActivate:false
        });
        me.callParent();
    }
});