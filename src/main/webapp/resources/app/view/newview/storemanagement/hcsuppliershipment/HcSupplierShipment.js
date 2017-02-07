/**
 * Description: 发运管理 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierShipment", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliershipment',

    requires: [
        'Hc_Framework.model.HcSupplierShipment',
        'Hc_Framework.view.hc.HcSupplierShipmentController',
        'Hc_Framework.view.hc.HcSupplierShipmentModel'
    ],

    controller: "hcsuppliershipmentcontroller",

    viewModel: {
        type: "hcsuppliershipmentmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '发运编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '发运编号', 
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
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '运输公司',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '运输方式 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '运单号',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '收货人 ',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '目标发运日 ',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '状态 ',
                				width: 150
                            }   ,
                            {
                  				dataIndex: 'purchaseDate',
                  				header: '是否打印 ',
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
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierShipment',
            subformActivate:false
        });
        me.callParent();
    }
});