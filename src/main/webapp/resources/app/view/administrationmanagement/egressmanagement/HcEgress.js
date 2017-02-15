/**
 * Description: 外出管理  view
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
Ext.define("Hc_Framework.view.hc.HcEgress", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcegress',

    requires: [
        'Hc_Framework.model.HcEgress',
        'Hc_Framework.view.hc.HcEgressController',
        'Hc_Framework.view.hc.HcEgressModel'
    ],

    controller: "hcegresscontroller",

    viewModel: {
        type: "hcegressmodel"
    },
    title_:'外出管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '外出编码', 
			    name: 'egressCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcEgress',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '外出编码', 
                          	dataIndex: 'egressCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '外出员工', 
                          	dataIndex: 'egressEmployName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'drawBy',
              				header: '提请人',
              				width: 150
                          },
                          {
                				dataIndex: 'custName',
                				header: '客户',
                				width: 150
                          },
                          {
                				dataIndex: 'custAddr',
                				header: '客户地址 ',
                				width: 150
                          },
                          {
              				dataIndex: 'businessProcess',
              				header: '事务处理',
              				width: 150
                          },
                          {
                				dataIndex: 'examApprSitu',
                				header: '审批情况',
                				width: 150
                          },
                          {
                				dataIndex: 'examApprOpinion',
                				header: '审批意见',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'egressCode',
            gridLoadUrl: Hc.basePath + 'hc_egress_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_egress_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_egress_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_egress_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_egress_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_egress_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcEgress',
            subformActivate:false
        });
        me.callParent();
    }
});