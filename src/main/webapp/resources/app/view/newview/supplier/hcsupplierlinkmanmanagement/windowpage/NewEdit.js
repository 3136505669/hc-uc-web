Ext.define("Hc_Framework.view.hc.HcSupplierContactsManagementNewEdit", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsuppliercontactsmanagementnewedit',

    requires: [
        'Hc_Framework.view.hc.HcSupplierContactsManagementNewEditController',
        'Hc_Framework.view.hc.HcSupplierContactsManagementNewEditModel',
        'Hc_Framework.store.City',
        'Hc_Framework.store.Province'
    ],

    controller: "hcsuppliercontactsmanagementneweditcontroller",

    viewModel: {
        type: "hcsuppliercontactsmanagementneweditmodel"
    },
    title:'新增',
    width: (window.screen.availWidth/7)*4.45,
    height:(window.screen.availHeight/3)*2,
    layout:'fit',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
    reference:'hcsuppliercontactsmanagementnewedit',
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
            	 this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='C0'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
                 this.lookupReference('contactsNo').setValue(supplierNo_);
                 this.lookupReference('modifyUser').disabled=true;
                 this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('companyTel').disabled=true;
                 this.lookupReference('companyFax').disabled=true;
                 this.lookupReference('companyAddr').disabled=true;
                 
                 
                 this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('loginDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            
             }else if(this.title=='编辑'){
            	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
            		 
            		 if((this.getReferences())[name]){
            			 if(this.lookupReference(name).is('combo')){
                			 this.lookupReference(name).setRawValue(this.record.get(name));
                		 }else{
                			 this.lookupReference(name).setValue(this.record.get(name));
                		 }
            		 }
            		
            	
            	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:new Ext.form.FormPanel({//窗体中中是一个一个TabPanel
       		  title:'--->供应商管理',
       		  deferredRender:false,
       		  bodyPadding: 0,
       		  layout: {
       		      type: 'form'
       		     // columns:3
       		  },
       		  header: {
       		      height: 20,
       		      padding: 0
       		  },
       	       
       		  collapsible: true,
       		
       		  bodyStyle: 'background:#dbdbe0; padding:0px;',
       		  scrollable:true,
       		  defaults:{
       			  border:false  ,
       			  bodyPadding: 0,
       		  },
       	 	  items:[{
        			
       			 layout : "column", //第一行
       			 defaults:{
       				 border:false ,
       				 bodyPadding: 0,
       				 labelWidth: 70,
       				 
       			 labelAlign: 'right',
       			 bodyStyle: 'background:#cbdbe0; padding:0px;'
       			 },
       			 itemCls:'margin:0px;',
       			 bodyStyle: 'background:#cbdbe0; padding:0px;border:0px',
       			 items:[
     				{

     			      layout : "form", 
     			      columnHeight:.9,
     				  items: [
     					 {
     						   readOnly:true, 
     					   labelWidth:65, 
     					   xtype: 'textfield', 
     					   fieldLabel:'联系人编码', 
     					   name: 'contactsNo',
     					   reference:'contactsNo'
     				       }
     				   ]
     				 },
     			    {
     			    columnWidth : .92,             
     			    layout : "form",   
     				items: [
     				       {
     					   labelWidth:65,
     					   width:550,
     					   xtype: 'textfield', 
     					   fieldLabel:'联系人名称', 
     					   name: 'contactsName',
     					   allowBlank:false,
     					   blankText:'此栏不允许为空',
     					   maxLength:120,
     					   maxLengthText:'此框允许输入不大于120个字符',
      					   minLength:5,
      					   minLengthText:'此框允许输入不少于5个字符',
     					   reference:'contactsName',
     					   listeners: {
     				         render: function(obj) {
     						     var font=document.createElement("font");
     						     font.setAttribute("color","red");
     						     var tips=document.createTextNode('*');//这个就是后面的文字提示信息
     						     font.appendChild(tips);
     						     obj.el.dom.appendChild(font);
     				        }
     					  }
     				    }
     				   ]
     				 }
     												 
     			]
       		  },
       		 {

       			 layout : "column", //第三行
       			 defaults:{
       					 border:false ,
       					 bodyPadding: 0,
       					 labelWidth: 70,
       					 labelAlign: 'right',
       					 bodyStyle: 'background:#cbdbe0; padding:0px;'
       			 },

       			 bodyStyle: 'background:#cbdbe0; padding:0px;',

       			 items:[
       			 {

     			      layout : "form", 
     			     
     				  items: [
							{
								labelWidth:65, 
  							    xtype: 'combo', 
  							    fieldLabel:'性&nbsp;&nbsp;&nbsp;&nbsp;别', 
  							    reference:'sex',
			                    name: 'sex',
  							    allowBlank:false,
  							    value:'1',
  							    store: [['',''],[1, '男'], [0, '女']]  
							 },
							 {
   	       					   labelWidth:65, 
  	       					   xtype: 'textfield', 
  	       					   fieldLabel:'毕业学校',
  	       					   reference:'graduateSchool',
  	       					   name: 'graduateSchool'
  	       					   }
						     ,
	       					   {
	       	     				   labelWidth:65,
	       	     				   width:550,
	       	     				   xtype: 'textfield', 
	       	     				   fieldLabel:'电子邮件', 
	       	     				   reference:'email',
	       	    				   name: 'email',
	       	    				   vtype:'email'
	       	     			    }
     				    ]
       			  },
       			  {
     				    columnWidth : .4,             
     				    layout : "form",   
     					items: [
							{
								   labelWidth:65, 
								   xtype: 'textfield', 
								   fieldLabel:'籍&nbsp;&nbsp;&nbsp;&nbsp;贯', 
								   reference:'placeOfOrigin',
								   name: 'placeOfOrigin'
							 }
         				      ,
           					 {
         				    	labelWidth:65, 
 							    xtype: 'combo', 
 							    fieldLabel:'最高学历', 
 							    reference:'highestDegree',
 			                    name: 'highestDegree',
 							    allowBlank:false,
 							    value:'5',
 							    store: [['',''],[1, '小学'], [2, '初中'], [3, '高中'], [4, '大专'], [5, '本科'], [6, '研究生'], [7, '硕士'], [8, '博士'], [9, '博士后']] 
 	     					   } ,
           					    {
         						   labelWidth:65, 
         						   xtype: 'textfield', 
         						   fieldLabel:'职&nbsp;&nbsp;&nbsp;&nbsp;位',
         						   reference:'job',
         						   name: 'job'
         						   }
         				       
     					   ]
       			  }
       			 ,
       			  {
     				    columnWidth : .5,             
     				    layout : "form",   
     					items: [
						  {
							   labelWidth:65,
							   width:550,
							   xtype: 'datefield', 
							   fieldLabel:'出生日期', 
							   name: 'dateOfBirth',
							   reference:'dateOfBirth',
							   regex:/^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/,
     						   regexText:'日期格式yyyy-mm-dd  如：1988-02-23'
						   }
						    ,
						   {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'固定电话', 
     						   name: 'contactsTel',
     						   regex:/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/,
     						   regexText:'正确的电话号码，\n\n如：0591-6487256，15005059587',
     						   reference:'contactsTel'
     				       },
     				       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'部&nbsp;&nbsp;&nbsp;&nbsp;门', 
     						   reference:'department',
     	     				   name: 'department',
     						   maxLength:48,
     						   maxLengthText:'最大字符长度48字符',
     					   }
     					 ]
       			  }
       											 
       			 ]								 
       			 },
       			 
       		   {
     			 layout : "column", //第五行
     			 defaults:{
     			 border:false ,
     			 bodyPadding: 0,
     			 labelWidth: 70,
     			 labelAlign: 'right',
     			 bodyStyle: 'background:#cbdbe0; padding:0px;'
     			 },

     			 bodyStyle: 'background:#cbdbe0; padding:0px;',

     			 items:[
     			 {

     			    layout : "form", 
     			     
     				items: [
     					  {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'公司名称', 
     						   reference:'companyName',
   	     				       name: 'companyName',
	   	     				   allowBlank:false,
	      					   blankText:'此栏不允许为空',
   	     				       listeners: {
	       					       render: function(obj) {
	       						     var font=document.createElement("font");
	       						     font.setAttribute("color","red");
	       						     var tips=document.createTextNode('*');//这个就是后面的文字提示信息
	       						     font.appendChild(tips);
	       						    obj.el.dom.appendChild(font);
	       					       }

       					       }
     				       }
     				       
     				   ]
     			  },
     			  {
     				    columnWidth : .4,             
     				    layout : "form",   
     					items: [
     					       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'公司传真', 
     						   reference:'companyFax',
 	     				       name: 'companyFax',
 	     				       regex:/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/,
   						       regexText:'可以匹配的字符串如：+123 -999 999 ； +123-999 999 ；123 999 999 ；+123 999999'
     						   
     					       }
     					   ]
     			  }
     			 ,
     			  {
     				    columnWidth : .5,             
     				    layout : "form",   
     					items: [
     					       {
     						   labelWidth:65,
     						   width:550,
     						   xtype: 'textfield', 
     						   fieldLabel:'公司电话', 
     						   reference:'companyTel',
     				           name: 'companyTel', 
     				           regex:/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/,
    						   regexText:'正确的电话号码，\n\n如：0591-6487256，15005059587',
     					       }
     					   ]
     			  }
     											 
     			 ]								 
     			 },
     			{

       				 layout : "column", //第七行
       				 defaults:{
       						 border:false ,
       						 bodyPadding: 0,
       						 labelWidth: 70,
       						 labelAlign: 'right',
       						 bodyStyle: 'background:#cbdbe0; padding:0px;'
       				 },

       				 bodyStyle: 'background:#cbdbe0; padding:0px;',

       				 items:[	
       				  {
       					    columnWidth : .9,             
       					    layout : "form",   
       						items: [
       						     {
           						   labelWidth:65,
           						   width:550,
           						   xtype: 'textfield', 
           						   fieldLabel:'公司地址', 
           						   reference:'companyAddr',
      	     				       name: 'companyAddr',
      	     				       minLength:10,
            					   minLengthText:'此框允许输入不少于10个字符',
            					   maxLength:145,
            					   maxLengthText:'此框允许输入不大于145个字符'
           					       }	    

       						   ]
       				  }
       												 
       				   ]								 
       				 },
       			 
       			 {

       				 layout : "column", //第六行
       				 defaults:{
     						 border:false ,
     						 bodyPadding: 0,
     						 labelWidth: 70,
     						 labelAlign: 'right',
     						 bodyStyle: 'background:#cbdbe0; padding:0px;'
       				 },

       				 bodyStyle: 'background:#cbdbe0; padding:0px;',

       				 items:[
       				 {

       				    layout : "form", 
       				 //columnWidth : .5,  
       					items: [
       						  {
       							   labelWidth:65, 
       							   xtype: 'textfield', 
       							   fieldLabel:'项目角色', 
       							   reference:'projectRole',
   				                   name: 'projectRole'
       					       }
       					   ]
       				  },
       				  {
       					    columnWidth : .4,             
       					    layout : "form",   
       						items: [
       						       {
       							   labelWidth:65,
       							   width:550,
       							   xtype: 'textfield', 
       							   fieldLabel:'移动电话', 
       							   reference:'mobilePhone',
				                   name: 'mobilePhone',
				                   allowBlank:false,
		     					   blankText:'此栏不允许为空',
				                   regex:/^1[34578]\d{9}$/,
        						   regexText:'正确的电话号码，15005059587',
		     					   listeners: {
		     				         render: function(obj) {
		     						     var font=document.createElement("font");
		     						     font.setAttribute("color","red");
		     						     var tips=document.createTextNode('*');//这个就是后面的文字提示信息
		     						     font.appendChild(tips);
		     						     obj.el.dom.appendChild(font);
		     				        }
		     					  }
       						    }
       						  ]
       				  }
       				 ,
       				  {
       					    columnWidth : .5,             
       					    layout : "form",   
       						items: [
       						       {
       						    	labelWidth:65, 
      							    xtype: 'combo', 
      							    fieldLabel:'是否共享', 
      							    reference:'whetherToShare',
				                    name: 'whetherToShare',
      							    allowBlank:false,
      							    editable:false,
      							    value:'0',
      							    store: [['',''],[1, '是'], [0, '否']]
       						       }
       						   ]
       				  }
       												 
       				 ]								 
       				 },
       				 
       				{

           				 layout : "column", //第七行
           				 defaults:{
           						 border:false ,
           						 bodyPadding: 0,
           						 labelWidth: 70,
           						 labelAlign: 'right',
           						 bodyStyle: 'background:#cbdbe0; padding:0px;'
           				 },

           				 bodyStyle: 'background:#cbdbe0; padding:0px;',

           				 items:[	
           				  {
           					    columnWidth : .9,             
           					    layout : "form",   
           						items: [
           						       {
           						    	
	   	       							   labelWidth:65, 
	   	       							   xtype: 'textfield', 
	   	       							   fieldLabel:'通讯地址', 
	   	       							   reference:'mailingAddress',
	   	   				                   name: 'mailingAddress',
			   	   				           allowBlank:false,
			   	       					   blankText:'此栏不允许为空',
			   	       					   minLength:10,
			   	       					   minLengthText:'此框允许输入不少于10个字符',
			   	       					   maxLength:145,
			   	       					   maxLengthText:'此框允许输入不大于145个字符',
           	       					        
           						       }
           						   ]
           				  }
           												 
           				   ]								 
           				 },
       				 {

       				 layout : "column", //第七行
       				 defaults:{
       						 border:false ,
       						 bodyPadding: 0,
       						 labelWidth: 70,
       						 labelAlign: 'right',
       						 bodyStyle: 'background:#cbdbe0; padding:0px;'
       				 },

       				 bodyStyle: 'background:#cbdbe0; padding:0px;',

       				 items:[
       				 {

       				    layout : "form", 
       				     
       					items: [
       						  {
       							   labelWidth:65, 
       							   xtype: 'textfield', 
       							   fieldLabel:'创建用户', 
       							   reference:'createUser',
			                       name: 'createUser'
       					       },
       					       {
       							   labelWidth:65, 
       							   xtype: 'textfield', 
       							   fieldLabel:'所在部门', 
       							   reference:'localDepartment',
			                       name: 'localDepartment'
       						   }
       					   ]
       				  },
       				  {
       					    columnWidth : .4,             
       					    layout : "form",   
       						items: [
       						       {
       							   labelWidth:65,
       							   width:550,
       							   xtype: 'textfield', 
       							   fieldLabel:'修改用户', 
       							   reference:'modifyUser',
			                       name: 'modifyUser'
       						       },
       						       {
       								   labelWidth:65, 
       								   xtype: 'textfield', 
       								   fieldLabel:'修改时间', 
       								   reference:'modifyDate',
 			                           name: 'modifyDate' 
       							   }
       						   ]
       				  }
       				 ,
       				  {
       					    columnWidth : .5,             
       					    layout : "form",   
       						items: [
       						       {
       							   labelWidth:65,
       							   width:550,
       							   xtype: 'textfield', 
       							   fieldLabel:'登录日期', 
       							   reference:'loginDate',
		                           name: 'loginDate' 
       						       }
       						   ]
       				  }
       												 
       				   ]								 
       				 },
       				 
       				 
       			     {
       					
       					 layout : "column", //第八行
       					 defaults:{
       						 border:false ,
       						 bodyPadding: 0,
       						 labelWidth: 70,
             					 labelAlign: 'right',
             					 rows:4,
             					 bodyStyle: 'background:#cbdbe0; padding:0px;'
       					 },
       					
       					 bodyStyle: 'background:#cbdbe0; padding:0px;',
       					 items:[
     						{

     					    layout : "form", 
     					    columnWidth : .88,
     						items: [
     							 {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'兴&nbsp;&nbsp;&nbsp;趣&nbsp;&nbsp;&nbsp;爱&nbsp;&nbsp;&nbsp;好', 
     							   reference:'hobbiesAndInterests',
		                           name: 'hobbiesAndInterests' 
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'印&nbsp;&nbsp;象&nbsp;&nbsp;评&nbsp;&nbsp;价', 
     							   reference:'impressionEvaluation',
		                           name: 'impressionEvaluation'
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'往&nbsp;&nbsp;来&nbsp;&nbsp;策&nbsp;&nbsp;略', 
     							   reference:'currentPolicy',
		                           name: 'currentPolicy'
     						       },
     						      {
     							   height:6, 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注', 
     							   reference:'describee',
		                           name: 'describee' 
     						       }
     						   ]
     					  }
     					]
       																				 
       			   }]  
       	   	}),
       });
        me.callParent();
    }
});