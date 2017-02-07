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
Ext.define("Hc_Framework.view.hc.HcSupplierDeliveryOfCargoFromTorage", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierdeliveryofcargofromstorage',

    requires: [
        'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
        'Hc_Framework.view.hc.HcSupplierDeliveryOfCargoFromTorageController',
        'Hc_Framework.view.hc.HcSupplierDeliveryOfCargoFromTorageModel'
    ],

    controller: "hcsupplierdeliveryofcargofromstoragecontroller",

    viewModel: {
        type: "hcsupplierdeliveryofcargofromstoragemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '出库编码', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '出库编码', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '订单编号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '出库类型',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '客户名称',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '付款方式 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '责任人',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '审批状态 ',
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
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierDeliveryOfCargoFromTorage',
            subformActivate:false
        });
        me.callParent();
    }
});