/**
 * Description: 报价管理 view
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
Ext.define('Hc_Framework.model.HcQuote', {
    extend: Ext.data.Model,

    alias: 'model.hcquote',

    fields: [
        {name: 'quoteCode'},
        {name: 'quoteByCode'},
        {name: 'quoteByName'},
        
        {name: 'custCode'},
        {name: 'custName'},
        {name: 'custTel'},
        
        {name: 'custAddr'},
        {name: 'custFax'},
        {name: 'contactBy'},
        
        {name: 'contacTByTel'},
        {name: 'contactByEmail'},
        {name: 'quoteMode'},
        
        {name: 'purposePlace'},
        {name: 'deliverGoodsMode'},
        {name: 'deliverGoodsDate'},
        
        {name: 'paymentMode'},
        {name: 'packing'},
        {name: 'remark'},
        
        {name: 'currency'},
        {name: 'examApprByCode'},
        {name: 'examApprByName'},
        
        {name: 'freight'},
        {name: 'insurance'},
        {name: 'taxRate'},
        
        {name: 'rebate'},
    ],

    idProperty: 'quoteCode'
});