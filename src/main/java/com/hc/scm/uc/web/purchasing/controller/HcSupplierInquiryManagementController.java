package com.hc.scm.uc.web.purchasing.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.common.enums.CommonOperatorEnum;
import com.hc.scm.common.model.RequestCommonList;
import com.hc.scm.common.model.SystemUser;
import com.hc.scm.common.utils.ResultModel;

import com.hc.scm.uc.dao.purchasing.model.HcSupplierInquiry;

import com.hc.scm.uc.purchasing.service.HcSupplierInquiryManagementService;



/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2016-2017
 * Company:     hc.
 * @author:     jinxi.li
 * @date:  2016年8月21日
 * @version 1.0.0
 */
@Controller
@RequestMapping("/hc_supplier_inquiry_management_list")
public class HcSupplierInquiryManagementController extends BaseCrudController<HcSupplierInquiry> {
	
	@Resource
    private HcSupplierInquiryManagementService hcSupplierInquiryManagementService;
	
	@Override
	protected BaseCrudService init() {
		// TODO Auto-generated method stub
		return hcSupplierInquiryManagementService;
	}

}
