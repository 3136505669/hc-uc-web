/**
 * Description: 客户投诉管理  view
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
Ext.define("Hc_Framework.view.hc.HcCustomerComplain", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hccustomercomplain',

    requires: [
        'Hc_Framework.model.HcCustomerComplain',
        'Hc_Framework.view.hc.HcCustomerComplainController',
        'Hc_Framework.view.hc.HcCustomerComplainModel'
    ],

    controller: "hccustomercomplaincontroller",

    viewModel: {
        type: "hccustomercomplainmodel"
    },
    title_:'客户投诉',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '投诉单', 
			    name: 'custComplainCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcCustomerComplain',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '投诉单', 
                          	dataIndex: 'custComplainCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '投诉主题', 
                          	dataIndex: 'custComplainName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'complainType',
              				header: '投诉类别',
              				width: 150
                          },
                          {
                				dataIndex: 'complainLevel',
                				header: '投诉等级',
                				width: 150
                          },
                          {
                				dataIndex: 'currentState',
                				header: '当前状态 ',
                				width: 150
                          },
                          {
              				dataIndex: 'useCarByName',
              				header: '用车人 ',
              				width: 150
                          },
                          {
            				dataIndex: 'complainDate',
            				header: '投诉日期 ',
            				width: 150
                          },
                          {
              				dataIndex: 'invoiceNo',
              				header: '发票号 ',
              				width: 150
                          },
                          {
              				dataIndex: 'batchNo',
              				header: '批号 ',
              				width: 150
                          },
                          {
                				dataIndex: 'orderNo',
                				header: '订单号 ',
                				width: 150
                          },
                          {
                				dataIndex: 'pactNo',
                				header: '合同号 ',
                				width: 150
                          },
                          {
                				dataIndex: 'prodCode',
                				header: '产品编码 ',
                				width: 150
                          },
                          {
              				dataIndex: 'qty',
              				header: '数量 ',
              				width: 150
                          },
                          {
            				dataIndex: 'unit',
            				header: '单位 ',
            				width: 150
                          },
                         {
	          				dataIndex: 'supplierName',
	          				header: '供应商 ',
	          				width: 150
                         },
                        {
	        				dataIndex: 'custName',
	        				header: '客户',
	        				width: 150
		                  },
		                  {
		      				dataIndex: 'delivDate',
		      				header: '发货日期 ',
		      				width: 150
		                },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'custComplainCode',
            gridLoadUrl: Hc.basePath + 'hc_customer_complain_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_customer_complain_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_customer_complain_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_customer_complain_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_customer_complain_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_customer_complain_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcCustomerComplain',
            subformActivate:false
        });
        me.callParent();
    }
});