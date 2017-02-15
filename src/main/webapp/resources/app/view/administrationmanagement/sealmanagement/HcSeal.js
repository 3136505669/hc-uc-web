/**
 * Description: 盖章管理  view
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
Ext.define("Hc_Framework.view.hc.HcSeal", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcseal',

    requires: [
        'Hc_Framework.model.HcSeal',
        'Hc_Framework.view.hc.HcSealController',
        'Hc_Framework.view.hc.HcSealModel'
    ],

    controller: "hcsealcontroller",

    viewModel: {
        type: "hcsealmodel"
    },
    title_:'盖章管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '盖章单', 
			    name: 'sealCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSeal',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '盖章单', 
                          	dataIndex: 'sealCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '经办人', 
                          	dataIndex: 'handleByName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'borrowDept',
              				header: '借用部门',
              				width: 150
                          },
                          {
                				dataIndex: 'borrowIndiaByName',
                				header: '借印人',
                				width: 150
                          },
                          {
                				dataIndex: 'loanDate',
                				header: '借出时间 ',
                				width: 150
                          },
                          {
              				dataIndex: 'useTerm',
              				header: '使用期限 ',
              				width: 150
                          },
                          {
            				dataIndex: 'useScope',
            				header: '使用范围 ',
            				width: 150
                          },
                          {
              				dataIndex: 'indiaWitnBy',
              				header: '见证人 ',
              				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'sealCode',
            gridLoadUrl: Hc.basePath + 'hc_seal_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_seal_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_seal_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_seal_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_seal_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_seal_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSeal',
            subformActivate:false
        });
        me.callParent();
    }
});