/**
 * Description: 新品换货管理  view
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
Ext.define("Hc_Framework.view.hc.HcNewBarterApply", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcnewbarterapply',

    requires: [
        'Hc_Framework.model.HcNewBarterApply',
        'Hc_Framework.view.hc.HcNewBarterApplyController',
        'Hc_Framework.view.hc.HcNewBarterApplyModel'
    ],

    controller: "hcnewbarterapplycontroller",

    viewModel: {
        type: "hcnewbarterapplymodel"
    },
    title_:'新品换货',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '换货单', 
			    name: 'newBarApplyCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcNewBarterApply',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '换货单', 
                          	dataIndex: 'newBarApplyCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '申请员工', 
                          	dataIndex: 'applyEmployeeName', 
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
                				dataIndex: 'fromCompName',
                				header: '换货公司 ',
                				width: 150
                          },
                          {
              				dataIndex: 'toCompName',
              				header: '目的公司 ',
              				width: 150
                          },
                          {
            				dataIndex: 'piOrderNo',
            				header: 'PI单号 ',
            				width: 150
                          },
                          {
              				dataIndex: 'consigneeDate',
              				header: '收件日期 ',
              				width: 150
                          },
                          {
              				dataIndex: 'salesDate',
              				header: '销货日期 ',
              				width: 150
                          },
                          {
                				dataIndex: 'airframeNo',
                				header: '机身号码 ',
                				width: 150
                          },
                          {
                				dataIndex: 'checkoutDate',
                				header: '检验日期 ',
                				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'newBarApplyCode',
            gridLoadUrl: Hc.basePath + 'hc_new_barter_apply_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_new_barter_apply_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_new_barter_apply_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_new_barter_apply_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_new_barter_apply_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_new_barter_apply_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcNewBarterApply',
            subformActivate:false
        });
        me.callParent();
    }
});