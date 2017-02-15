/**
 * Description: 员工管理(人事信息)  view
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
Ext.define("Hc_Framework.view.hc.HcEmployee", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcemployee',

    requires: [
        'Hc_Framework.model.HcEmployee',
        'Hc_Framework.view.hc.HcEmployeeController',
        'Hc_Framework.view.hc.HcEmployeeModel'
    ],

    controller: "hcemployeecontroller",

    viewModel: {
        type: "hcemployeemodel"
    },
    title_:'员工管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '員工編碼', 
			    name: 'employeeCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcEmployee',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '員工編碼', 
                          	dataIndex: 'employeeCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '員工姓名', 
                          	dataIndex: 'employeeName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'locationDept',
              				header: '所在部门',
              				width: 150
                          },
                          {
                				dataIndex: 'position',
                				header: '职　　位',
                				width: 150
                          },
                          {
                				dataIndex: 'sex',
                				header: '性　　别 ',
                				width: 150
                          },
                          {
              				dataIndex: 'nation',
              				header: '民　　族',
              				width: 150
                          },
                          {
                				dataIndex: 'idCardNo',
                				header: '身份证号码',
                				width: 150
                          },
                          {
                				dataIndex: 'specialty',
                				header: '特　　长',
                				width: 150
                          },
                          {
              				dataIndex: 'placeOfResidence',
              				header: '户口所在地',
              				width: 150
                        },
                        {
              				dataIndex: 'presentResidence',
              				header: '现居住地',
              				width: 150
                        },
                        {
            				dataIndex: 'maritalStatus',
            				header: '婚姻状况',
            				width: 150
	                      },
	                      
	                      {
	            				dataIndex: 'contactPhone',
	            				header: '联系电话',
	            				width: 150
	                      } ,{
	              				dataIndex: 'graduateSchool',
	              				header: '毕业院校',
	              				width: 150
	                        },{
	              				dataIndex: 'atDate',
	              				header: '就读时间',
	              				width: 150
	                        },{
	              				dataIndex: 'professional',
	              				header: '专　　业',
	              				width: 150
	                        },{
	              				dataIndex: 'degree',
	              				header: '学历',
	              				width: 150
	                        },{
	              				dataIndex: 'orNotTurnover',
	              				header: '是否离职',
	              				width: 150
	                        },{
	              				dataIndex: 'posiSituation',
	              				header: '转正情况',
	              				width: 150
	                        },{
	              				dataIndex: 'contractSignSituat',
	              				header: '合同签订情况',
	              				width: 150
	                        },{
	              				dataIndex: 'remark',
	              				header: '备　　注',
	              				width: 150
	                        }             
            ],
            allendflag:false,
            gridPrimaryKey: 'employeeCode',
            gridLoadUrl: Hc.basePath + 'hc_employee_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_employee_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_employee_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_employee_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_employee_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_employee_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcEmployee',
            subformActivate:false
        });
        me.callParent();
    }
});