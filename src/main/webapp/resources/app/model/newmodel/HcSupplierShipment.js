/**
 * Description: 供应商管理 view
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
Ext.define('Hc_Framework.model.HcSupplierShipment', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliershipment',

    fields: [
        {name: 'shipmentNo'},//发运编号
        {name: 'orderNo'},//订单编号
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编号
        {name: 'transportCompany'},//运输公司
        {name: 'destinationStation'},//目 的 站
        
        {name: 'airWayBillNo'},//运单号
        {name: 'transportationExpenses'},//运　　费
        {name: 'premium'},//保　　费
        
        {name: 'numberOfPackages'},//件　　数
        {name: 'pickUpThePhone'},//提货电话
        {name: 'typeOfShipping'},//运输方式
        
        {name: 'paymentMethod'},//收款方式
        {name: 'theTargetDateOfDispatch'},//目标起运日
        {name: 'theActualSateOfDispatch'},//实际起运日
        
        {name: 'consignee'},//收 货 人
        {name: 'receivingPhone'},//收货人电话
        {name: 'deliveryUnit'},//送货单位
        
        {name: 'consignor'},//发 货 人
        {name: 'consignorPhone'},//发货人电话
        {name: 'salesPerson'},//销 售 员
        
        {name: 'localDepartment'},//所在部门
        {name: 'freightBurden'},//运费负担
        {name: 'receivablesAmount '},//收款金额
        
        {name: 'specialRequirements'},//特别要求
        {name: 'examinationAndApprovalOpinions'},//审批意见
        {name: 'remarks'},
        
    ],

    idProperty: 'deliveryOfCargoFromTorageNo'
});