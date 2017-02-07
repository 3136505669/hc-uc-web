/**
 * Description: 应收款管理 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierAccountReceivable", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplieraccountreceivable',

    requires: [
        'Hc_Framework.model.HcSupplierAccountReceivable',
        'Hc_Framework.view.hc.HcSupplierAccountReceivableController',
        'Hc_Framework.view.hc.HcSupplierAccountReceivableModel'
    ],

    controller: "hcsupplieraccountreceivablecontroller",

    viewModel: {
        type: "hcsupplieraccountreceivablemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '应收款编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '应收款编号', 
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
                				header: '订单金额',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '出货金额 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '欠款金额',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '目标发货日',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '实际发货日 ',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '预计收款日期 ',
                				width: 150
                            },
                            {
                  				dataIndex: 'purchaseDate',
                  				header: '部门 ',
                  				width: 150
                            },
                            {
                  				dataIndex: 'purchaseDate',
                  				header: '当前状态 ',
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
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierAccountReceivable',
            subformActivate:false
        });
        me.callParent();
    }
});