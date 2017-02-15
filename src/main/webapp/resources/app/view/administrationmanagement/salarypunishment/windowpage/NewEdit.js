Ext.define("Hc_Framework.view.hc.SubHcSalaryPunishment", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsalarypunishment',

    

    controller: "subhcsalarypunishmentcontroller",

    viewModel: {
        type: "subhcsalarypunishmentmodel"
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
									    fieldLabel: '报价编码',
									    name: 'quoteCode',
				     					reference:'quoteCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '报价人编码',
									    name: 'quoteByCode',
				     					reference:'quoteByCode'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '报价人名称',
									    name: 'quoteByName',
				     					reference:'quoteByName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '报价方式',
									    name: 'quoteMode',
				     					reference:'quoteMode'
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
	   								    fieldLabel: '客户编码',
	   								    name: 'custCode',
	   								
				     					reference:'custCode'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '客户名称',
   									    name: 'custName',
				     					reference:'custName',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:500,
   									    fieldLabel: '客户地址',
   									    name: 'custAddr',
				     					reference:'custAddr',
   									    colspan:4
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户电话',
	   								    name: 'custTel',
	   								
				     					reference:'custTel'
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户传真',
	   								    name: 'custFax',
	   								
				     					reference:'custFax'
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
									    fieldLabel: '联系人名称',
									    name: 'contact_by',
				     					reference:'contact_by'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系电话 ',
									    name: 'contacTByTel',
				     					reference:'contacTByTel'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系邮件',
									    name: 'contactByEmail',
				     					reference:'contactByEmail',
									 
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
									    fieldLabel: '目的站',
									    name: 'purposePlace',
				     					reference:'purposePlace',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '包装',
									    name: 'packing',
				     					reference:'packing',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '货币',
									    name: 'currency',
				     					reference:'currency',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '交货方式',
									    name: 'deliverGoodsMode',
				     					reference:'deliverGoodsMode',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '交货时间',
									    name: 'deliverGoodsDate',
				     					reference:'deliverGoodsDate',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'paymentMode',
				     					reference:'paymentMode',
									
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
                                y: 188,
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
									    fieldLabel: '税率',
									    name: 'tax_rate',
				     					reference:'tax_rate',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '折扣',
									    name: 'rebate',
				     					reference:'rebate',
									
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
                                y: 222,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审批人',
									    name: 'examApprByName',
				     					reference:'examApprByName'
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
                   		            text: "数量",
                   		            dataIndex: "qty",
                   		            width: 150
                   		        },{
                   		            text: "单位",
                   		            dataIndex: "unit",
                   		            width: 150
                   		        },{
                   		            text: "单价",
                   		            dataIndex: "univalent",
                   		            width: 150
                   		        },{
                   		            text: "货币",
                   		            dataIndex: "currency",
                   		            width: 150
                   		        },{
                   		            text: "产品描述",
                   		            dataIndex: "prodDesc",
                   		            width: 150
                   		        },{
                   		            text: "品牌",
                   		            dataIndex: "brand",
                   		            width: 150
                   		        },{
                   		            text: "制造商名称",
                   		            dataIndex: "manufName",
                   		            width: 150
                   		        },{
                   		            text: "货期（交期）",
                   		            dataIndex: "deliveTime",
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