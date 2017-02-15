/**
 * Description: 商品编码申请管理  view
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
Ext.define("Hc_Framework.view.hc.HcGoodsNoApply", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcgoodsnoapply',

    requires: [
        'Hc_Framework.model.HcGoodsNoApply',
        'Hc_Framework.view.hc.HcGoodsNoApplyController',
        'Hc_Framework.view.hc.HcGoodsNoApplyModel'
    ],

    controller: "hcgoodsnoapplycontroller",

    viewModel: {
        type: "hcgoodsnoapplymodel"
    },
    title_:'商品编码申请',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '商品编码申请单', 
			    name: 'goodsNoApplCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcGoodsNoApply',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '商品编码申请单', 
                          	dataIndex: 'goodsNoApplCode', 
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
                				dataIndex: 'goodsCode',
                				header: '物品编码 ',
                				width: 150
                          },
                          {
              				dataIndex: 'goodsName',
              				header: '物品名称',
              				width: 150
                          },
                          {
                				dataIndex: 'specModel',
                				header: '所属大分类',
                				width: 150
                          },
                          {
                				dataIndex: 'specialty',
                				header: '规格型号',
                				width: 150
                          },
                          {
              				dataIndex: 'venderCode',
              				header: '厂家编码',
              				width: 150
                        },
                        {
              				dataIndex: 'venderName',
              				header: '厂家名称',
              				width: 150
                        },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                     }             
            ],
            allendflag:false,
            gridPrimaryKey: 'goodsNoApplCode',
            gridLoadUrl: Hc.basePath + 'hc_goods_no_apply_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_goods_no_apply_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_goods_no_apply_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_goods_no_apply_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_goods_no_apply_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_goods_no_apply_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcGoodsNoApply',
            subformActivate:false
        });
        me.callParent();
    }
});