Ext.define("Hc_Framework.view.hc.SubHcSupplierPaymentAccount", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplierpaymentaccount',

    

    controller: "subhcsupplierpaymentaccountcontroller",

    viewModel: {
        type: "subhcsupplierpaymentaccountmodel"
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
             this.lookupReference('subhcsupplierpaymentaccount').title='>>>>'+this.me_.view.title_;
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
                 reference:'subhcsupplierpaymentaccount',
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
									    fieldLabel: '付款编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '采购编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
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
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供应商编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供应商名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:80,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 79,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '票据号',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '采购日期',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '币　　值',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '采 购 员',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开票日期',
									    name: 'billNo',
				     					reference:'billNo',
									   
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
                                y: 165,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '采购金额',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实付金额',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发票金额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '预计付款日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
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
                                y: 225,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '付款情况',
									    name: 'remark',
				     					reference:'remark',
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
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "采购数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "到货数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "采购单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "到货日期",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "订单合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "入库合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
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