Ext.define("Hc_Framework.view.hc.HcSupplierPurchaseProduct", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsupplierpurchaseproduct',

    

    controller: "hcsupplierpurchaseproductcontroller",

    viewModel: {
        type: "hcsupplierpurchaseproductmodel"
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
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
                 this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            
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
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
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
									    fieldLabel: '采&nbsp;购&nbsp;编&nbsp;号&nbsp; ',
									    name: 'purchaseNo',
				     					reference:'purchaseNo',
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
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供&nbsp;应商&nbsp;编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供&nbsp;应商&nbsp;名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   									    xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    fieldLabel: '联&nbsp;&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;&nbsp;人',
   									    name: 'contactsName',
				     					reference:'contactsName'
   									},{
   									    xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    fieldLabel: '联&nbsp;系&nbsp;电&nbsp;话',
   									    name: 'contactsTel',
				     					reference:'contactsTel'
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 103,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运&nbsp;输&nbsp;方&nbsp;式',
									    name: 'typeOfShipping',
				     					reference:'typeOfShipping'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是否采购过 ',
									    name: 'whetherToPurchase',
				     					reference:'whetherToPurchase'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是&nbsp;否&nbsp;品&nbsp;检',
									    name: 'whetherProductInspection',
				     					reference:'whetherProductInspection',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;票',
									    name: 'invoices',
				     					reference:'invoices',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '税&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;率',
									    name: 'taxRate',
				     					reference:'taxRate',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '交&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期',
									    name: 'deliveryPeriod',
				     					reference:'deliveryPeriod',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付&nbsp;款&nbsp;方&nbsp;式',
									    name: 'paymentMethod',
				     					reference:'paymentMethod',
									   
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
                                y: 170,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '&nbsp;交&nbsp;货&nbsp;地&nbsp;点&nbsp; ',
									    name: 'placeOfDelivery',
				     					reference:'placeOfDelivery',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '质&nbsp;量&nbsp;保&nbsp;证&nbsp; ',
									    name: 'qualityAssurance',
				     					reference:'qualityAssurance',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 210,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '开&nbsp;&nbsp;票&nbsp;&nbsp;信&nbsp;&nbsp;息',
									    name: 'subject',
				     					reference:'subject',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remarks',
				     					reference:'remarks',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
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
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品描述",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "采购数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "预计交货日期",
                		            dataIndex: "inquiredQTY_quotedPrice$",
                		            width: 150
                		        },{
                		            text: "仓库",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "仓库库存",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "成本单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "采购单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "合计",
                		            dataIndex: "quotedPrice",
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