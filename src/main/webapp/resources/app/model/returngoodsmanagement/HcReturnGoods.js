/**
 * Description: 退货管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月21日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.HcReturnGoods', {
    extend: Ext.data.Model,

    alias: 'model.hcreturngoods',

    fields: [
        {name: 'returnGoodsCode'},
        {name: 'inChargeByCode'},
        {name: 'inChargeByName'},
        
        {name: 'subject'},
        {name: 'custCode'},
        {name: 'custName'},
        
        {name: 'currency'},
        {name: 'returnGoodsDate'},
        {name: 'remark'}
   ],

    idProperty: 'returnGoodsCode'
});