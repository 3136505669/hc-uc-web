Ext.define("Hc_Framework.view.hc.SubHcCustomerComplain", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhccustomercomplain',

    

    controller: "subhccustomercomplaincontroller",

    viewModel: {
        type: "subhccustomercomplainmodel"
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
									    name: 'custComplainCode',
				     					reference:'custComplainCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '投诉主题',
									    name: 'custComplainName',
				     					reference:'custComplainName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '投诉类别',
									    name: 'complainType',
				     					reference:'complainType'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '投诉等级',
									    name: 'complainLevel',
				     					reference:'complainLevel'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '投诉日期',
									    name: 'complainDate',
				     					reference:'complainDate'
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
	   								    fieldLabel: '发票号',
	   								    name: 'invoiceNo',
	   								
				     					reference:'invoiceNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '批号',
   									    name: 'batchNo',
				     					reference:'batchNo',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    //width:500,
   									    fieldLabel: '订单号',
   									    name: 'orderNo',
				     					reference:'orderNo',
   									    colspan:1
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '合同号',
	   								    name: 'pactNo',
	   								
				     					reference:'pactNo'
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '当前状态',
	   								    name: 'currentState',
	   								
				     					reference:'currentState'
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
									    fieldLabel: '产品编码',
									    name: 'prodCode',
				     					reference:'prodCode',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品名称',
									    name: 'prodName',
				     					reference:'prodName',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品型号',
									    name: 'prodModel',
				     					reference:'prodModel',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '数量',
									    name: 'qty',
				     					reference:'qty',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '单位',
									    name: 'unit',
				     					reference:'unit',
									
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
									    fieldLabel: '供应商',
									    name: 'supplierName',
				     					reference:'supplierName',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发货日期(供应商)',
									    name: 'suppliDelivDate',
				     					reference:'suppliDelivDate',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户',
									    name: 'custName',
				     					reference:'custName',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发货日期(客户)',
									    name: 'delivDate',
				     					reference:'delivDate',
									
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
									    fieldLabel: '登记人',
									    name: 'registerBy',
				     					reference:'registerBy'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '登记日期',
									    name: 'registerDate',
				     					reference:'registerDate'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '责任人',
									    name: 'answerForBy',
				     					reference:'answerForBy'
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
									    fieldLabel: '质量标准',
									    name: 'qualityStrd',
				     					reference:'qualityStrd',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '运输标准',
									    name: 'transportStrd',
				     					reference:'transportStrd',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:443,
                            	width:980,
                            	layout: {
                               	 type: 'fit',
                                    columns:4
                                },
                                x: 3,
                                y: 170,
                                title:'投诉内容',
                                padding:'0 0 0 0',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'htmleditor',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:900,
									    height:400,
									    name: 'complainContent',
				     					reference:'complainContent',
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