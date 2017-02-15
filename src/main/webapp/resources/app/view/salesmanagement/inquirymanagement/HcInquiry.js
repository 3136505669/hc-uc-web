/**
 * Description: 询价管理 view
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
Ext.define("Hc_Framework.view.hc.HcInquiry", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcinquiry',

    requires: [
        'Hc_Framework.model.HcInquiry',
        'Hc_Framework.view.hc.HcInquiryController',
        'Hc_Framework.view.hc.HcInquiryModel'
    ],

    controller: "hcinquirycontroller",

    viewModel: {
        type: "hcinquirymodel"
    },
    title_:'询价管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '询价编码', 
			    name: 'inquCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcInquiry',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '询价编码', 
                          	dataIndex: 'inquCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '询价日期', 
                          	dataIndex: 'inquDate', 
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
                				dataIndex: 'notifierName',
                				header: '通知人 ',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'inquCode',
            gridLoadUrl: Hc.basePath + 'hc_inquiry_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_inquiry_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_inquiry_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_inquiry_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_inquiry_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_inquiry_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcInquiry',
            subformActivate:false
        });
        me.callParent();
    }
});