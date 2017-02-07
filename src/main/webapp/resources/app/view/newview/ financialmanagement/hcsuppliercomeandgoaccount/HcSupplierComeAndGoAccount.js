/**
 * Description: 往来账目 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierComeAndGoAccount", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliercomeandgoaccount',

    requires: [
        'Hc_Framework.model.HcSupplierComeAndGoAccount',
        'Hc_Framework.view.hc.HcSupplierComeAndGoAccountController',
        'Hc_Framework.view.hc.HcSupplierComeAndGoAccountModel'
    ],

    controller: "hcsuppliercomeandgoaccountcontroller",

    viewModel: {
        type: "hcsuppliercomeandgoaccountmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '凭证编号', 
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
                          	header: '凭证编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '凭证日期', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '票据号',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '公司名称',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '财务科目 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '财务类别',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '货币',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '凭证金额',
              				width: 150
                           },
                           {
               				dataIndex: 'purchaseDate',
               				header: '已对帐金额',
               				width: 150
                            },
                            {
                   				dataIndex: 'purchaseDate',
                   				header: '登记部门',
                   				width: 150
                             },
                             {
                    				dataIndex: 'purchaseDate',
                    				header: '登记人',
                    				width: 150
                              },
                              {
                     				dataIndex: 'purchaseDate',
                     				header: '状态',
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
            subWinTableName:'Hc_Framework.view.hc.HcSupplierComeAndGoAccountNewEdit',
            subformActivate:false
        });
        me.callParent();
    }
});