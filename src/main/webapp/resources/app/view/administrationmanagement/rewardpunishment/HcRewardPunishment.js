/**
 * Description: 奖惩管理  view
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
Ext.define("Hc_Framework.view.hc.HcRewardPunishment", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcrewardpunishment',

    requires: [
        'Hc_Framework.model.HcRewardPunishment',
        'Hc_Framework.view.hc.HcRewardPunishmentController',
        'Hc_Framework.view.hc.HcRewardPunishmentModel'
    ],

    controller: "hcrewardpunishmentcontroller",

    viewModel: {
        type: "hcrewardpunishmentmodel"
    },
    title_:'奖惩管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '奖惩编码', 
			    name: 'rewardPunishCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcRewardPunishment',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '奖惩编码', 
                          	dataIndex: 'rewardPunishCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '员工', 
                          	dataIndex: 'employName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'compName',
              				header: '公司',
              				width: 150
                          },
                          {
                				dataIndex: 'dept',
                				header: '部门',
                				width: 150
                          },
                          {
                				dataIndex: 'position',
                				header: '职位 ',
                				width: 150
                          },
                          {
              				dataIndex: 'drawBy',
              				header: '提请人 ',
              				width: 150
                          },
                          {
            				dataIndex: 'locaDept',
            				header: '所在部门 ',
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
            gridPrimaryKey: 'rewardPunishCode',
            gridLoadUrl: Hc.basePath + 'hc_reward_punishment_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_reward_punishment_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_reward_punishment_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_reward_punishment_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_reward_punishment_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_reward_punishment_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcRewardPunishment',
            subformActivate:false
        });
        me.callParent();
    }
});