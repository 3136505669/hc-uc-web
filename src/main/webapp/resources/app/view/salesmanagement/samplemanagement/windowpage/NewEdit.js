Ext.define("Hc_Framework.view.hc.SubHcSample", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsample',

    

    controller: "subhcsamplecontroller",

    viewModel: {
        type: "subhcsamplemodel"
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
									    fieldLabel: '样品单编码',
									    name: 'sampleCode',
				     					reference:'sampleCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '责任人',
									    name: 'perLiableName',
				     					reference:'perLiableName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '仓库',
									    name: 'warehouseName',
				     					reference:'warehouseName'
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
	   								    fieldLabel: '客户',
	   								    name: 'custName',
	   								
				     					reference:'custName'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '联系人',
   									    name: 'contactBy',
				     					reference:'contactBy',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:500,
   									    fieldLabel: '收货地址',
   									    name: 'takDelivAddr',
				     					reference:'takDelivAddr',
   									    colspan:4
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '联系电话',
	   								    name: 'contactTel',
	   								
				     					reference:'contactTel'
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
									    fieldLabel: '运输方式',
									    name: 'transportMode',
				     					reference:'transportMode'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '样品货币 ',
									    name: 'sampleCurrency',
				     					reference:'sampleCurrency'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '登记日期',
									    name: 'registerDate',
				     					reference:'registerDate',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
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
									    fieldLabel: '运费',
									    name: 'freight',
				     					reference:'freight',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '保险',
									    name: 'insurance',
				     					reference:'insurance',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发货日期',
									    name: 'delivDate',
				     					reference:'delivDate',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:70,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 255,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '特别要求',
									    name: 'adHocRequest',
				     					reference:'adHocRequest',
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
                   		            text: "产品编码",
                   		            dataIndex: "prodCode",
                   		            width: 150
                   		        },{
                   		            text: "产品名称",
                   		            dataIndex: "prodName",
                   		            width: 150
                   		        },{
                   		            text: "型号规格",
                   		            dataIndex: "typeModel",
                   		            width: 150
                   		        },{
                   		            text: "产品描述",
                   		            dataIndex: "prodDesc",
                   		            width: 150
                   		        },{
                   		            text: "数量",
                   		            dataIndex: "qty",
                   		            width: 150
                   		        },{
                   		            text: "单位",
                   		            dataIndex: "unit",
                   		            width: 150
                   		        },{
                   		            text: "单价",
                   		            dataIndex: "currency",
                   		            width: 150
                   		        },{
                   		            text: "货币",
                   		            dataIndex: "univalent",
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