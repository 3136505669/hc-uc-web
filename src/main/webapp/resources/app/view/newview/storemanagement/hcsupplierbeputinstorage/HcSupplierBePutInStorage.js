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
Ext.define("Hc_Framework.view.hc.HcSupplierBePutInStorage", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierbeputinstorage',

    requires: [
        'Hc_Framework.model.HcSupplierBePutInStorage',
        'Hc_Framework.view.hc.HcSupplierBePutInStorageController',
        'Hc_Framework.view.hc.HcSupplierBePutInStorageModel'
    ],

    controller: "hcsupplierbeputinstoragecontroller",

    viewModel: {
        type: "hcsupplierbeputinstoragemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '入库编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '入库编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '供 应 商名称', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '入库类别',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '登记者',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '入库日期 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '入库状态',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '采购日期',
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
            subWinTableName:'Hc_Framework.view.hc.HcSupplierBePutInStorageProduct',
            subformActivate:false
        });
        me.callParent();
    }
});