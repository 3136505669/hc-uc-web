Ext.define('Hc_Framework.view.hc.HcSupplierContactsManagementNewEditController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsuppliercontactsmanagementneweditcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierContactsManagementList',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnchange:function(obj , newValue , oldValue , eOpt){
	 	var  store_=this.view.me_.workObject.store;
		store_.beginUpdate();
	 	if(obj.is('combo')){
	 		this.view.record.set(obj.name, obj.getRawValue()); 		
	 	}else{
	 		this.view.record.set(obj.name, obj.getRawValue()); 	
	 	}


	 	
	 	if(this.view.title=='编辑'){
      		
			this.flag=false
      		
      	}else if(this.view.title=='新增'){
      		 
            	
            	this.flag=true;
      	}
	 	store_.endUpdate();
	},
	onBtnSaveClick:function(){
	    if(this.view.title=='编辑'){
      		
			this.flag=false
      		
      	}else if(this.view.title=='新增'){
      		 
            	
            	this.flag=true;
      	}

	    for(i=0;i<this.record_.getFields().length-3;i++){
			
			  if(!this.lookupReference(Ext.util.Format.trim(this.record_.getFields()[i].getName())).isValid()){
				  return;
			  }
		}
	    this.view.me_.workObject.store.add(this.view.record);
	    this.view.me_.onBtnSaveClick(null,this)
	},
	onBtnCancelClick:function(){
		if(this.flag){
			  this.view.me_.workObject.store.removeAt(this.view.me_.workObject.store.getCount()-1);
			  //this.view.me_.workObject.getStore().rejectChanges();
			  this.view.me_.workObject.view.refresh();
			  this.flag=false
		}
		
      if(this.view.title=='编辑'){

      	this.view.me_.onBtnCancelClick();
    		
    	}
		  this.view.hide();
	}
	
});