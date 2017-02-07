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
Ext.define("Hc_Framework.view.hc.HcSupplierPurchase", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierpurchase',

    requires: [
        'Hc_Framework.model.HcSupplierPurchase',
        'Hc_Framework.view.hc.HcSupplierPurchaseController',
        'Hc_Framework.view.hc.HcSupplierPurchaseModel'
    ],

    controller: "hcsupplierpurchasecontroller",

    viewModel: {
        type: "hcsupplierpurchasemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '采购编号', 
			    name: 'purchaseNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '采购编号', 
                          	dataIndex: 'purchaseNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '是否采购过', 
                          	dataIndex: 'whetherToPurchase', 
                          	width: 250
                          },
                          {
              				dataIndex: 'supplierName',
              				header: '供 应 商名称',
              				width: 150
                          },
                          {
                				dataIndex: 'salesNo',
                				header: '销售编号',
                				width: 150
                          },
                          {
                				dataIndex: 'personInCharge',
                				header: '负 责 人',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseStates',
              				header: '采购单状态',
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
            subWinTableName:'Hc_Framework.view.hc.HcSupplierPurchaseProduct',
            subformActivate:false
            
        });
        me.callParent();

    }
});