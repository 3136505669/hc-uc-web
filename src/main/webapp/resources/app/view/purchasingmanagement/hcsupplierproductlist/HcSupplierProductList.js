/**
 * Description: 产品列表view
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
Ext.define("Hc_Framework.view.hc.HcSupplierProductList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierproductlist',

    requires: [
        'Hc_Framework.model.HcSupplierProductList',
        'Hc_Framework.view.hc.HcSupplierProductListController',
        'Hc_Framework.view.hc.HcSupplierProductListModel'
    ],

    controller: "hcsupplierproductlistcontroller",

    viewModel: {
        type: "hcsupplierproductlistmodel"
    },
    title_:'产品列表',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '产品编号', 
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
                				header: '产品规格',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '当前库存 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '可供数量',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '在途数量',
                				width: 150
                          }  ,
                          {
              				dataIndex: 'purchaseDate',
              				header: '公开报价',
              				width: 150
                        },
                        {
            				dataIndex: 'purchaseDate',
            				header: '建议售价',
            				width: 150
                      },
                      {
          				dataIndex: 'purchaseDate',
          				header: '最低限价',
          				width: 150
                    }   ,
                      {
          				dataIndex: 'purchaseDate',
          				header: '仓库名称',
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
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierProductList',
            subformActivate:false
        });
        me.callParent();
    }
});