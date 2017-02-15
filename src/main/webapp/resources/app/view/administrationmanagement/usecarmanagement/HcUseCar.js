/**
 * Description: 用车管理  view
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
Ext.define("Hc_Framework.view.hc.HcUseCar", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcusecar',

    requires: [
        'Hc_Framework.model.HcUseCar',
        'Hc_Framework.view.hc.HcUseCarController',
        'Hc_Framework.view.hc.HcUseCarModel'
    ],

    controller: "hcusecarcontroller",

    viewModel: {
        type: "hcusecarmodel"
    },
    title_:'用车管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '用车单', 
			    name: 'useCarCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcUseCar',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '用车单', 
                          	dataIndex: 'useCarCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '出发地点', 
                          	dataIndex: 'placeDeparture', 
                          	width: 250
                          },
                          {
              				dataIndex: 'orNotOneWay',
              				header: '是否单程',
              				width: 150
                          },
                          {
                				dataIndex: 'destination',
                				header: '目的地',
                				width: 150
                          },
                          {
                				dataIndex: 'applyReason',
                				header: '申请原因 ',
                				width: 150
                          },
                          {
              				dataIndex: 'useCarByName',
              				header: '用车人 ',
              				width: 150
                          },
                          {
            				dataIndex: 'applyUseCarDate',
            				header: '申请用车 ',
            				width: 150
                          },
                          {
              				dataIndex: 'useCarEndDate',
              				header: '结束时间 ',
              				width: 150
                          },
                          {
              				dataIndex: 'dept',
              				header: '部门 ',
              				width: 150
                          },
                          {
                				dataIndex: 'plateNumber',
                				header: '车牌 ',
                				width: 150
                          },
                          {
                				dataIndex: 'driverName',
                				header: '司机 ',
                				width: 150
                          },
                          {
                				dataIndex: 'departDate',
                				header: '出发时间 ',
                				width: 150
                          },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                      }             
            ],
            allendflag:false,
            gridPrimaryKey: 'useCarCode',
            gridLoadUrl: Hc.basePath + 'hc_use_car_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_use_car_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_use_car_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_use_car_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_use_car_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_use_car_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcUseCar',
            subformActivate:false
        });
        me.callParent();
    }
});