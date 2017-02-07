/**
 * Description: 客户联系人 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierCustomerContact", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliercustomercontact',

    requires: [
        'Hc_Framework.model.HcSupplierCustomerContact',
        'Hc_Framework.view.hc.HcSupplierCustomerContactController',
        'Hc_Framework.view.hc.HcSupplierCustomerContactModel'
    ],

    controller: "hcsuppliercustomercontactcontroller",

    viewModel: {
        type: "hcsuppliercustomercontactmodel"
    },
    title_:'客户联系人',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '联系人编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '联系人编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '联系人姓名', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '固定电话',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '移动电话',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '公司名称 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '电子邮件',
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
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierCustomerContact',
            subformActivate:false
        });
        me.callParent();
    }
});