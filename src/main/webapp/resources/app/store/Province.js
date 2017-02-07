Ext.define('Hc_Framework.store.Province',{
    extend:'Hc_Common.store.ComBase',
  
    alias:'store.province',
    proxy: {
    	url: Hc.basePath +'hc_file_json_province_list/province.json'
    },
    fields: [
             {
	        	 name: 'id',
	        	 type: 'int'
             },  
       		 {
    			 name: 'provinceNo', 
    			 type: 'string'
             },  
       		 {
				 name: 'provinceName', 
				 type: 'string'
             }
     ] 
});