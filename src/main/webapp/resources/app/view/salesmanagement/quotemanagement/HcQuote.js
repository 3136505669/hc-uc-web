/**
 * Description: 报价管理 view
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
Ext.define("Hc_Framework.view.hc.HcQuote", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcquote',

    requires: [
        'Hc_Framework.model.HcQuote',
        'Hc_Framework.view.hc.HcQuoteController',
        'Hc_Framework.view.hc.HcQuoteModel'
    ],

    controller: "hcquotecontroller",

    viewModel: {
        type: "hcquotemodel"
    },
    title_:'报价管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '报价编码', 
			    name: 'quoteCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcQuote',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '报价编码', 
                          	dataIndex: 'quoteCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '报价人名称', 
                          	dataIndex: 'quoteByName', 
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
                				dataIndex: 'custTel',
                				header: '客户电话 ',
                				width: 150
                          },
                          {
              				dataIndex: 'contactBy',
              				header: '联系人',
              				width: 150
                          },
                          {
                				dataIndex: 'quoteMode',
                				header: '报价方式',
                				width: 150
                          },
                          {
              				dataIndex: 'deliverGoodsDate',
              				header: '交货时间',
              				width: 150
                          },
                          {
              				dataIndex: 'currency',
              				header: '货币',
              				width: 150
                          },
                          {
                				dataIndex: 'taxRate',
                				header: '税率',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'quoteCode',
            gridLoadUrl: Hc.basePath + 'hc_quote_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_quote_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_quote_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_quote_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_quote_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_quote_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcQuote',
            subformActivate:false
        });
        me.callParent();
    }
});