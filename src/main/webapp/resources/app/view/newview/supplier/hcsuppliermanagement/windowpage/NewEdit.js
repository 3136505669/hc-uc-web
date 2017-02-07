Ext.define("Hc_Framework.view.hc.HcSupplierManagementNewEdit", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsuppliermanagementnewedit',

    requires: [
        'Hc_Framework.view.hc.HcSupplierManagementNewEditController',
        'Hc_Framework.view.hc.HcSupplierManagementNewEditModel',
        'Hc_Framework.store.City',
        'Hc_Framework.store.Province'
    ],

    controller: "hcsuppliermanagementneweditcontroller",

    viewModel: {
        type: "hcsuppliermanagementneweditmodel"
    },
    title:'新增',
    width: (window.screen.availWidth/7)*4.45,
    height:(window.screen.availHeight/3)*2,
    layout:'fit',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
    reference:'hcsuppliermanagementnewedit',
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
                 supplierNo_='S0'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHmsu");
                 this.lookupReference('companyNo').setValue(supplierNo_);
                 this.lookupReference('modifyUser').disabled=true;
                 this.lookupReference('modifyDate').disabled=true;
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
     					   fieldLabel:'供应商编码', 
     					   name: 'companyNo',
     					   reference:'companyNo'
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
     					   fieldLabel:'供应商名称', 
     					   name: 'companyName',
     					   allowBlank:false,
     					   blankText:'此栏不允许为空',
     					   maxLength:120,
     					   maxLengthText:'此框允许输入不大于120个字符',
      					   minLength:10,
      					   minLengthText:'此框允许输入不少于10个字符',
     					   reference:'companyName',
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
     						   xtype: 'textfield', 
     						   fieldLabel:'公司电话', 
     						   name: 'companyTel',
     						   regex:/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/,
     						   regexText:'正确的电话号码，\n\n如：0591-6487256，15005059587',
     						   reference:'companyTel'
     				       },
     				       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'公司网址', 
     						   reference:'companyNet',
     						   name: 'companyNet',
     						   vtype:'url'
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
     						   fieldLabel:'公司传真', 
     						   name: 'companyFax',
    						   reference:'companyFax',
    						   regex:/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/,
     						   regexText:'可以匹配的字符串如：+123 -999 999 ； +123-999 999 ；123 999 999 ；+123 999999'
     					       },
     				       {
     					   labelWidth:65, 
     					   xtype: 'textfield', 
     					   fieldLabel:'邮 &nbsp;&nbsp;&nbsp;&nbsp; 编',
     					   reference:'companyZipCode',
     					   name: 'companyZipCode',
     					   regex:/^[1-9][0-9]{5}$/,
     					   regexText:'邮政编码格式不正确！'
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
     				   fieldLabel:'电子邮件', 
     				   reference:'email',
    				   name: 'email',
    				   vtype:'email'
     			       },
     				       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'国&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;家', 
     						   reference:'country',
     	     				   name: 'country',
     						   maxLength:48,
     						   maxLengthText:'最大字符长度48字符',
     					   }
     					 ]
       			  }
       											 
       			 ]								 
       			 },
       			 {
       			
       			 layout : "column", //第四行
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
     			    columnWidth : .3,
     				items: [
     					 { 
     					   labelWidth:65, 
     					   xtype: 'extcombox', 
     					   store: Ext.create('Hc_Framework.store.Province'),
     					   fieldLabel:'省&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;份', 
     					   reference:'province',
	     				   name: 'province',
     					   displaymember:'provinceName',
     					   valuemember:'provinceNo',
     					   allowBlank:false,
     					   blankText:'请选择省份',
     					   emptyText:'请选择省份',
     					   editable:false,
     						   listeners: {
     						       render: function(obj) {
     							     var font=document.createElement("font");
     							     font.setAttribute("color","red");
     							     var tips=document.createTextNode('*');//这个就是后面的文字提示信息
     							     font.appendChild(tips);
     							     obj.el.dom.appendChild(font);
     							      
     						       },
     						       select:function(obj,records){ 

         						    			  var   city=me.lookupReference('city');
            							    	  
            							          var   storeCity=city.store;

            							    	  Ext.apply(storeCity.proxy, {
            							    		  extraParams: {                         
            							    			  provinceNo : records.data.provinceNo
            									              },
            									              writer:{type:"json"}
            							    	  });
            							    	  
            							    	  storeCity.reload();
            							    	  city.value=0;
         						    	
     						       }

     						   }
     				       }
     				   ]
     			 }, 
     			{
     		       
     			    layout : "form", 
     			    columnWidth : .3,
     				items: [
     					 {	 
     					   labelWidth:65, 
     					   fieldLabel:'城&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;市', 
     					   xtype:'extcombox',
     					    store: Ext.create('Hc_Framework.store.City'),
     						   displaymember:'cityName',
     						   valuemember:'cityID',
     					       allowBlank:false,
     						   blankText:'请选择城市',
     						   emptyText:'请选择城市',
     						   editable:false,
     						   reference:'city',
  	     				       name: 'city',
     						   listeners: {
     						       render: function(obj) {
     							     var font=document.createElement("font");
     							     font.setAttribute("color","red");
     							     var tips=document.createTextNode('*');//这个就是后面的文字提示信息
     							     font.appendChild(tips);
     							     obj.el.dom.appendChild(font);
                                      console.info(this);
                                    //me.lookupReference('detailedadress').disabled=false;
     						     }
     					     }
     				       }
     				   ]
     			 },
     			{
       		       
      			    layout : "form", 
      			    columnWidth : .8,
      				items: [
      					 {	 
      					   labelWidth:65, 
       					   xtype: 'textfield', 
       					   fieldLabel:'详细地址', 
       					   name: 'companyAddr',
       					   allowBlank:false,
       					   blankText:'此栏不允许为空',
       					   minLength:10,
       					   minLengthText:'此框允许输入不少于10个字符',
       					   maxLength:145,
       					   maxLengthText:'此框允许输入不大于145个字符',
       					   reference:'companyAddr',
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
     						   fieldLabel:'法人代表', 
     						   reference:'legalRepresentative',
   	     				       name: 'legalRepresentative',
     				       },
     				       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'注册资本', 
     						   reference:'registeredCapital',
 	     				       name: 'registeredCapital',
     						   regex:/^[0-9]*$/,
     						   regexText:'只能输入数字！'
     						   
     					   },
     				       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'使用货币', 
     						   reference:'useCurrency',
 	     				       name: 'useCurrency'
     					   },
     				       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'年度收入', 
     						   reference:'yearEarning',
	     				       name: 'yearEarning',
     						   regex:/^[0-9]*$/,
     						   regexText:'只能输入数字！'
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
     						   fieldLabel:'组织形式', 
     						   reference:'organizationForm',
	     				       name: 'organizationForm',
     					       },
     					       {
     							   labelWidth:65, 
     							   xtype: 'textfield', 
     							   fieldLabel:'营业执照', 
     							   reference:'businessLicense',
  	     				           name: 'businessLicense',  
     						   },
     					       {
     							   labelWidth:65, 
     							   xtype: 'textfield', 
     							   fieldLabel:'联系人', 
     							   reference:'linkMan',
  	     				           name: 'linkMan', 
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
     						   },
     					       {
     							   labelWidth:65, 
     							   xtype: 'textfield', 
     							   fieldLabel:'跟单采购', 
     							   reference:'docPurchasing',
	     				           name: 'docPurchasing' 
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
     						   fieldLabel:'供应商性质', 
     						   reference:'supplierTypes',
     				           name: 'supplierTypes', 
     					       },
     					       {
     							   labelWidth:65, 
     							   xtype: 'textfield', 
     							   fieldLabel:'行&nbsp;业&nbsp;类&nbsp;型', 
     							   reference:'industryTypes',
        				           name: 'industryTypes', 
     						   },
     					       {
     							   labelWidth:65, 
     							   xtype: 'textfield', 
     							   fieldLabel:'供应商级别', 
     							   reference:'supplierLevel',
       				               name: 'supplierLevel', 
     						   },
     					       {
     							   labelWidth:65, 
     							   xtype: 'textfield', 
     							   fieldLabel:'联系人手机', 
     							   reference:'linkManTel',
      				               name: 'linkManTel',
     							   allowBlank:false,
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
       				     
       					items: [
       						  {
       							   labelWidth:65, 
       							   xtype: 'textfield', 
       							   fieldLabel:'开户银行', 
       							   reference:'bankOfDeposit',
   				                   name: 'bankOfDeposit'
       					       },
       					       {
       							   labelWidth:65, 
       							   xtype: 'textfield', 
       							   fieldLabel:'付款方式', 
       							   reference:'paymentMethod',
				                   name: 'paymentMethod'
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
       							   fieldLabel:'银行账号', 
       							   reference:'bankAccount',
				                   name: 'bankAccount',
       							   regex:/^(\d{16}|\d{19})$/
       						       },
       					       {
       							   labelWidth:65, 
       							   xtype: 'textfield', 
       							   fieldLabel:'价值类别', 
       							   reference:'valueCategory',
				                   name: 'valueCategory',
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
       							   fieldLabel:'成立日期', 
       							   reference:'dateOfEstablishment',
				                   name: 'dateOfEstablishment'
       						       },
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
     							   fieldLabel:'公&nbsp;&nbsp;&nbsp;司&nbsp;&nbsp;&nbsp;规&nbsp;&nbsp;&nbsp;模', 
     							   reference:'companyScale',
		                           name: 'companyScale' 
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'销&nbsp;&nbsp;&nbsp;售&nbsp;&nbsp;&nbsp;能&nbsp;&nbsp;&nbsp;力', 
     							   reference:'abilityToSell',
		                           name: 'abilityToSell'
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'质&nbsp;&nbsp;&nbsp;量&nbsp;&nbsp;&nbsp;控&nbsp;&nbsp;&nbsp;制', 
     							   reference:'qualityControl',
		                           name: 'qualityControl'
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'公&nbsp;&nbsp;&nbsp;司&nbsp;&nbsp;&nbsp;简&nbsp;&nbsp;&nbsp;介', 
     							   reference:'companyProfile',
		                           name: 'companyProfile'
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'生产/销售产品类别', 
     							   reference:'categoryOfTheProduct',
		                           name: 'categoryOfTheProduct'
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'合&nbsp;&nbsp;&nbsp;作&nbsp;&nbsp;&nbsp;机&nbsp;&nbsp;&nbsp;会', 
     							   reference:'cooperationOpportunities',
		                           name: 'cooperationOpportunities' 
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
     //  console.info(me.items);
        me.callParent();
    }
});


/**	 var windowa = Ext.create('Hc_Framework.view.hc.HcSupplierManagementNewEdit', {
					      		     width: 600,
					      		     height: 200
					      		 });
					      		windowa.show();**/