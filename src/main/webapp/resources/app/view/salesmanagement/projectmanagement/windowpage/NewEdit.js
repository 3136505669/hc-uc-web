Ext.define("Hc_Framework.view.hc.SubHcProject", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcproject',

    

    controller: "subhcprojectcontroller",

    viewModel: {
        type: "subhcprojectmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   
    dockedItems:[{
    	 xtype: 'toolbar',
    	 dock: 'top',
    	 items: [
           {
             text: '保存',
             handler:'onBtnSaveClick',
             glyph: Hc.Icon.btnSave
           },
           {
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '取消',
               handler:'onBtnCancelClick',
               glyph: Hc.Icon.btnCancel
             }
         ]
    }],
    listeners: {
    	beforeshow:function(obj ,eOpts){
    		 var currentUser = Ext.create("Hc_Framework.store.CurrentUser");
    	        currentUser.load();
    		 var  userCreator;
             var   supplierNo_;
             
             if(this.title=='新增'){
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsuppliercustomer').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsuppliercustomer',
                 region: "north",
                 height:3000,
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '项目编码',
									    name: 'projtCode',
				     					reference:'projtCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '项目名称',
									    name: 'projtName',
				     					reference:'projtName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '申请人',
									    name: 'applByName',
				     					reference:'applByName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '负责人',
									    name: 'perChargeByName',
				     					reference:'perChargeByName'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 35,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '项目金额',
	   								    name: 'projtSum',
	   								
				     					reference:'projtSum'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '项目阶段',
   									    name: 'projtStage',
				     					reference:'projtStage',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:500,
   									    fieldLabel: '项目来源',
   									    name: 'projtSource',
				     					reference:'projtSource',
   									    colspan:4
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '立项日期',
	   								    name: 'projtApprDate',
	   								
				     					reference:'projtApprDate'
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 95,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '成功率估计',
									    name: 'sucRateEstimate',
				     					reference:'sucRateEstimate'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '当前状态 ',
									    name: 'currentState',
				     					reference:'currentState'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款天数',
									    name: 'paymentDayQty',
				     					reference:'paymentDayQty',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 128,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户名称',
									    name: 'custName',
				     					reference:'custName',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系人',
									    name: 'contactBy',
				     					reference:'contactBy',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系电话',
									    name: 'contactTel',
				     					reference:'contactTel',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:450,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                defaults: {
                       	        	//height:20
                                },
                                x: 3,
                                y: 160,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									   // height:1,
									    fieldLabel: '终止原因',
									    name: 'endReason',
											reference:'endReason',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '项目简介、主要产品及数量',
									    name: 'introduction',
											reference:'introduction',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '跟进措施',
									    name: 'rootMeasure',
											reference:'rootMeasure',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '需配合/支持措施',
									    name: 'coopRootMeasure',
											reference:'coopRootMeasure',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '结　　果',
									    name: 'result',
											reference:'result',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '小　　结',
									    name: 'summary_',
											reference:'summary_',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});