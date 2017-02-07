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
Ext.define("Hc_Framework.view.hc.HcSupplierWarehouse", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierwarehouse',

    requires: [
        'Hc_Framework.model.HcSupplierWarehouses',
        'Hc_Framework.view.hc.HcSupplierWarehouseController',
        'Hc_Framework.view.hc.HcSupplierWarehouseModel'
    ],

    controller: "hcsupplierwarehousecontroller",

    viewModel: {
        type: "hcsupplierwarehousemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '产品编号', 
			    name: 'storageNo'
			},{
			    xtype: 'textfield', 
			    fieldLabel: '型号规格', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '产品编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '型号规格', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '产品名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '批次',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '当前库存 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '最少存量',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '可供数量',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '在途数量',
              				width: 150
                           },
                           {
               				dataIndex: 'purchaseDate',
               				header: '成本单价',
               				width: 150
                            },
                            {
                   				dataIndex: 'purchaseDate',
                   				header: '建议售价',
                   				width: 150
                             },
                             {
                    				dataIndex: 'purchaseDate',
                    				header: '产品类别',
                    				width: 150
                              },
                              {
                     				dataIndex: 'purchaseDate',
                     				header: '仓库名称',
                     				width: 150
                               },
                               {
                      				dataIndex: 'purchaseDate',
                      				header: '存放位置',
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
            subWinTableName:'Hc_Framework.view.hc.HcSupplierWarehouseNewEdit',
            subformActivate:false
        });
        me.callParent();
    }
});