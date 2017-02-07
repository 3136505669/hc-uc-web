Ext.define('Hc_Framework.store.City',{
    extend:'Hc_Common.store.ComBase',
  
    alias:'store.city',
    id:'nihao',
    autoLoad: false,
    proxy: {
    	url: Hc.basePath +'hc_file_json_city_list/city.json',
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
     ],
     init: function () {
    	// this.load();
     }
});