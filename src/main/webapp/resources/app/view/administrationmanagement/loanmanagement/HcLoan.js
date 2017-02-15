/**
 * Description: 借款管理  view
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
Ext.define("Hc_Framework.view.hc.HcLoan", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcloan',

    requires: [
        'Hc_Framework.model.HcLoan',
        'Hc_Framework.view.hc.HcLoanController',
        'Hc_Framework.view.hc.HcLoanModel'
    ],

    controller: "hcloancontroller",

    viewModel: {
        type: "hcloanmodel"
    },
    title_:'借款管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '借款编号', 
			    name: 'loanCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcLoan',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '借款编号', 
                          	dataIndex: 'loanCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '借款主题', 
                          	dataIndex: 'loanTheme', 
                          	width: 250
                          },
                          {
              				dataIndex: 'loanBy',
              				header: '借 款 人',
              				width: 150
                          },
                          {
                				dataIndex: 'loanDate',
                				header: '借款日期',
                				width: 150
                          },
                          {
                				dataIndex: 'loanAmount',
                				header: '借款金额 ',
                				width: 150
                          },
                          {
              				dataIndex: 'drawBy',
              				header: '提 请 人',
              				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                     }             
            ],
            allendflag:false,
            gridPrimaryKey: 'loanCode',
            gridLoadUrl: Hc.basePath + 'hc_loan_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_loan_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_loan_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_loan_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_loan_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_loan_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcLoan',
            subformActivate:false
        });
        me.callParent();
    }
});