Ext.define("Hc_Framework.view.hc.SubHcMaintain", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcmaintain',

    

    controller: "subhcmaintaincontroller",

    viewModel: {
        type: "subhcmaintainmodel"
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
									    name: 'maintainCode',
				     					reference:'maintainCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '业务员',
									    name: 'salesmanName',
				     					reference:'salesmanName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '维修员',
									    name: 'maintainByName',
				     					reference:'maintainByName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '维修类别',
									    name: 'maintainType',
				     					reference:'maintainType'
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
   									    name: 'custContactBy',
				     					reference:'custContactBy',
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
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户邮箱',
	   								    name: 'custEmail',
	   								
				     					reference:'custEmail'
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
									    fieldLabel: '外发厂',
									    name: 'puttOutFactName',
				     					reference:'puttOutFactName'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品编码 ',
									    name: 'prodCode',
				     					reference:'prodCode'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品名称',
									    name: 'prodName',
				     					reference:'prodName',
									 
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
									    fieldLabel: '机身号码',
									    name: 'airframeNo',
				     					reference:'airframeNo',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '处理方式',
									    name: 'processMode',
				     					reference:'processMode',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费支付',
									    name: 'freightPayment',
				     					reference:'freightPayment',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '保修',
									    name: 'guarantee',
				     					reference:'guarantee',
									
									},{
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
									    fieldLabel: '运输方式',
									    name: 'transportMode',
				     					reference:'transportMode',
									
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
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '费用支付',
									    name: 'costPayment',
				     					reference:'costPayment',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收件日期',
									    name: 'consigneeDate',
				     					reference:'consigneeDate',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '维修费用',
									    name: 'maintainCost',
				     					reference:'maintainCost',
									
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
									    fieldLabel: '故障现象',
									    name: 'faultPhenomenon',
				     					reference:'faultPhenomenon',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '故障原因',
									    name: 'faultReason',
				     					reference:'faultReason',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '维修记录',
									    name: 'maintainRecord',
				     					reference:'maintainRecord',
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