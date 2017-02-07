package com.hc.scm.uc.web.purchasing.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hc.scm.common.base.service.BaseCrudService;
import com.hc.scm.common.base.web.BaseCrudController;
import com.hc.scm.uc.dao.purchasing.model.HcSupplierContacts;
import com.hc.scm.uc.purchasing.service.HcSupplierContactsManagementService;



/**
 * Description: 请写出类的用途
 * All rights Reserved, Designed Byhcopyright:   Copyright(C) 2016-2017
 * Company:     hc.
 * @author:     jinxi.li
 * @date:  2016年8月21日
 * @version 1.0.0
 */
@Controller
@RequestMapping("/hc_supplier_contacts_management_list")
public class HcSupplierContactsManagementController extends BaseCrudController<HcSupplierContacts> {
	
	@Resource
    private HcSupplierContactsManagementService hcSupplierContactsManagementService;
	
	@Override
	protected BaseCrudService init() {
		// TODO Auto-generated method stub
		return hcSupplierContactsManagementService;
	}

}
