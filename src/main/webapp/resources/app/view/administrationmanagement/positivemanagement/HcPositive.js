/**
 * Description: 转正申请管理  view
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
Ext.define("Hc_Framework.view.hc.HcPositive", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcpositive',

    requires: [
        'Hc_Framework.model.HcPositive',
        'Hc_Framework.view.hc.HcPositiveController',
        'Hc_Framework.view.hc.HcPositiveModel'
    ],

    controller: "hcpositivecontroller",

    viewModel: {
        type: "hcpositivemodel"
    },
    title_:'转正申请',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '转正申请编码', 
			    name: 'positApplyCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcPositive',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '转正申请', 
                          	dataIndex: 'positApplyCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '转正员工', 
                          	dataIndex: 'PositiEmploName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'drawBy',
              				header: '提请人',
              				width: 150
                          },
                          {
                				dataIndex: 'position',
                				header: '职位',
                				width: 150
                          },
                          {
                				dataIndex: 'applyDate',
                				header: '申请日期 ',
                				width: 150
                          },
                          {
              				dataIndex: 'toGangDate',
              				header: '到岗日期',
              				width: 150
                          },
                          {
                				dataIndex: 'shouPosiDate',
                				header: '应转正日期',
                				width: 150
                         },
                         {
                  				dataIndex: 'PositiveState',
                  				header: '转正状态',
                  				width: 150
                         },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                     }             
            ],
            allendflag:false,
            gridPrimaryKey: 'positApplyCode',
            gridLoadUrl: Hc.basePath + 'hc_positive_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_positive_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_positive_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_positive_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_positive_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_positive_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcPositive',
            subformActivate:false
        });
        me.callParent();
    }
});