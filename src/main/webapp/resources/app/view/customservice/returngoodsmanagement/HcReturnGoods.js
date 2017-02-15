/**
 * Description: 退货管理  view
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
Ext.define("Hc_Framework.view.hc.HcReturnGoods", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcreturngoods',

    requires: [
        'Hc_Framework.model.HcReturnGoods',
        'Hc_Framework.view.hc.HcReturnGoodsController',
        'Hc_Framework.view.hc.HcReturnGoodsModel'
    ],

    controller: "hcreturngoodscontroller",

    viewModel: {
        type: "hcreturngoodsmodel"
    },
    title_:'退货管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '退货单', 
			    name: 'returnGoodsCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcReturnGoods',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '退货单', 
                          	dataIndex: 'returnGoodsCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '责任人', 
                          	dataIndex: 'inChargeByName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'subject',
              				header: '主题',
              				width: 150
                          },
                          {
                				dataIndex: 'custName',
                				header: '客户',
                				width: 150
                          },
                          {
                				dataIndex: 'currency',
                				header: '货币 ',
                				width: 150
                          },
                          {
              				dataIndex: 'returnGoodsDate',
              				header: '退货日期 ',
              				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'returnGoodsCode',
            gridLoadUrl: Hc.basePath + 'hc_return_goods_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_return_goods_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_return_goods_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_return_goods_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_return_goods_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_return_goods_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcReturnGoods',
            subformActivate:false
        });
        me.callParent();
    }
});