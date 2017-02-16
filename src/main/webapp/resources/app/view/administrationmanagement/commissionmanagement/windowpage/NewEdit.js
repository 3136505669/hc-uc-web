Ext.define("Hc_Framework.view.hc.SubHcCommission", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhccommission',

    

    controller: "subhccommissioncontroller",

    viewModel: {
        type: "subhccommissionmodel"
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
									    fieldLabel: '编码',
									    name: 'commiApplyCode',
				     					reference:'commiApplyCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
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
	   								    fieldLabel: '申请员工',
	   								    name: 'applyEmployName',
	   								
				     					reference:'applyEmployName'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '所在部门',
   									    name: 'locationDept',
				     					reference:'locationDept',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:500,
   									    fieldLabel: '申请日期',
   									    name: 'applyDate',
				     					reference:'applyDate',
   									    colspan:1
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
									    fieldLabel: '支付方式',
									    name: 'commPaymentMode',
				     					reference:'commPaymentMode'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收款银行 ',
									    name: 'paymentBank',
				     					reference:'paymentBank'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '申请支付日期',
									    name: 'commPaymentDate',
				     					reference:'commPaymentDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实际支付日期',
									    name: 'commPaymentedDate',
				     					reference:'commPaymentedDate',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:200,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 127,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '申请佣金原因',
									    name: 'commApplyReason',
				     					reference:'commApplyReason',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '收取人情况内容(含姓名、职位等)',
									    name: 'commCollectByContent',
				     					reference:'commCollectByContent',
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
       	            
       	        },{
          	         xtype:'panel',
          	         layout: {
                   	 type: 'fit',
                    },
                    region: "center",
                    bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                    scrollable:true,
                    items:[{
                   	 xtype:'grid',
                   	 enableHdMenu:false,
                   	 sortableColumns:false,
                   	 columnLines: true,
                   	 enableColumnHide:false,
                   	 enableColumnMove:false,
                   	 store:me.store,
                   	 features: [{
             		        ftype: 'summary'
             		     }],
                   	 columns: {
                   		    items: [
                   		        {
                   		            text: "序号",
                   		            dataIndex: "id",
                   		            width: 150
                   		        },{
                   		            text: "客户名称",
                   		            dataIndex: "CustName",
                   		            width: 150
                   		        },{
                   		            text: "PI单号",
                   		            dataIndex: "piNo",
                   		            width: 150
                   		        },{
                   		            text: "品名",
                   		            dataIndex: "nameOfaPart",
                   		            width: 150
                   		        },{
                   		            text: "单价",
                   		            dataIndex: "amount",
                   		            width: 150
                   		        },{
                   		            text: "金额单位",
                   		            dataIndex: "unit",
                   		            width: 150
                   		        },{
                   		            text: "数量",
                   		            dataIndex: "qty",
                   		            width: 150
                   		        },{
                   		            text: "数量单位",
                   		            dataIndex: "qtyUnit",
                   		            width: 150
                   		        },{
                   		            text: "佣金",
                   		            dataIndex: "commission",
                   		            width: 150
                   		        },{
                   		            text: "备注",
                   		            dataIndex: "remark",
                   		            width: 150
                   		        },{
                   		            text: "合计",
                   		            dataIndex: "inquiredQTY_quotedPrice$",
                   		            width: 150,
                   		            summaryType: 'sum',
   	                		      	summaryRenderer: function(value, summaryData, dataIndex) {
   	                		            return'金额总计:'+value;
   	                		        }
                   		        }
                   		    ]
                   		}
                   	 
                   	 
                   	 
                 }]
          	   }
       	 ]
       });
        me.callParent();
    }
});