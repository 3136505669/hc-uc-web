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
Ext.define("Hc_Framework.view.hc.HcSupplierInquiry", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierinquiry',

    requires: [
        'Hc_Framework.model.HcSupplierInquiryManagementList',
        'Hc_Framework.view.hc.HcSupplierInquiryController',
        'Hc_Framework.view.hc.HcSupplierInquiryModel'
    ],

    controller: "hcsupplierinquirycontroller",

    viewModel: {
        type: "hcsupplierinquirymodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '询价编号', 
			    name: 'inquiryNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierInquiryManagementList',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '询价编号', 
                          	dataIndex: 'inquiryNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '联系人', 
                          	dataIndex: 'contactsName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'contactsTel',
              				header: '联系人电话',
              				width: 150
                          },
                          {
                				dataIndex: '负责人',
                				header: 'personInCharge',
                				width: 150
                          },
                          {
                				dataIndex: 'inquiryDate',
                				header: '询价日期',
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
            subWinTableName:'Hc_Framework.view.hc.HcSupplierInquiryProduct',
            subformActivate:false
            
        });
        me.callParent();

    }
});