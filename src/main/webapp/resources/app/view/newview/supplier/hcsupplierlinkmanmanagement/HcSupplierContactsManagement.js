/**
 * Description: 供应商管理 view
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
Ext.define("Hc_Framework.view.hc.HcSupplierContactsManagement", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliercontactsmanagement',

    requires: [
        'Hc_Framework.model.HcSupplierContactsManagementList',
        'Hc_Framework.view.hc.HcSupplierContactsManagementController',
        'Hc_Framework.view.hc.HcSupplierContactsManagementModel'
    ],

    controller: "hcsuppliercontactsmanagementcontroller",

    viewModel: {
        type: "hcsuppliercontactsmanagementmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '联系人编号', 
			    name: 'contactsNo'
			
			},
            {
                xtype: 'textfield', 
                fieldLabel: '联系人名称', 
                name: 'contactsName'
            
            },
            {
                xtype: 'textfield', 
                fieldLabel: '所属公司', 
                name: 'companyName'
            
            }
            ],

            gridModel: 'Hc_Framework.model.HcSupplierContactsManagementList',
            gridColumns: [
                          {
                          	header: '联系人编号', 
                          	dataIndex: 'contactsNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '联系人名称', 
                          	dataIndex: 'contactsName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'contactsTel',
              				header: '联系人电话',
              				width: 150
                          },
                          {
                				dataIndex: 'email',
                				header: '电子邮件',
                				width: 150
                          },
                          {
                				dataIndex: 'companyName',
                				header: '所属公司',
                				width: 150
                          }
            ],
            allendflag:false,
            gridPrimaryKey: 'contactsNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_contacts_management_list/list.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_contacts_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_contacts_management_list/do_export.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierContactsManagementNewEdit'
        });
        me.callParent();

    }
});