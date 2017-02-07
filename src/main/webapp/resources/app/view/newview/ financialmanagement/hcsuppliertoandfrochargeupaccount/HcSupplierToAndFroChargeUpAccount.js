/**
 * Description: 资金日记账 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccount", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliertoandfrochargeupaccount',

    requires: [
        'Hc_Framework.model.HcSupplierToAndFroChargeUpAccount',
        'Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountController',
        'Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountModel'
    ],

    controller: "hcsuppliertoandfrochargeupaccountcontroller",

    viewModel: {
        type: "hcsuppliertoandfrochargeupaccountmodel"
    },
    title_:'资金日记账',
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
			    fieldLabel: '票据号', 
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
                          	header: '票据号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '制单人',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '摘要',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '公司名称 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '贷方/借方',
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
                   				header: '科目名称',
                   				width: 150
                             },
                             {
                    				dataIndex: 'purchaseDate',
                    				header: '科目明细',
                    				width: 150
                              },
                              {
                     				dataIndex: 'purchaseDate',
                     				header: '开户银行',
                     				width: 150
                               },
                               {
                    				dataIndex: 'purchaseDate',
                    				header: '银行帐号',
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
            subWinTableName:'Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountNewEdit',
            subformActivate:false
        });
        me.callParent();
    }
});