/**
 * Description: 内部签呈管理  view
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
Ext.define("Hc_Framework.view.hc.HcInsidePetition", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcinsidepetition',

    requires: [
        'Hc_Framework.model.HcInsidePetition',
        'Hc_Framework.view.hc.HcInsidePetitionController',
        'Hc_Framework.view.hc.HcInsidePetitionModel'
    ],

    controller: "hcinsidepetitioncontroller",

    viewModel: {
        type: "hcinsidepetitionmodel"
    },
    title_:'内部签呈',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '内部签呈编码', 
			    name: 'goodsNoApplCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcInsidePetition',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '内部签呈', 
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
                				dataIndex: 'dense',
                				header: '密级 ',
                				width: 150
                          },
                          {
              				dataIndex: 'urgenTimeLimit',
              				header: '缓急时限',
              				width: 150
                          },
                          {
                				dataIndex: 'postTo',
                				header: '张贴至',
                				width: 150
                          },
                          {
                				dataIndex: 'forwardTo',
                				header: '转发至',
                				width: 150
                          },
                          {
              				dataIndex: 'ccTo',
              				header: '抄送至',
              				width: 150
                        },
                        {
              				dataIndex: 'fileName',
              				header: '文件名称',
              				width: 150
                        },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                     }             
            ],
            allendflag:false,
            gridPrimaryKey: 'goodsNoApplCode',
            gridLoadUrl: Hc.basePath + 'hc_insidepetition_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_insidepetition_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_insidepetition_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_insidepetition_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_insidepetition_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_insidepetition_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcInsidePetition',
            subformActivate:false
        });
        me.callParent();
    }
});