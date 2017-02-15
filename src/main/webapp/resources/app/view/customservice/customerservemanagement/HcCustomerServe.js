/**
 * Description: 客户服务管理  view
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
Ext.define("Hc_Framework.view.hc.HcCustomerServe", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hccustomerserve',

    requires: [
        'Hc_Framework.model.HcCustomerServe',
        'Hc_Framework.view.hc.HcCustomerServeController',
        'Hc_Framework.view.hc.HcCustomerServeModel'
    ],

    controller: "hccustomerservecontroller",

    viewModel: {
        type: "hccustomerservemodel"
    },
    title_:'客户服务',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '服务单', 
			    name: 'custServeCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcCustomerServe',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '服务单', 
                          	dataIndex: 'custServeCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '服务主题', 
                          	dataIndex: 'custServeTheme', 
                          	width: 250
                          },
                          {
              				dataIndex: 'serveType',
              				header: '服务类别',
              				width: 150
                          },
                          {
                				dataIndex: 'serveLevel',
                				header: '服务等级',
                				width: 150
                          },
                          {
                				dataIndex: 'currentState',
                				header: '当前状态 ',
                				width: 150
                          },
                          {
              				dataIndex: 'serveDate',
              				header: '服务日期 ',
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
              				dataIndex: 'endDate',
              				header: '结束日期 ',
              				width: 150
                          },
                          {
                				dataIndex: 'prodCode',
                				header: '产品编码 ',
                				width: 150
                          },
                          {
                				dataIndex: 'prodName',
                				header: '产品名称 ',
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
            				dataIndex: 'custName',
            				header: '客户 ',
            				width: 150
                          },
                         {
	          				dataIndex: 'businessBy',
	          				header: '业务员 ',
	          				width: 150
                         },
                        {
	        				dataIndex: 'registerBy',
	        				header: '登记人',
	        				width: 150
		                  },
		                  {
		      				dataIndex: 'registerDate',
		      				header: '登记日期 ',
		      				width: 150
		                },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'custServeCode',
            gridLoadUrl: Hc.basePath + 'hc_customer_serve_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_customer_serve_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_customer_serve_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_customer_serve_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_customer_serve_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_customer_serve_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcCustomerServe',
            subformActivate:false
        });
        me.callParent();
    }
});