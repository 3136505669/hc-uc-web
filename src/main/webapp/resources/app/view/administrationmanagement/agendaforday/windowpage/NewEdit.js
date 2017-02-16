Ext.define("Hc_Framework.view.hc.SubHcAgendaForDay", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcagendaforday',

    

    controller: "subhcagendafordaycontroller",

    viewModel: {
        type: "subhcagendafordaymodel"
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
									    fieldLabel: '編碼',
									    name: 'agendaForDayCode',
				     					reference:'agendaForDayCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '日程类型',
									    name: 'agendaForDayType',
				     					reference:'agendaForDayType'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '日程名称',
									    name: 'agendaForDayName',
				     					reference:'agendaForDayName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '日程员工',
									    name: 'agendaForDayEmploy',
				     					reference:'agendaForDayEmploy'
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
	   								    fieldLabel: '开始时间',
	   								    name: 'startDate',
	   								
				     					reference:'startDate'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '结束时间',
   									    name: 'endDate',
				     					reference:'endDate',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    //width:500,
   									    fieldLabel: '是否提醒',
   									    name: 'orNotRemind',
				     					reference:'orNotRemind',
   									    colspan:1
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '提醒时间',
	   								    name: 'remindDate',
	   								
				     					reference:'remindDate'
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '所在部门',
	   								    name: 'locationDept',
	   								
				     					reference:'locationDept'
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '是否共享',
	   								    name: 'orNotShare',
	   								
				     					reference:'orNotShare'
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
                                y: 94,
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
                                title:'日程描述',
                                padding:'0 0 0 0',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'htmleditor',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:900,
									    height:400,
									    name: 'agendaForDayDesc',
				     					reference:'agendaForDayDesc',
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