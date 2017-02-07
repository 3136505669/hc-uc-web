/**
 * Description: 退货应付管理 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierReturnGoods", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierreturngoods',

    requires: [
        'Hc_Framework.model.HcSupplierReturnGoods',
        'Hc_Framework.view.hc.HcSupplierReturnGoodsController',
        'Hc_Framework.view.hc.HcSupplierReturnGoodsModel'
    ],

    controller: "hcsupplierreturngoodscontroller",

    viewModel: {
        type: "hcsupplierreturngoodsmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '退货编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '退货编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '应退金额',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '实退金额 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '退货日期',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
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
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierReturnGoods',
            subformActivate:false
        });
        me.callParent();
    }
});