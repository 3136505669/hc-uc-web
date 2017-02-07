/**
 * Description: 资金管理 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierOpenAnAccountID", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplieropenanaccountID',

    requires: [
        'Hc_Framework.model.HcSupplierOpenAnAccountID',
        'Hc_Framework.view.hc.HcSupplierOpenAnAccountIDController',
        'Hc_Framework.view.hc.HcSupplierOpenAnAccountIDModel'
    ],

    controller: "hcsupplieropenanaccountIDcontroller",

    viewModel: {
        type: "hcsupplieropenanaccountIDmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '开户编码', 
			    name: 'storageNo'
			},{
			    xtype: 'textfield', 
			    fieldLabel: '开户名称', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '开户编码', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '开户名称', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '开户银行',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '银行帐号',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '所属部门 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '余额',
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
            subWinTableName:'Hc_Framework.view.hc.HcSupplierOpenAnAccountIDNewEdit',
            subformActivate:false
        });
        me.callParent();
    }
});