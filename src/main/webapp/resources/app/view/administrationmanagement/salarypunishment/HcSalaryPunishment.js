/**
 * Description: 薪资异动管理  view
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
Ext.define("Hc_Framework.view.hc.HcSalaryPunishment", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsalarypunishment',

    requires: [
        'Hc_Framework.model.HcSalaryPunishment',
        'Hc_Framework.view.hc.HcSalaryPunishmentController',
        'Hc_Framework.view.hc.HcSalaryPunishmentModel'
    ],

    controller: "hcsalarypunishmentcontroller",

    viewModel: {
        type: "hcsalarypunishmentmodel"
    },
    title_:'薪资异动',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '异动编码', 
			    name: 'salaryPunishCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSalaryPunishment',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '异动编码', 
                          	dataIndex: 'salaryPunishCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '申请员工', 
                          	dataIndex: 'employeeName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'drawBy',
              				header: '提请人',
              				width: 150
                          },
                          {
                				dataIndex: 'position',
                				header: '职位',
                				width: 150
                          },
                          {
                				dataIndex: 'checkDate',
                				header: '到职日期 ',
                				width: 150
                          },
                          {
              				dataIndex: 'applyDate',
              				header: '申请日期 ',
              				width: 150
                          },
                          {
            				dataIndex: 'adjustAmount',
            				header: '调整金额 ',
            				width: 150
                          },
                          {
              				dataIndex: 'adjustedAmount',
              				header: '调整后薪资 ',
              				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'salaryPunishCode',
            gridLoadUrl: Hc.basePath + 'hc_salary_punishment_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_salary_punishment_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_salary_punishment_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_salary_punishment_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_salary_punishment_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_salary_punishment_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSalaryPunishment',
            subformActivate:false
        });
        me.callParent();
    }
});