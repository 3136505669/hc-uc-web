/**
 * Description: 订单管理 view
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
Ext.define("Hc_Framework.view.hc.HcOrder", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcorder',

    requires: [
        'Hc_Framework.model.HcOrder',
        'Hc_Framework.view.hc.HcOrderController',
        'Hc_Framework.view.hc.HcOrderModel'
    ],

    controller: "hcordercontroller",

    viewModel: {
        type: "hcordermodel"
    },
    title_:'订单管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '订单编码', 
			    name: 'orderCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcOrder',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '订单编码', 
                          	dataIndex: 'orderCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '责任人名称', 
                          	dataIndex: 'perLiabName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'custName',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'custAddr',
                				header: '客户地址',
                				width: 150
                          },
                          {
                				dataIndex: 'takDelivAddr',
                				header: '收货地址 ',
                				width: 150
                          },
                          {
              				dataIndex: 'takDelivBy',
              				header: '收货人',
              				width: 150
                          },
                          {
                				dataIndex: 'contactTel',
                				header: '联系电话',
                				width: 150
                          },
                          {
              				dataIndex: 'transportMode',
              				header: '运输方式',
              				width: 150
                          },
                          {
              				dataIndex: 'contractCode',
              				header: '合同编码',
              				width: 150
                          },
                          {
                				dataIndex: 'custDelivTime',
                				header: '客户交期',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'orderCode',
            gridLoadUrl: Hc.basePath + 'hc_order_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_order_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_order_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_order_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_order_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_order_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcOrder',
            subformActivate:false
        });
        me.callParent();
    }
});