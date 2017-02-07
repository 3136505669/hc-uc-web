/**
 * Description: 供应商管理 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierManagement", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliermanagement',

    requires: [
        'Hc_Framework.model.HcSupplierManagementList',
        'Hc_Framework.view.hc.HcSupplierManagementController',
        'Hc_Framework.view.hc.HcSupplierManagementModel'
    ],

    controller: "hcsuppliermanagementcontroller",

    viewModel: {
        type: "hcsuppliermanagementmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '供应商编号', 
			    name: 'companyNo'
			
			},
            {
                xtype: 'textfield', 
                fieldLabel: '供应商名称', 
                name: 'companyName'
            
            }
            ],

            gridModel: 'Hc_Framework.model.HcSupplierManagementList',
            gridColumns: [
                          {
                          	header: '供应商编号', 
                          	dataIndex: 'companyNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '供应商名称', 
                          	dataIndex: 'companyName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'provincesAndCities',
              				header: '供应商地址',
              				width: 150
                          },
                          {
                				dataIndex: 'companyTel',
                				header: '联系电话',
                				width: 150
                          },
                          {
                				dataIndex: 'docPurchasing',
                				header: '跟单采购',
                				width: 150
                          },
                          {
                				dataIndex: 'accountPayable',
                				header: '应付款',
                				width: 150
                          },
                          {
                				dataIndex: 'overduePayment',
                				header: '逾期款',
                				width: '20%'
                          }
            ],
            allendflag:false,
            gridPrimaryKey: 'supplierNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_management_list/list.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_management_list/do_export.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierManagementNewEdit'
        });
        me.callParent();

    }
});