/**
 * Description: 客户管理 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierCustomer", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliercustomer',

    requires: [
        'Hc_Framework.model.HcSupplierCustomer',
        'Hc_Framework.view.hc.HcSupplierCustomerController',
        'Hc_Framework.view.hc.HcSupplierCustomerModel'
    ],

    controller: "hcsuppliercustomercontroller",

    viewModel: {
        type: "hcsuppliercustomermodel"
    },
    title_:'潜在客户',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '客户编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '客户编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '客户名称', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '客户电话',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '客户联系人',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '移动电话 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '客户级别',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '跟单业务',
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
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierCustomer',
            subformActivate:false
        });
        me.callParent();
    }
});