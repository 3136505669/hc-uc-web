/**
 * Description: 维修管理  view
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
Ext.define("Hc_Framework.view.hc.HcMaintain", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcmaintain',

    requires: [
        'Hc_Framework.model.HcMaintain',
        'Hc_Framework.view.hc.HcMaintainController',
        'Hc_Framework.view.hc.HcMaintainModel'
    ],

    controller: "hcmaintaincontroller",

    viewModel: {
        type: "hcmaintainmodel"
    },
    title_:'维修管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '维修单', 
			    name: 'maintainCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcMaintain',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '维修单', 
                          	dataIndex: 'maintainCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '业务员', 
                          	dataIndex: 'salesmanName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'maintainByName',
              				header: '维修员',
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
              				dataIndex: 'maintainType',
              				header: '维修类别 ',
              				width: 150
                          },
                          {
            				dataIndex: 'puttOutFactName',
            				header: '外发厂 ',
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
                				dataIndex: 'airframeNo',
                				header: '机身号码 ',
                				width: 150
                          },
                          {
                				dataIndex: 'processMode',
                				header: '处理方式 ',
                				width: 150
                          },
                          {
                				dataIndex: 'freight',
                				header: '运费 ',
                				width: 150
                          },
                          {
              				dataIndex: 'transportMode',
              				header: '运输方式 ',
              				width: 150
                          },
                          {
            				dataIndex: 'consigneeDate',
            				header: '收件日期 ',
            				width: 150
                          },
                         {
	          				dataIndex: 'guarantee',
	          				header: '保修 ',
	          				width: 150
                         },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'maintainCode',
            gridLoadUrl: Hc.basePath + 'hc_maintain_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_maintain_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_maintain_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_maintain_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_maintain_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_maintain_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcMaintain',
            subformActivate:false
        });
        me.callParent();
    }
});