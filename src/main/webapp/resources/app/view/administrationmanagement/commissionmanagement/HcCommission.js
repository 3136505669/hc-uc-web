/**
 * Description: 佣金管理 view
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
Ext.define("Hc_Framework.view.hc.HcCommission", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hccommission',

    requires: [
        'Hc_Framework.model.HcCommission',
        'Hc_Framework.view.hc.HcCommissionController',
        'Hc_Framework.view.hc.HcCommissionModel'
    ],

    controller: "hccommissioncontroller",

    viewModel: {
        type: "hccommissionmodel"
    },
    title_:'佣金管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '佣金编码', 
			    name: 'commiApplyCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcCommission',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '佣金编码', 
                          	dataIndex: 'commiApplyCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '申请员工', 
                          	dataIndex: 'applyEmployName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'locationDept',
              				header: '所在部门',
              				width: 150
                          },
                          {
                				dataIndex: 'applyDate',
                				header: '申请日期',
                				width: 150
                          },
                          {
                				dataIndex: 'commPaymentMode',
                				header: '佣金支付方式 ',
                				width: 150
                          },
                          {
              				dataIndex: 'commPaymentDate',
              				header: '申请支付日期',
              				width: 150
                          },
                          {
                				dataIndex: 'commPaymentedDate',
                				header: '实际支付日期',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'commiApplyCode',
            gridLoadUrl: Hc.basePath + 'hc_commission_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_commission_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_commission_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_commission_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_commission_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_commission_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcCommission',
            subformActivate:false
        });
        me.callParent();
    }
});