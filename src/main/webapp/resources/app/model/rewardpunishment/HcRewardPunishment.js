/**
 * Description: 奖惩管理 view
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
Ext.define('Hc_Framework.model.HcRewardPunishment', {
    extend: Ext.data.Model,

    alias: 'model.hcrewardpunishment',

    fields: [
        {name: 'rewardPunishCode'},
        {name: 'employCode'},
        {name: 'employName'},
        
        {name: 'compCode'},
        {name: 'compName'},
        {name: 'dept'},
        
        {name: 'position'},
        {name: 'rewardPunishSpec'},
        {name: 'rewardPunSpecAccTo'},
        
        {name: 'drawBy'},
        {name: 'locaDept'},
        {name: 'registerDate'},
        
        {name: 'rewardPunishReason'},
        {name: 'remark'}

   ],

    idProperty: 'rewardPunishCode'
});