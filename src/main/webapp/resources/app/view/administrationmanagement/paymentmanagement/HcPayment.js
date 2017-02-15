/**
 * Description: 付款管理  view
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
Ext.define("Hc_Framework.view.hc.HcPayment", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcpayment',

    requires: [
        'Hc_Framework.model.HcPayment',
        'Hc_Framework.view.hc.HcPaymentController',
        'Hc_Framework.view.hc.HcPaymentModel'
    ],

    controller: "hcpaymentcontroller",

    viewModel: {
        type: "hcpaymentmodel"
    },
    title_:'付款管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '付款编号', 
			    name: 'paymentCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcPayment',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '付款编号', 
                          	dataIndex: 'paymentCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '付款日期', 
                          	dataIndex: 'paymentDate', 
                          	width: 250
                          },
                          {
              				dataIndex: 'applyBy',
              				header: '申 请 人',
              				width: 150
                          },
                          {
                				dataIndex: 'applyDept',
                				header: '申请部门',
                				width: 150
                          },
                          {
                				dataIndex: 'ReceivOrganiz',
                				header: '收款单位 ',
                				width: 150
                          },
                          {
              				dataIndex: 'ReceivAccount',
              				header: '收款帐户',
              				width: 150
                          },
                          {
                				dataIndex: 'bankAccount',
                				header: '开户银行',
                				width: 150
                         },
                         {
                  				dataIndex: 'paymentMode',
                  				header: '付款方式',
                  				width: 150
                         },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                     }             
            ],
            allendflag:false,
            gridPrimaryKey: 'paymentCode',
            gridLoadUrl: Hc.basePath + 'hc_payment_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_payment_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_payment_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_payment_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_payment_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_payment_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcPayment',
            subformActivate:false
        });
        me.callParent();
    }
});