/**
 * Description: 报销管理  view
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
Ext.define("Hc_Framework.view.hc.HcReimbursement", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcreimbursement',

    requires: [
        'Hc_Framework.model.HcReimbursement',
        'Hc_Framework.view.hc.HcReimbursementController',
        'Hc_Framework.view.hc.HcReimbursementModel'
    ],

    controller: "hcreimbursementcontroller",

    viewModel: {
        type: "hcreimbursementmodel"
    },
    title_:'报销管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '报销编号', 
			    name: 'reimburCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcReimbursement',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '报销编号', 
                          	dataIndex: 'reimburCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '提 请 人', 
                          	dataIndex: 'drawByName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'exacct',
              				header: '费用科目',
              				width: 150
                          },
                          {
                				dataIndex: 'reimburBy',
                				header: '报 销 人',
                				width: 150
                          },
                          {
                				dataIndex: 'reimburDate',
                				header: '报销日期 ',
                				width: 150
                          },
                          {
              				dataIndex: 'reimburAmount',
              				header: '报销金额',
              				width: 150
                          },
                          {
                				dataIndex: 'reimburDept',
                				header: '报销部门',
                				width: 150
                         },
                         {
                  				dataIndex: 'examApprovSituat',
                  				header: '审批情况',
                  				width: 150
                         },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                     }             
            ],
            allendflag:false,
            gridPrimaryKey: 'reimburCode',
            gridLoadUrl: Hc.basePath + 'hc_reimbursement_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_reimbursement_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_reimbursement_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_reimbursement_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_reimbursement_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_reimbursement_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcReimbursement',
            subformActivate:false
        });
        me.callParent();
    }
});