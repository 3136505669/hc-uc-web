/**
 * Description: 主框架应用程序
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.Application', {
    extend: 'Ext.app.Application',
    name: 'Hc_Framework', 
    appFolder:'resources/app',
    
    controllers: [
        'Root'
        // TODO: add controllers here
    ],
    launch: function () {
     console.info("军情解码李金喜");
    //  console.info("这是我们的ROOT");
      //  new  Hc_Framework.view.uclogin.Login();
     //   console.info("这是我们的ROOT1");
    }
});

/**
 * Description: 主框架控制器
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * -----------------------------------------
 *
 */

Ext.define('Hc_Framework.controller.Root', {
    extend: 'Ext.app.Controller',

    

    // 启动主程序
    onLaunch: function () {
        var me = this;
       /* Ext.create("Ext.panel.Panel",{
        	renderTo:Ext.getBody(),
        	layout:'fit',
        	width:1350,
        	height:680,
        	bodyStyle: 'background:red; padding:10px;',
        	autoScroll:true,
        	
        });*///.show();
       // me.showMainUI();
        //console.info("这是我们的ROOT");
      //  new  Hc_Framework.view.uclogin.Login();
       // console.info("这是我们的ROOT1");
        var currentUser = Ext.create("Hc_Framework.store.CurrentUser");
        console.info("这是我们jhg的ROOT1:"+currentUser.data.length);
        currentUser.load();
        console.info("这是我们的ROOT2:"+currentUser.data.length);
       //   Hc.alert('系统出错');
        console.info("出错了没有2-----"+currentUser.data.length);
        if (currentUser.data.length < 1) {
            Ext.Ajax.request({
                url: Hc.basePath + '/getCurrentLoginUser.json',
                success: function (result) {
                   console.info("Root----执行了没有");
                   console.info(result.responseText);
                    var p = JSON.parse(result.responseText);
                    if (p.result.resultCode == 0) {
                        var obj = Ext.create(currentUser.model, {
                        	userId:p.entity.userId,
                            userCode: p.entity.userCode,
                            userName: p.entity.userName,
                            deptName: p.entity.deptName,
                            isAdminGroup: p.entity.isAdminGroup,
                            email:p.entity.email,
                            password:p.entity.password
                        });
                       
                        obj.save();
                        currentUser.add(obj);
                        currentUser.sync(true);
                        currentUser.load();
                        console.info("这是我们的ROOT1Main1sssaaaaadasdfasd23232:");
                        console.info("这是我们的ROOT1Main1:"+currentUser.getAt(0).get('userCode'));
                        console.info("这是我们的ROOT1Main2:"+currentUser.getAt(0).get('userName'));
                        console.info("这是我们的ROOT1Main3:"+currentUser.getAt(0).get('email'));
                        console.info("这是我们的ROOT1Main3:"+currentUser.getAt(0).get('deptName'));
                        console.info("这是我们的ROOT1Main4:"+currentUser.getAt(0).get('password'));
                        me.showMainUI(currentUser.getAt(0));
                    } else {
                        Hc.alert(p.result.msg);
                    }
                },
                failure: function () {
                    Hc.alert('系统出错');
                }
            })
        } else {
           me.showMainUI(currentUser.getAt(0));
        }
        
      
    },

    // 显示主界面
      showMainUI: function (currentUser) {
    	console.info("这是我们的ROOT1Main:"+currentUser);
    	console.info(currentUser);
       Ext.widget('app-main', {viewModel: {data: {currentUser: currentUser}}});
    }
});


var hexcase = 0;  
var b64pad  = ""; 
var chrsz   = 8;  
function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
function calcMD5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}

function md5_vm_test()
{
  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
}

function core_md5(x, len)
{

  x[len >> 5] |= 0x80 << ((len) % 32);
  x[(((len + 64) >>> 9) << 4) + 14] = len;
  var a =  1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d =  271733878;
  for(var i = 0; i < x.length; i += 16)
  {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);
    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);
    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);
    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return Array(a, b, c, d);
  
}

function md5_cmn(q, a, b, x, s, t)
{
  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
}
function md5_ff(a, b, c, d, x, s, t)
{
  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
}
function md5_gg(a, b, c, d, x, s, t)
{
  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
}
function md5_hh(a, b, c, d, x, s, t)
{
  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
}
function md5_ii(a, b, c, d, x, s, t)
{
  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
}

function core_hmac_md5(key, data)
{
  var bkey = str2binl(key);
  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

  var ipad = Array(16), opad = Array(16);
  for(var i = 0; i < 16; i++) 
  {
    ipad[i] = bkey[i] ^ 0x36363636;
    opad[i] = bkey[i] ^ 0x5C5C5C5C;
  }

  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
  return core_md5(opad.concat(hash), 512 + 128);
}

function safe_add(x, y)
{
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return (msw << 16) | (lsw & 0xFFFF);
}

function bit_rol(num, cnt)
{
  return (num << cnt) | (num >>> (32 - cnt));
}

function str2binl(str)
{
  var bin = Array();
  var mask = (1 << chrsz) - 1;
  for(var i = 0; i < str.length * chrsz; i += chrsz)
    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
  return bin;
}

function binl2hex(binarray)
{
  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i++)
  {
    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
  }
  return str;
}

function binl2b64(binarray)
{
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for(var i = 0; i < binarray.length * 4; i += 3)
  {
    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
    for(var j = 0; j < 4; j++)
    {
      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
    }
  }
  return str;
}
/**
 * Description: 日程管理 view
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
Ext.define('Hc_Framework.model.HcAgendaForDay', {
    extend: Ext.data.Model,

    alias: 'model.hcagendaforday',

    fields: [
        {name: 'agendaForDayCode'},
        {name: 'agendaForDayType'},
        {name: 'agendaForDayName'},
        
        {name: 'agendaForDayEmploy'},
        {name: 'startDate'},
        {name: 'endDate'},
        
        {name: 'orNotRemind'},
        {name: 'remindDate'},
        {name: 'locationDept'},
        
        {name: 'orNotShare'},
        {name: 'agendaForDayDescribe'},
        {name: 'remark'},
   ],

    idProperty: 'agendaForDayCode'
});
/**
 * Description: 佣金管理 view
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
Ext.define('Hc_Framework.model.HcCommission', {
    extend: Ext.data.Model,

    alias: 'model.hccommission',

    fields: [
        {name: 'commiApplyCode'},
        {name: 'applyEmployCode'},
        {name: 'applyEmployName'},
        
        {name: 'locationDept'},
        {name: 'applyDate'},
        {name: 'businessId'},
        
        {name: 'commApplyReason'},
        {name: 'commCollectByContent'},
        {name: 'commPaymentMode'},
        
        {name: 'paymentBank'},
        {name: 'commPaymentDate'},
        {name: 'commPaymentedDate'},
        
        {name: 'remark'}
   ],

    idProperty: 'commiApplyCode'
});
/**
 * Description: 佣金管理子表 view
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
Ext.define('Hc_Framework.model.HcSubCommission', {
    extend: Ext.data.Model,

    alias: 'model.hcsubcommission',

    fields: [
        {name: 'id'},
        {name: 'businessId'},
        {name: 'CustCode'},
        
        {name: 'CustName'},
        {name: 'piNo'},
        {name: 'nameOfaPart'},
        
        {name: 'amount'},
        {name: 'amountUnit'},
        {name: 'qty'},
        
        {name: 'qtyUnit'},
        {name: 'commission'},
        {name: 'remark'},

    ],

    idProperty: 'id'
});
/**
 * Description: 客户投诉管理 view
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
Ext.define('Hc_Framework.model.HcCustomerComplain', {
    extend: Ext.data.Model,

    alias: 'model.hccustomercomplain',

    fields: [
        {name: 'custComplainCode'},
        {name: 'custComplainName'},
        {name: 'complainType'},
        
        {name: 'complainLevel'},
        {name: 'currentState'},
        {name: 'complainDate'},
        
        {name: 'invoiceNo'},
        {name: 'batchNo'},
        {name: 'orderNo'},
        
        {name: 'pactNo'},
        {name: 'prodCode'},
        {name: 'prodModel'},
        
        {name: 'prodName'},
        {name: 'qty'},
        {name: 'unit'},
        
        {name: 'qualityStrd'},
        {name: 'transportStrd'},
        {name: 'supplierCode'},
        
        {name: 'supplierName'},
        {name: 'suppliDelivDate'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'delivDate'},
        {name: 'complainContent'},
        
        {name: 'registerBy'},
        {name: 'registerDate'},
        {name: 'answerForBy'},
        
        {name: 'remark'}

    ],

    idProperty: 'custComplainCode'
});
/**
 * Description: 客户服务管理 view
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
Ext.define('Hc_Framework.model.HcCustomerServe', {
    extend: Ext.data.Model,

    alias: 'model.hccustomerserve',

    fields: [
        {name: 'custServeCode'},
        {name: 'custServeTheme'},
        {name: 'serveType'},
        
        {name: 'serveLevel'},
        {name: 'currentState'},
        {name: 'serveDate'},
        
        {name: 'orderNo'},
        {name: 'pactNo'},
        {name: 'endDate'},
        
        {name: 'prodCode'},
        {name: 'prodModel'},
        {name: 'prodName'},
        
        {name: 'qty'},
        {name: 'unit'},
        {name: 'locationDept'},
        
        {name: 'deptCode'},
        {name: 'technicalMatters'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'businessBy'},
        {name: 'serveContent'},
        
        {name: 'registerBy'},
        {name: 'registerDate'},
        {name: 'answerForBy'},
        
        {name: 'remark'}
    ],

    idProperty: 'custServeCode'
});
/**
 * Description: 外出管理 view
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
Ext.define('Hc_Framework.model.HcEgress', {
    extend: Ext.data.Model,

    alias: 'model.hcegress',

    fields: [
        {name: 'egressCode'},
        {name: 'egressEmployId'},
        {name: 'egressEmployName'},
        
        {name: 'drawBy'},
        {name: 'applyDate'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'custAddr'},
        {name: 'custContactBy'},
        
        {name: 'custContactTel'},
        {name: 'businessProcess'},
        {name: 'egressDate'},
        
        {name: 'reservaReturnDate'},
        {name: 'practReturnDate'},
        {name: 'businProcStatus'},
        
        {name: 'examApprSitu'},
        {name: 'firstExamAppruser'},
        {name: 'secondExamAppruser'},
        
        {name: 'thirdExamAppruser'},
        {name: 'examApprOpinion'}
   ],

    idProperty: 'egressCode'
});
/**
 * Description: 员工管理 view
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
Ext.define('Hc_Framework.model.HcEmployee', {
    extend: Ext.data.Model,

    alias: 'model.hcemployee',

    fields: [
        {name: 'employeeCode'},
        {name: 'employeeName'},
        {name: 'locationDept'},
        
        {name: 'position'},
        {name: 'entryDate'},
        {name: 'dateOfBirth'},
        
        {name: 'sex'},
        {name: 'politicalStatus'},
        {name: 'nation'},
        
        {name: 'height'},
        {name: 'idCardNo'},
        {name: 'specialty'},
        
        {name: 'placeOfResidence'},
        {name: 'presentResidence'},
        {name: 'imageLog'},
        
        {name: 'nativePlace'},
        {name: 'maritalStatus'},
        {name: 'contactPhone'},
        
        {name: 'graduateSchool'},
        {name: 'atDate'},
        {name: 'professional'},
        
        {name: 'lengthSschool'},
        {name: 'degree'},
        {name: 'degreePosition'},
        
        {name: 'orNotTurnover'},
        {name: 'turnoverDate'},
        {name: 'foreignLanLevel'},
        
        {name: 'computerLevel'},
        {name: 'emergencyBy'},
        {name: 'emergencyTel'},
        
        {name: 'emergencyAddress'},
        {name: 'membersId'},
        {name: 'experienceId'},
        
        {name: 'posiSituation'},
        {name: 'insuredSituation'},
        {name: 'contractSignSituat'},
        
        {name: 'remark'},
   ],

    idProperty: 'employeeCode'
});
/**
 * Description: 员工经历管理子表 view
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
Ext.define('Hc_Framework.model.HcSubEmployeeExperience', {
    extend: Ext.data.Model,

    alias: 'model.hcsubemployeeexperience',

    fields: [
        {name: 'id'},
        {name: 'experienceId'},
        {name: 'startDate'},
        
        {name: 'endDate'},
        {name: 'workUnitsDept'},
        {name: 'holdOffice'},
        
        {name: 'contactPhone'}
    ],

    idProperty: 'id'
});
/**
 * Description: 员工家庭关系管理子表 view
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
Ext.define('Hc_Framework.model.HcSubEmployeeRelationShip', {
    extend: Ext.data.Model,

    alias: 'model.hcsubemployeerelationship',

    fields: [
        {name: 'id'},
        {name: 'membersId'},
        {name: 'name'},
        
        {name: 'relationship'},
        {name: 'workUnits'},
        {name: 'holdOffice'},
        
        {name: 'contactPhone'}

    ],

    idProperty: 'id'
});
/**
 * Description: 出差管理 view
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
Ext.define('Hc_Framework.model.HcEvection', {
    extend: Ext.data.Model,

    alias: 'model.hcevection',

    fields: [
        {name: 'evectionCode'},
        {name: 'evectionEmployId'},
        {name: 'evectionEmployName'},
        
        {name: 'drawBy'},
        {name: 'applyDate'},
        {name: 'destination'},
        
        {name: 'evectionDate'},
        {name: 'evectionGoal'},
        {name: 'visitCompName'},
        
        {name: 'visitCompCode'},
        {name: 'contactCode'},
        {name: 'contactName'},
        
        {name: 'contactTel'},
        {name: 'visitReason'},
        {name: 'visitRemark'},
        
        {name: 'trafficCost'},
        {name: 'boardLodCost'},
        {name: 'otherCost'},
        
        {name: 'costRemark'}

    ],

    idProperty: 'evectionCode'
});
/**
 * Description: 商品编码申请管理 view
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
Ext.define('Hc_Framework.model.HcGoodsNoApply', {
    extend: Ext.data.Model,

    alias: 'model.hcgoodsnoapply',

    fields: [
        {name: 'goodsNoApplCode'},
        {name: 'applyEmployCode'},
        {name: 'applyEmployName'},
        
        {name: 'locationDept'},
        {name: 'applyDate'},
        {name: 'goodsCode'},
        
        {name: 'goodsName'},
        {name: 'theLargeAssortment'},
        {name: 'specModel'},
        
        {name: 'specParameters'},
        {name: 'colour'},
        {name: 'sizeStructure'},
        
        {name: 'venderCode'},
        {name: 'venderName'},
        {name: 'imageLog'},
        
        {name: 'remark'},
   ],

    idProperty: 'goodsNoApplCode'
});
/**
 * Description: 内部签呈管理 view
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
Ext.define('Hc_Framework.model.HcInsidePetition', {
    extend: Ext.data.Model,

    alias: 'model.hcinsidepetition',

    fields: [
        {name: 'insiPetiCode'},
        {name: 'applyEmployCode'},
        {name: 'applyEmployName'},
        
        {name: 'locationDept'},
        {name: 'applyDate'},
        {name: 'dense'},
        
        {name: 'urgenTimeLimit'},
        {name: 'fileName'},
        {name: 'fileSend'},
        
        {name: 'postTo'},
        {name: 'forwardTo'},
        {name: 'ccTo'},
        
        {name: 'circulatTo'},
        {name: 'emailTo'},
        {name: 'content'},
        
        {name: 'remark'}

   ],

    idProperty: 'insiPetiCode'
});
/**
 * Description: 请假管理 view
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
Ext.define('Hc_Framework.model.HcLeave', {
    extend: Ext.data.Model,

    alias: 'model.hcleave',

    fields: [
        {name: 'leaveCode'},
        {name: 'leaveByCode'},
        {name: 'leaveByName'},
        
        {name: 'leaveType'},
        {name: 'drawByCode'},
        {name: 'drawByName'},
        
        {name: 'leaveStartDate'},
        {name: 'leaveEndDate'},
        {name: 'totalLeaveDate'},
        
        {name: 'leaveReason'},
        {name: 'remark'}
   ],

    idProperty: 'leaveCode'
});
/**
 * Description: 借款管理 view
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
Ext.define('Hc_Framework.model.HcLoan', {
    extend: Ext.data.Model,

    alias: 'model.hcloan',

    fields: [
        {name: 'loanCode'},
        {name: 'loanTheme'},
        {name: 'loanBy'},
        
        {name: 'loanDate'},
        {name: 'loanAmount'},
        {name: 'loanReason'},
        
        {name: 'expRepayReimburDate'},
        {name: 'drawBy'},
        {name: 'examApprovSituat'},
        
        {name: 'firstExamAppruser'},
        {name: 'secondExamAppruser'},
        {name: 'thirdExamAppruser'},
        
        {name: 'examApprOpinion'}

   ],

    idProperty: 'loanCode'
});
/**
 * Description:维修管理 view
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
Ext.define('Hc_Framework.model.HcMaintain', {
    extend: Ext.data.Model,

    alias: 'model.hcmaintain',

    fields: [
        {name: 'maintainCode'},
        {name: 'salesmanCode'},
        {name: 'salesmanName'},
        
        {name: 'maintainByCode'},
        {name: 'maintainByName'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'custAddr'},
        {name: 'custTel'},
        
        {name: 'custFax'},
        {name: 'custContactBy'},
        {name: 'custEmail'},
        
        {name: 'maintainType'},
        {name: 'puttOutFactCode'},
        {name: 'puttOutFactName'},
        
        {name: 'prodCode'},
        {name: 'prodName'},
        {name: 'airframeNo'},
        
        {name: 'processMode'},
        {name: 'freightPayment'},
        {name: 'guarantee'},
        
        {name: 'freight'},
        {name: 'transportMode'},
        {name: 'qty'},
        
        {name: 'unit'},
        {name: 'costPayment'},
        {name: 'consigneeDate'},
        
        {name: 'faultPhenomenon'},
        {name: 'faultReason'},
        {name: 'maintainRecord'},
        
        {name: 'maintainCost'},
        {name: 'remark'}
   ],

    idProperty: 'maintainCode'
});
/**
 * Description:新品换货管理 view
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
Ext.define('Hc_Framework.model.HcNewBarterApply', {
    extend: Ext.data.Model,

    alias: 'model.hcnewbarterapply',

    fields: [
        {name: 'newBarApplyCode'},
        {name: 'applyEmployeeCode'},
        {name: 'applyEmployeeName'},
        
        {name: 'locationDept'},
        {name: 'applyDate'},
        {name: 'fromCompCode'},
        
        {name: 'fromCompName'},
        {name: 'toCompCode'},
        {name: 'toCompName'},
        
        {name: 'fromCompTel'},
        {name: 'fromCompFax'},
        {name: 'fromCompAddr'},
        
        {name: 'fromCompZip'},
        {name: 'fromCompContastBy'},
        {name: 'toCompTel'},
        
        {name: 'toCompFax'},
        {name: 'toCompZip'},
        {name: 'toCompContastBy'},
        
        {name: 'piOrderNo'},
        {name: 'consigneeDate'},
        {name: 'salesDate'},
        
        {name: 'checkoutDate'},
        {name: 'PhenomenonDesc'},
        {name: 'conclusion'},
        
        {name: 'techOpinion'},
        {name: 'managerOpinion'},
        {name: 'chargeOpinion'},
        
        {name: 'orNotGetBad'},
        {name: 'opHandleOpinion'},
        {name: 'remark'}
   ],

    idProperty: 'newBarApplyCode'
});
/**
 * Description: 新品换货管理子表 view
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
Ext.define('Hc_Framework.model.HcSubNewBarterApply', {
    extend: Ext.data.Model,

    alias: 'model.hcsubnewbarterapply',

    fields: [
        {name: 'id'},
        {name: 'model'},
        {name: 'serialNo'},
        
        {name: 'requiBartReason'},
        {name: 'jre'},
        {name: 'buyDate'},
        
        {name: 'remark'}

    ],

    idProperty: 'id'
});
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
Ext.define('Hc_Framework.model.HcSupplierAccountReceivable', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplieraccountreceivable',

    fields: [
        {name: 'accountReceivableNo'},//应收款编号
        {name: 'paidInAmount'},//实收金额
        {name: 'otherExpenses'},//其他费用
        
        {name: 'freightAmount'},//运费金额
        {name: 'orderNo'},//订单编码
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编码
        {name: 'theTargetDateOfDispatch'},//目标起运日
        {name: 'theActualDateOfDispatch'},//实际起运日
        
        {name: 'expectedCollectionDays'},//预计收款日期
        {name: 'paymentMethod'},//付款方式
        {name: 'currency'},//币值
        
        {name: 'invoices'},//发票
        {name: 'makeOutAnInvoiceAmount'},//开票金额
        {name: 'makeOutAnInvoiceDate'},//开票日期
        
        {name: 'ticketReceiptNo'},//票据号
        {name: 'salesPerson'},//销售员
        {name: 'localDepartment'},//所在部门
        
        {name: 'collectionSituation'},//收款情况
 
        
    ],

    idProperty: 'accountReceivableNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierBePutInStorage', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierbeputinstorage',

    fields: [
        {name: 'storageNo'},
        {name: 'supplierName'},
        {name: 'supplierNo'},
        
        {name: 'storageClass'},
        {name: 'monetaryUnit'},
        {name: 'storageDate'},
        
        {name: 'billNo'},
        {name: 'register'},
        {name: 'remark'},
        
        {name: 'whetherProductInspection'},
        {name: 'qualityInspector'},
        {name: 'eExaminationAndApproval'},
        
        {name: 'storageConfirmation'},
        {name: 'approvalOpinion'},
        {name: 'storageStatus'},
        
    ],

    idProperty: 'storageNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierComeAndGoAccount', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliercomeandgoaccount',

    fields: [
        {name: 'voucherNo'},//凭据编号
        {name: 'voucherMakingPerson'},//制单人
        {name: 'ticketReceiptNo'},//票据号
        
        {name: 'accountOfFinance'},//财务科目
        {name: 'accountOfClass'},//财务类别
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编码
        {name: 'voucherDate'},//凭证日期
        {name: 'currency'},//货　　币
        
        {name: 'exchangeRate'},//汇　　率
        {name: 'voucherSumOfMoney'},//凭证金额
        {name: 'reconciledSumOfMoney'},//已对帐金额
        
        {name: 'beginningBalances'},//期初余额
        {name: 'offsetBalance'},//冲消余额
        {name: 'abstract'},//摘　　要
        
        {name: 'bankOfDeposit'},//开户银行
        {name: 'bankAccount'},//银行帐号
        {name: 'remarks'},//备　　注
        
        {name: 'examinationAndApprovalPerson'},//审 批 人
        {name: 'examinationAndApprovalDate'},//审批日期
        {name: 'examinationAndApprovalObjection'},//审 批 意见
        
    ],

    idProperty: 'voucherNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierContactsManagementList', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliercontactsmanagementlist',

    fields: [
        {name: 'contactsNo'},
        {name: 'contactsName'},
        
        {name: 'sex'},
        {name: 'job'},
        
        {name: 'contactsTel'},
        {name: 'email'},
        {name: 'department'},
        {name: 'dateOfBirth'},
        {name: 'graduateSchool'},
        {name: 'highestDegree'},
        
        {name: 'placeOfOrigin'},
        {name: 'companyName'},
        {name: 'createUser'},
        {name: 'localDepartment'},
        {name: 'whetherToShare'},
        {name: 'companyTel'},
        
        
        {name: 'companyFax'},
        {name: 'projectRole'},
        {name: 'mobilePhone'},
        {name: 'mailingAddress'},
        {name: 'companyAddr'},
        
        {name: 'loginDate'},
        {name: 'modifyUser'},
        {name: 'modifyDate'},
        {name: 'hobbiesAndInterests'},
        {name: 'impressionEvaluation'},
        {name: 'currentPolicy'},
        
        {name: 'describee'},
        {name: 'companyNo'}
        
    ],

    idProperty: 'contactsNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierdeliveryofcargofromstorage',

    fields: [
        {name: 'deliveryOfCargoFromTorageNo'},
        {name: 'orderNo'},
        {name: 'personInCharge'},
        
        {name: 'selectWarehouse'},
        {name: 'deliveryOfCargoFromTorageType'},
        {name: 'customerName'},
        
        {name: 'customerNo'},
        {name: 'otherExpenses'},
        {name: 'currency'},
        
        {name: 'invoices'},
        {name: 'whetherPrepaid'},
        {name: 'orderDate'},
        
        {name: 'contractNO'},
        {name: 'typeOfShipping'},
        {name: 'deliverGoodsDate'},
        
        {name: 'freightPaymentParty'},
        {name: 'freightAmount'},
        {name: 'receiptAddress'},
        
        {name: 'consignee'},
        {name: 'receivingPhone'},
        {name: 'remarks'},
        
    ],

    idProperty: 'deliveryOfCargoFromTorageNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierInquiryManagementList', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierinquirymanagementlist',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
        {name: 'inquiryNo'},
        {name: 'personInCharge'},
        
        {name: 'supplierNo'},
        {name: 'supplierName'},
        
        {name: 'contactsName'},
        {name: 'contactsTel'},
        {name: 'contactsFax'},
        {name: 'typeOfShipping'},
        {name: 'inquiryDate'},
        {name: 'inquiryCurrency'},
        
        {name: 'subject'},
        {name: 'remarks'}
    ],

    idProperty: 'inquiryNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierInvoice', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierinvoice',

    fields: [
        {name: 'invoiceNo'},//发票编号
        {name: 'orderNo'},//订单编号
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编号
        {name: 'paidInAmount'},//实收金额
        {name: 'otherExpenses'},//其它费用
        
        {name: 'freightAmount'},//运费金额
        {name: 'theTargetDateOfDispatch'},//目标起运日
        {name: 'theActualSateOfDispatch'},//实际起运日
        
        {name: 'expectedCollectionAmount'},//预计收款日期
        {name: 'paymentMethod'},//付款方式
        {name: 'currency'},//币　　值
        
        {name: 'invoices'},//发票
        {name: 'makeOutAnInvoiceAmount'},//开票金额
        {name: 'makeOutAnInvoiceDate'},//开票日期
        
        {name: 'ticketReceiptNo'},//票据号
        {name: 'salesPerson'},//销售员
        {name: 'localDepartment'},//所在部门
        
        {name: 'collectionSituation'},//收款情况
        
    ],

    idProperty: 'invoiceNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierManagementList', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliermanagementlist',

    fields: [
        {name: 'createUser'},
        {name: 'companyNo'},
        {name: 'companyName'},
        
        {name: 'companyAddr'},
        {name: 'companyTel'},
        
        {name: 'companyFax'},
        {name: 'email'},
        {name: 'companyNet'},
        {name: 'companyZipCode'},
        {name: 'country'},
        {name: 'companyZipCode'},
        
        {name: 'province'},
        {name: 'city'},
        {name: 'legalRepresentative'},
        {name: 'organizationForm'},
        {name: 'supplierTypes'},
        {name: 'registeredCapital'},
        
        {name: 'businessLicense'},
        {name: 'industryTypes'},
        {name: 'useCurrency'},
        {name: 'linkMan'},
        {name: 'supplierLevel'},
        
        {name: 'yearEarning'},
        {name: 'docPurchasing'},
        {name: 'linkManTel'},
        {name: 'bankOfDeposit'},
        {name: 'bankAccount'},
        {name: 'dateOfEstablishment'},
        
        {name: 'paymentMethod'},
        {name: 'valueCategory'},
        {name: 'whetherToShare'},
        {name: 'modifyUser'},
        
        {name: 'loginDate'},
        {name: 'localDepartment'},
        {name: 'modifyDate'},
        {name: 'companyScale'},
        {name: 'abilityToSell'},
        
        {name: 'qualityControl'},
        {name: 'companyProfile'},
        {name: 'categoryOfTheProduct'},
        {name: 'cooperationOpportunities'},
        {name: 'describee'},
        
        {name: 'provincesAndCities'},
        
        {name: 'accountPayable', text: '应付款', type: 'int'},
        {name: 'overduePayment', text: '逾期款', type: 'int'}
    ],

    idProperty: 'companyNo'
});
/**
 * Description: 资金管理 view
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
Ext.define('Hc_Framework.model.HcSupplierOpenAnAccountID', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplieropenanaccountID',

    fields: [
        {name: 'openAnAccountID'},//开户编码
        {name: 'accountName'},//开户名称 
        {name: 'bankOfDeposit'},//开户银行
        
        {name: 'bankAccount'},//银行帐号
        {name: 'initialBalance'},//初始余额
        {name: 'totalBalance'},//合计余额
        
        {name: 'recordDate'},//登记日期
        {name: 'subordinateDepartment'},//所属部门
    ],

    idProperty: 'openAnAccountID'
});
/**
 * Description: 付款管理 view
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
Ext.define('Hc_Framework.model.HcSupplierPaymentAccount', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierpaymentaccount',

    fields: [
        {name: 'paymentAccountNo'},//付款编号
        {name: 'purchaseNo'},//采购编号
        {name: 'supplierNo'},//供应商编号
        
        {name: 'supplierName'},//供应商名称
        {name: 'paymentMethod'},//付款方式
        
        {name: 'purchaseAmount'},//采购金额
        {name: 'actualPaymentAmount'},//实付金额
        {name: 'purchaseDate'},//采购日期
        
        {name: 'estimatedDateOfPayment'},//预计付款日期
        {name: 'currency'},//币值
        {name: 'ticketReceiptNo'},//票据号
        
        {name: 'invoiceAmount'},//发票金额
        {name: 'billingDate'},//开票日期
        {name: 'buyer'},//采 购 员
        
        {name: 'paymentSituation'},//付款情况
    ],

    idProperty: 'paymentAccountNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierPotentialCustomers', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierpotentialcustomers',

    fields: [
        {name: 'potentialCustomerNo'},//潜在客户编码
        {name: 'potentialCustomerName'},//潜在客户名称
        {name: 'potentialCustomerAddres'},//潜在客户地址
        
        {name: 'potentialCustomerTel'},//潜在客户电话
        {name: 'potentialCustomerFax'},//传真
        {name: 'potentialCustomerWebsite'},//网址
        
        {name: 'email'},//电子邮件
        {name: 'potentialCustomerZipCode'},//邮　　编
        {name: 'country'},//国　　家
        
        {name: 'province'},//省份
        {name: 'city'},//城市
        {name: 'typeOfOrganization'},//组织形式
        
        {name: 'createUser'},//创建用户
        {name: 'businessLicense'},//营业执照
        {name: 'industryType'},//行业类型
        
        {name: 'customerLevel'},//客户级别
        {name: 'customerSource'},//客户来源
        {name: 'customerBank'},//客户银行
        
        {name: 'bankAccount'},//银行帐号
        {name: 'contacts'},//联系人 
        {name: 'position'},//职位
        
        {name: 'officePhone'},//办公电话
        {name: 'mobileTelephone'},//移动电话
        {name: 'contactsEmail'},//邮件地址
        
        {name: 'customerProfile'},//客户简介
        {name: 'shareSale'},//共享销售
        {name: ' lineOfCredit'},//信用额度
        
        {name: 'useCurrency'},//使用货币
        {name: 'purchasingCycle'},//采购周期
        {name: 'followUpPeriod'},//跟进周期
        
        {name: 'taxNumber'},//纳税编号
        {name: 'paymentMethod'},//付款方式
        {name: 'merchandisingBusiness'},//跟单业务
        
        {name: 'localDepartment'},//所在部门
        {name: 'modifyUser'},//修改用户 
        {name: 'modifyDate'},//修改日期
        
        {name: 'billingInformation'},//开票信息
        {name: 'recommendProducts'},//推荐产品
        {name: 'remarks'},//备　　注
    ],

    idProperty: 'potentialCustomerNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierPurchase', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierpurchase',

    fields: [
        {name: 'purchaseNo'},
        {name: 'personInCharge'},
        {name: 'salesNo'},
        
        {name: 'selectWarehouse'},
        {name: 'supplierNo'},
        {name: 'invoices'},
        
        {name: 'supplierName'},
        {name: 'whetherProductInspection'},
        {name: 'contactsName'},
        
        {name: 'contactsTel'},
        {name: 'typeOfShipping'},
        {name: 'deliveryPeriod'},
        
        {name: 'paymentMethod'},
        {name: 'placeOfDelivery'},
        {name: 'qualityAssurance'},
        
        {name: 'purchaseDate'},
        {name: 'purchaseCurrency'},
        {name: 'billingInformation'},
        
        {name: 'remarks'},
        {name: 'approvalStatus'},
        {name: 'secondApprovalOfUsers'},
        
        {name: 'firstApprovalOfUsers'},
        {name: 'approvalOpinion'},
        {name: 'purchaseStates'},
        
        {name: 'whetherToPurchase'},
    ],

    idProperty: 'purchaseNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierReceivables', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierreceivables',

    fields: [
        {name: 'invoiceNo'},//发票编号
        {name: 'orderNo'},//订单编号
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编号
        {name: 'paidInAmount'},//实收金额
        {name: 'otherExpenses'},//其它费用
        
        {name: 'freightAmount'},//运费金额
        {name: 'theTargetDateOfDispatch'},//目标起运日
        {name: 'theActualSateOfDispatch'},//实际起运日
        
        {name: 'expectedCollectionAmount'},//预计收款日期
        {name: 'paymentMethod'},//付款方式
        {name: 'currency'},//币　　值
        
        {name: 'invoices'},//发票
        {name: 'makeOutAnInvoiceAmount'},//开票金额
        {name: 'makeOutAnInvoiceDate'},//开票日期
        
        {name: 'ticketReceiptNo'},//票据号
        {name: 'salesPerson'},//销售员
        {name: 'localDepartment'},//所在部门
        
        {name: 'collectionSituation'},//收款情况
        
    ],

    idProperty: 'invoiceNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierRetail', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierretail',

    fields: [
        {name: 'deliveryOfCargoFromTorageNo'},
        {name: 'orderNo'},
        {name: 'personInCharge'},
        
        {name: 'selectWarehouse'},
        {name: 'deliveryOfCargoFromTorageType'},
        {name: 'customerName'},
        
        {name: 'customerNo'},
        {name: 'otherExpenses'},
        {name: 'currency'},
        
        {name: 'invoices'},
        {name: 'whetherPrepaid'},
        {name: 'orderDate'},
        
        {name: 'contractNO'},
        {name: 'typeOfShipping'},
        {name: 'deliverGoodsDate'},
        
        {name: 'freightPaymentParty'},
        {name: 'freightAmount'},
        {name: 'receiptAddress'},
        
        {name: 'paymentMethod'},
        {name: 'customerDeliveryPeriod'},
        {name: 'bank'},
        
        {name: 'consignee'},
        {name: 'receivingPhone'},
        {name: 'remarks'},
        
    ],

    idProperty: 'deliveryOfCargoFromTorageNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierReturnGoods', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierreturngoods',

    fields: [
        {name: 'returnGoodsNo'},//退货编号
        {name: 'realRetreatAmount'},//实退金额
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编号
        {name: 'returnGoodsDate'},//退货日期
     
        {name: 'currency'},//币　　值

        {name: 'salesPerson'},//销售员
        {name: 'localDepartment'},//所在部门

        
    ],

    idProperty: 'invoiceNo'
});
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
/**
 * Description: 资金日记账管理 view
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
Ext.define('Hc_Framework.model.HcSupplierToAndFroChargeUpAccount', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliertoandfrochargeupaccount',

    fields: [
        {name: 'voucherNo'},//凭据编号
        {name: 'voucherMakingPerson'},//制单人
        {name: 'ticketReceiptNo'},//票据号
        
        {name: 'accountOfFinance'},//财务科目
        {name: 'accountOfClass'},//财务类别
        {name: 'customerName'},//客户名称
        
        {name: 'customerNo'},//客户编码
        {name: 'voucherDate'},//凭证日期
        {name: 'currency'},//货　　币
        
        {name: 'exchangeRate'},//汇　　率
        {name: 'voucherSumOfMoney'},//凭证金额
        {name: 'reconciledSumOfMoney'},//已对帐金额
        
        {name: 'beginningBalances'},//期初余额
        {name: 'offsetBalance'},//冲消余额
        {name: 'abstract'},//摘　　要
        
        {name: 'bankOfDeposit'},//开户银行
        {name: 'bankAccount'},//银行帐号
        {name: 'remarks'},//备　　注
        
        {name: 'examinationAndApprovalPerson'},//审 批 人
        {name: 'examinationAndApprovalDate'},//审批日期
        {name: 'examinationAndApprovalObjection'},//审 批 意见
        
    ],

    idProperty: 'voucherNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierWarehouse', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierwarehouse',

    fields: [
        {name: 'productNo'},
        {name: 'typeSpecification'},
        {name: 'productName'},
        
        {name: 'minimalPackaging'},
        {name: 'costUnitPrice'},
        {name: 'taxRate'},
        
        {name: 'openQuotation'},
        {name: 'recommendedSellingPrice'},
        {name: 'floorPrice'},
        
        {name: 'salesDiscount'},
        {name: 'initialInventory'},
        {name: 'salesStatus'},
        
        {name: 'minimumStock'},
        {name: 'maximumStock'},
        {name: 'brands'},
        
        {name: 'supplierName'},
        {name: 'productCategories'},
        {name: 'warehouseName'},
        
        {name: 'salesCommissions'},
        {name: 'storageLocation'},
        {name: 'batch'},
        
        {name: 'productDescription'},
        {name: 'technicalCharacteristics'},
        {name: 'appliedRange'},
        
        {name: 'remarks'},
    ],

    idProperty: 'productNo'
});
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
Ext.define('Hc_Framework.model.HcSupplierInquiryProductManagementList', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierinquiryproductmanagementlist',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'ID',type: 'int',},
        {name: 'inquiryNo'},
        {name: 'productModel'},
        
        {name: 'chineseName'},
        {name: 'inquiredQTY'},
        
        {name: 'englishName'},
        {name: 'quotedPrice',
        	type: 'float',
        	convert:function formatFloat(val){
        	  return Number(Number(val).toFixed(6));
        	}
        },
        {name: 'dateOfArrival'},

        {name: 'inquiredQTY_quotedPrice$',
        	type: 'float',
        	convert:function formatFloat(val){
        	  return Number(Number(val).toFixed(6));
        	}
        },
        {name: 'inquiredQTY_unit'},
        
        {name: 'unit'},
        {name: 'remark'}
    ],

   // idProperty: 'inquiryNo'
});
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
Ext.define('Hc_Framework.model.SubHcSupplierAccountReceivable', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplieraccountreceivable',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},//产品编号
        {name: 'typeSpecification'},//型号规格
        
        {name: 'productName'},//产品名称
        {name: 'orderQuantity'},//订单数量
        
        {name: 'shippingQty'},//出货数量
        
        {name: 'salePrice'},//销售单价
        {name: 'totalOrder'},//订单合计
        
        {name: 'totalShipment'},//出货合计

    ],

    idProperty: 'productNo'
});
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
Ext.define('Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplierdeliveryofcargofromstorage',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},
        {name: 'typeSpecification'},
        
        {name: 'productName'},
        {name: 'preOutQuantity'},
        
        {name: 'actualQuantity'},
        
        {name: 'currentInventory'},
        {name: 'canSupplyStock'},
        
        {name: 'remarks'},
        {name: 'WarehouseName'},

    ],

    idProperty: 'productNo'
});
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
Ext.define('Hc_Framework.model.SubHcSupplierInvoice', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplierinvoice',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},//产品编号
        {name: 'typeSpecification'},//型号规格
        
        {name: 'productName'},//产品名称
        {name: 'orderQuantity'},//订单数量
        {name: 'shipmentQuantity'},//出货数量
        
        
        {name: 'unitPrice'},//单价
    ],

    idProperty: 'productNo'
});
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
Ext.define('Hc_Framework.model.SubHcSupplierReceivables', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplierreceivables',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},//产品编号
        {name: 'typeSpecification'},//型号规格
        
        {name: 'productName'},//产品名称
        {name: 'orderQuantity'},//订单数量
        {name: 'shipmentQuantity'},//出货数量
        
        
        {name: 'unitPrice'},//单价
    ],

    idProperty: 'productNo'
});
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
Ext.define('Hc_Framework.model.SubHcSupplierRetail', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplierretail',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},
        {name: 'typeSpecification'},
        
        {name: 'productName'},
        {name: 'orderQuantity'},
        
        {name: 'unitPrice'},
        
        {name: 'WarehouseName'},
        {name: 'remarks'},

    ],

    idProperty: 'productNo'
});
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
Ext.define('Hc_Framework.model.SubHcSupplierReturnGoods', {
    extend: Ext.data.Model,

    alias: 'model.subhcsupplierreturngoods',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},//产品编号
        {name: 'typeSpecification'},//型号规格
        
        {name: 'productName'},//产品名称
        {name: 'quantity'},//数量
        
        {name: 'unitPrice'},//单价
    ],

    idProperty: 'productNo'
});
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
Ext.define('Hc_Framework.model.SubHcSupplierShipment', {
    extend: Ext.data.Model,

    alias: 'model.subhcsuppliershipment',//inquiry  Inquiry   hcsupplierinquirymanagement

    fields: [
             
        {name: 'productNo'},//产品编号
        {name: 'typeSpecification'},//型号规格
        
        {name: 'productName'},//产品名称
        {name: 'orderQuantity'},//发运数 量
        
        {name: 'unitPrice'},//单位
        
        {name: 'WarehouseName'},//仓库名称
        {name: 'productSerialNumber'},//产品序号
        
        {name: 'remarks'},//产品编号

    ],

    idProperty: 'productNo'
});
/**
 * Description: 办公用品管理 view
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
Ext.define('Hc_Framework.model.HcOfficeSupplies', {
    extend: Ext.data.Model,

    alias: 'model.hcofficesupplies',

    fields: [
        {name: 'offSupplCode'},
        {name: 'applyBy'},
        {name: 'applyDate'},
        
        {name: 'applyForBy'},
        {name: 'contactBy'},
        {name: 'contactTel'},
        
        {name: 'category'},
        {name: 'currency'},
        {name: 'examineandapproveBy'},
        
        {name: 'remark'}
    ],

    idProperty: 'offSupplCode'
});
/**
 * Description: 当前用户
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/28 0028
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.CurrentUser', {
    extend: 'Ext.data.Model',

    alias:'model.currentuser',

    fields: [
        {name: 'userId', type: 'int'},
        {name: 'userCode'},
        {name: 'userName'},
        {name: 'password'},
        {name: 'pwdModifyTime'},
        {name: 'deptNo', type: 'int'},
        {name: 'isAdminGroup',  type: 'int'},
        {name: 'checkMac', type: 'int'},
        {name: 'addressMac'},
        {name: 'checkIp',  type: 'int'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        'deptName',
        'version',
        'sysid',
        'basePath'
    ],

    proxy: {
            type: 'sessionstorage',
            id  : 'currentuser'
    }
});
/**
 * Description: 应用清单 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/5
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgApplication', {
    extend: 'Ext.data.Model',

    alias: 'model.itgapplication',

    fields: [
        {name: 'appNo', text: '应用编号', type: 'int'},
        {name: 'appCode', text: '应用编码',type:'string'},
        {name: 'appName', text: '应用名称',type:'string'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '启用状态', type: 'int', defaultValue: 1},
        {name: 'appUrl', text: '应用url'},
        {name: 'jsUrl', text: 'jsUrl'},
        {name: 'imageUrl', text: '图标路径'},
        {name: 'imageName', text: '图标名称'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '建档人'},
        {name: 'createTime', text: '建档时间'},
        {name: 'modifier', text: '修改人'},
        {name: 'modifyTime', text: '修改时间'},
        {name: 'remarks', text: '备注'}
    ],

    idProperty: 'appNo',
    identifier: 'negative'
});




/**
 * Description: 用户管理 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgLoginUser', {
    extend: Ext.data.Model,

    alias: 'model.itgloginuser',

    fields: [
        {name: 'userId', text: '用户ID', type: 'int'},
        {name: 'userCode', text: '用户编号'},
        {name: 'userName', text: '用户名称'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'password', text: '密码'},
        {name: 'pwdLevelNo', text: '密码等级', type: 'int'},
        {name: 'pwdModifyTime', text: '密码更改日期'},
        {name: 'deptNo', text: '部门编号', type: 'int'},
        {name: 'isAdminGroup', text: '是否管理员组', type: 'int'},
        {name: 'checkMac', text: '是否检查Mac地址', type: 'int'},
        {name: 'addressMac', text: 'Mac地址'},
        {name: 'checkIp', text: '是否检查IP', type: 'int'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'}
    ],
    idProperty: 'userId',
    identifier: 'negative'
});

/**
 * Description: 菜单管理;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.model.ItgMenuList', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'menuNo', text: '菜单编号', type: 'int'},
        {name: 'menuName', text: '菜单名称', type: 'string'},
        {name: 'appNo', text: '应用编号', type: 'int'},
        {name: 'projectCode', text: '项目编号', type: 'string'},
        {name: 'moduleNo', text: '模块编号', type: 'int'},
        {name: 'enableFlag', text: '启用标识', type: 'int'},
        {name: 'parentMenuNo', text: '父级Id', type: 'int'},
        {name: 'searchCode', text: '查询码', type: 'string'},
        {name: 'levelNo', text: '层级', type: 'int'},
        {name: 'beginGroup', text: '', type: 'int'},
        {name: 'orderNo', text: '排序号', type: 'int'},
        {name: 'creator', text: '建档人', type: 'string'},
        {name: 'createTime', text: '建档时间'},
        {name: 'modifier', text: '修改人', type: 'string'},
        {name: 'modifyTime', text: '修改时间'},
        {name: 'remarks', text: '备注', type: 'string'},
        {name:'leaf',convert:function(val,rec){
            return rec.get('moduleNo')?true:false;
        }},
        {name: 'children',defaultValue:[]}
    ],
    idProperty: 'menuNo',
    identifier: 'negative'

});
/**
 * Description: 模块管理Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgModuleList', {
    extend: 'Ext.data.Model',

    alias: 'model.itgmodulelist',

    fields: [
        {name: 'moduleNo', type: 'int'},
        {name: "moduleCode"},
        {name: "moduleName"},
        {name: "projectCode"},
        {name: "appNo", type: 'int'},
        {name: "enableFlag", type: 'int', defaultValue: 1},
        {name: "isReport", type: 'int'},
        {name: "moduleUrl"},
        {name: "rightValue", type: 'int'},
        {name: "hint"},
        {name: "creator"},
        {name: "createTime"},
        {name: "modifier"},
        {name: "modifyTime"},
        {name: "remarks"}
    ]

});
/**
 * Description: 项目清单 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/5
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgProject', {
    extend: 'Ext.data.Model',

    alias: 'model.itgproject',

    fields: [
        {name: 'projectCode', text: '项目编码'},
        {name: 'projectName', text: '项目名称'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: "enableFlag",text:'启用状态', type: 'int'},
        {name: 'creator', text: '建档人'},
        {name: 'createTime', text: '建档时间'},
        {name: 'modifier', text: '建档人'},
        {name: 'modifyTime', text: '建档时间'},
        {name: 'remarks', text: '备注'}
    ],

    //idProperty: 'projectCode',
	//identifier: ''
    });

/**
 * Description: 功能权限清单 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRightList', {
    extend: Ext.data.Model,

    alias: 'model.itgrightlist',

    fields: [
        {name: 'rightId', text: '权限ID', type: 'int'},
        {name: 'projectCode', text: '项目代号'},
        {name: 'rightNo', text: '权限编号'},
        {name: 'rightName', text: '权限名称'},
        {name: 'enableFlag', text: '启用', type: 'int', defaultValue: 1},
        {name: 'rightType', text: '权限类型', type: 'int'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'}
    ],
    idProperty: 'rightId',
    identifier: 'negative'
});

/**
 * Description: 角色管理 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRoleList', {
    extend: Ext.data.Model,

    alias: 'model.itgrolelist',

    fields: [
        {name: 'roleId', text: '角色ID', type: 'int'},
        {name: 'roleName', text: '角色名称'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'roleOwner', text: '角色拥有者'},
        {name: 'orderNo', text: '排列序号', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'modifier', text: '更改人员'},
        {name: 'modifyTime', text: '更改日期'},
        {name: 'remarks', text: '备注'},
    ],

    idProperty: 'roleId',
    identifier: 'negative'
});

/**
 * Description: 角色分配权限 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRoleRight', {
    extend: Ext.data.Model,

    alias: 'model.itgroleright',

    fields: [
        {name: 'roleRightId', text: '角色权限ID', type: 'int'},
        {name: 'roleId', text: '角色ID', type: 'int'},
        {name: "rightValue", type: 'int',defaultValue:0},
        {name:'hasRight',type:'boolean',convert:function(v,f){
        	if(f.get('rightValue')>0){
        		return true;
        	}
        	return false;
        }},        
        {name: 'moduleNo', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},

        {name: 't2_moduleNo', type: 'int'},
        {name: "moduleCode"},
        {name: "moduleName"},
        {name: "appNo", type: 'int'},
        {name: "moduleUrl"},
        {name: "t2_rightValue", type: 'int'}
        
    ],

    idProperty: 'roleRightId',
    identifier: 'negative'
});

/**
 * Description: 角色分配用户 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.ItgRoleUser', {
    extend: Ext.data.Model,

    alias: 'model.itgroleuser',

    fields: [
        {name: 'userRoleId', text: '用户角色ID', type: 'int'},
        {name: 'userId', text: '角色ID', type: 'int'},
        {name: 'roleId', text: '角色ID', type: 'int'},

        {name: 'userCode', text: '用户编号'},
        {name: 'userName', text: '用户名称'},
        {name: 'enableFlag', text: '是否启用', type: 'int'},
        {name: 'deptNo', text: '部门编号', type: 'int'},
        {name: 'isAdminGroup', text: '是否管理员组', type: 'int'},
        {name: 'addressMac', text: 'Mac地址'},
        {name: 'addressIp', text: 'IP地址'},
        {name: 'mobileNo', text: '手机号'},
        {name: 'email', text: '邮箱地址'},
        {name: 'remarks', text: '备注'},

        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'}
    ],

    idProperty: 'userRoleId',
    identifier: 'negative'
});

/**
 * Description: 用户特权 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgUserPrivilege', {
    extend: 'Ext.data.Model',

    alias: 'model.itguserprivilege',

    fields: [
        {name: 'userPrivilegeId', text: '特权编号', type: 'int'},
        {name: 'userId', text: '用户编号',type: 'int'},
        {name: 'moduleNo', text: '模块编号', type: 'int'},
        {name: 'moduleCode', text: '模块编号'},
        {name: 'moduleName', text: '模块名称',type:'int'},
        {name: 'rightValue', text: '模块权限值',type:'int'},
        {name: 'addRightValue', text: '添加特权', type: 'int'},
        {name: 'subRightValue', text: '减少特权', type: 'int'},
        {name: 'creator', text: '等级', type: 'int'},
        {name: 'createTime', text: '分组', type: 'int'},
    ],
    idProperty: 'userPrivilegeId',
    identifier: 'negative'
});

/**
 * Description: 用户分配角色 Model
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.model.ItgUserRole', {
    extend: Ext.data.Model,

    alias: 'model.itguserrole',

    fields: [
        {name: 'userRoleId', text: '用户角色ID', type: 'int'},
        {name: 'userId', text: '角色ID', type: 'int'},
        {name: 'roleId', text: '角色ID', type: 'int'},
        {name: 'creator', text: '创建人员'},
        {name: 'createTime', text: '创建日期'},
        {name: 'remarks', text: '备注'},

        {name: 'roleName', text: '角色名称'},
        {name: 'roleOwner', text: '角色拥有者'},
        {name: 'projectCode', text: '所属项目'},
        {name: 'enableFlag', text: '是否启用', type: 'int'}
    ],

    idProperty: 'userRoleId',
    identifier: 'negative'
});

/**
 * Description: 最近访问模块Model, 数据存储于本地
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/6
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.LastVisit', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'menuNo', type: 'int'},
        {name: 'menuName'},
        {name: 'moduleNo', type: 'int'},
        {name: 'moduleName'},
        {name: 'moduleUrl'},
        {name: 'mRight', type: 'int'},
        {name: 'uRight', type: 'int'}
    ]
});
/**
 * Description: 最近访问模块Model, 数据存储于本地
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/2/6
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.model.MainTree', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'menuNo', type: 'int'},
        {name: 'menuName'},
        {name: 'modelNo', type: 'int'},
        {name: 'moduleName'},
        {name: 'moduleUrl'},
        {name: 'appUrl'},
        {name: 'appCode'},
        {name: 'jsUrl'},
        {name: 'rightValue', type: 'int'},
        {name: 'rights', type: 'int'},
        {name: 'expanded',defaultValue:false}
    ]
});
/**
 * Description: 付款管理 view
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
Ext.define('Hc_Framework.model.HcPayment', {
    extend: Ext.data.Model,

    alias: 'model.hcpayment',

    fields: [
        {name: 'paymentCode'},
        {name: 'paymentDate'},
        {name: 'applyBy'},
        
        {name: 'applyDept'},
        {name: 'receivOrganiz'},
        {name: 'receivAccount'},
        
        {name: 'bankAccount'},
        {name: 'paymentMode'},
        {name: 'amount'},
        
        {name: 'paymentDesc'},
        {name: 'examApprSitu'},
        {name: 'firstExamAppruser'},
        
        {name: 'secondExamAppruser'},
        {name: 'thirdExamAppruser'},
        {name: 'fourthExamAppruser'},
        
        {name: 'examApprOpinion'}

   ],

    idProperty: 'paymentCode'
});
/**
 * Description: 转正申请管理 view
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
Ext.define('Hc_Framework.model.HcPositive', {
    extend: Ext.data.Model,

    alias: 'model.hcpositive',

    fields: [
        {name: 'positApplyCode'},
        {name: 'PositiEmploCode'},
        {name: 'PositiEmploName'},
        
        {name: 'drawBy'},
        {name: 'position'},
        {name: 'toGangDate'},
        
        {name: 'applyDate'},
        {name: 'shouPosiDate'},
        {name: 'posiApplyContents'},
        
        {name: 'positiveState'},
        {name: 'remark'},
   ],

    idProperty: 'positApplyCode'
});
/**
 * Description: 客户管理 view
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
Ext.define('Hc_Framework.model.HcSupplierCustomer', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliercustomer',

    fields: [
        {name: 'customerNo'},//客户编码
        {name: 'customerName'},//客户名称
        {name: 'customerAddres'},//客户地址
        
        {name: 'customerTel'},//客户电话
        {name: 'customerFax'},//客户传真
        
        {name: 'customerWebSite'},//客户网址
        {name: 'email'},//电子邮件
        
        {name: 'zipCode'},//邮　　编
        {name: 'country'},//国　　家
        {name: 'province'},//省份
        {name: 'city'},//城市
        
        {name: 'organizationForm'},//组织形式
        {name: 'createUser'},//创建用户
        {name: 'createDate'},//创建日期

        {name: 'modifyUser'},//修改用户 
        {name: 'modifyDate'},//修改日期
        
        {name: 'businessLicence'},//营业执照
        {name: 'industryType'},//行业类型
        {name: 'customerLevel'},//客户级别
        
        {name: 'customerSource'},//客户来源
        {name: 'customerBank'},//客户银行
        {name: 'bankAccount'},//银行帐号
        
        {name: 'contacts'},//联系人  
        {name: 'customerProfile'},//客户简介
        {name: ' lineOfCredit'},//信用额度
        
        {name: 'shareSale'},//共享销售
        {name: 'purchasingCycle'},//采购周期
        {name: 'followUpPeriod'},//跟进周期
        {name: 'firstPurchase'},//首次购买
        {name: 'recentlyPurchased'},//最近购买
        
        {name: 'downPayment'},//首次付款
        {name: 'recentPayment'},//最近付款
        {name: 'firstFollowUp'},//首次跟进
        {name: 'recentFollowUp'},//最近跟进
        
        {name: 'useCurrency'},//使用货币
        {name: 'taxNumber'},//纳税编号
        {name: 'paymentMethod'},//付款方式
        {name: 'merchandiser'},//业务跟单
        
        {name: 'localDepartment'},//所在部门
        {name: 'remarks'},//备注

    ],

    idProperty: 'customerNo'
});
/**
 * Description: 客户联系人 view
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
Ext.define('Hc_Framework.model.HcSupplierCustomerContact', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliercustomercontact',

    fields: [
        {name: 'customerContactNo'},//客户联系人编码
        {name: 'customerContactName'},//客户联系人名称
        {name: 'customerContactAddres'},//客户联系人地址
        
        {name: 'customerContactTel'},//客户联系人电话
        {name: 'position'},//职　　位
        {name: 'sex'},//性　　别
        
        {name: 'email'},//电子邮件
        {name: 'department'},//部　　门
        {name: 'dateOfBirth'},//出生日期
        
        {name: 'graduateSchool'},//毕业学校
        {name: 'highestEducation'},//最高学历
        {name: 'placeOfOrigin'},//籍　　贯
        
        {name: 'projectRole'},//项目角色
        {name: 'qqNo'},//QQ号码
        {name: 'mobileTelephone'},//移动电话
        
        {name: 'country'},//国　　家
        {name: 'province'},//省份
        {name: 'city'},//城市
        
        {name: 'createUser'},//创建用户
        {name: 'createDate'},//创建日期
        {name: 'whetherToShare'},//是否共享
        
        {name: 'localDepartment'},//所在部门
        {name: 'modifyUser'},//修改用户 
        {name: 'modifyDate'},//修改日期
        
        {name: 'hobbiesAndInterests'},//兴趣爱好
        {name: 'impressionEvaluation'},//印象评价
        {name: ' currentPolicy'},//往来策略
        
        {name: 'remarks'},//备　　注
    ],

    idProperty: 'customerContactNo'
});
/**
 * Description: 销售计划 view
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
Ext.define('Hc_Framework.model.HcSupplierMarketingPlan', {
    extend: Ext.data.Model,

    alias: 'model.hcsuppliermarketingplan',

    fields: [
        {name: 'marketingplanNo'},//销售计划编码
        {name: 'planDept'},//计划部门
        {name: 'planYM'},//计划年月
        
        {name: 'recordDate'},//登记日期
        {name: 'taskQuantity'},//任 务 量
        {name: 'taskAmount'},//任务金额
        
        {name: 'schemer'},//计划人
        {name: 'contentOfPlan'},//计划内容
        {name: 'auditLeadership'},//审核领导
    ],

    idProperty: 'marketingplanNo'
});
/**
 * Description: 产品列表 view
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
Ext.define('Hc_Framework.model.HcSupplierProductList', {
    extend: Ext.data.Model,

    alias: 'model.hcsupplierproductlist',

    fields: [
        {name: 'productNo'},//产品编号 
        {name: 'typeSpecification'},//型号规格
        {name: 'productName'},//产品名称
        
        {name: 'productClass'},//产品类别
        {name: 'openingInventory'},//期初库存
        {name: 'currentInventory'},//当前库存
        
        {name: 'minimumStock'},//最少存量
        {name: 'maximumStock'},//最多存量
        {name: 'salesCommissions'},//销售提成
        
        {name: 'publicOffer'},//公开报价
        {name: 'recommendedSellingPrice'},//建议售价
        {name: 'lowestPriceLimits'},//最低限价
        
        {name: 'discountOnSale'},//销售折扣
        {name: 'salesStatus'},//销售状态
        {name: 'brands'},//品　　牌
        
        {name: 'warehouseName'},//仓库名称
        {name: 'modificationDate'},//修改日期
        {name: 'personInCharge'},//负 责 人
        
        {name: 'initialSalesDate'},//首次销售日期
        {name: 'firstSalePrice'},//首次销售单价
        {name: 'recentSalesDate'},//最近销售日期
        
        {name: 'recentSalesPrice'},//最近销售单价
        {name: 'productDescription'},//产品描述
        {name: 'technicalCharacteristics'},//技术特性
        
        {name: 'appliedRange'},//应用范围
        {name: 'remarks'},//备　　注
    ],

    idProperty: 'productNo'
});
/**
 * Description: 报销管理 view
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
Ext.define('Hc_Framework.model.HcReimbursement', {
    extend: Ext.data.Model,

    alias: 'model.hcreimbursement',

    fields: [
        {name: 'reimburCode'},
        {name: 'drawByCode'},
        {name: 'drawByName'},
        
        {name: 'exacct'},
        {name: 'reimburByCode'},
        {name: 'reimburBy'},
        
        {name: 'reimburDept'},
        {name: 'reimburDate'},
        {name: 'reimburAmount'},
        
        {name: 'ApplicaDesc'},
        {name: 'examApprovSituat'},
        {name: 'firstExamAppruser'},
        
        {name: 'secondExamAppruser'},
        {name: 'thirdExamAppruser'},
        {name: 'examApprOpinion'},
        
        {name: 'remark'}

   ],

    idProperty: 'reimburCode'
});
/**
 * Description: 辞职管理 view
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
Ext.define('Hc_Framework.model.HcResign', {
    extend: Ext.data.Model,

    alias: 'model.hcresign',

    fields: [
        {name: 'resignCode'},
        {name: 'resignByCode'},
        {name: 'resignByName'},
        
        {name: 'resignType'},
        {name: 'perReasons'},
        {name: 'drawByCode'},
        
        {name: 'drawByName'},
        {name: 'resignDate'},
        {name: 'resignReason'},
        
        {name: 'remark'},
   ],

    idProperty: 'resignCode'
});
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
/**
 * Description: 薪资异动管理 view
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
Ext.define('Hc_Framework.model.HcSalaryPunishment', {
    extend: Ext.data.Model,

    alias: 'model.hcsalarypunishment',

    fields: [
        {name: 'salaryPunishCode'},
        {name: 'employeeCode'},
        {name: 'employeeName'},
        
        {name: 'drawBy'},
        {name: 'position'},
        {name: 'checkDate'},
        
        {name: 'applyDate'},
        {name: 'serviDate'},
        {name: 'noticeMatters'},
        
        {name: 'originalSalary'},
        {name: 'adjustRate'},
        {name: 'adjustAmount'},
        
        {name: 'adjustedAmount'},
        {name: 'desc'},
        {name: 'remark'},
   ],

    idProperty: 'salaryPunishCode'
});
/**
 * Description: 合同管理 view
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
Ext.define('Hc_Framework.model.HcContract', {
    extend: Ext.data.Model,

    alias: 'model.hccontract',

    fields: [
        {name: 'contractCode'},
        {name: 'buyCode'},
        {name: 'buyName'},
        
        {name: 'buyAddr'},
        {name: 'buyTel'},
        {name: 'buyFax'},
        
        {name: 'buyContactBy'},
        {name: 'salesCode'},
        {name: 'salesName'},
        
        {name: 'salesAddr'},
        {name: 'salesTel'},
        {name: 'salesFax'},
        
        {name: 'salesContactBy'},
        {name: 'contractContent'},
        {name: 'contractFile'},
        
        {name: 'contractFile1'},
        {name: 'contractFile2'},
        {name: 'contractImage1'},
        
        {name: 'contractImage2'},
        {name: 'contractImage3'},
        {name: 'buyRepreCode'},
        
        {name: 'buyRepreName'},
        {name: 'buySignDate'},
        {name: 'salesRepreCode'},
        
        {name: 'salesRepreName'},
        {name: 'salesSignDate'},
        {name: 'applByCode'},
        
        {name: 'applByName'},
        {name: 'examApprByCode'},
        {name: 'examApprByName'},
        
        {name: 'examApprOpinion'},
        {name: 'FinalJudgeCode'},
        {name: 'FinalJudgeName'},
        
        {name: 'reviewOpinion'},
        {name: 'remark'}
    ],

    idProperty: 'contractCode'
});
/**
 * Description: 合同管理子表 view
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
Ext.define('Hc_Framework.model.HcSubContract', {
    extend: Ext.data.Model,

    alias: 'model.hcsubcontract',

    fields: [
        {name: 'id'},
        {name: 'prodCode'},
        {name: 'prodName'},
        
        {name: 'typeModel'},
        {name: 'prodDesc'},
        {name: 'custType'},
        
        {name: 'qty'},
        {name: 'unit'},
        {name: 'univalent'},
        
        {name: 'currency'},
        {name: 'remark'}
 
    ],

    idProperty: 'id'
});
/**
 * Description: 询价管理 view
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
Ext.define('Hc_Framework.model.HcInquiry', {
    extend: Ext.data.Model,

    alias: 'model.hcinquiry',

    fields: [
        {name: 'inquCode'},
        {name: 'inquName'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'custTel'},
        {name: 'custAddr'},
        
        {name: 'custContactBy'},
        {name: 'custContactByTel'},
        {name: 'custContactByEmail'},
        
        {name: 'custContactByPhone'},
        {name: 'notifierCode'},
        {name: 'notifierName'},
        
        {name: 'remark'}
    ],

    idProperty: 'inquCode'
});
/**
 * Description: 询价管理子表 view
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
Ext.define('Hc_Framework.model.HcSubInquiry', {
    extend: Ext.data.Model,

    alias: 'model.hcsubinquiry',

    fields: [
        {name: 'id'},
        {name: 'prodCode'},
        {name: 'prodName'},
        
        {name: 'typeModel'},
        {name: 'qty'},
        {name: 'unit'},
        
        {name: 'univalent'},
        {name: 'currency'},
        {name: 'manufaCode'},
        
        {name: 'manufaName'},
        {name: 'delivTime'},
        {name: 'remark'},
      
    ],

    idProperty: 'id'
});
/**
 * Description: 订单管理 view
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
Ext.define('Hc_Framework.model.HcOrder', {
    extend: Ext.data.Model,

    alias: 'model.hcorder',

    fields: [
        {name: 'orderCode'},
        {name: 'perLiabCode'},
        {name: 'perLiabName'},
        
        {name: 'warehouseCode'},
        {name: 'warehouseName'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'takDelivAddr'},
        {name: 'takDelivBy'},
        
        {name: 'contactTel'},
        {name: 'orNotPrepay'},
        {name: 'otherCharges'},
        
        {name: 'invoice'},
        {name: 'transportMode'},
        {name: 'contractCode'},
        
        {name: 'paymentMode'},
        {name: 'paymentDayQty'},
        {name: 'custDelivTime'},
        
        {name: 'freightBurden'},
        {name: 'freightSum'},
        {name: 'currency'},
        
        {name: 'orderDate'},
        {name: 'bank'},
        {name: 'exaApprByCode'},
        
        {name: 'exaApprByName'},
        {name: 'remark'}
    ],

    idProperty: 'orderCode'
});
/**
 * Description: 订单管理子表 view
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
Ext.define('Hc_Framework.model.HcSubOrder', {
    extend: Ext.data.Model,

    alias: 'model.hcsuborder',

    fields: [
        {name: 'id'},
        {name: 'prodCode'},
        {name: 'prodName'},
        
        {name: 'typeModel'},
        {name: 'prodDesc'},
        {name: 'orderQty'},
        
        {name: 'unit'},
        {name: 'univalent'},
        {name: 'currency'},
        
        {name: 'remark'}

    ],

    idProperty: 'id'
});
/**
 * Description: 项目管理 view
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
Ext.define('Hc_Framework.model.HcProject', {
    extend: Ext.data.Model,

    alias: 'model.hcproject',

    fields: [
        {name: 'projtCode'},
        {name: 'projtName'},
        {name: 'applByCode'},
        
        {name: 'applByName'},
        {name: 'perChargeByCode'},
        {name: 'perChargeByName'},
        
        {name: 'projtSum'},
        {name: 'projtStage'},
        {name: 'projtApprDate'},
        
        {name: 'projtSource'},
        {name: 'sucRateEstimate'},
        {name: 'currentState'},
        
        {name: 'endReason'},
        {name: 'custCode'},
        {name: 'custName'},
        
        {name: 'contactBy'},
        {name: 'contactTel'},
        {name: 'introduction'},
        
        {name: 'rootMeasure'},
        {name: 'coopRootMeasure'},
        {name: 'result'},
        
        {name: 'summary'},
        {name: 'remark'}
    ],

    idProperty: 'projtCode'
});
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
        {name: 'contactByCode'},
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
/**
 * Description: 报价管理子表 view
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
Ext.define('Hc_Framework.model.HcSubQuote', {
    extend: Ext.data.Model,

    alias: 'model.hcsubquote',

    fields: [
        {name: 'id'},
        {name: 'prodCode'},
        {name: 'prodName'},
        
        {name: 'typeModel'},
        {name: 'qty'},
        {name: 'unit'},
        
        {name: 'univalent'},
        {name: 'currency'},
        {name: 'prodDesc'},
        
        {name: 'brand'},
        {name: 'manufCode'},
        {name: 'manufName'},
        
        {name: 'deliveTime'},
        {name: 'remark'},
    ],

    idProperty: 'id'
});
/**
 * Description: 销售机会管理 view
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
Ext.define('Hc_Framework.model.HcSalesOpportunities', {
    extend: Ext.data.Model,

    alias: 'model.hcsalesopportunities',

    fields: [
        {name: 'salesOpportCode'},
        {name: 'salesOpport'},
        {name: 'salesOpportSch'},
        
        {name: 'opportSource'},
        {name: 'salesCode'},
        {name: 'salesName'},
        
        {name: 'compCode'},
        {name: 'compName'},
        {name: 'compZip'},
        
        {name: 'compAddr'},
        {name: 'compContactBy'},
        {name: 'compTel'},
        
        {name: 'compFax'},
        {name: 'expectSum'},
        {name: 'creatyBy'},
        
        {name: 'endDate'},
        {name: 'SucRateEstimate'},
        {name: 'currentState'},
        
        {name: 'endReason'},
        {name: 'updatedByCode'},
        {name: 'updatedByName'},
        
        {name: 'relatDesc'},
        {name: 'remark'}
       
    ],

    idProperty: 'salesOpportCode'
});
/**
 * Description: 样品管理 view
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
Ext.define('Hc_Framework.model.HcSample', {
    extend: Ext.data.Model,

    alias: 'model.hcsample',

    fields: [
        {name: 'sampleCode'},
        {name: 'perLiableCode'},
        {name: 'perLiableName'},
        
        {name: 'warehouseCode'},
        {name: 'warehouseName'},
        {name: 'custCode'},
        
        {name: 'custName'},
        {name: 'takDelivAddr'},
        {name: 'contactBy'},
        
        {name: 'contactTel'},
        {name: 'registerDate'},
        {name: 'sampleCurrency'},
        
        {name: 'transportMode'},
        {name: 'delivDate'},
        {name: 'freight'},
        
        {name: 'insurance'},
        {name: 'adHocRequest'},
        {name: 'remark'}
    ],

    idProperty: 'sampleCode'
});
/**
 * Description: 样品管理子表 view
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
Ext.define('Hc_Framework.model.HcSubSample', {
    extend: Ext.data.Model,

    alias: 'model.hcsubsample',

    fields: [
        {name: 'id'},
        {name: 'prodCode'},
        {name: 'prodName'},
        
        {name: 'typeModel'},
        {name: 'prodDesc'},
        {name: 'qty'},
        
        {name: 'unit'},
        {name: 'univalent'},
        {name: 'currency'},
        
        {name: 'remark'}
    ],

    idProperty: 'id'
});
/**
 * Description: 盖章管理 view
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
Ext.define('Hc_Framework.model.HcSeal', {
    extend: Ext.data.Model,

    alias: 'model.hcseal',

    fields: [
        {name: 'sealCode'},
        {name: 'borrowDept'},
        {name: 'handleByCode'},
        
        {name: 'handleByName'},
        {name: 'borrowIndiaByCode'},
        {name: 'borrowIndiaByName'},
        
        {name: 'loanDate'},
        {name: 'useTerm'},
        {name: 'borrowIndiaType'},
        
        {name: 'imporContentDesc'},
        {name: 'useScope'},
        {name: 'indiaPromise'},
        
        {name: 'indiaContent'},
        {name: 'indiaWitnBy'},
        {name: 'remark'},

   ],

    idProperty: 'sealCode'
});
/**
 * Description: 任务管理 view
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
Ext.define('Hc_Framework.model.HcTask', {
    extend: Ext.data.Model,

    alias: 'model.hctask',

    fields: [
        {name: 'taskCode'},
        {name: 'issuedTaskDate'},
        {name: 'finishTaskDate'},
        
        {name: 'taskSubject'},
        {name: 'taskContent'},
        {name: 'taskRespBy'},
        
        {name: 'taskInvolvBy'},
        {name: 'associatedBy'},
        {name: 'issuedTaskBy'},
        
        {name: 'taskFinSituation'},
        {name: 'remart'}
   ],

    idProperty: 'taskCode'
});
/**
 * Description: 事物项目管理 view
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
Ext.define('Hc_Framework.model.HcThingItem', {
    extend: Ext.data.Model,

    alias: 'model.hcthingitem',

    fields: [
        {name: 'thingItemCode'},
        {name: 'projtApprByCode'},
        {name: 'projtApprByName'},
        
        {name: 'projtApprDate'},
        {name: 'startDate'},
        {name: 'expecCompletDate'},
        
        {name: 'projectCode'},
        {name: 'projectName'},
        {name: 'urgencyLevel'},
        
        {name: 'projtPerCharges'},
        {name: 'partakeBys'},
        {name: 'assistBys'},
        
        {name: 'projtSynopsis'},
        {name: 'remark'}
   ],

    idProperty: 'thingItemCode'
});
/**
 * Description: 用车管理 view
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
Ext.define('Hc_Framework.model.HcUseCar', {
    extend: Ext.data.Model,

    alias: 'model.hcusecar',

    fields: [
        {name: 'useCarCode'},
        {name: 'placeDeparture'},
        {name: 'orNotOneWay'},
        
        {name: 'destination'},
        {name: 'applyReason'},
        {name: 'useCarByCode'},
        
        {name: 'useCarByName'},
        {name: 'useCarByQty'},
        {name: 'applyUseCarDate'},
        
        {name: 'useCarEndDate'},
        {name: 'expectUseFatalism'},
        {name: 'dept'},
        
        {name: 'plateNumber'},
        {name: 'driverCode'},
        {name: 'driverName'},
        
        {name: 'departDate'},
        {name: 'Kilometer'},
        {name: 'departRecordBy'},
        
        {name: 'backDate'},
        {name: 'bacKilometer'},
        {name: 'actualRun'},
        
        {name: 'backRecordBy'},
        {name: 'actualUseFatalism'},
        {name: 'remark'},
   ],

    idProperty: 'useCarCode'
});
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
/**
 * Description:
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/1/28 0028
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.CurrentUser', {
    extend: 'Ext.data.Store',
    alias: 'store.currentuser',
    storeId:'currentuser',
    model:'Hc_Framework.model.CurrentUser'
});
/**
 * Description: 应用清单-公用store
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liutao
 * Createdate:  2015/3/28
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.ItgApplication',{
    extend:'Hc_Common.store.ComBase',

    alias: 'store.itgapplication',

    model: 'Hc_Framework.model.ItgApplication',
    proxy: {
        url: 'itg_application/listAll.json?'
    }
});
/**
 * Description: 项目清单-公用store
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liutao
 * Createdate:  2015/3/28
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.ItgDepartment',{
    extend:'Hc_Common.store.ComBase',
    //
    alias:'store.itgdepartment',

    //model:'Hc_Framework.model.ItgDepartment',
    fields: ['deptNo','deptName'],
    proxy: {
        url: 'itg_department/listAll.json'
    }
});
/**
 * Description: 项目清单-公用store
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      liutao
 * Createdate:  2015/3/28
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.ItgProject',{
    extend:'Hc_Common.store.ComBase',
    
    alias:'store.itgproject',

    model:'Hc_Framework.model.ItgProject',
    proxy: {
        url: 'itg_project/listAll.json'
    }
});
/**
 * Description: 最近访问模块Store, 数据存储于本地
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.LastVisit', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.lastvisit',

    model:'Hc_Framework.model.LastVisit',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'localstorage',
        id: 'lastvisittree'
    },
    root: {
        id: 0,
        text: '最近访问的模块',
        menuNo: 0,
        menuName: '最近访问的模块',
        expanded: true
    }
});
/**
 * Description: 用户菜单
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.MainTree', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.maintree',

    

    model: 'Hc_Framework.model.MainTree',

    autoLoad: true,
    buffered: false,
    proxy: {
       type: 'ajax',
        url: 'itg_menu_list/getusermenulist.json',
        reader: {
            type: 'json',
            rootProperty: 'list'
        },
        root: {
            text: 'hc',
            menuNo: 1,
            menuName: 'hc',
            expanded: true
        }
    },
    parentIdProperty: 'parentMenuNo'
});
/**
 * Description: 我的收藏夹
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/02/07
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.store.MyFavorite', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.myfavorite',

    model:'Hc_Framework.model.LastVisit',
    autoLoad: true,
    autoSync: true,
    proxy: {
        type: 'ajax',
        url:  'rest/myfavorite'
    },
    root: {
        id: 0,
        text: '我的收藏夹',
        menuNo: 0,
        menuName: '我的收藏夹',
        expanded: true
    }
});
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
/**
 * Description: 用户列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.ImportWin', {
	extend: 'Ext.window.Window',

	alias: 'widget.uximportwin',

	title: '批量导入数据',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'destroy',

	items: [{
		xtype: 'form',
		itemId: 'userList',
		border: false

	}],

	bbar: [
		'->',
		{xtype: 'button', text: '确认', handler: 'onChooseUserClick'},
		{
			xtype: 'button', text: '取消', handler: function () {
			this.up('window').close();
		}
		}
	],


	initComponent: function () {
		this.callParent();
	}
});
/**
 * Description: 模块列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/02
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.ModuleList', {
    extend: 'Ext.window.Window',

    alias: 'widget.uxmodulelist',


    title: '模块清单',
    width: 500,
    height: 300,
    modal: true,
    layout: 'fit',
    reference: 'commonchildWin',
    closeAction: 'hide',
    items: [{
        xtype: 'grid',
        itemId: 'moduleList',
        border: false,
        columns: [
            {header: '模块ID', dataIndex: 'moduleNo'},
            {header: '模块编号', dataIndex: 'moduleCode'},
            {header: '模块名称', dataIndex: 'moduleName', flex: 1},
            {header: '项目代号', dataIndex: 'projectCode', width: 50},
            {header: '系统ID', dataIndex: 'appNo', width: 50},
            {header: '权限值', dataIndex: 'rightValue', width: 50}
        ],
        selType: 'checkboxmodel',
        store: {
            type: 'basestore',
            model:'Hc_Framework.model.ItgLoginUser',
            autoLoad:true,
            proxy:{
                url:Hc.basePath+'itg_module_list/list.json'
            }
        },
        bbar: {
            xtype: 'pagingtoolbar',
            store: {
                type: 'basestore',
                model:'Hc_Framework.model.ItgLoginUser',
                autoLoad:true,
                proxy:{
                    url:Hc.basePath+'itg_module_list/list.json'
                }
            }
        }
    }],

    bbar: [
        '->',
        {xtype: 'button', text: '确认', handler: 'onWinReturnValue'},
        {
            xtype: 'button', text: '取消', handler: function () {
            this.up('window').close();
        }
        }
    ],
    initComponent: function () {
        this.callParent();
    }
});
/**
 * Description: 角色列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.RoleList', {
	extend: 'Ext.window.Window',

	alias: 'widget.uxrolelist',



	title: '角色清单',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'hide',

	targetStore: {},

	items: [{
		xtype: 'grid',
		itemId: 'roleList',
		border: false,
		columns: [

			{header: '角色名称', dataIndex: 'roleName'},
			{
				header: '启用状态', dataIndex: 'enableFlag',
				renderer: 'renderUseFlag'
			},
			{header: '角色拥有者', dataIndex: 'roleOwner',  width: 150},
			{header: '排列序号', dataIndex: 'orderNo', width: 80},
			{header: '备注', dataIndex: 'remarks',  flex: 1}
		],
		selType: 'checkboxmodel',
		store: {
			type: 'basestore',
			model:'Hc_Framework.model.ItgLoginUser',
			autoLoad:true,
			proxy:{
				url:Hc.basePath+'itg_role_list/list.json'
			}
		},
		bbar: {
			xtype: 'pagingtoolbar',
			store: {
				type: 'basestore',
				model:'Hc_Framework.model.ItgLoginUser',
				autoLoad:true,
				proxy:{
					url:Hc.basePath+'itg_role_list/list.json'
				}
			}
		}
	}],

	bbar: [
		'->',
		{xtype: 'button', text: '确认', handler: 'onWinReturnValue'},
		{
			xtype: 'button', text: '取消', handler: function () {
			this.up('window').close();
		}
		}
	],

	scope:this,


	initComponent: function () {
		this.callParent();
	},

	onWinReturnValue:function(btn){
		alert(btn);
	}

});
/**
 * Description: 用户列表
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/31
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.ux.UserList', {
	extend: 'Ext.window.Window',

	alias: 'widget.uxuserlist',

	title: '用户清单',
	width: 500,
	height: 300,
	modal: true,
	layout: 'fit',
	alwaysOnTop: true,
	closeAction: 'hide',

	targetStore: {},

	items: [{
		xtype: 'grid',
		itemId: 'userList',
		border: false,
		columns: [
			{dataIndex: 'userCode', header: '用户编号'},
			{dataIndex: 'userName', header: '用户名称', flex: 1},
			{dataIndex: 'enableFlag', header: '启用状态', renderer: 'renderUseFlag', width: 60},
			{dataIndex: 'deptNo', header: '部门编号', width: 60},
			{
				dataIndex: 'isAdminGroup',
				header: '管理员组?',
				renderer: 'renderYesNo',
				width: 60
			}],
		selType: 'checkboxmodel',
		store: {
			type: 'basestore',
			model:'Hc_Framework.model.ItgLoginUser',
			autoLoad:true,
			proxy:{
				url:Hc.basePath+'itg_login_user/list.json'
			}
		},
		bbar: {
			xtype: 'pagingtoolbar',
			store: {
				type: 'basestore',
				model:'Hc_Framework.model.ItgLoginUser',
				autoLoad:true,
				proxy:{
					url:Hc.basePath+'itg_login_user/list.json'
				}
			}
		}
	}],

	bbar: [
		'->',
		{xtype: 'button', text: '确认', handler: 'onWinReturnValue'},
		{
			xtype: 'button', text: '取消', handler: function () {
			this.up('window').close();
		}
		}
	],


	initComponent: function () {
		this.callParent();
	}
});
/**
 * Description: 应收款管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierAccountReceivable", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplieraccountreceivable',

    

    controller: "hcsupplieraccountreceivablecontroller",

    viewModel: {
        type: "hcsupplieraccountreceivablemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '应收款编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '应收款编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '订单编号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '订单金额',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '出货金额 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '欠款金额',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '目标发货日',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '实际发货日 ',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '预计收款日期 ',
                				width: 150
                            },
                            {
                  				dataIndex: 'purchaseDate',
                  				header: '部门 ',
                  				width: 150
                            },
                            {
                  				dataIndex: 'purchaseDate',
                  				header: '当前状态 ',
                  				width: 150
                            }           
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierAccountReceivable',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierAccountReceivableController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplieraccountreceivablecontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierAccountReceivableModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplieraccountreceivablemodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierAccountReceivable", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplieraccountreceivable',

    

    controller: "subhcsupplieraccountreceivablecontroller",

    viewModel: {
        type: "subhcsupplieraccountreceivablemodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '应收款编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '订单编码',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '客户名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:80,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 79,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '其它费用',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费金额',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实收金额',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '目标起运日',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实际起运日',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '预计收款日期',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 165,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '币　　值',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发　　票',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开票金额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开票日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '票据号',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销 售 员',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '所在部门',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 225,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '收款情况',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "订单数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "出货数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "销售单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "订单合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "出货合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierAccountReceivableController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsupplieraccountreceivablecontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierAccountReceivableModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsupplieraccountreceivablemodel'
});
/**
 * Description: 往来账目 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierComeAndGoAccount", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliercomeandgoaccount',

    

    controller: "hcsuppliercomeandgoaccountcontroller",

    viewModel: {
        type: "hcsuppliercomeandgoaccountmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '凭证编号', 
			    name: 'storageNo'
			},{
			    xtype: 'textfield', 
			    fieldLabel: '型号规格', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '凭证编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '凭证日期', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '票据号',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '公司名称',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '财务科目 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '财务类别',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '货币',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '凭证金额',
              				width: 150
                           },
                           {
               				dataIndex: 'purchaseDate',
               				header: '已对帐金额',
               				width: 150
                            },
                            {
                   				dataIndex: 'purchaseDate',
                   				header: '登记部门',
                   				width: 150
                             },
                             {
                    				dataIndex: 'purchaseDate',
                    				header: '登记人',
                    				width: 150
                              },
                              {
                     				dataIndex: 'purchaseDate',
                     				header: '状态',
                     				width: 150
                               }        
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierComeAndGoAccountNewEdit',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierComeAndGoAccountController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliercomeandgoaccountcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierWarehouse',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierComeAndGoAccountModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsuppliercomeandgoaccountmodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierComeAndGoAccountNewEdit", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsuppliercomeandgoaccountnewedit',

    

    controller: "hcsuppliercomeandgoaccountneweditcontroller",

    viewModel: {
        type: "hcsuppliercomeandgoaccountneweditmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
    scrollable:true,
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                // height:1000,
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '凭证编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '票 据 号',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '制 单 人',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供应商编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供应商名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 76,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '财务科目',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '财务类别 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '货　　币',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '汇　　率',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '凭证金额',
									    name: 'register',
				     					reference:'register',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 143,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '已对帐金额 ',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '期初余额',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '冲消余额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开户银行',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 180,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '银行帐号 ',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审 批 人',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审批日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:256,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 250,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '摘　　要',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '审批意见',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.HcSupplierComeAndGoAccountNewEditController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsuppliercomeandgoaccountneweditcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierWarehouse',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.HcSupplierComeAndGoAccountNewEditModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsuppliercomeandgoaccountneweditmodel'
});
/**
 * Description: 发票管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierInvoice", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierinvoice',

    

    controller: "hcsupplierinvoicecontroller",

    viewModel: {
        type: "hcsupplierinvoicemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '发票编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '发票编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '订单编号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '发票类别',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '订单金额 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '已开发票',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '待开发票',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '预计收款日期 ',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '部门 ',
                				width: 150
                            },
                            {
                  				dataIndex: 'purchaseDate',
                  				header: '当前状态 ',
                  				width: 150
                            }          
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierInvoice',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierInvoiceController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierinvoicecontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierInvoiceModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierinvoicemodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierInvoice", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplierinvoice',

    

    controller: "subhcsupplierinvoicecontroller",

    viewModel: {
        type: "subhcsupplierinvoicemodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发票编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '订单编码',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '客户名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:80,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 79,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '其它费用',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实收金额',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费金额',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '目标起运日',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实际起运日',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '预计收款日期',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 165,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '币　　值',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发　　票',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开票金额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开票日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '票据号',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销 售 员',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '所在部门',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 225,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '收款情况',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "订单数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "出货数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "销售单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "订单合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "出货合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierInvoiceController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsupplierinvoicecontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierInvoiceModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsupplierinvoicemodel'
});
/**
 * Description: 资金管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierOpenAnAccountID", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplieropenanaccountID',

    

    controller: "hcsupplieropenanaccountIDcontroller",

    viewModel: {
        type: "hcsupplieropenanaccountIDmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '开户编码', 
			    name: 'storageNo'
			},{
			    xtype: 'textfield', 
			    fieldLabel: '开户名称', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '开户编码', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '开户名称', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '开户银行',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '银行帐号',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '所属部门 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '余额',
              				width: 150
                          }     
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierOpenAnAccountIDNewEdit',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 资金管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierOpenAnAccountIDController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplieropenanaccountIDcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierWarehouse',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 资金管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierOpenAnAccountIDModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplieropenanaccountIDmodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierOpenAnAccountIDNewEdit", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsupplieropenanaccountIDnewedit',

    

    controller: "hcsupplieropenanaccountIDneweditcontroller",

    viewModel: {
        type: "hcsupplieropenanaccountIDneweditmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
    scrollable:true,
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                // height:1000,
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:100,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开户编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开户名称',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开户银行',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '银行帐号',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '登记日期',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '初始余额',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '合计余额',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '所属部门',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.HcSupplierOpenAnAccountIDNewEditController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsupplieropenanaccountIDneweditcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierWarehouse',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.HcSupplierOpenAnAccountIDNewEditModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsupplieropenanaccountIDneweditmodel'
});
/**
 * Description: 付款管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierPaymentAccount", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierpaymentaccount',

    

    controller: "hcsupplierpaymentaccountcontroller",

    viewModel: {
        type: "hcsupplierpaymentaccountmodel"
    },
    title_:'付款管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '应收款编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '付款编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '采购单号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '供应商',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '订单金额',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '入库金额 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '实付金额',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '待付金额',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '付款日期 ',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '当前状态 ',
                				width: 150
                            }       
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierPaymentAccount',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 付款管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierPaymentAccountController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierpaymentaccountcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 付款管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierPaymentAccountModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierpaymentaccountmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierPaymentAccount", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplierpaymentaccount',

    

    controller: "subhcsupplierpaymentaccountcontroller",

    viewModel: {
        type: "subhcsupplierpaymentaccountmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsupplierpaymentaccount').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsupplierpaymentaccount',
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '采购编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供应商编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供应商名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:80,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 79,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '票据号',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '采购日期',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '币　　值',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '采 购 员',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开票日期',
									    name: 'billNo',
				     					reference:'billNo',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 165,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '采购金额',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实付金额',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发票金额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '预计付款日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 225,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '付款情况',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "采购数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "到货数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "采购单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "到货日期",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "订单合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "入库合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierPaymentAccountController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsupplierpaymentaccountcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierPaymentAccountModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsupplierpaymentaccountmodel'
});
/**
 * Description: 已收款管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierReceivables", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierreceivables',

    

    controller: "hcsupplierreceivablescontroller",

    viewModel: {
        type: "hcsupplierreceivablesmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '发票编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '发票编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '订单编号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '票据号',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '订单金额 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '出货金额',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '欠款金额',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '收款日期 ',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '部门 ',
                				width: 150
                            }         
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierReceivables',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierReceivablesController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierreceivablescontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierReceivablesModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierreceivablesmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierReceivables", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplierreceivables',

    

    controller: "subhcsupplierreceivablescontroller",

    viewModel: {
        type: "subhcsupplierreceivablesmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发票编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '订单编码',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '客户名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:80,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 79,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '其它费用',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实收金额',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费金额',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '目标起运日',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实际起运日',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '预计收款日期',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 165,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '币　　值',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发　　票',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开票金额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开票日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '票据号',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销 售 员',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '所在部门',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 225,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '收款情况',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "订单数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "出货数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "销售单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "订单合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "出货合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierReceivablesController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsupplierreceivablescontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierReceivablesModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsupplierreceivablesmodel'
});
/**
 * Description: 退货应付管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierReturnGoods", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierreturngoods',

    

    controller: "hcsupplierreturngoodscontroller",

    viewModel: {
        type: "hcsupplierreturngoodsmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '退货编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '退货编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '应退金额',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '实退金额 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '退货日期',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '当前状态',
                				width: 150
                          }         
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierReturnGoods',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierReturnGoodsController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierreturngoodscontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierReturnGoodsModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierreturngoodsmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierReturnGoods", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplierreturngoods',

    

    controller: "subhcsupplierreturngoodscontroller",

    viewModel: {
        type: "subhcsupplierreturngoodsmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '退货编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '客户名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 80,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '实退金额',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '退货日期',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '币　　值',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '销 售 员',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '所在部门',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierReturnGoodsController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsupplierreturngoodscontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierReturnGoodsModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsupplierreturngoodsmodel'
});
/**
 * Description: 资金日记账 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccount", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliertoandfrochargeupaccount',

    

    controller: "hcsuppliertoandfrochargeupaccountcontroller",

    viewModel: {
        type: "hcsuppliertoandfrochargeupaccountmodel"
    },
    title_:'资金日记账',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '凭证编号', 
			    name: 'storageNo'
			},{
			    xtype: 'textfield', 
			    fieldLabel: '票据号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '凭证编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '票据号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '制单人',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '摘要',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '公司名称 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '贷方/借方',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '货币',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '凭证金额',
              				width: 150
                           },
                           {
               				dataIndex: 'purchaseDate',
               				header: '已对帐金额',
               				width: 150
                            },
                            {
                   				dataIndex: 'purchaseDate',
                   				header: '科目名称',
                   				width: 150
                             },
                             {
                    				dataIndex: 'purchaseDate',
                    				header: '科目明细',
                    				width: 150
                              },
                              {
                     				dataIndex: 'purchaseDate',
                     				header: '开户银行',
                     				width: 150
                               },
                               {
                    				dataIndex: 'purchaseDate',
                    				header: '银行帐号',
                    				width: 150
                              }        
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountNewEdit',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliertoandfrochargeupaccountcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierWarehouse',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 资金日记账管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsuppliertoandfrochargeupaccountmodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountNewEdit", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsuppliertoandfrochargeupaccountnewedit',

    

    controller: "hcsuppliertoandfrochargeupaccountneweditcontroller",

    viewModel: {
        type: "hcsuppliertoandfrochargeupaccountneweditmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
    scrollable:true,
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('toandfrochargeupaccountnewedit').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'>采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                // height:1000,
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 reference:'toandfrochargeupaccountnewedit',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '凭证编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '票 据 号',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '制 单 人',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供应商编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供应商名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 76,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '财务科目',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '财务类别 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '货　　币',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '汇　　率',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '凭证金额',
									    name: 'register',
				     					reference:'register',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 143,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '已对帐金额 ',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '期初余额',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '冲消余额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '开户银行',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 180,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '银行帐号 ',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审 批 人',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审批日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:256,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 250,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '摘　　要',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '审批意见',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountNewEditController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsuppliertoandfrochargeupaccountneweditcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierWarehouse',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.HcSupplierToAndFroChargeUpAccountNewEditModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsuppliertoandfrochargeupaccountneweditmodel'
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierRetail", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierretail',

    

    controller: "hcsupplierretailcontroller",

    viewModel: {
        type: "hcsupplierretailmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '出库编码', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '出库编码', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '订单编号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '出库类型',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '客户名称',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '付款方式 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '责任人',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '审批状态 ',
                				width: 150
                          }      
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierRetail',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierRetailController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierretailcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierRetailModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierretailmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierRetail", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplierretail',

    

    controller: "subhcsupplierretailcontroller",

    viewModel: {
        type: "subhcsupplierretailmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '出库编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '订单编码',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '客户名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:80,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 79,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '选择仓库',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '出库类型 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '其它费用',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '货　　币',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发　　票',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是否预付',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '合同编号',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发货日期',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户交期',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '银　　行',
									    name: 'billNo',
				     					reference:'billNo',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 165,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运输方式',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费支付方',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费金额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收 货 人',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收货电话',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收货地址',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 225,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "订单数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "仓库名称",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "合计",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierRetailController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsupplierretailcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierRetailModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsupplierretailmodel'
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierBePutInStorage", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierbeputinstorage',

    

    controller: "hcsupplierbeputinstoragecontroller",

    viewModel: {
        type: "hcsupplierbeputinstoragemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '入库编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '入库编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '供 应 商名称', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '入库类别',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '登记者',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '入库日期 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '入库状态',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '采购日期',
                				width: 150
                          }      
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierBePutInStorageProduct',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierBePutInStorageController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierbeputinstoragecontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierPurchase',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierBePutInStorageModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierbeputinstoragemodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierBePutInStorageProduct", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsupplierpurchaseproduct',

    

    controller: "hcsupplierbeputinstorageproductcontroller",

    viewModel: {
        type: "hcsupplierbeputinstorageproductmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '入库编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供应商编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供应商名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 103,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '入库类别',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '货币单位 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '入库日期',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '单 据 号',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '登 记 者',
									    name: 'register',
				     					reference:'register',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是否品检',
									    name: 'whetherProductInspection',
				     					reference:'whetherProductInspection',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '品检者',
									    name: 'qualityInspector',
				     					reference:'qualityInspector',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '品检者',
									    name: 'qualityInspector',
				     					reference:'qualityInspector',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 170,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审 批 者 ',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '入库确认者',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '入库状态',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 210,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '审批意见',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "产品序号",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "订单/采购编号",
                		            dataIndex: "inquiredQTY_quotedPrice$",
                		            width: 150
                		        },{
                		            text: "仓库",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "单位",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "合计",
                		            dataIndex: "quotedPrice",
                		            width: 150,
                		            summaryType: 'sum',
	                		      	summaryRenderer: function(value, summaryData, dataIndex) {
	                		            return'金额总计:'+value;
	                		        }
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.HcSupplierBePutInStorageProductController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsupplierbeputinstorageproductcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierBePutInStorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.HcSupplierBePutInStorageProductModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsupplierbeputinstorageproductmodel'
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierDeliveryOfCargoFromTorage", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierdeliveryofcargofromstorage',

    

    controller: "hcsupplierdeliveryofcargofromstoragecontroller",

    viewModel: {
        type: "hcsupplierdeliveryofcargofromstoragemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '出库编码', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '出库编码', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '订单编号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '出库类型',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '客户名称',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '付款方式 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '责任人',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '审批状态 ',
                				width: 150
                          }      
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierDeliveryOfCargoFromTorage',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierDeliveryOfCargoFromTorageController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierdeliveryofcargofromstoragecontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierDeliveryOfCargoFromTorageModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierdeliveryofcargofromstoragemodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierDeliveryOfCargoFromTorage", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplierdeliveryofcargofromstorage',

    

    controller: "subhcsupplierdeliveryofcargofromstoragecontroller",

    viewModel: {
        type: "subhcsupplierdeliveryofcargofromstoragemodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '出库编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '订单编码',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '客户名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 79,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '选择仓库',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '出库类型 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '其它费用',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '货　　币',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发　　票',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是否预付',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '合同编号',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发货日期',
									    name: 'billNo',
				     					reference:'billNo',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 150,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运输方式',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费支付方',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费金额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收 货 人',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收货电话',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收货地址',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 215,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "预出数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "实出数量",
                		            dataIndex: "inquiredQTY_quotedPrice$",
                		            width: 150
                		        },{
                		            text: "当前库存",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "可供库存",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "仓库名称",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "备注",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierDeliveryOfCargoFromTorageController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsupplierdeliveryofcargofromstoragecontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierDeliveryOfCargoFromTorageModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsupplierdeliveryofcargofromstoragemodel'
});
/**
 * Description: 发运管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierShipment", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliershipment',

    

    controller: "hcsuppliershipmentcontroller",

    viewModel: {
        type: "hcsuppliershipmentmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '发运编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '发运编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '订单编号', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '运输公司',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '运输方式 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '运单号',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '收货人 ',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '目标发运日 ',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '状态 ',
                				width: 150
                            }   ,
                            {
                  				dataIndex: 'purchaseDate',
                  				header: '是否打印 ',
                  				width: 150
                              }          
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierShipment',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierShipmentController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliershipmentcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.SubHcSupplierDeliveryOfCargoFromTorage',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierShipmentModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsuppliershipmentmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierShipment", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsuppliershipment',

    

    controller: "subhcsuppliershipmentcontroller",

    viewModel: {
        type: "subhcsuppliershipmentmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发运编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '订单编码',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '客户名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:80,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 79,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运输公司',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '目 的 站 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运单号',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运　　费',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '保　　费',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '目标起运日',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '实际起运日',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销 售 员',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '件　　数',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '提货电话',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收款方式',
									    name: 'billNo',
				     					reference:'billNo',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 165,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运输方式',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费负担',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费金额',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收 货 人',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '收货电话',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '送货单位',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发 货 人',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发货人电话',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '所在部门',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 225,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '特别要求',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '审批意见',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品名称",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "订单数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "产品序号",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "仓库名称",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierShipmentController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsuppliershipmentcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierDeliveryOfCargoFromTorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierShipmentModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsuppliershipmentmodel'
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierWarehouse", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierwarehouse',

    

    controller: "hcsupplierwarehousecontroller",

    viewModel: {
        type: "hcsupplierwarehousemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '产品编号', 
			    name: 'storageNo'
			},{
			    xtype: 'textfield', 
			    fieldLabel: '型号规格', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '产品编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '型号规格', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '产品名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '批次',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '当前库存 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '最少存量',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '可供数量',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseDate',
              				header: '在途数量',
              				width: 150
                           },
                           {
               				dataIndex: 'purchaseDate',
               				header: '成本单价',
               				width: 150
                            },
                            {
                   				dataIndex: 'purchaseDate',
                   				header: '建议售价',
                   				width: 150
                             },
                             {
                    				dataIndex: 'purchaseDate',
                    				header: '产品类别',
                    				width: 150
                              },
                              {
                     				dataIndex: 'purchaseDate',
                     				header: '仓库名称',
                     				width: 150
                               },
                               {
                      				dataIndex: 'purchaseDate',
                      				header: '存放位置',
                      				width: 150
                                }         
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierWarehouseNewEdit',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierWarehouseController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierwarehousecontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierWarehouse',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierWarehouseModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierwarehousemodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierWarehouseNewEdit", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsupplierwarehousenewedit',

    

    controller: "hcsupplierwarehouseneweditcontroller",

    viewModel: {
        type: "hcsupplierwarehouseneweditmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
    scrollable:true,
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                // height:1000,
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品名称',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '型号规格',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供应商编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供应商名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 76,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '成本单价',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '公开报价 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最低限价',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '建议售价',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '税　　率',
									    name: 'register',
				     					reference:'register',
									    
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 143,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '起初库存 ',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最少存量',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最多存量',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最小包装',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 180,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销售折扣 ',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销售状态',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销售提成',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 215,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '品　　牌 ',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品类别',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '仓库名称',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '存放位置',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '批次  ',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:256,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 250,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '产品描述',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '技术特性',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '应用范围',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.HcSupplierWarehouseNewEditController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsupplierwarehouseneweditcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierWarehouse',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.HcSupplierWarehouseNewEditModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsupplierwarehouseneweditmodel'
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierInquiry", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierinquiry',

    

    controller: "hcsupplierinquirycontroller",

    viewModel: {
        type: "hcsupplierinquirymodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '询价编号', 
			    name: 'inquiryNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierInquiryManagementList',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '询价编号', 
                          	dataIndex: 'inquiryNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '联系人', 
                          	dataIndex: 'contactsName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'contactsTel',
              				header: '联系人电话',
              				width: 150
                          },
                          {
                				dataIndex: '负责人',
                				header: 'personInCharge',
                				width: 150
                          },
                          {
                				dataIndex: 'inquiryDate',
                				header: '询价日期',
                				width: 150
                          }
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierInquiryProduct',
            subformActivate:false
            
        });
        me.callParent();

    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierInquiryController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierinquirycontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierInquiryProductManagementList',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierInquiryModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierinquirymodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierInquiryProduct", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsupplierinquiryproduct',

    

    controller: "hcsupplierinquiryproductcontroller",

    viewModel: {
        type: "hcsupplierinquiryproductmodel"
    },
    title:'新增',
    width: 1000,
    height:600,
    
    maxWidth:1000,
    maxHeight:600,
    
    minWidth:1000,
    minHeight:600,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
                 this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->供应商管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '询&nbsp;价&nbsp;编&nbsp;号&nbsp;',
									    name: 'inquiryNo',
				     					reference:'inquiryNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{

									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '负&nbsp;&nbsp;&nbsp;&nbsp;责&nbsp;&nbsp;&nbsp;&nbsp;人',
									    name: 'personInCharge',
				     					reference:'personInCharge'
									    //readOnly:true
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供&nbsp;应商&nbsp;编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供&nbsp;应商&nbsp;名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   									    xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    fieldLabel: '联&nbsp;&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;&nbsp;人',
   									    name: 'contactsName',
				     					reference:'contactsName'
   									},{
   									    xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    fieldLabel: '联&nbsp;系&nbsp;电&nbsp;话',
   									    name: 'contactsTel',
				     					reference:'contactsTel'
   									},{
   									    xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    fieldLabel: '联&nbsp;系&nbsp;传&nbsp;真',
   									    name: 'contactsFax',
				     					reference:'contactsFax'
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 103,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '传&nbsp;&nbsp;输&nbsp;方&nbsp;&nbsp;式&nbsp;',
									    name: 'typeOfShipping',
				     					reference:'typeOfShipping'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '询&nbsp;价&nbsp;日&nbsp;期&nbsp;',
									    name: 'inquiryDate',
				     					reference:'inquiryDate'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '询&nbsp;价&nbsp;货&nbsp;币',
									    name: 'inquiryCurrency',
				     					reference:'inquiryCurrency',
									    colspan:3
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 139,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;题',
									    name: 'subject',
				     					reference:'subject',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remarks',
				     					reference:'remarks',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品型号",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "中文名称",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "询价数量",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "报价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "合计",
                		            dataIndex: "inquiredQTY_quotedPrice$",
                		            width: 150,
                		            summaryType: 'sum',
	                		      	summaryRenderer: function(value, summaryData, dataIndex) {
	                		            return'金额总计:'+value;
	                		        }
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.HcSupplierInquiryProductController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsupplierinquiryproductcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierInquiryManagementList',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.HcSupplierInquiryProductModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsupplierinquiryproductmodel'
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierContactsManagement", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliercontactsmanagement',

    

    controller: "hcsuppliercontactsmanagementcontroller",

    viewModel: {
        type: "hcsuppliercontactsmanagementmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '联系人编号', 
			    name: 'contactsNo'
			
			},
            {
                xtype: 'textfield', 
                fieldLabel: '联系人名称', 
                name: 'contactsName'
            
            },
            {
                xtype: 'textfield', 
                fieldLabel: '所属公司', 
                name: 'companyName'
            
            }
            ],

            gridModel: 'Hc_Framework.model.HcSupplierContactsManagementList',
            gridColumns: [
                          {
                          	header: '联系人编号', 
                          	dataIndex: 'contactsNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '联系人名称', 
                          	dataIndex: 'contactsName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'contactsTel',
              				header: '联系人电话',
              				width: 150
                          },
                          {
                				dataIndex: 'email',
                				header: '电子邮件',
                				width: 150
                          },
                          {
                				dataIndex: 'companyName',
                				header: '所属公司',
                				width: 150
                          }
            ],
            allendflag:false,
            gridPrimaryKey: 'contactsNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_contacts_management_list/list.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_contacts_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_contacts_management_list/do_export.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierContactsManagementNewEdit'
        });
        me.callParent();

    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierContactsManagementController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliercontactsmanagementcontroller',
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		
		
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:this.view.grid.store.getAt(rowIndex),
	    		me_:this
	    	}).show();
		}
		this.onBtnCancelClick();
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierContactsManagementModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsuppliercontactsmanagementmodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierContactsManagementNewEdit", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsuppliercontactsmanagementnewedit',

    

    controller: "hcsuppliercontactsmanagementneweditcontroller",

    viewModel: {
        type: "hcsuppliercontactsmanagementneweditmodel"
    },
    title:'新增',
    width: (window.screen.availWidth/7)*4.45,
    height:(window.screen.availHeight/3)*2,
    layout:'fit',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
    reference:'hcsuppliercontactsmanagementnewedit',
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
                 supplierNo_='C0'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
                 this.lookupReference('contactsNo').setValue(supplierNo_);
                 this.lookupReference('modifyUser').disabled=true;
                 this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('companyTel').disabled=true;
                 this.lookupReference('companyFax').disabled=true;
                 this.lookupReference('companyAddr').disabled=true;
                 
                 
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
     					   fieldLabel:'联系人编码', 
     					   name: 'contactsNo',
     					   reference:'contactsNo'
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
     					   fieldLabel:'联系人名称', 
     					   name: 'contactsName',
     					   allowBlank:false,
     					   blankText:'此栏不允许为空',
     					   maxLength:120,
     					   maxLengthText:'此框允许输入不大于120个字符',
      					   minLength:5,
      					   minLengthText:'此框允许输入不少于5个字符',
     					   reference:'contactsName',
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
  							    xtype: 'combo', 
  							    fieldLabel:'性&nbsp;&nbsp;&nbsp;&nbsp;别', 
  							    reference:'sex',
			                    name: 'sex',
  							    allowBlank:false,
  							    value:'1',
  							    store: [['',''],[1, '男'], [0, '女']]  
							 },
							 {
   	       					   labelWidth:65, 
  	       					   xtype: 'textfield', 
  	       					   fieldLabel:'毕业学校',
  	       					   reference:'graduateSchool',
  	       					   name: 'graduateSchool'
  	       					   }
						     ,
	       					   {
	       	     				   labelWidth:65,
	       	     				   width:550,
	       	     				   xtype: 'textfield', 
	       	     				   fieldLabel:'电子邮件', 
	       	     				   reference:'email',
	       	    				   name: 'email',
	       	    				   vtype:'email'
	       	     			    }
     				    ]
       			  },
       			  {
     				    columnWidth : .4,             
     				    layout : "form",   
     					items: [
							{
								   labelWidth:65, 
								   xtype: 'textfield', 
								   fieldLabel:'籍&nbsp;&nbsp;&nbsp;&nbsp;贯', 
								   reference:'placeOfOrigin',
								   name: 'placeOfOrigin'
							 }
         				      ,
           					 {
         				    	labelWidth:65, 
 							    xtype: 'combo', 
 							    fieldLabel:'最高学历', 
 							    reference:'highestDegree',
 			                    name: 'highestDegree',
 							    allowBlank:false,
 							    value:'5',
 							    store: [['',''],[1, '小学'], [2, '初中'], [3, '高中'], [4, '大专'], [5, '本科'], [6, '研究生'], [7, '硕士'], [8, '博士'], [9, '博士后']] 
 	     					   } ,
           					    {
         						   labelWidth:65, 
         						   xtype: 'textfield', 
         						   fieldLabel:'职&nbsp;&nbsp;&nbsp;&nbsp;位',
         						   reference:'job',
         						   name: 'job'
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
							   fieldLabel:'出生日期', 
							   name: 'dateOfBirth',
							   reference:'dateOfBirth',
							   regex:/^(\d{4})-(0\d{1}|1[0-2])-(0\d{1}|[12]\d{1}|3[01])$/,
     						   regexText:'日期格式yyyy-mm-dd  如：1988-02-23'
						   }
						    ,
						   {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'固定电话', 
     						   name: 'contactsTel',
     						   regex:/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/,
     						   regexText:'正确的电话号码，\n\n如：0591-6487256，15005059587',
     						   reference:'contactsTel'
     				       },
     				       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'部&nbsp;&nbsp;&nbsp;&nbsp;门', 
     						   reference:'department',
     	     				   name: 'department',
     						   maxLength:48,
     						   maxLengthText:'最大字符长度48字符',
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
     						   fieldLabel:'公司名称', 
     						   reference:'companyName',
   	     				       name: 'companyName',
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
     				       }
     				       
     				   ]
     			  },
     			  {
     				    columnWidth : .4,             
     				    layout : "form",   
     					items: [
     					       {
     						   labelWidth:65, 
     						   xtype: 'textfield', 
     						   fieldLabel:'公司传真', 
     						   reference:'companyFax',
 	     				       name: 'companyFax',
 	     				       regex:/^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/,
   						       regexText:'可以匹配的字符串如：+123 -999 999 ； +123-999 999 ；123 999 999 ；+123 999999'
     						   
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
     						   fieldLabel:'公司电话', 
     						   reference:'companyTel',
     				           name: 'companyTel', 
     				           regex:/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0|3|6|7|8|9]|18[8|9])\d{8}$)/,
    						   regexText:'正确的电话号码，\n\n如：0591-6487256，15005059587',
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
       					    columnWidth : .9,             
       					    layout : "form",   
       						items: [
       						     {
           						   labelWidth:65,
           						   width:550,
           						   xtype: 'textfield', 
           						   fieldLabel:'公司地址', 
           						   reference:'companyAddr',
      	     				       name: 'companyAddr',
      	     				       minLength:10,
            					   minLengthText:'此框允许输入不少于10个字符',
            					   maxLength:145,
            					   maxLengthText:'此框允许输入不大于145个字符'
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
       				 //columnWidth : .5,  
       					items: [
       						  {
       							   labelWidth:65, 
       							   xtype: 'textfield', 
       							   fieldLabel:'项目角色', 
       							   reference:'projectRole',
   				                   name: 'projectRole'
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
       							   fieldLabel:'移动电话', 
       							   reference:'mobilePhone',
				                   name: 'mobilePhone',
				                   allowBlank:false,
		     					   blankText:'此栏不允许为空',
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
       				 ,
       				  {
       					    columnWidth : .5,             
       					    layout : "form",   
       						items: [
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
           					    columnWidth : .9,             
           					    layout : "form",   
           						items: [
           						       {
           						    	
	   	       							   labelWidth:65, 
	   	       							   xtype: 'textfield', 
	   	       							   fieldLabel:'通讯地址', 
	   	       							   reference:'mailingAddress',
	   	   				                   name: 'mailingAddress',
			   	   				           allowBlank:false,
			   	       					   blankText:'此栏不允许为空',
			   	       					   minLength:10,
			   	       					   minLengthText:'此框允许输入不少于10个字符',
			   	       					   maxLength:145,
			   	       					   maxLengthText:'此框允许输入不大于145个字符',
           	       					        
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
     							   fieldLabel:'兴&nbsp;&nbsp;&nbsp;趣&nbsp;&nbsp;&nbsp;爱&nbsp;&nbsp;&nbsp;好', 
     							   reference:'hobbiesAndInterests',
		                           name: 'hobbiesAndInterests' 
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'印&nbsp;&nbsp;象&nbsp;&nbsp;评&nbsp;&nbsp;价', 
     							   reference:'impressionEvaluation',
		                           name: 'impressionEvaluation'
     						       },
     						      {
     								 
     							   labelWidth:65, 
     							   xtype: 'textareafield', 
     							   fieldLabel:'往&nbsp;&nbsp;来&nbsp;&nbsp;策&nbsp;&nbsp;略', 
     							   reference:'currentPolicy',
		                           name: 'currentPolicy'
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
        me.callParent();
    }
});
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
Ext.define('Hc_Framework.view.hc.HcSupplierContactsManagementNewEditModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsuppliercontactsmanagementneweditmodel'
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierManagement", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliermanagement',

    

    controller: "hcsuppliermanagementcontroller",

    viewModel: {
        type: "hcsuppliermanagementmodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '供应商编号', 
			    name: 'companyNo'
			
			},
            {
                xtype: 'textfield', 
                fieldLabel: '供应商名称', 
                name: 'companyName'
            
            }
            ],

            gridModel: 'Hc_Framework.model.HcSupplierManagementList',
            gridColumns: [
                          {
                          	header: '供应商编号', 
                          	dataIndex: 'companyNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '供应商名称', 
                          	dataIndex: 'companyName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'provincesAndCities',
              				header: '供应商地址',
              				width: 150
                          },
                          {
                				dataIndex: 'companyTel',
                				header: '联系电话',
                				width: 150
                          },
                          {
                				dataIndex: 'docPurchasing',
                				header: '跟单采购',
                				width: 150
                          },
                          {
                				dataIndex: 'accountPayable',
                				header: '应付款',
                				width: 150
                          },
                          {
                				dataIndex: 'overduePayment',
                				header: '逾期款',
                				width: '20%'
                          }
            ],
            allendflag:false,
            gridPrimaryKey: 'supplierNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_management_list/list.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_management_list/do_export.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierManagementNewEdit'
        });
        me.callParent();

    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierManagementController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliermanagementcontroller',
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		
		
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:this.view.grid.store.getAt(rowIndex),
	    		me_:this
	    	}).show();
		}
		this.onBtnCancelClick();
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierManagementModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsuppliermanagementmodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierManagementNewEdit", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsuppliermanagementnewedit',

    

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
Ext.define('Hc_Framework.view.hc.HcSupplierManagementNewEditController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsuppliermanagementneweditcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierManagementList',{});
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
Ext.define('Hc_Framework.view.hc.HcSupplierManagementNewEditModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsuppliermanagementneweditmodel'
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierPurchase", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierpurchase',

    

    controller: "hcsupplierpurchasecontroller",

    viewModel: {
        type: "hcsupplierpurchasemodel"
    },

    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '采购编号', 
			    name: 'purchaseNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '采购编号', 
                          	dataIndex: 'purchaseNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '是否采购过', 
                          	dataIndex: 'whetherToPurchase', 
                          	width: 250
                          },
                          {
              				dataIndex: 'supplierName',
              				header: '供 应 商名称',
              				width: 150
                          },
                          {
                				dataIndex: 'salesNo',
                				header: '销售编号',
                				width: 150
                          },
                          {
                				dataIndex: 'personInCharge',
                				header: '负 责 人',
                				width: 150
                          },
                          {
              				dataIndex: 'purchaseStates',
              				header: '采购单状态',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '采购日期',
                				width: 150
                          }
                          
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcSupplierPurchaseProduct',
            subformActivate:false
            
        });
        me.callParent();

    }
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierPurchaseController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierpurchasecontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierPurchase',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 供应商管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierPurchaseModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierpurchasemodel'
});
Ext.define("Hc_Framework.view.hc.HcSupplierPurchaseProduct", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.hcsupplierpurchaseproduct',

    

    controller: "hcsupplierpurchaseproductcontroller",

    viewModel: {
        type: "hcsupplierpurchaseproductmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   // reference:'hcsupplierinquirymanagementnewedit',
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
           },
           {
               text: '增加产品',
               handler:'onBtnChoiceProductClick',
               glyph: Hc.Icon.btnFolderOpen
           },
           {
               text: '删除产品',
               handler:'onbtnChoiceDeleteClick',
               glyph: Hc.Icon.btnDelete
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
                 this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '采&nbsp;购&nbsp;编&nbsp;号&nbsp; ',
									    name: 'purchaseNo',
				     					reference:'purchaseNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 40,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '供&nbsp;应商&nbsp;编号',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '供&nbsp;应商&nbsp;名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   									    xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    fieldLabel: '联&nbsp;&nbsp;&nbsp;&nbsp;系&nbsp;&nbsp;&nbsp;&nbsp;人',
   									    name: 'contactsName',
				     					reference:'contactsName'
   									},{
   									    xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    fieldLabel: '联&nbsp;系&nbsp;电&nbsp;话',
   									    name: 'contactsTel',
				     					reference:'contactsTel'
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 103,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运&nbsp;输&nbsp;方&nbsp;式',
									    name: 'typeOfShipping',
				     					reference:'typeOfShipping'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是否采购过 ',
									    name: 'whetherToPurchase',
				     					reference:'whetherToPurchase'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是&nbsp;否&nbsp;品&nbsp;检',
									    name: 'whetherProductInspection',
				     					reference:'whetherProductInspection',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;票',
									    name: 'invoices',
				     					reference:'invoices',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '税&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;率',
									    name: 'taxRate',
				     					reference:'taxRate',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '交&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;期',
									    name: 'deliveryPeriod',
				     					reference:'deliveryPeriod',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付&nbsp;款&nbsp;方&nbsp;式',
									    name: 'paymentMethod',
				     					reference:'paymentMethod',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 170,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '&nbsp;交&nbsp;货&nbsp;地&nbsp;点&nbsp; ',
									    name: 'placeOfDelivery',
				     					reference:'placeOfDelivery',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '质&nbsp;量&nbsp;保&nbsp;证&nbsp; ',
									    name: 'qualityAssurance',
				     					reference:'qualityAssurance',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 210,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '开&nbsp;&nbsp;票&nbsp;&nbsp;信&nbsp;&nbsp;息',
									    name: 'subject',
				     					reference:'subject',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remarks',
				     					reference:'remarks',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },
       	        {
       	         xtype:'panel',
       	         layout: {
                	 type: 'fit',
                 },
                 region: "center",
                 bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                 scrollable:true,
                 items:[{
                	 xtype:'grid',
                	 enableHdMenu:false,
                	 sortableColumns:false,
                	 columnLines: true,
                	 enableColumnHide:false,
                	 enableColumnMove:false,
                	 store:me.store,
                	 features: [{
          		        ftype: 'summary'
          		     }],
                	 columns: {
                		    items: [
                		        {
                		            text: "产品编号 ",
                		            dataIndex: "productModel",
                		            width: 150
                		        },{
                		            text: "型号规格 ",
                		            dataIndex: "chineseName",
                		            width: 150
                		        },{
                		            text: "产品描述",
                		            dataIndex: "inquiredQTY_unit",
                		            width: 150
                		        },{
                		            text: "采购数量",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "预计交货日期",
                		            dataIndex: "inquiredQTY_quotedPrice$",
                		            width: 150
                		        },{
                		            text: "仓库",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "仓库库存",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "成本单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "采购单价",
                		            dataIndex: "quotedPrice",
                		            width: 150
                		        },{
                		            text: "合计",
                		            dataIndex: "quotedPrice",
                		            width: 150,
                		            summaryType: 'sum',
	                		      	summaryRenderer: function(value, summaryData, dataIndex) {
	                		            return'金额总计:'+value;
	                		        }
                		        }
                		    ]
                		}
                	 
                	 
                	 
              }]
       	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.HcSupplierPurchaseProductController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.hcsupplierpurchaseproductcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierPurchase',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.HcSupplierPurchaseProductModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.hcsupplierpurchaseproductmodel'
});
/**
 * Description: 首页（可放置用户罗盘）
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.homepage.HomePage', {
    extend: 'Ext.Container',
    alias: 'widget.homepage_',

    title:'首页',

    id:'app-homepage',

    layout: {
        type: 'fit',
        align: 'middle'
    },

    initComponent: function () {
        this.callParent();
    }
});
/**
 * Description: 应用管理view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgapplication.ItgApplication', {
	extend: 'Hc_Common.view.BaseSimplePage',

	alias: 'widget.itgapplication',

	

	controller: 'itgapplication',
	viewModel: {
		type: 'itgapplication'
	},

	initComponent: function () {
		var me = this,
			projectStore = Ext.create('Hc_Framework.store.ItgProject');
			/*projectStore = Ext.create('Hc_Common.store.ComBase',{
				model:'Hc_Framework.model.ItgProject',
				proxy: {
			        url: Hc.basePath + 'itg_project/listAll.json'
			    }
			});*/

		Ext.apply(me, {
			searchItems: [{
            	xtype : 'extcombox',
				fieldLabel : '所属项目',
				name : 'projectCode',
				store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
			}, {
                xtype: 'textfield',
                fieldLabel: '应用编码',
                name: 'appCode'
            }, {
                xtype: 'textfield',
                fieldLabel: '应用名称',
                name: 'appName'
            }, {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],
				
			gridModel: 'Hc_Framework.model.ItgApplication',
			gridColumns: [
			    {dataIndex: 'appNo', text: '应用编号', editor: {allowBlank: false}},
				{dataIndex: 'appCode', text: '应用编码', editor: {allowBlank: false}},
				{dataIndex: 'appName', text: '应用名称', editor: {allowBlank: false}, width:160},
				{dataIndex: 'projectCode', text: '所属项目', editor: {allowBlank: false}, width:150,
					xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
				{dataIndex: 'appUrl', text: '系统url', editor: {allowBlank: false},  width: 160},
				{dataIndex: 'jsUrl', text: 'jsurl', editor: {allowBlank: false},  width: 180},
				{dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
				{dataIndex: 'imageUrl', text: '图标路径', editor: true},
				{dataIndex: 'imageName', text: '图标名称', editor: true},
				{dataIndex: 'orderNo', text: '排列序号', type: 'int', editor: {type: 'numberfield'}},
				{header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
			],
			gridPrimaryKey: 'appNo',
			gridUnionKey: '',

			gridLoadUrl: Hc.basePath + 'itg_application/list.json',
			gridSaveUrl: Hc.basePath + 'itg_application/batchOperate.json',
			gridExportUrl: Hc.basePath + 'itg_application/do_export.json',
			gridImportUrl: Hc.basePath + ''
		});

		me.callParent();
	}
});
/**
 * Description: 应用管理viewcontroller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgapplication.ItgApplicationController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgapplication'
});
/**
 * Description: 应用管理viewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgapplication.ItgApplicationModel', {
	extend: 'Hc_Common.view.BaseSimplePageModel',

	alias: 'viewmodel.itgapplication'

});
/**
 * Description: 用户管理view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgloginuser.ItgLoginUser', {
	extend: 'Hc_Common.view.BaseSimplePage',

	alias: 'widget.itgloginuser',

	

	controller: 'itgloginuser',
	viewModel: {
		type: 'itgloginuser'
	},

	initComponent: function (arguments) {
		var me = this;
		var	deptStore = Ext.create('Hc_Framework.store.ItgDepartment');

		Ext.apply(me, {
			searchItems: [
			{
                fieldLabel : '所属部门',
                name : 'deptNo',
                xtype:'extcombox',
                
                store: deptStore,
				displaymember:'deptName',
				valuemember:'deptNo'
            },             
			{
				xtype: 'textfield',
				fieldLabel: '用户账号',
				name: 'userCode'
			}, {
				xtype: 'textfield',
				fieldLabel: '用户名称',
				name: 'userName'
			}, {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],

			gridModel: 'Hc_Framework.model.ItgLoginUser',
			gridColumns: [
				{
					dataIndex: 'userCode', header: '用户账号', 
					editor: {allowBlank: false,
						regex:/^[a-zA-Z0-9.@\-\_]+$/,  //只能输入字母、数字或中文或下划线
						regexText:'请输入字母、数字与.@-_特殊字符'
				}},
				{dataIndex: 'userName', header: '用户名称', editor: {allowBlank: false}},
				{
					dataIndex: 'password',
					header: '密码',
					editor: {allowBlank: false, inputType: 'password'},
					renderer: function () {
						return '*';
					}
				},
				//{dataIndex: 'pwdLevelNo', header: '密码等级', editor: {xtype: 'numberfield'}},
				{
					dataIndex: 'deptNo', 
					header: '所属部门', 
					editor: {allowBlank: false},
					width: 160,
                	xtype:'bllookupedit',
					estore: deptStore,
					gstore: deptStore,
					displaymember:'deptName',
					valuemember:'deptNo'
				},
				/*{
					dataIndex: 'isAdminGroup',
					header: '管理员组?',
					editor: {xtype: 'comboyesno'},
					renderer: 'renderYesNo'
				},
				{
					dataIndex: 'checkMac',
					header: '检查Mac地址?',
					editor: {xtype: 'comboyesno'},
					renderer: 'renderYesNo'
				},
				{dataIndex: 'addressMac', header: 'Mac地址', editor: true},
				{
					dataIndex: 'checkIp',
					header: '检查IP?',
					editor: {xtype: 'comboyesno'},
					renderer: 'renderYesNo'
				},
				{dataIndex: 'addressIp', header: 'IP地址', editor: true},*/
				{dataIndex: 'mobileNo', header: '手机号码', editor: true},
				{dataIndex: 'email', header: '邮箱', editor: true, width: 135, vtype: 'email'},
				{
      				dataIndex: 'enableFlag',
      				header: '启用状态',
      				editor: {allowBlank: false},
      				xtype:'bllookupedit',
      				displayvalue : "0=禁用:1=启用",
      				width: 60
                },
				{header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
			],
			gridPrimaryKey: 'userCode',
			gridUnionKey: '',

			gridLoadUrl: Hc.basePath + 'itg_login_user/list.json',
			gridSaveUrl: Hc.basePath + 'itg_login_user/batchOperate.json',
			gridExportUrl: Hc.basePath + 'itg_login_user/do_export.json',
			gridImportUrl: Hc.basePath + ''
		});


		/* 测试用 系统自动生成编辑面板,（只需要指定列数）
		*  me.gridEditColumn = 4;
		*/

		/* 测试用 自定义编辑面板 (需要指定面板items)
		me.gridEditLayout = 'auto';
		me.gridEditItems =[{
			xtype:'container',
			height:40,
			layout:{
				type:'table',
				columns:2
			},
			items:[{
				xtype: 'textfield',
				fieldLabel: '用名户',
				width: 300,
				bind:{
					value:'{gridRow.userName}'
				}
			},{
				xtype: 'textfield',
				fieldLabel: '用户编号',
				width: 300,
				bind:{
					value:'{gridRow.userCode}'
				}
			}]
		},
			{
			xtype:'tabpanel',
			height:100,
			items:[{
				title:'联系方式',
				xtype:'container',
				items:[{
					xtype: 'textfield',
					fieldLabel: '手机号',
					width: 200,
					bind:{
						value:'{gridRow.mobileNo}'
					}
				}]
			},{
				title:'单据状态',
				xtype:'container',
				items:[{
					xtype: 'textfield',
					fieldLabel: '建单人',
					width: 200,
					bind:{
						value:'{gridRow.creator}'
					}
				}]
			}]
		}];
      */
		me.callParent(arguments);
		
	}
});
/**
 * Description: 用户管理viewcontroller
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgloginuser.ItgLoginUserController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgloginuser',
	
	/*onGridBeforeEdit:function(sender,e){
		if(this.callParent(arguments)===false) return false;
		if(e.field == 'password' && !e.record.phantom)return false;
	},*/
	
	onGridAfterEdit:function(editor, option){
		var newValue = option.value;
		var originalValue = option.originalValue;
		this.callParent(arguments);
		
		//logic:密码字段编辑之后就进行加密    impl:
		if(option.field == 'password'){
			if(newValue == originalValue){
				return;
			}else{
				var encryptedPwd = hex_md5(newValue);
				option.record.set('password', encryptedPwd);
			}
		}
	},
	
    /*复制记录按钮 (复制选中的行)*/
    onBtnCopyClick: function (btn) {
        var me = this,
            grid = me.workObject,
            store = me.workObject.store,
            idField = me.workObject.primaryKey,
            selection = me.workObject.getSelection(),
            newObj;
        if (selection.length < 1)return;
        if (!grid.isCanAdd || grid.isReadOnly) {
            Hc.alert('此网格不允许新增数据');
            return;
        }
        if(grid.isMaster && this.editingList.length>0){
            Hc.alert('您有一笔数据正在处理，不能复制主表记录');
            return;
        }
        Ext.Array.each(selection, function (item) {
            newObj = Ext.create(store.model);
            Ext.apply(newObj.data, item.data);
            newObj.set(idField, '');
            newObj.set('_flag', 'A');
            newObj.set('password','');
            store.add(newObj);
        });
    }
});
/**
 * Description: 用户管理viewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgloginuser.ItgLoginUserModel', {
	extend: 'Hc_Common.view.BaseSimplePageModel',

	alias: 'viewmodel.itgloginuser'
});
/**
 * Description: 菜单管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgmenu.ItgMenu", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgmenu',

    

    controller: "itgmenu",
    viewModel: {
        type: "itgmenu"
    },

    initComponent: function () {
        var me = this;        
     
        me.gridEditModel = "none";
        me.gridCanDrag = true;
        me.gridCanEdit = false;
           
        Ext.apply(me, {
            searchItems: [{
                xtype: 'combo',
                width: '250',
                reference:'ddlProjectCode',
                editable: false,
                triggerAction: 'all',
                fieldLabel: '项目编码',
                allowBlank: false,
                name: 'projectCode',
                displayField: 'projectName',
                valueField: 'projectCode',
                store: {
                    model: 'Hc_Framework.model.ItgProject',
                    type: 'basestore',
                    autoLoad: true,
                    proxy: {
                        url: Hc.basePath + 'itg_project/list.json'
                    }
                }
            }],

            gridModel: 'Hc_Framework.model.ItgApplication',
            gridColumns: [
                {header: '模块ID', dataIndex: 'moduleNo'},
                {header: '模块编号', dataIndex: 'moduleCode'},
                {header: '模块名称', dataIndex: 'moduleName', flex: 1},
                {header: '项目代号', dataIndex: 'projectCode', width: 50},
                {header: '系统ID', dataIndex: 'appNo', width: 50},
                {header: '是否可用', dataIndex: 'enableFlag'},
                {header: '是否报表', dataIndex: 'isReport'},
                {header: 'URL', dataIndex: 'moduleUrl', width: 140},
                {header: '权限值', dataIndex: 'rightValue', width: 50},
                {header: '备注', dataIndex: 'remarks'}
            ],
            gridPrimaryKey: 'appCode',
            gridUnionKey: '',
            gridLoadUrl: Hc.basePath + 'itg_module_list/list.json?inMenu=false'
        });

        me.otherItems = [{
            xtype: 'treepanel',
            region: 'west',
            split: true,
            reference: 'menutree',
            width: 200,
            batchUrl: Hc.basePath +'itg_menu_list/batchOperate.json',
            rootVisible: false,
            lines: true,
            columns: [{
                xtype: 'treecolumn',
                flex: 1,
                dataIndex: 'menuName',
                text: "菜单名称",
                sortable: false,
                hideable: false

            }],
            store:{
                model:'Hc_Framework.model.ItgMenuList',
                type:'treebase',
                proxy: {
                    type: 'ajax',
                    url: Hc.basePath + 'itg_menu_list/list.json'
                },
                root: {
                    id:0,
                    menuName: 'hc',
                    menuNo:0,
                    expanded: false
                },
                nodeParam:'parentMenuNo',
                parentIdProperty:'parentMenuNo'
            },
            listeners: {
                'selectionchange': 'onTreeSelectionChange'
            },
            viewConfig: {
                listeners: {
                    render: function (tree) {
                        var dropTarget = new Ext.dd.DropTarget(tree.el, {
                            ddGroup: 'dd_commongrid',
                            copy: false,
                            notifyDrop: function (dragSource, event, data) {
                                var treeObj = me.lookupReference('menutree'),
                                    node = treeObj.selection;
                                if (!node) return true;
                                if (node.isLeaf()) node = node.parentNode;

                                var insertList = [];
                                Ext.Array.each(data.records, function (item) {
                                    insertList.push({
                                        menuName: item.data.moduleName,
                                        moduleNo: item.data.moduleNo,
                                        parentMenuNo: node.id,
                                        projectCode: node.data.projectCode,
                                        appNo: node.data.appNo,
                                        enableFlag: 1,
                                        searchCode: node.data.searchCode,
                                        levelNo: node.data.levelNo + 1,
                                        orderNo: node.data.orderNo
                                    });
                                });
                                me.controller.saveData({data: {insertList: insertList}, srcObj: treeObj});
                                return true
                            }
                        });
                    }
                }
            }
        },{
            xtype:'window',
            autoShow: false,
            closeAction: 'hide',
            reference:'editWin',
            modal: true,
            items: [{
                xtype: 'form',
                items: [{
                        "name": "appNo",
                        "fieldLabel": "应用编号",
                        "xtype": "numberfield"
                    },{
                        "name": "menuName",
                        "fieldLabel": "菜单名称",
                        "xtype": "textfield"
                    }, {
                        "name": "searchCode",
                        "fieldLabel": "查询码",
                        "xtype": "textfield"
                    }, {
                        "name": "levelNo",
                        "fieldLabel": "层级",
                        "xtype": "numberfield"
                    }, {
                        "name": "orderNo",
                        "fieldLabel": "排序码",
                        "xtype": "numberfield"
                    }],
                layout: {
                    type: 'table',
                    columns: 2
                },
                bodyPadding: 10
            }],
            title: '新增菜单',
            bbar: ['->',
                {
                    xtype: 'button',
                    text: '确认',
                    handler:'btnSaveMenu'
                },
                {
                    xtype: 'button',
                    text: '取消',
                    handler: function(btn){btn.up('window').close();}
                }
            ]
        }];
        
        me.callParent();
    }

});
/**
 * Description: 菜单管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgmenu.ItgMenuController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgmenu',

	init:function() {

		var me = this,
			objList = me.getObjList();

		me.workObject = objList.menutree;

		if (objList.btnUndo) {
			objList.btnUndo.setVisible(false);
		}

		if (objList.btnCancel) {
			objList.btnCancel.setVisible(false);
		}

		if (objList.btnSave) {
			objList.btnSave.setVisible(false);
		}
		if (objList.btnAdd) {
			delete  objList.btnAdd.menu;
		}
		me.callParent(arguments);
	},


	beforeSearch:function() {
		var objs = this.getObjList(),
			store = objs.mastergrid.store,
			val = objs.ddlProjectCode.getValue();
		store.proxy.extraParams.projectCode = val;
		store.reload();
	},

	btnSaveMenu:function(btn){
		var param={},
			tree =  this.view.workObject,
			form = btn.up('window').down('form'),
			record= form.getRecord(),
			data = form.getValues();

		if(record.phantom){
			data.parentMenuNo = record.data.parentMenuNo;
			data.projectCode = record.data.projectCode;
			data.enableFlag = 1;
			param.insertList = [data];
		}else{
			param.updateList = [data];
		}
		this.saveData({srcObj:tree,btn:btn,data:param});
	},


	onBtnAddClick: function () {
		var projectCode = this.lookupReference('ddlProjectCode').getValue();
		if(!projectCode){
			Hc.alert('请选择项目编号');
			return;
		}
		var win = this.lookupReference('editWin'),
			tree = this.lookupReference('menutree'),
			store = tree.store,
			newObj = Ext.create(store.model,{
				projectCode:projectCode,
				parentMenuNo:tree.selection?tree.selection.id:0
			});
		win.show();
		win.down('form').loadRecord(newObj);
	},

	//用于编辑按钮
	onBtnEditClick:function(){
		var win = this.lookupReference('editWin'),
			node = this.lookupReference('menutree').selection;

		if(node){
			win.show();
			win.down('form').loadRecord(node);
		}
	},


	onBtnCancelClick:function() {
		var tree = this.getView().workObject;
		tree.store.rejectChanges();
		tree.view.refresh();
	},

	onBtnDeleteClick:function(btn){
		var me = this,
			tree = me.lookupReference('menutree'),
			param={deleteList:[{menuNo:tree.selection.id}]};

		me.saveData({srcObj:tree,btn:btn,data:param});
	},

	onGridSelectionChange:function(){

	},

	onTreeSelectionChange: function (sm, selections) {
		var me = this,
			objs=me.getReferences();

		if (this.canDelete() && objs.btnDelete) {
			objs.btnDelete.setDisabled(selections.length === 0);
		}
		if (this.canPrint() && objs.btnPrint) {
			objs.btnPrint.setDisabled(selections.length === 0);
		}
		if (this.canEdit() && objs.btnEdit) {
			objs.btnEdit.setDisabled(selections.length === 0);
		}

	},

	afterSave:function(result,options){
		if (result.result.resultCode=="0") {
			options.srcObj.store.reload();
			options.srcObj.view.refresh();
		} else {
			Hc.alert(result.result.msg);
		}
		if(options.btn) {
			options.btn.setDisabled(false);
			if (options.btn.up('window'))
				options.btn.up('window').close();
		}else{
			this.lookupReference('mastergrid').store.reload();
		}
	}

});

/**
 * Description: 菜单管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgmenu.ItgMenuModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgmenu'

});
Ext.define('Hc_Framework.view.itgmenulist.ItgMenuList', {
	extend: 'Hc_Common.view.BaseTreePage',
	alias: 'widget.itgmenulist',
	

	controller: 'itgmenulist',
	viewModel: {
		type: 'itgmenulist'
	},

	initComponent: function () {
		var me = this;
		me.tree.columns = [
			{dataIndex: 'menuNo', text: '菜单编号', xtype: 'treecolumn',width:200},
			{dataIndex: 'menuName', text: '菜单名称'},
			{dataIndex: 'appNo', text: '应用编号'},
			{dataIndex: 'projectCode', text: '项目编号'},
			{dataIndex: 'moduleNo', text: '模块编号'},
			{dataIndex: 'enableFlag', text: '启用标识'},
			{dataIndex: 'parentMenuNo', text: '父级Id'},
			{dataIndex: 'searchCode', text: '查询码'},
			{dataIndex: 'levelNo', text: '层级'},
			{dataIndex: 'orderNo', text: '排序码'},
			{dataIndex: 'creator', text: '创建人员'},
			{dataIndex: 'createTime', text: '创建日期'},
			{dataIndex: 'modifier', text: '更改人员'},
			{dataIndex: 'modifyTime', text: '更改日期'},
			{dataIndex: 'remarks', text: '备注'},
		];
		me.tree.batchUrl = Hc.basePath + 'itg_menu_list/batchOperate.json';
		me.tree.autoLoad = true;

		me.detailItem = [
			{
				name: "menuNo",
				fieldLabel: "菜单编号",
				xtype: "numberfield",
				bind: {value: "{theRow.menuNo}"}
			},
			{
				"name": "menuName",
				"fieldLabel": "菜单名称",
				"xtype": "textfield",
				"bind": {"value": "{theRow.menuName}"}
			},
			{
				"name": "appNo",
				"fieldLabel": "应用编号",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.appNo}"}
			},
			{
				"name": "projectCode",
				"fieldLabel": "项目编号",
				"xtype": "textfield",
				"bind": {"value": "{theRow.projectCode}"}
			}, {
				"name": "moduleNo",
				"fieldLabel": "模块编号",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.moduleNo}"}
			}, {
				"name": "enableFlag",
				"fieldLabel": "启用标识",
				"xtype": "combouseflag",
				"bind": {"value": "{theRow.enableFlag}"}
			}, {
				"name": "parentMenuNo",
				"fieldLabel": "父级Id",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.parentMenuNo}"}
			}, {
				"name": "searchCode",
				"fieldLabel": "查询码",
				"xtype": "textfield",
				"bind": {"value": "{theRow.searchCode}"}
			}, {
				"name": "levelNo",
				"fieldLabel": "层级",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.levelNo}"}
			}, {
				"name": "orderNo",
				"fieldLabel": "排序码",
				"xtype": "numberfield",
				"bind": {"value": "{theRow.orderNo}"}
			}, {
				"name": "creator",
				"fieldLabel": "创建人员",
				"xtype": "textfield",
				"bind": {"value": "{theRow.creator}"}
			}, {
				"name": "createTime",
				"fieldLabel": "创建日期",
				"xtype": "datefield",
				"bind": {"value": "{theRow.createTime}"}
			}, {
				"name": "modifier",
				"fieldLabel": "更改人员",
				"xtype": "textfield",
				"bind": {"value": "{theRow.modifier}"}
			}, {
				"name": "modifyTime",
				"fieldLabel": "更改日期",
				"xtype": "datefield",
				"bind": {"value": "{theRow.modifyTime}"}
			}, {
				"name": "remarks",
				"fieldLabel": "备注",
				"xtype": "textfield",
				"bind": {"value": "{theRow.remarks}"}
			}
		];

		me.otherItems = [{
			xtype:'uxmodulelist',
			autoShow:false

		}];
		me.callParent();

		//me.getComponent("btnAddChild").setText('添加模块');
	}
});

/**
 * Description: ��д���ļ�����;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulist.ItgMenuListController', {
    extend: 'Hc_Common.view.BaseTreePageController',
    alias: 'controller.itgmenulist',

    initAddData:function(newObj,parentObj){
        if(!newObj) return;
        newObj.set('projectCode','hc');
    },



    onAddChildClick:function() {
        var win = this.lookupReference('commonchildWin');
        win.show();
    },

    getWinData:function(data,btn){
        if(!data || data.length<1) {
            btn.up('window').close();
            return;
        }
        var param={},
            insertList=[],
            insertObj,
            pNode = this.view.workObject.getSelectionModel().getSelection()[0] ;


        Ext.Array.each(data,function(item){
            insertObj = new Object();
            insertObj.menuNo=insertObj.moduleNo = item.get('moduleNo');
            insertObj.menuName = item.get('moduleName');
            insertObj.appNo = pNode.get('appNo');
            insertObj.projectCode = pNode.get('projectCode');
            insertObj.enableFlag=1;
            insertObj.parentMenuNo=pNode.get('menuNo');
            insertObj.searchCode=0;
            insertObj.levelNo=0;
            insertObj.orderNo=2;
            insertList.push(insertObj);
        });
        param.insertList = insertList;

        this.saveData(param,this.view.workObject,btn);
    }
});
/**
 * Description: ��д���ļ�����;
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulist.ItgMenuListModel', {
	extend: 'Hc_Common.view.BaseTreePageModel',
	alias: 'viewmodel.itgmenulist',

	stores: {
		commonstore: {
			model:'Hc_Framework.model.ItgMenuList',
			proxy: {
				type: 'ajax',
				url: Hc.basePath + 'itg_menu_list/list.json'
			},
			root: {
				id:0,
				menuName: 'hc项目菜单',
				menuNo:0,
				expanded: true
			},
			nodeParam:'parentMenuNo',
			autoLoad:false,
			parentIdProperty:'parentMenuNo'
		}
	}
});
Ext.define('Hc_Framework.view.itgmenulistnew.ItgMenuListNew', {
	extend: 'Hc_Common.view.BasePage',
	alias: 'widget.itgmenulistnew',
	

	controller: 'itgmenulistnew',
	viewModel: {
		type: 'itgmenulistnew'
	},
	
	layout:'border',
	//工具栏
	toolbar: {
		xtype: 'toolbar',
        itemId: 'commontoolbar',
        reference: 'commontoolbar',
        region: 'north',
        items: [{
            text: '刷新',
            itemId: 'btnRefresh',
            reference:'btnRefresh', 
            handler: 'onClickRefresh',
            glyph: Hc.Icon.btnRefresh

        }]
	},
	//菜单树面板
	treePanel: {
		xtype: 'panel',
        itemId: 'treePanel',
        reference: 'treePanel',
        title: '菜单树面板',
        width:200,
        region: 'west',
        split:true,
        layout:'border',
        collapsible:true,
        items: [{
			xtype: 'combo',
			reference: 'projectCodeCombo',
			labelWidth:60,
			width:100,
			editable:false,
			region:'north',
			triggerAction: 'all',
			fieldLabel: '所属项目',
			name: 'projectCode',
			displayField: 'projectName',
			valueField: 'projectCode',
			queryMode: 'local',
			store: {
				type: 'itgproject',
				autoLoad: true
			},
            allowBlank:false,
			listeners:{
		         'change': 'onChangeProjectCode'
		    }
		},{ xtype: 'treepanel',
		        itemId: 'menuTree',
		        region:'center',
		        layout:'fit',
		        reference: 'menuTree',
		        rootVisible: false,
		        //useArrows: true,
		        lines: true,
		        columns: [
					{xtype:'treecolumn', flex: 1, dataIndex : 'menuName',text: "菜单",sortable: false, hideable: false}
					//{xtype:'treecolumn', dataIndex : 'menuNo',text: "菜单ID",sortable: false,hideable: false},
		        ],
		        bind: {
		            store: '{menuTreeStore}'
		        },
		        batchUrl: Hc.basePath+'itg_menu_list/batchOperate.json'
		    		}]
	},
	//明细面板-查询面板+功能操作面板+模块列表网格
	detailPanel:{
		xtype: 'panel',
        itemId: 'detailPanel',
        reference: 'detailPanel',
        region: 'center',
        layout: 'border',
        items: [{
        	xtype: 'form',
            itemId: 'searchPanel',//查询面板
            reference: 'searchPanel',
        	title: '查询模块',
        	collapsible: true,
            region: 'north',
            //height: 60,
            labelWidth : 40, 
            /*layout:{ 
            	type:'hbox',
            	pack: 'start',
            	align: 'middle'
            },*/
            layout: {
            	type:'table',
            	columns:4
            },
            bodyPadding: 4,
            align : 'center',
            defaults: { 
            	labelAlign: 'right',
                labelWidth: 80,
                width: 200
            },
            items:[{
            	xtype: 'textfield',
				fieldLabel: '模块编码',
				name: 'moduleNo'
			}, {
				xtype: 'textfield',
				fieldLabel: '模块名称',
				name: 'moduleName'
			}, {
				xtype: 'tbspacer',
				width: 80, 
			},{
            	xtype: 'button',
            	text : '查询',
                handler : 'onClickSearch',
                width: 80, 
            }/*,{
            	xtype: 'button',
            	text : '上移',
                handler : 'moveUp',
                width: 80, 
            },{
            	xtype: 'button',
            	text : '保存',
                handler : 'moveSave',
                width: 80, 
            }*/]
            },{
            	xtype: 'panel',
                itemId: 'operationPanel',//功能操作面板
                reference: 'operationPanel',
                region: 'west',
                width:100,
                layout:{ 
                	type:'vbox',
                	pack: 'start',
                	align: 'center'
                },
                defaults: { frame: true, width: 80, height: 30 },
                items:[{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                	xtype: 'button',
                	text : '添加文件夹',
                    handler : 'addMenuFolder'
                },{
                	xtype: 'button',
                	text : '移除文件夹',
                    handler : 'removeMenuFolder'
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                	xtype: 'button',
                	text : '添加模块<<',
                    handler : 'addModule'
                },{
                	xtype: 'button',
                	text : '移除模块>>',
                    handler : 'removeModule'
                },{
                    xtype: 'tbspacer',          //插入的空填充
                },{
                    xtype: 'tbspacer',          //插入的空填充 
                },{
                	xtype: 'button',
                	text : '上移↑',
                    handler : 'moveUp'
                },{
                	xtype: 'button',
                	text : '下移↓',
                    handler : 'moveDown'
                },{
                	xtype: 'button',
                	text : '保存[移动]',
                    handler : 'moveSave'
                }]
            },{
            	xtype: 'grid',
            	itemId: 'dataGrid',//模块列表网格
                reference: 'dataGrid',
                region: 'center',
                layout:'fit',
                columnLines: true,
                multiSelect: true,
                plugins :[{
                    ptype: 'cellediting',
                    clicksToEdit: 1
                }],
                bbar: {
                    xtype: 'pagingtoolbar',
                    bind:{store:'{dataGridStore}'},
                    displayInfo: true,
                    listeners:{
                    	'beforechange':'onBeforechange'
                    }
                },
                viewConfig: {
                    enableTextSelection: true
                },
                columns:[
                	{header: '模块ID', dataIndex: 'moduleNo', sortable: true, width: 100},
                    {header: '模块编号', dataIndex: 'moduleCode', sortable: true, width: 100},
                    {header: '模块名称', dataIndex: 'moduleName', sortable: true,width: 200},
                    {header: '所属系统', dataIndex: 'appNo', sortable: true, width: 140,
                    	xtype:'bllookupedit',
    					displayvalue: 'itg_application/listAll.json',
    					displaymember:'appName',
    					valuemember:'appNo',
    					readOnly:true}
                ],
                bind:{store:'{dataGridStore}'}
            }
       ]
	},
	//新增文件夹弹出框
	addWindow:{
		xtype : 'window',
	    title : '菜单名称',
	    itemId: 'addWindow',
	    reference: 'addWindow',
	    width : 200,
	    height: 100,
	    layout: 'fit',
	    resizable : false, 
	    closeAction:'hide',
	    //buttonAlign : 'center',//设置面板上按钮位置
	    plain : false,
	    items : [{
	             xtype: 'form',
	             bodyPadding: 4,
	             //align : 'center',
	             items:[{
	            "name": "menuName",
	            "fieldLabel": "",
	            "xtype": "textfield"}]
        }],
        dockedItems: [{
            xtype: 'toolbar',
            dock: 'bottom',
            layout: {
                type: 'vbox',
                align: 'center'//align与pack都可以控制起始位置
                //pack: 'center',
            },
            items: [
                { xtype: 'button', text: '确定', handler:'btnSaveMenu' }
            ]
        }]
        /*bbar中的按钮无法控制居中 注释
         * bbar: [{
                   xtype: 'button',
                   text: '确认',
                   handler:'btnSaveMenu'
               }]*/
	},
	initComponent: function () {
		this.items=[this.toolbar,this.treePanel,this.detailPanel, this.addWindow];
		this.callParent();
	}
});

/**
 * Description: All rights Reserved, Designed ByHc Copyright: Copyright(C)
 * 2014-2015 Company: Wonhigh.
 * 
 * @author: liutao
 * @date: 2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulistnew.ItgMenuListNewController', {
    extend: 'Hc_Common.view.BasePageController',
    alias: 'controller.itgmenulistnew',
    
    init:function(){
    },
    //刷新按钮
    onClickRefresh:function(){
    	var projectCode = this.lookupReference('projectCodeCombo').getValue();
    	if(projectCode == '' || projectCode == null){
    		Ext.MessageBox.alert("提示",'请选择所属项目！');
    		return;
    	}
    	//刷新树
    	this.reloadMenuTree(true);
    	//刷新网格
    	this.reloadDataGrid();
    },
    /**
     * isRoot-是否为根节点加载
     * parentNode-上级节点
     */
    reloadMenuTree:function(isRoot){
    	var projectCode = this.lookupReference('projectCodeCombo').getValue();
    	var menuTree = this.lookupReference('menuTree');
	   	menuTree.store.proxy.extraParams['projectCode'] = projectCode;
	   	menuTree.store.root.data.expanded = true;
	   	//如果为非跟节点的reload，则直接加载；否则需指定从根节点0作为参数重新加载
	   	if(isRoot){
	   		//menuTree.store.proxy.extraParams['parentMenuNo'] = 0;
	   		menuTree.store.load();//不能使用reload 否则会出现节点颠倒问题 load默认会从根节点加载
	   		//delete menuTree.store.proxy.extraParams['parentMenuNo'];
	   	}else{
	   		menuTree.store.reload();
	   	}
    	
	   	menuTree.getView().refresh();
    },
    reloadDataGrid:function(){
    	var projectCode = this.lookupReference('projectCodeCombo').getValue();
    	var dataGrid = this.lookupReference('dataGrid');
    	var dataGridStore = dataGrid.store;
    	dataGridStore.proxy.extraParams['projectCode'] = projectCode;
    	dataGridStore.proxy.extraParams['inMenu'] = false;
    	var searchPanel = this.lookupReference('searchPanel');
    	if (searchPanel) {
             var formValue = searchPanel.getValues();
             for (var field in formValue) {
                 if (formValue[field] !== '') {
                	 dataGridStore.proxy.extraParams[field] = formValue[field];
                 }else{
                     delete	dataGridStore.proxy.extraParams[field];
                 }
             }
         }
    	dataGridStore.reload();
    },
    //分页控件改变事件，需添加额外参数
    onBeforechange:function(srcObj, eOpts){
    	var projectCode = this.lookupReference('projectCodeCombo').getValue();
    	eOpts['projectCode'] = projectCode;
    	var searchPanel = this.lookupReference('searchPanel');
    	if (searchPanel) {
             var formValue = searchPanel.getValues();
             for (var field in formValue) {
                 if (formValue[field] !== '') {
                	 eOpts[field] = formValue[field];
                 }
             }
         }
    },
    //所属项目值改变事件
    onChangeProjectCode:function(obj,newval,oldval){
	   	var projectCode = newval;
	   	this.reloadMenuTree(true);//所有内部函数的调用都要用this,存在作用域的问题 定义的都是局部方法,必须要用this调用
	   	//刷新网格
    	this.reloadDataGrid();
    },
    //查询按钮点击事件
    onClickSearch:function(){
    	this.reloadDataGrid();
    },
    //增加文件夹
    addMenuFolder:function(){
    	var addWindow = this.lookupReference('addWindow'),
    		menuTree = this.lookupReference('menuTree');
    	//弹窗前置条件检测
    	var curNode = menuTree.selection;
    	if(curNode==null || !curNode.isLoaded()){
    		Ext.MessageBox.alert("提示",'未选中菜单文件夹节点或者该节点并未展开');
    		return ;
    	}
    	//弹窗
    	addWindow.show();
    },
    //新增菜单弹出框-确定按钮-保存
    btnSaveMenu:function(btn){
    	this.doInsert(0, btn);
    },
    //移除文件夹
    removeMenuFolder:function(btn){
    	this.doDelete(0);
    },
    //添加模块
    addModule:function(btn){
    	this.doInsert(1, btn);
    },
    //移除模块
    removeModule:function(btn){
    	this.doDelete(1);
    },
    //新增主体 dataType：0-菜单 1-模块
    doInsert:function(dataType, btn){
    	var me = this,
			insertList = [],
			menuTree = this.lookupReference('menuTree'),
			curNode = menuTree.selection;
    	if(curNode==null){
    		Ext.MessageBox.alert("提示",'请选中菜单树节点');
    		return ;
    	}
    	var	curSearchCode = curNode.data.searchCode,
    		childNodesCnt = (curNode.childNodes!=null && curNode.childNodes.length) || 0,
    		param = {};
    		
    	if(dataType==0){
    		var addWindow = this.lookupReference('addWindow'),
        		form = btn.up('window').down('form'),
        		record= form.getRecord(),//model record
    			data = form.getValues(),//form name&value
        		searchCode = curSearchCode + '-' + Ext.String.leftPad(childNodesCnt+1,2,'0');//检索码增加连接符;
        	if(data.menuName == ''){
        		Ext.MessageBox.alert("提示",'请输入菜单名称');
        		addWindow.close();
        		return;
        	}
        	insertList.push({
                menuName: data.menuName,
                parentMenuNo: curNode.id,
                projectCode: curNode.data.projectCode,
                appNo: curNode.data.appNo,
                enableFlag: 1,
                searchCode: searchCode,
                levelNo: curNode.data.levelNo + 1,
                orderNo: childNodesCnt+1 //序号orderNno会从0开始  与树的index相对应
            });
    	}else{
			var dataGrid = this.lookupReference('dataGrid'),
				selectedRows = dataGrid.getSelectionModel().getSelection();
			if(selectedRows==null || selectedRows.length==0){
				Ext.MessageBox.alert("提示",'请先选中所需添加的模块');
				return ;
			}
			//叶子节点不能添加模块
			if(curNode.data.leaf){
	    		Ext.MessageBox.alert("提示",'叶子节点【模块】不能添加模块');
	    		return ;
	    	}
			var i = 1; //定义的循环变量 与selectedRows数组中的下标一致
			Ext.Array.each(selectedRows, function(item){
				var orderNo = childNodesCnt+i,
					searchCode = curSearchCode + '-' + Ext.String.leftPad(childNodesCnt+i,2,'0');
	    		insertList.push({
	    			menuName:item.get('moduleName'),
	    			moduleNo: item.get('moduleNo'),
	    			parentMenuNo: curNode.id,
	                projectCode: curNode.data.projectCode,
	                appNo: curNode.data.appNo,
	                enableFlag: 1,
	                searchCode: searchCode,
	                levelNo: curNode.data.levelNo + 1,
	                orderNo: orderNo
	    		});
	    		i++;
	    	});
    	}
    	
    	if(insertList.length > 0) param.insertList = insertList;
    	Ext.Ajax.request({
            url: menuTree.batchUrl,
            jsonData: JSON.stringify(param),
            method: 'POST',
            success: function (response) {
                var result = JSON.parse(response.responseText);
                if (result.result.resultCode=="0") {
                	if(dataType==0){
                		addWindow.close();
                	}
                	(dataType==1 && me.reloadDataGrid()) || (dataType==0 && addWindow.close());//添加模块需刷新网格 添加菜单需关闭弹出框
                	me.reloadMenuTree();
                	
                } else {
                    Ext.MessageBox.alert("提示", result.result.msg);
                }
            }
        });
    },
    //删除主体 dataType：0-菜单 1-模块
    doDelete:function(dataType){
    	var me = this,
			menuTree = this.lookupReference('menuTree'),
			curNode = menuTree.selection;
		if(curNode == null){
			Ext.MessageBox.alert("提示",'请先选中所移除的节点');
			return ;
		}
		if((curNode.data.leaf&&dataType==0) || (!curNode.data.leaf&&dataType==1)){
			Ext.MessageBox.alert("提示",'当前选中的节点与操作按钮的操作对象不匹配');
			return;
		}
		if(dataType===0){
			var childNodesCnt = curNode.childNodes!=null && curNode.childNodes.length;
			if(childNodesCnt > 0){
				Ext.MessageBox.alert("提示",'该菜单存在子节点，不能删除');
				return;
			}
		}
		
		//从父节点中显式删除当前节点，前端树结构中的节点
		var parentNode= curNode.parentNode;
		parentNode.removeChild(curNode);
		
		//将当前删除节点提交到后端
		var param = {menuNo:curNode.id},
			url = Hc.basePath+'itg_menu_list/deleteById.json';
		Ext.Ajax.request({
			url: url,
	        //jsonData: JSON.stringify(param),//批量的提交使用josnData形式
			params: param,	//单条记录的提交直接使用params定义参数
	        method: 'POST',
	        success: function (response) {
	            var result = JSON.parse(response.responseText);
	            if (result.result.resultCode=="0") {
	            	dataType==1 && me.reloadDataGrid();
	            	//me.reloadMenuTree();
	            } else {
	                Ext.MessageBox.alert("提示", result.result.msg);
	            }
	        }
	    });
    },
    //上移模块
    moveUp:function(){
    	var me = this,
			menuTree = this.lookupReference('menuTree'),
			treeStore = menuTree.store,
			curNode = menuTree.selection,
			curIndex = curNode.data.index,
			parentNode = curNode.parentNode;
		
		//操作前置验证
		if(curNode == null){
			Ext.MessageBox.alert("提示",'请先选中所需的节点');
			return ;
		}
		//到顶与到底判断
		if(curNode.data.index == 0){
			Ext.MessageBox.alert("提示",'当前已为此级文件夹第一位置，无法上移');
			return;
		}else{
			var preNode = curNode.previousSibling,
				preIndex = curIndex-1;
			parentNode.insertBefore(curNode, preNode);
			//更新orderNo
			curNode.dirty = true;
			curNode.data.orderNo = preIndex+1;
			preNode.dirty = true;
			preNode.data.orderNo = curIndex+1;
		}
    },
    //下移模块
    moveDown:function(){
    	var me = this,
			menuTree = this.lookupReference('menuTree'),
			treeStore = menuTree.store,
			curNode = menuTree.selection,
			curIndex = curNode.data.index,
			parentNode = curNode.parentNode;
		
		//操作前置验证
		if(curNode == null){
			Ext.MessageBox.alert("提示",'请先选中所需的节点');
			return ;
		}
		//到顶与到底判断
		if(curNode.data.index == parentNode.childNodes.length-1){
			Ext.MessageBox.alert("提示",'当前已为此级文件夹最后位置，无法下移');
			return;
		}else{
			var nextNode = curNode.nextSibling,
				nextIndex = curIndex+1;
			parentNode.insertBefore(nextNode, curNode);
			//更新orderNo
			curNode.dirty = true;
			curNode.data.orderNo = nextIndex+1;//序号从1开始 与生成的检索码序号保持一致
			nextNode.dirty = true;
			nextNode.data.orderNo = curIndex+1;
		}
    },
    moveSave:function(){
    	var me = this,
			menuTree = this.lookupReference('menuTree'),
			treeStore = menuTree.store;

		//获取此次所修改的数据
        var items = treeStore.getModifiedRecords(),
        	param = {},
        	updateItems = [];
        if(items.length == 0){
        	Ext.MessageBox.alert("提示",'不存在所修改的数据，无需保存');
			return;
        }
        Ext.Array.each(items, function(item){
			//item.data.moduleNo==0 && delete item.data.moduleNo; //moduleNo为整型，默认为0 需处理掉
        	//自行组装修改的数据，因moduleNo存在默认值，并且采用默认store的数据提交后台的时候存在很多非修改的无用字段的提交
			var changedData = {
					'menuNo' : item.data.menuNo,
					'orderNo' : item.data.orderNo
			};
			
        	updateItems.push(changedData);
        });
        //将当前移动结果提交到后端 进行保存
		param.updateList = updateItems;
		var url = Hc.basePath + 'itg_menu_list/batchOperate.json';
		Ext.Ajax.request({
			url: url,
	        jsonData: JSON.stringify(param),//批量的提交使用josnData形式
	        method: 'POST',
	        success: function (response) {
	            var result = JSON.parse(response.responseText);
	            if (result.result.resultCode == "0") {
	            	//保存成功后提交store中的所有修改
	            	treeStore.commitChanges();
	            	me.reloadMenuTree();
	            	/*Ext.MessageBox.alert("提示", '保存成功！');
	            	setTimeout(1000);//单位ms*/
	            	 Ext.toast('保存成功！');
	            } else {
	                Ext.MessageBox.alert("提示", result.result.msg);
	            }
	        }
	    });
    }
});
/**
 * Description: 
 * All rights Reserved, Designed ByHc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * @author:     user
 * @date:  2015-03-09 09:38:33
 * @version 1.0.0
 */
Ext.define('Hc_Framework.view.itgmenulistnew.ItgMenuListNewModel', {
	extend: 'Hc_Common.view.BasePageModel',
	alias: 'viewmodel.itgmenulistnew',

	stores: {
		menuTreeStore: {
			type:'treebase',
			model:'Hc_Framework.model.ItgMenuList',
			autoLoad: false,
			proxy: {
				type: 'ajax',
				url: 'itg_menu_list/listAll.json',
			},
			root: {
				id: 0,
				text: 'root',
				menuName: 'root',
				menuNo: 0,
				expanded: false
			},
			nodeParam:'parentMenuNo',
			parentIdProperty:'parentMenuNo' 
		},
		dataGridStore:{
			type:'basestore',
            model : 'Hc_Framework.model.ItgModuleList',
            proxy: {
				type: 'ajax',
				url: 'itg_module_list/list.json'
			},
			autoLoad: false
		}
	}
});
/**
 * Description: 模块管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *2015/03/28	liutao	应用/项目下拉combo采用公用store，减少数据库访问
 *
 */
Ext.define("Hc_Framework.view.itgmodule.ItgModuleList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgmodulelist',

    

    controller: "itgmodulelist",

    viewModel: {
        type: "itgmodulelist"
    },


    initComponent: function () {
        var me = this,
        	projectStore = Ext.create('Hc_Framework.store.ItgProject'),
        	applicationStore = Ext.create('Hc_Framework.store.ItgApplication'),
        	applicationEstore = Ext.create('Hc_Framework.store.ItgApplication');
        	
        Ext.apply(me, {
            searchItems: [{
            	xtype : 'extcombox',
				fieldLabel : '所属系统',
				name : 'appNo',
				store: applicationStore,
				displaymember:'appName',
				valuemember:'appNo'
            }, {
                xtype: 'textfield',
                fieldLabel: '模块编号',
                name: 'moduleNo'
            }, {
                xtype: 'textfield',
                fieldLabel: '模块名称',
                name: 'moduleName'
            }, {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],

            gridModel: 'Hc_Framework.model.ItgModuleList',
            gridColumns: [
                {header: '模块编号', dataIndex: 'moduleNo', editor: {xtype: 'numberfield', allowBlank: false}},
                {header: '模块启动命令', dataIndex: 'moduleCode', editor: {allowBlank: false}, width: 80},
                {header: '模块名称', dataIndex: 'moduleName', editor: {allowBlank: false}},
                {header: '所属项目', dataIndex: 'projectCode', width: 140, editor: {allowBlank: false},
                	xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
                {header: '所属系统', dataIndex: 'appNo', width: 150, editor: {allowBlank: false},
					xtype:'bllookupedit',
					estore: applicationEstore,
					gstore: applicationStore,
					displaymember:'appName',
					valuemember:'appNo'
				 },
                {header: 'URL', dataIndex: 'moduleUrl', editor: {allowBlank: false}},
                {header: '权限值', dataIndex: 'rightValue', editor: {xtype: 'numberfield', allowBlank: false}},
                {dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
                {header: '是否报表', dataIndex: 'isReport', editor: {xtype: 'comboyesno'}, renderer: 'renderYesNo', width:60},//标题4个汉字60
                {header: '备注', dataIndex: 'remarks', editor: true, width: 140},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 140},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 140}
            ],
            gridPrimaryKey: 'moduleNo',
            gridUnionKey: '',

            gridLoadUrl: Hc.basePath + 'itg_module_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_module_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_module_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });

        me.callParent();
    }
});
/**
 * Description: 模块管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgmodule.ItgModuleListController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgmodulelist',

	init:function(){
		var me = this;
		me.callParent();

	},
	onGridBeforeEdit:function(editor, option){
		this.callParent(arguments);
		if(option.field == 'appNo'){
			var newProjectCode = option.record.get('projectCode'),
				store = option.column.getEditor().store;
			
			oldProjectCode = store.proxy.extraParams['projectCode'];
			if(oldProjectCode != newProjectCode){
				store.proxy.extraParams['projectCode'] = newProjectCode;
				store.reload();
			}
		}
	},
	onGridAfterEdit:function(editor, option){
		this.callParent(arguments);
		//logic:模块启动命令默认值为模块编号	impl:moduleNo录入后，自动将其赋值给moduleCode 
		if(option.field=='moduleNo'){
			var moduleNo = option.record.get('moduleNo'),
				moduleCode = option.record.get('moduleCode');
			if(!moduleCode){
				option.record.set('moduleCode', moduleNo);
			}
		}
	}
});

/**
 * Description: 模块管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/22
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgmodule.ItgModuleListModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgmodulelist'

});
/**
 * Description: 项目管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgproject.ItgProject', {
	extend: 'Hc_Common.view.BaseSimplePage',

	alias: 'widget.itgproject',

	

	controller: 'itgproject',
	viewModel: {
		type: 'itgproject'
	},

	initComponent: function () {
		var me = this;

		Ext.apply(me, {
			gridModel: 'Hc_Framework.model.ItgProject',
			gridColumns: [
				{dataIndex: 'projectCode', text: '项目编码', editor: {allowBlank: false}},
				{dataIndex: 'projectName', text: '项目名称', editor: {allowBlank: false}, width: 160},
				{dataIndex: 'enableFlag', text: '启用状态', type: 'int', editor: {xtype: 'combouseflag',allowBlank: false},renderer: 'renderUseFlag', width:60},
				{dataIndex: 'orderNo', text: '排列序号', editor: {xtype: 'numberfield'}},
				{header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
			],
			gridPrimaryKey: 'projectCode',
			gridUnionKey: '',

			gridLoadUrl: Hc.basePath + 'itg_project/list.json',
			gridSaveUrl: Hc.basePath + 'itg_project/batchOperate.json',
			gridExportUrl: Hc.basePath + 'itg_project/do_export.json',
			gridImportUrl: Hc.basePath + ''
		});

		me.callParent();

	}
});
/**
 * Description: 项目管理 viewcontroller All rights Reserved, Designed By Hc
 * Copyright: Copyright(C) 2014-2015 Company: Wonhigh. author: denny.wu
 * Createdate: 2015/02/05
 * 
 * Modification History: Date Author What
 * ------------------------------------------
 * 
 */
Ext.define('Hc_Framework.view.itgproject.ItgProjectController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgproject'

});
/**
 * Description: 项目管理 viewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/05
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgproject.ItgProjectModel', {
	extend: 'Hc_Common.view.BaseSimplePageModel',

	alias: 'viewmodel.itgproject'

});
/**
 * Description: 功能权限清单 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgright.ItgRightList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgrightlist',

    

    controller: "itgrightlist",

    viewModel: {
        type: "itgrightlist"
    },

    initComponent: function () {
        var me = this,
        	projectStore = Ext.create('Hc_Framework.store.ItgProject');

        Ext.apply(me, {
            searchItems: [
			{
				xtype : 'extcombox',
				fieldLabel : '所属项目',
				name : 'projectCode',
				store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
			},
            {xtype: 'textfield', fieldLabel: '权限名称', name: 'rightName'},
            {
                xtype: 'combouseflag',
                fieldLabel: '启用状态',
                name: 'enableFlag'
            }],

            gridModel: 'Hc_Framework.model.ItgRightList',
            gridColumns: [
                {header: '权限值', dataIndex: 'rightNo', editor: {allowBlank: false, 
                	xtype: 'numberfield',
                	minValue: 1,
                	onSpinUp: function(){
                		var me = this,
                			nextValue = me.getValue()*2; //权限值的next+相当于当前值乘以2 权限值的next-相当于当前值除以2
                        
                        if (!me.readOnly) {
                            me.setSpinValue(Ext.Number.constrain(nextValue, me.minValue, me.maxValue));
                        }
                	},
                	onSpinDown: function(){
                		var me = this,
                			nextValue = me.getValue()/2;
                        
                        if (!me.readOnly) {
                            me.setSpinValue(Ext.Number.constrain(nextValue, me.minValue, me.maxValue));
                        }
                	}
                }}, 
                {header: '权限名称', dataIndex: 'rightName', editor: {allowBlank: false}},
                {dataIndex: 'projectCode', text: '所属项目', editor: {allowBlank: false}, width:150,
					xtype:'bllookupedit',
					estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode'
				},
                /*{
                    header: '权限类型', dataIndex: 'rightType',
                    editor: {
                        xtype: 'combo',
                        store: [[0, '标准权限'], [1, '扩展权限'], [2, '数据权限']],
                        editable: false,
                        allowBlank: false
                    },
                    width: 80,
                    renderer:function(v){
                        if(v==0) return '标准权限';
                        if(v==1) return '扩展权限';
                        if(v==2) return '数据权限';
                        return ""
                    }
                },*/
                {
                	header: '启用状态', dataIndex: 'enableFlag', width: 80,
                	editor: {xtype: 'combouseflag',allowBlank: false},
                	renderer: 'renderUseFlag'
                },
                {header: '排列序号', dataIndex: 'orderNo', editor: {xtype: 'numberfield'}, width: 80},
                {header: '备注', dataIndex: 'remarks', editor: true, width: 135},
                {header: '建档人', dataIndex: 'creator', width: 100},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 100},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
            ],
            gridPrimaryKey: 'appCode',
            gridUnionKey: '',

            gridLoadUrl: Hc.basePath + 'itg_right_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_right_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_right_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });

        me.callParent();
    }
});
/**
 * Description: 功能权限清单 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgright.ItgRightListController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgrightlist'
});

/**
 * Description: 功能权限清单 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgright.ItgRightListModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgrightlist'
});
/**
 * Description: 角色管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgrole.ItgRoleList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgrolelist',

    

    controller: "itgrolelist",

    viewModel: {
        type: "itgrolelist"
    },

    initComponent: function () {
        var me = this;
        
        var projectStore = Ext.create('Hc_Framework.store.ItgProject');

        Ext.apply(me, {
            searchItems: [ 
            {
                fieldLabel : '所属项目',
                name : 'projectCode',
                xtype:'extcombox',
                store: projectStore,
				displaymember:'projectName',
				valuemember:'projectCode'
            },{
                xtype: 'textfield', 
                fieldLabel: '角色名称', 
                name: 'roleName'
            },{
                xtype: 'textfield', 
                fieldLabel: '角色拥有者', 
                name: 'roleOwner'
            },{
                    xtype: 'combouseflag', 
                    fieldLabel: '启用状态', 
                    name: 'enableFlag'
            }
            ],

            gridModel: 'Hc_Framework.model.ItgRoleList',
            gridColumns: [
                {
                	header: '角色名称', 
                	dataIndex: 'roleName', 
                	editor: {
                		allowBlank: false
                	},
                	width:120
                },
                {
                	header: '所属项目', 
                	dataIndex: 'projectCode', 
                	xtype:'bllookupedit',
                	editor: {
                		allowBlank: false
                	},
                	estore: projectStore,
					gstore: projectStore,
					displaymember:'projectName',
					valuemember:'projectCode',
	    			width:120
                },
                {
                	header: '角色拥有者', 
                	dataIndex: 'roleOwner', 
                	/*editor: {
                		allowBlank: false
                	}, */
                	width: 80
                },
                {
      				dataIndex: 'enableFlag',
      				header: '启用状态',
      				editor: {
                		allowBlank: false
                	}, 
      				xtype:'bllookupedit',
      				displayvalue : "0=禁用:1=启用",
      				width: 60
                },
                {header: '排列序号', dataIndex: 'orderNo', editor: {xtype: 'numberfield'}, width: 60},
                {header: '备注', dataIndex: 'remarks', editor: true, flex:1},
                {header: '建档人', dataIndex: 'creator', width: 80},
                {header: '建档时间', dataIndex: 'createTime', width: 135},//时间格式需width：135才能全部展示
                {header: '修改人', dataIndex: 'modifier', width: 80},
                {header: '修改时间', dataIndex: 'modifyTime', width: 135}
            ],
            gridPrimaryKey: 'roleId',
            gridLoadUrl: Hc.basePath + 'itg_role_list/list.json',
            gridSaveUrl: Hc.basePath + 'itg_role_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'itg_role_list/do_export.json',
            gridImportUrl: Hc.basePath + ''
        });
        me.callParent();

    }
});
/**
 * Description: 角色管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgrole.ItgRoleListController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.itgrolelist'
});

/**
 * Description: 角色管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgrole.ItgRoleListModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgrolelist'
});
/**
 * Description: 角色管理权限 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgroleright.ItgRoleRight", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgroleright',

    
    controller: "itgroleright",
    viewModel: {
        type: "itgroleright"
    },
    
    customLayout:true,
    
    gridModel: 'Hc_Framework.model.ItgRoleRight',
    
    gridPrimaryKey: 'roleRightId',
    gridLoadUrl: Hc.basePath + 'itg_role_right/getRoleRight.json',
    gridSaveUrl: Hc.basePath + 'itg_role_right/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_role_right/do_export.json',
    gridImportUrl: Hc.basePath + '',
    
    oneclick : function(obj,rowIndex){
		console.dir(rowIndex);
	},
    
    initComponent: function () {
        var me = this;
        
        var appStore = Ext.create('Hc_Framework.store.ItgApplication');
        
        var gridSelModel = {
        		type : 'checkboxmodel',
                mode : 'MULTI',
               allowDeselect : true
        }
        
        me.grid.title = "模块设置";
       // me.grid.selModel = gridSelModel;
        
        Ext.apply(me,{
        	searchItems: [
        	{
        		fieldLabel : '所属系统',
                name : 'appNo',
                xtype:'extcombox',
                store: appStore,
				displaymember:'appName',
				valuemember:'appNo'
        	},
        	{
                xtype: 'textfield',
                fieldLabel: '模块编号',
                name: 'moduleCode'
            }, 
            {
                xtype: 'textfield',
                fieldLabel: '模块名称',
                name: 'moduleName'
            },
            {
                xtype: 'comboyesno', 
                fieldLabel: '是否有权限', 
                name: 'enableFlag'
        	}],
        	gridColumns: [
//            {
//            	header: '是否有权限', 
//            	dataIndex: 'other',
//            	//xtype:"checkcolumn",
//            	//disabled : true,
//            	renderer:function(val, m, rec) {
//            		
//            		var checkBox = Ext.create('Ext.grid.column.Check',{
//            				xtype:'checkcolumn',
//            				listeners:{
//            					'checkchange':function( obj, rowIndex, checked, eOpts ){
//            						console.dir("right : "+checked);
//            					}
//            				}
//            		});
//            		
//            		if(val > 0)
//            			checkBox.renderer(true);
//            		else
//            			checkBox.renderer(false);
//            		return checkBox;
//            			
//            	}
//            },
//            {
//        		header: '是否有权限', 
//            	dataIndex: 'roleRightId',
//            	xtype:"templatecolumn",
//            	tpl:'<tpl if="roleRightId &gt; 0"><input type="checkbox" checked='' onclick="columnClick"/></tpl><tpl if="roleRightId &lt;= 0"><input type="checkbox" onclick="columnClick"/></tpl>'
//        	},
        	{
            	header: '是否有权限', 
            	dataIndex: 'hasRight',
            	xtype:"checkcolumn",            	
            	//disabled : true,
//            	renderer:function(val, m, rec) {
//            		if(val > 0)
//            			return (new Ext.grid.column.CheckColumn).renderer(true);
//            		return (new Ext.grid.column.CheckColumn).renderer(false);
//            	}
            },
            /*{//自定义的多选列 
                header:"abc", 
                dataIndex:'otherColumn', 
                renderer:function (value,cellmeta,record,rowIndex,columnIndex,store){ 
                	console.dir(record.get('moduleName'));
                	if(value > 0){
                		return "<input type='checkbox' checked name='adds_checkbox' onclick=oneclick(this," + rowIndex + ") id='adds_checkbox_'"+value+"></input>"; 
                	}
                	else
                		return "<input type='checkbox' name='adds_checkbox' onclick=oneclick(this) id='adds_checkbox_'"+value+"></input>";
                } , 
                width:50, 
                sortable:false 
            },*/
            
            /*{header: '角色ID', dataIndex: 'roleId', type: 'int'},
            {header: '角色模块编号',dataIndex: 'moduleNo', type: 'int'},
            {header: '角色权限值', dataIndex: 'rightValue', editor: {xtype: 'numberfield'}},
            {header: '模块权限值', dataIndex: 't2_rightValue', editor: {xtype: 'numberfield'}},
            {header: '模块ID', dataIndex: 't2_moduleNo'},*/
            {header: '模块编号', dataIndex: 'moduleCode',width:80},
            {header: '模块名称', dataIndex: 'moduleName',width:100},
            {
          	  dataIndex: 'appNo', 
          	  header: '所属系统', 
          	  width: 120,
          	  xtype:'bllookupedit',
          	  readOnly:true,
          	  estore: appStore,
          	  gstore: appStore,
          	  displaymember:'appName',
          	  valuemember:'appNo'
            },
            {header: 'URL', dataIndex: 'moduleUrl',flex:1},
            {header: '分配人员',dataIndex: 'creator',width:80},
            {header: '分配时间',dataIndex: 'createTime',width:135}
            ],
        });
        
        //左面板 : 角色面板
        var leftPanel = {
        		xtype: 'grid',
                reference: 'rolegrid',
                width: 330,
                region: 'west',
                columns: [
                    {text: '角色编号', dataIndex: 'roleId', width: 60},
                    {text: '角色名称', dataIndex: 'roleName', width: 80},
                    {text: '角色拥有者', dataIndex: 'roleOwner', width: 80},
                    {text: '备注', dataIndex: 'remarks', flex: 1}
                ],

                store: {
                    type: 'basestore',
                    model:'Hc_Framework.model.ItgRoleList',
                    autoLoad:true,
                    proxy:{
                        url: Hc.basePath + 'itg_role_list/list.json'
                    }
                },

                split: true,
                listeners: {
                    'selectionchange': 'onSelectItemChange'
                }
        };
        
        //右面板
        
        //右下面板 : 模块面板
        
        //模块权限复选框
        var rightBottomPanel = {
	        	title : '模块权限',
	        	xtype: 'panel',
	        	height:130,
	            border:'false',
	            //autoScroll:true,
    	        region: 'south',
    	        layout:'border',
    	        split:true,
    	        bodyStyle: 'background:#fff; padding:10px;',
	            items:[{
	                xtype: 'checkboxgroup',
	                reference: 'rightboxgroup',
	                columns: 4,
	                boxLabel : 'rightName',
	                inputValue : 'rightNo',
	                items: []
	            }]
    		};
        
      //构建右面板
        var rightPanel = {
        	xtype: 'panel',
        	border:'false',
        	region:'center',
        	layout:'border',
        	items:[me.grid,rightBottomPanel]
        };
        
        //加入左右面板和工具条
        me.otherItems = [leftPanel,rightPanel,me.toolbar,me.searchPanel];
        me.items = me.otherItems;
        
        this.callParent();

    }
});
/**
 * Description: 角色分配权限管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleright.ItgRoleRightController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgroleright',
	
	init:function(){
		var me = this;
		//调用父类init()方法
		me.callParent(arguments);
		
		var objlist = me.getReferences();
		
		//按钮处理
		objlist.btnSearch.setDisabled(true);
		objlist.btnAdd.setVisible(false);
		objlist.btnDelete.setVisible(false);
		
		Ext.Ajax.request({
			
        	url: Hc.basePath + 'itg_right_list/listAll.json',
        	
        	method: 'GET',
        	
        	params : {pageNum :0},
        	
        	success:function(response, options){
        		var list = JSON.parse(response.responseText).list;
        		
        		var checkobj = me.getObjList().rightboxgroup;
        		
        		Ext.Array.each(list,function(item){
        			
        			checkobj.add({
            			boxLabel : item.rightNo + ' ' + item.rightName,            			
            			inputValue : item.rightNo,
            			checked : false
            		});
        			
        		});
        	}
        });
		objlist.mastergrid.on('cellclick','gridCellClick');
		
	},
	
	/**初始化网格行类样式*/
    initRowClass: function (record, index, rowParams, store) {
        var flag = record.get('_flag');
        if (flag == 'A') return 'x-grid-rows-add';
        if (flag == 'D') return 'x-grid-rows-edit';
        if (record.dirty && !flag) return 'x-grid-rows-edit';
        return ''
    },
	
	onSelectItemChange: function (rd, selected) {
		
		var me = this,
		objlist = me.getReferences();
		
		objlist.mastergrid.enable();
		//objlist.rightboxgroup.disable();
		
		var rolegrid=this.lookupReference('rolegrid');
		var record = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!record) {
			objlist.btnSearch.setDisabled(true);
			return ;
		}
		
		objlist.btnSearch.setDisabled(false);
		
		this.onBtnSearchClick();
	},
	
	//查询前处理函数
	beforeSearch: function (store) {
		
		
		var rolegrid=this.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!role){
			Ext.Msg.alert('系统提示','请选择角色');
			return ;
		}
		
		store.proxy.extraParams["roleId"] = role.get('roleId');

		return true;
	},

	onBtnAddClick: function () {
		var me = this,
			role= me.lookupReference('rolegrid').getSelectionModel().getSelection()[0];
		if(!role) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		if (!me.win) {
			me.win = Ext.widget('uxmodulelist');
		}
		me.win.show();
	},
	
	onBtnUndoClick:function(btn){
		var grid = this.workObject,
        store=grid.store,
        items = grid.getSelectionModel().getSelection();

		Ext.Array.each(items, function (record) {
			if(record.phantom){
				store.remove(record);
			}
			else {
				record.reject();
				if(record.get('rightValue') > 0)
					record.set('hasRight',true);
				else
					record.set('hasRight',false);
			}
		});
	},
	
	onBtnCancelClick:function(btn){
		var grid = this.workObject,
        store = grid.getStore(),
		items = store.getModifiedRecords();
		store.rejectChanges();
		
		Ext.Array.each(items, function (record) {
			if(record.get('rightValue') > 0)
				record.set('hasRight',true);
			else
				record.set('hasRight',false);
		});
		
		grid.view.refresh();
	},
	
	/*选择变化之后*/
    onGridSelectionChange: function (sm, selections, index, eOpts) {
        var me = this,
            objlist = me.getObjList();
        
		objlist.rightboxgroup.enable();
        
        var mastergrid = objlist.mastergrid;
        
        var rightValue = mastergrid.getSelectionModel().getSelection()[0].get('rightValue');
        var t2_rightValue = mastergrid.getSelectionModel().getSelection()[0].get('t2_rightValue');
        
        //根据角色和模块的权限值设置模块权限复选框,角色的权限为0,无权限
        var rightboxgroup = objlist.rightboxgroup;
        
        for(var i = 0;i < rightboxgroup.items.length; i++){
        	
        	var item = rightboxgroup.items.getAt(i);
        	
        	//删除监听事件
        	item.un('change',me.boxchange,me);
        	
        	//是否显示
        	var isenable = (item.inputValue & t2_rightValue) === item.inputValue;
        	//是否勾选
        	var ischecked = (item.inputValue & rightValue) === item.inputValue;
        	
        	if(isenable){
        		item.enable();
        		if(ischecked)
        			item.setValue(true);
        		else
        			item.setValue(false);
        	}
        	else{
        		item.disable();
        		item.setValue(false);
        	}
        	
        	//增加监听事件
        	item.on('change',me.boxchange,me);
        	
        }
    },
	
	boxchange : function(box, newValue, oldValue, eOpts ){
		var me = this,
        objlist = me.getObjList();

		//角色面板
		var rolegrid = objlist.rolegrid;
		//模块设置面板
		var mastergrid = objlist.mastergrid;
		//权限复选框
		var rightboxgroup = objlist.rightboxgroup;
		
		//选中的角色面板的记录
		var rolerecord = rolegrid.getSelectionModel().getSelection()[0];
		//选中的模块列表记录
		var gridrecord = mastergrid.getSelectionModel().getSelection()[0];
		
		if(!rolerecord){
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		
		if(!gridrecord){
			Ext.Msg.alert('系统提示','请选择模块');
			return;
		}
		
		var roleRightId = gridrecord.get('roleRightId');
		var orignValue = gridrecord.get('rightValue');
		var boxvalue = box.inputValue;
		
		if(newValue){//选中
			//选中:权限值做或运算
			var yu = boxvalue | orignValue;
			
			if(roleRightId < 0 && orignValue == 0){//新增记录
				gridrecord.set('rightValue',yu);
				gridrecord.set('_flag','A');
				gridrecord.set('moduleNo',gridrecord.get("t2_moduleNo"));
				gridrecord.set('roleId',rolerecord.get("roleId"));
			}
			else if(gridrecord.get('_flag') == 'D'){
				gridrecord.reject();
				gridrecord.set('rightValue',yu);
			}
			else{
				gridrecord.set('rightValue',yu);
			}
			
			if(boxvalue != 1){//不是浏览权限
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue == 1 && item.getValue()==false){
						item.setValue(true);
						break;
					}
		        }
			}
		}
		else{//取消选中  : 
			
			/* 可能情况 
			 *  
			 * 减少权限:
			 * 不管是否是新增的记录,或者是已有记录的权限值修改,都可以直接修改权限值:rightValue
			 * 
			 * 删除:
			 * 1.已有角色模块删除
			 * 2.未有角色模块删除
			 */
			 
			
			//不选中:权限值做异或运算
			var yihuo = boxvalue ^ orignValue;
			
			//删除 :yihuo的值为0时,说明没有改模块的所有权限,需要做删除操作
			
			if(yihuo == 0){
				if(roleRightId > 0){//已有角色模块删除
					gridrecord.set('_flag','D');
					gridrecord.set('rightValue',0);
				}
				else{//未有角色模块删除
					gridrecord.reject();
				}
			}
			else{//只需修改权限值
				gridrecord.set('rightValue',yihuo);
			}
			
			var canDelete = true;
			for(var i = 0;i < rightboxgroup.items.length; i++){
	        	var item = rightboxgroup.items.getAt(i);
	        	if(item.inputValue != 1 && item.getValue() == true){
					canDelete = false;
					break;
				}
	        }
			if(canDelete){
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue == 1 && item.getValue() == true){
						item.setValue(false);
						break;
					}
		        }
			}
		}
		//rightValue与hasRight绑定,会根据rightValue自动处理
		gridrecord.set('hasRight',false);
	},
	
	gridCellClick:function( obj, td, cellIndex, record, tr, rowIndex, e, eOpts ){
		if(cellIndex==0){
			var me = this,
	        objlist = me.getObjList();

			//角色面板
			var rolegrid = objlist.rolegrid;
			//复选框面板
			var rightboxgroup = objlist.rightboxgroup;
			
			//选中的角色面板的记录
			var rolerecord = rolegrid.getSelectionModel().getSelection()[0];
			
			if(!rolerecord){
				Ext.Msg.alert('系统提示','请选择角色');
				return;
			}
			
			//获取模块权限值和角色权限值,如果角色权限值小于模块权限值,则全选,否则,取消全选
			var moduleRightValue = record.get('t2_rightValue');
			var roleRightValue = record.get('rightValue');
			
			if(roleRightValue == moduleRightValue){//已全选,执行取消全选操作
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	item.setValue(false);
		        }
			}
			else{//未全选,执行全选操作
				//按模块权限值勾选复选框
				for(var i = 0;i < rightboxgroup.items.length; i++){
		        	var item = rightboxgroup.items.getAt(i);
		        	if(item.inputValue & moduleRightValue){
		        		item.setValue(true);
		        	}
		        }
			}
		}
	}
	
	
});

/**
 * Description: 角色分配权限管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleright.ItgRoleRightModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgroleright'
});
/**
 * Description: 角色分配用户管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgroleuser.ItgRoleUser", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itgroleuser',

    

    controller: "itgroleuser",

    viewModel: {
        type: "itgroleuser"
    },
    customLayout: true,
    gridModel: 'Hc_Framework.model.ItgRoleUser',
    gridPrimaryKey: 'userRoleId',
    gridLoadUrl: Hc.basePath + 'itg_role_user/getUser.json?isExist=true',
    gridSaveUrl: Hc.basePath + 'itg_role_user/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_role_user/do_export.json',
    gridImportUrl: Hc.basePath + '',
    
    initComponent: function () {
        var me = this;
        
        me.grid.title = "已分配用户";
        
        var deptStore = Ext.create('Hc_Framework.store.ItgDepartment');
        
        Ext.apply(me,{
        	searchItems: [
        	{
                fieldLabel : '所属部门',
                name : 'deptNo',
                xtype:'extcombox',
                store: deptStore,
				displaymember:'deptName',
				valuemember:'deptNo'
            },
        	{
        		xtype: 'textfield',
        		fieldLabel: '用户编号',
        		name: 'userCode'
        	}, {
        		xtype: 'textfield',
        		fieldLabel: '用户名称',
        		name: 'userName'
        	},
        	{
                xtype: 'combouseflag', 
                fieldLabel: '启用状态', 
                name: 'enableFlag'
        	}
        	],
        	gridColumns: [
        	              {dataIndex: 'userCode', header: '用户编号', width: 80},
        	              {dataIndex: 'userName', header: '用户名称', width: 80},
        	              {
        	            	  dataIndex: 'deptNo', 
        	            	  header: '所属部门', 
        	            	  width: 160,
        	            	  xtype:'bllookupedit',
        	            	  readOnly : true,
        	            	  estore: deptStore,
        	            	  gstore: deptStore,
        	            	  displaymember:'deptName',
        	            	  valuemember:'deptNo'
        	              },
          	              {
              				dataIndex: 'enableFlag',
              				header: '启用状态',
              				readOnly:true,
              				xtype:'bllookupedit',
              				displayvalue : "0=禁用:1=启用",
              				width: 60
                          },
        	              {dataIndex: 'creator', header: '分配人员', width: 80},
        	              {dataIndex: 'createTime', header: '分配时间', width: 135},
        	              {dataIndex: 'remarks', header: '备注',flex:1}
        	          ]
        });

        //左面板 : 角色面板
        var rolePanel = {
            xtype: 'grid',
            reference: 'rolegrid',
            width: 330,
            region: 'west',
            columns: [
                {text: '角色名称', dataIndex: 'roleName', flex: 0.4},
                {text: '角色拥有者', dataIndex: 'roleOwner', flex: 0.2},
                {text: '备注', dataIndex: 'remarks', flex: 0.3}
            ],
            store: {
                type: 'basestore',
                model: 'Hc_Framework.model.ItgRoleList',
                autoLoad: true,
                proxy: {
                    url: Hc.basePath + 'itg_role_list/list.json'
                }
            },
            split: true,
            listeners: {
                'selectionchange': 'onSelectChange'
            }
        };

        //右面板

        //右上面板 : 未分配用户面板

        //构建右面板
        var rightPanel = {
            xtype: 'container',
            border: 'false',
            region: 'center',
            layout: 'border',
            items: [{
                title: '未分配用户',
                xtype: 'grid',
                reference: 'notusergrid',
                columnLines: true,
                split: true,
                columns: [
                    {dataIndex: 'userCode', header: '用户编号', width: 80},
                    {dataIndex: 'userName', header: '用户名称', width: 80},
                    {
  	            	  dataIndex: 'deptNo', 
  	            	  header: '所属部门', 
  	            	  width: 160,
  	            	  xtype:'bllookupedit',
  	            	  readOnly : true,
  	            	  estore: deptStore,
  	            	  gstore: deptStore,
  	            	  displaymember:'deptName',
  	            	  valuemember:'deptNo'
  	              	},
  	              	{
          				dataIndex: 'enableFlag',
          				header: '启用状态',
          				readOnly:true,
          				xtype:'bllookupedit',
          				displayvalue : "0=禁用:1=启用",
          				width: 60
  	              	},
                    {dataIndex: 'creator', header: '创建者', width: 80},
                    {dataIndex: 'createTime', header: '创建日期', width: 135},
                    {dataIndex: 'remarks', header: '备注', flex: 1}
                ],

                region: 'north',
                height: 300,
                bind: {
    	            store:'{store2}'
    	        },
                plugins: [],
                selModel: {
                    mode: 'MULTI',
                    allowDeselect: true
                },
                bbar: {
                    xtype: 'pagingtoolbar',
                    plugins: Ext.create('Ext.ux.ComboPageSize'),
                    displayInfo: true,
                    bind: {
        	            store:'{store2}'
        	        }
                },

                listeners: {
                    'selectionchange': 'onNotUserGridSelectionChange'
                },
                viewConfig: {
                    enableTextSelection: true
                }
            }, me.grid]
        };
        
        me.otherItems = [rolePanel, rightPanel, me.toolbar,me.searchPanel]
        me.items = me.otherItems;
        
        me.callParent();
    }
});
/**
 * Description: 角色分配用户管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgRoleUserController', {
	extend: 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itgroleuser',

	init:function(){
		this.callParent(arguments);
		var objlist = this.getReferences();
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
	},

	onSelectChange:function(item) {
		
		var me = this,
		objlist = me.getReferences();
		
		var rolegrid=me.lookupReference('rolegrid');
		var record = rolegrid.getSelectionModel().getSelection()[0];

		if(!record) {
			
			objlist.notusergrid.store.removeAll();
			objlist.notusergrid.disable();
			objlist.mastergrid.store.removeAll();
			objlist.mastergrid.disable();
			objlist.btnSearch.setDisabled(true);
			return ;
		}
		
		//按钮处理
		objlist.btnSearch.setDisabled(false);
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
		objlist.notusergrid.enable();
		objlist.mastergrid.enable();

		me.onBtnSearchClick();
	},

	//查询前处理函数
	beforeSearch: function (store) {
		var me = this;
		//已分配面板增加查询参数  : roleId
		var rolegrid=me.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		
		if(!role) 
			return ;
		
		var roleId = role.get('roleId')
	
		store.proxy.extraParams["roleId"] = roleId;

		//未分配面板增加查询参数  : roleId
		var store2 = me.lookupReference('notusergrid').store;
		store2.proxy.extraParams["roleId"] = roleId;

		var searchPanel = me.lookupReference('commonsearch');
		if (searchPanel) {
			var formValue = searchPanel.getValues();
			for (var field in formValue) {
				if (formValue[field] !== '') {
					store2.proxy.extraParams[field] = formValue[field];
				} else {
					delete   store2.proxy.extraParams[field];
				}
			}
		}

		store2.load();
		return true;
	},

	//未分配用户notusergrid选中记录触发函数
	onNotUserGridSelectionChange : function(){
		var me = this,
		objlist = me.getReferences();
		objlist.btnAdd.setDisabled(false);
	},

	//已分配用户mastergrid选中记录触发函数
	onGridSelectionChange : function()	{
		var me = this,
		objList = me.getReferences();
		objList.btnDelete.setDisabled(false);
	},

	//将未分配用户记录添加到已分配用户列表中
	onBtnAddClick: function () {
		var me = this;
		var notusergrid = me.lookupReference('notusergrid');

		//获取选中的未分配角色
		var users = notusergrid.getSelectionModel().getSelection();

		if(users == null || users.length <= 0) {
			Ext.Msg.alert('系统提示','请选择未分配用户');
			return;
		}
		
		var rolegrid = me.lookupReference('rolegrid');
		var role = rolegrid.getSelectionModel().getSelection()[0];
		if(!role){
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
			
		var roleId = role.get('roleId');
		//获取已分配角用户grid对象
		var grid1 = me.lookupReference('mastergrid');
		
		Ext.Array.each(users,function(user){
			//向获取的记录增加字段 : _flag
			user.data._flag='A';

			//增加roleId字段值
			user.data.roleId = roleId;

			//新建插入对象
			var newobj=Ext.create(grid1.store.model);
			Ext.apply(newobj.data,user.data);

			//将数据增加到已分配角色中
			grid1.store.insert(0,newobj);

			//删除未分配角色的选中记录
			notusergrid.store.remove(user);
		});

		//显示保存按钮
		var objList = me.getReferences();
		objList.btnSave.setDisabled(false);
	},

	// 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识
	onBtnDeleteClick: function (btn) {
		var me = this,
		obj = me.workObject,
		store = obj.getStore(),
		delflag = false,
		items = obj.getSelectionModel().getSelection();

		if (items.length < 1) {
			Ext.Msg.alert('系统提示','请选择已分配用户');
			return;
		}
		if (!me.checkDelete(items)===false) return;

		Ext.Array.each(items, function (record) {
			var _flag = record.get('_flag');

			if (_flag == 'A') {
				var notusergrid = me.lookupReference('notusergrid');

				//新建插入对象
				var newobj=Ext.create(notusergrid.store.model);
				Ext.apply(newobj.data,record.data);

				notusergrid.store.insert(0,newobj);
				store.remove(record);
			} else {
				record.set('_flag', 'D');
				delflag = true;
			}
		});

		if (delflag) {
			obj.view.refresh();
		}
	},

	/*从写保存之后方法（保存完后，如果成功重新加载数据，失败则提示错误消息）*/
	afterSave:function(result,options) {
		var me = this;
		if (result.result.resultCode == "0") {
			objList = me.getReferences();
			objList.btnSave.setDisabled(true);
			objList.notusergrid.store.reload({afterSaveData:true});
			objList.mastergrid.store.reload({afterSaveData:true});
		} else {
			Hc.alert(result.result.msg);
		}
		me.callParent(arguments);
	}

});

/**
 * Description: 角色分配用户管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgRoleUserModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itgroleuser',
    
    stores: {
        store2: {
        	type:'basestore',
            model: 'Hc_Framework.model.ItgRoleList',
            proxy: {
                url:  Hc.basePath + 'itg_role_user/getUser.json?isExist=false'
            }
        }
    }

});
/**
 * Description: 用户分配角色管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itgroleuser.ItgUserRole", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itguserrole',

    

    controller: "itguserrole",

    viewModel: {
        type: "itguserrole"
    },
    
    customLayout:true,

    gridModel: 'Hc_Framework.model.ItgUserRole',
    gridPrimaryKey: 'userRoleId',
    gridLoadUrl: Hc.basePath + 'itg_user_role/getRole.json?isExist=true',
    gridSaveUrl: Hc.basePath + 'itg_user_role/batchOperate.json',
    gridExportUrl: Hc.basePath + 'itg_user_role/do_export.json',
    gridImportUrl: Hc.basePath + '',
    

    initComponent: function () {
        var me = this;
        
        var projectStore = Ext.create('Hc_Framework.store.ItgProject'); 
        
        Ext.apply(me,{
        	searchItems: [ 
        	{
        	    fieldLabel : '所属项目',
        	    name : 'projectCode',
        	    xtype:'extcombox',
        	    store: projectStore,
        	  	displaymember:'projectName',
        	  	valuemember:'projectCode'
        	},
        	{
        	    xtype: 'textfield', 
        	    fieldLabel: '角色名称', 
        	    name: 'roleName'
        	},
        	{
        	    xtype: 'textfield', 
        	    fieldLabel: '角色拥有者', 
        	    name: 'roleOwner'
        	},
        	{
        		xtype: 'combouseflag', 
        	    fieldLabel: '启用状态', 
        	    name: 'enableFlag'
        	}
        	],
        	              
        	gridColumns: [
        	              {dataIndex: 'roleName', header: '角色名称',width: 80},
        	              {dataIndex: 'roleOwner', header: '角色拥有者',width: 80},
        	              {
        	                	header: '所属项目', 
        	                	dataIndex: 'projectCode', 
        	                	xtype:'bllookupedit',
        	                	readOnly:true,
        	                	estore: projectStore,
        						gstore: projectStore,
        						displaymember:'projectName',
        						valuemember:'projectCode',
        		    			width:120
        	              },
        	              {
                				dataIndex: 'enableFlag',
                				header: '启用状态',
                				readOnly:true,
                				xtype:'bllookupedit',
                				displayvalue : "0=禁用:1=启用",
                				width: 60
        	              },
        	              {dataIndex: 'creator', header: '分配人员', width: 80},
        	              {dataIndex: 'createTime', header: '分配时间', width: 135},
        	              {dataIndex: 'remarks', header: '备注', flex: 1}
        	              ]
        });
        
        me.grid.title = "已分配角色";
        
      //未分配角色面板
        var gridPanel2 = {
        		title : '未分配角色',
        		xtype:'grid',        		
    	        reference: 'notrolegrid',
    	        columnLines: true,
    	        split: true,
    	        columns: [
    	                  {dataIndex: 'roleName', header: '角色名称',width: 80},
    	                  {dataIndex: 'roleOwner', header: '角色拥有者',width: 80},
    	                  {
    	                  	header: '所属项目', 
    	                  	dataIndex: 'projectCode', 
    	                  	xtype:'bllookupedit',
    	                  	readOnly:true,
    	                  	estore: projectStore,
    	  					gstore: projectStore,
    	  					displaymember:'projectName',
    	  					valuemember:'projectCode',
    	  	    			width:120
    	                  },
    	                  {
    	          			dataIndex: 'enableFlag',
    	          			header: '启用状态',
    	          			readOnly:true,
    	          			xtype:'bllookupedit',
    	          			displayvalue : "0=禁用:1=启用",
    	          			width: 60
    	  	              },
    	                  {dataIndex: 'creator', header: '创建者', width: 80},
    	                  {dataIndex: 'createTime', header: '创建日期', width: 135},
    	                  {dataIndex: 'remarks', header: '备注', flex: 1}
    	                  ],
    	                  
    	        region: 'north',
    	        
    	        height:350,
    	        bind: {
    	            store:'{store2}'
    	        },
    	        plugins: [],
    	        selModel: {        	         
    	            mode: 'MULTI',
    	            allowDeselect: true
    	        },
    	        //分页查询
    	        bbar: {
    	            xtype: 'pagingtoolbar',
    	            plugins: Ext.create('Ext.ux.ComboPageSize'),
    	            displayInfo: true,
    	            bind: {
    	                store:'{store2}'
    	            }
    	        },

    	        listeners: {
    	            'selectionchange': 'onNotUserGridSelectionChange'
    	        },
    	        viewConfig: {
    	            enableTextSelection: true        	           
    	        }
    	};
        
        //左右面板 : 左面板 --部门树 ,右面板--未分配角色 + 已分配角色
        
        //右面板--未分配角色 + 已分配角色
        var rightPanel = {
        	xtype: 'container',
        	border:'false',
        	region:'center',
        	layout:'border',
        	items:[gridPanel2,me.grid]
        };
        
        //左面板 --部门树
        var leftPanel = {
                xtype: 'treepanel',
                reference: 'usertree',
                width: 330,
                region: 'west',
                //rootVisible : false,
                columns: [
                    {text: '部门', dataIndex: 'text', flex: 1,xtype : 'treecolumn'}                
                ],
                //部门树 store
                store:{            	
                	type:'treebase',
                	proxy:{
                		url:Hc.basePath + 'itg_user_role/getNodeByDeptNo.json',
                		 reader: {
                	            type: 'json',
                	            rootProperty: 'children',
                	            totalProperty: 'totalCount'
                	        }
                	},
                	 root: {
                		 id:0,
                         text: 'hc',                 
                         expanded: false
                     }
                },
                split: true,
                //部门树监听方法
                listeners: {
                    'selectionchange': 'onSelectChange',
                }
            };

        me.otherItems = [leftPanel,rightPanel,me.toolbar,me.searchPanel];
        
        me.items=me.otherItems;

        me.callParent();
    }
});
/**
 * Description: 用户分配角色管理 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgUserRoleController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itguserrole',

	init:function(){
		var objlist = this.getReferences();
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		//未分配角色面板,增加 选中记录selectchange 触发函数  onNotUserGridSelectionChange
		//objlist.notrolegrid.on("selectchange",this.onNotUserGridSelectionChange,this);
		
		this.callParent();
	},
	
	onSelectChange:function(item) {
		var me = this,
		objlist = me.getReferences();
		
		var usertree=me.lookupReference('usertree');
		var node = usertree.getSelectionModel().getSelection()[0];
		
		if(node){
			//如果叶子节点不是部门，是用户时,查询该用户的角色信息
			if(node.get('leaf')==true){
				objlist.btnSearch.setDisabled(false);
				objlist.notrolegrid.enable();
				objlist.mastergrid.enable();
				this.onBtnSearchClick();
			}
			else{
				objlist.btnSearch.setDisabled(true);
				objlist.notrolegrid.store.removeAll();
				objlist.mastergrid.store.removeAll();
			}
		}
		
		//按钮处理
		objlist.btnAdd.setDisabled(true);
		objlist.btnDelete.setDisabled(true);
		
	},
	
	beforeSearch: function (store) {
		var grid=this.lookupReference('usertree');
		var node = grid.getSelectionModel().getSelection()[0];
	
		//如果 不是叶子节点不查询
		if(!node || node.get('leaf') != true) return ;

		var nodeId = Ext.util.Format.substr(node.get('id'), 1, node.get('id').length);
		
		
		store.proxy.extraParams["userId"] = nodeId;

		var store2 = this.lookupReference('notrolegrid').store;
		store2.proxy.extraParams["userId"] = nodeId;
		
		var searchPanel = this.lookupReference('commonsearch');
		if (searchPanel) {
			var formValue = searchPanel.getValues();
			for (var field in formValue) {
				if (formValue[field] !== '') {
					store2.proxy.extraParams[field] = formValue[field];
				} else {
					delete   store2.proxy.extraParams[field];
				}
			}
		}
		
		store2.load();
		return true;
	},

	onBtnAddClick: function () {
		var me = this;
		var notrolegrid = me.lookupReference('notrolegrid');
		//获取选中的未分配角色
		var roles = notrolegrid.getSelectionModel().getSelection();
		if(roles == null || roles.length <= 0) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		
		//获取已分配角色网格grid对象
		var grid1 = me.lookupReference('mastergrid');
		var usertree = me.lookupReference('usertree');
		var user = usertree.getSelectionModel().getSelection()[0];
		if(!user){
			Ext.Msg.alert('系统提示','请选择用户');
			return;
		}
		
		var userId = Ext.util.Format.substr(user.get('id'), 1, user.get('id').length);
		
		Ext.Array.each(roles, function (role) {
			//向获取的记录增加字段 : _flag
			role.data._flag='A';
			//增加userId字段值
			var usertree = me.lookupReference('usertree');
			role.data.userId = userId;
		
			//新建插入对象
			var newobj=Ext.create(grid1.store.model);
			Ext.apply(newobj.data,role.data);
		
			//将数据增加到已分配角色中
			grid1.store.insert(0,newobj);
			//删除未分配角色的选中记录
			notrolegrid.store.remove(role);
		});
		
		//显示保存按钮
		var objList = me.getReferences();
		objList.btnSave.setDisabled(false);
		
	},
	
	// 删除 如果是新增还没有保存的数据，直接删除，如果是已保存的数据，打上删除标识
    onBtnDeleteClick: function (btn) {
    	var me = this,
        	obj = me.workObject,
            store = obj.getStore(),
            delflag = false,
            items = obj.getSelectionModel().getSelection();

        if (items.length < 1) return;
        if (!me.checkDelete(items)===false) return;
        Ext.Array.each(items, function (record) {
            var _flag = record.get('_flag');
            if (_flag == 'A') {
            	var notrolegrid = me.lookupReference('notrolegrid');
            	//新建插入对象
        		var newobj=Ext.create(notrolegrid.store.model);
        		Ext.apply(newobj.data,record.data);
        		notrolegrid.store.insert(0,newobj);
                store.remove(record);
            } else {
                record.set('_flag', 'D');
                delflag = true;
            }
        });

        if (delflag) {
            obj.view.refresh();
        }
    },

	//未分配角色notrolegrid选中记录触发函数
	onNotUserGridSelectionChange : function(){
		var me = this,
		objlist = me.getReferences();
		objlist.btnAdd.setDisabled(false);
	},
	//已分配角色mastergrid选中记录触发函数
	onGridSelectionChange : function()	{
		var me = this,
		objList = me.getReferences();
		objList.btnDelete.setDisabled(false);
	},
	
	/*保存后处理方法*/
    afterSave:function(result,options){
    	var me = this,
		objList = me.getReferences();
		objList.btnSave.setDisabled(true);
		objList.notrolegrid.store.load();
		objList.mastergrid.store.load();
		
    },
    
    /*从写保存之后方法（保存完后，如果成功重新加载数据，失败则提示错误消息）*/
    afterSave:function(result,options) {
        var me = this;
        if (result.result.resultCode == "0") {
    		var objList = me.getReferences();
    		objList.btnSave.setDisabled(true);
    		objList.notrolegrid.store.reload({afterSaveData:true});
    		objList.mastergrid.store.reload({afterSaveData:true});
        } else {
            Hc.alert(result.result.msg);
        }
        me.callParent(arguments);
    }
    
});

/**
 * Description: 用户分配角色管理 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itgroleuser.ItgUserRoleModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.itguserrole',

    stores: {
        store2: {
        	type:'basestore',
            model: 'Hc_Framework.model.ItgUserRole',
            proxy: {
                url:  Hc.basePath + 'itg_user_role/getRole.json?isExist=false'
            }
        }
    }
});
/**
 * Description: 用户特权 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.itguserprivilege.ItgUserPrivilege", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.itguserprivilege',

    

    controller: "itguserprivilege",

    viewModel: {
        type: "itguserprivilege"
    },
    initComponent:function(){
        var me = this;

        me.gridModel = 'Hc_Framework.model.ItgUserPrivilege';
        me.gridColumns = [
            {dataIndex: 'moduleNo', header: '模块ID'},
            {dataIndex: 'moduleCode', header: '模块编号'},
            {dataIndex: 'moduleName', header: '模块编号', width: 60},
            {dataIndex: 'rightValue', header: '模块权限值', flex: 1},

            {dataIndex: 'addRightValue', header: '添加特权', width: 60},
            {dataIndex: 'rightValue', header: '减少特权', flex: 1},

            {dataIndex: 'creator', header: '分配人员', width: 70},
            {dataIndex: 'createTime', header: '分配日期', xtype: 'datecolumn', format: 'Y-m-d', width: 70},

        ];
        me.gridLoadUrl = Hc.basePath + 'itguserprivilege/list.json'
        me.gridSaveUrl = Hc.basePath + 'itguserprivilege/save.json';

        me.otherItems = [{
            xtype: 'grid',
            reference: 'usergrid',
            width: 150,
            region: 'west',
            split: true,
            columns: [
                {text: '用户编号', dataIndex: 'userCode', flex: 0.5},
                {text: '用户名称', dataIndex: 'userName', flex: 0.5}
            ],
            listeners: {
                'selectionchange': 'onSelectChange'
            }
        }];
        me.searchItems=[{xtype:'textfield',name:'creator',fieldLabel:'创建人员'}];
        me.callParent();
    }
});
/**
 * Description: 用户特权 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itguserprivilege.ItgUserPrivilegeController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias: 'controller.itguserprivilege',

	onSelectChange:function(item) {
		this.onBtnSearchClick();
	},
	onBtnAddClick: function () {
		var me = this,
			user= me.lookupReference('usergrid').getSelectionModel().getSelection();
		if(user.length<1) {
			Ext.Msg.alert('系统提示','请选择角色');
			return;
		}
		if (!me.win) {
			me.win = Ext.widget('uxrolelist');
		}
		me.win.show();
	},

	onChooseUserClick: function (btn) {
		var me = this,
			userid =  me.lookupReference('usergrid').getSelectionModel().getSelection()[0].get('userId'),
			roles = me.win.getComponent('roleList').getSelectionModel().getSelection(),
			store = me.getView().workObject.getStore(),
			model = store.getModel();
		Ext.Array.each(roles, function (obj) {

			if(store.findBy(function(record){return record.data.roleId==obj.data.roleId})==-1) {
				store.insert(0, new model({
					userId: userid,
					roleId: obj.data.roleId,
					roleName: obj.data.roleName,
					roleOwner: obj.data.roleOwner,
					enableFlag: obj.data.enableFlag,
					remarks: obj.data.remarks,
					_flag:'A'
				}));
			}
		});
		me.win.close();
	},

	customFilter: function (store,filterdata) {
		var item = this.lookupReference('usergrid').getSelection();
		if (item.length < 1)return false;
		filterdata.push({
			property: 'userId',
			value: item[0].get("userId")
		});
		return true;
	}

});

/**
 * Description: 用户特权 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/02/09
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.itguserprivilege.ItgUserPrivilegeModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',
    alias: 'viewmodel.itguserprivilege'
});
/**
 * Description: 首页（可放置用户罗盘）
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.uchome.HomePage', {
    extend: 'Ext.Container',
    alias: 'widget.homepage',

    title:'首页',

    id:'app-homepage',

    layout: {
        type: 'fit',
        align: 'middle'
    },

    initComponent: function () {
        this.callParent();
    }
});
/**
 * Description: 用户登陆页面view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.uclogin.Login', {
    extend: 'Ext.window.Window',    
        
    viewModel: 'login',    
    controller: 'login',
    modal:true,
    bodyPadding: 10,
    title: '用户登录',
    closable: false,   
    autoShow:true,
    cls: 'login', 
    width:500,
    height:300,
    items: {
        xtype: 'form',
        reference: 'form',
        baseCls: 'x-plain',
        items: [{
            xtype: 'textfield',
            name: 'usercode',
           // bind: '{userCode}',
            fieldLabel: '用户名',
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield',
            name: 'password',
            inputType: 'password',
            fieldLabel: '密码',
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }]
    },
    buttons: [{
        text: '登录',
        listeners: {
            click: 'onLoginbtnClick'
        }
    }]
});

/**
 * Description: 用户登陆页面ViewControll
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.uclogin.LoginController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.login',

    onLoginbtnClick: function () {
        var me = this,
            form = me.lookupReference('form'),
            formdata = form.getValues();

        if (!form.isValid()) return;

        //后端验证
        Ext.Ajax.request({
            url: '/login.json',
            method: 'POST',
            params: formdata,
            success: function (response,opts) {
            	console.info("执行了额咩有");
                me.onSuccess(formdata,Ext.decode(response.responseText));
            }
        });

        this.onSuccess(formdata,{username:'吴德锋'});
    },
    onSpecialKey: function (field, e) {
        if (e.getKey() === e.ENTER) {
            this.onLoginbtnClick();
        }
    },
    onSuccess: function (data, result) {
        var me = this,
            username = result.username,
            user = Ext.create('Hc_Framework.model.CurrentUser', {
                userCode: data.usercode,
                userName: username
            });
        user.save();
        me.getView().destroy();
        Ext.create('Hc_Framework.view.main.Main', {
            viewModel: {
                data: {
                    system: {
                        username: username
                    }
                }
            }
        });
    }
});

/**
 * Description: 用户登陆页面ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.uclogin.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',
    data: {
        userCode: 'wu.df'
    }
});

/**
 * Description: 系统主框架 View
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.ucmain.Main', {
    extend: 'Ext.container.Viewport',

    

    id:'mainpage',
    xtype: 'app-main',
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',
   // autoScroll:true,
    items: [{
        xtype: 'maintop',
        region: 'north',
        height: 25
    }, {
        region: 'west',
        width: 180,
        split: true,
        collapsible: true,
        collapseMode: 'mini',
        title:'导航菜单',
        layout: 'fit',
        items: [{
            xtype: 'leftmenu'
        }]
    }, {
        region: 'center',
        xtype: 'maincenter'
    },
    {
        xtype: 'panel',
        region: 'south',
        height: 25
    }],

    initComponent: function () {
    	console.info("这是我们的Main");
        Ext.setGlyphFontFamily('FontAwesome');
        this.autoScroll=true;
        this.callParent();
    }
});

/**
 * Description: 系统主框架 ViewController
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

    init: function () {
    	console.info("这是我们的MainControlle1");
        this.checkActiveUser();
        this.callParent();
    },

    checkActiveUser: function () {
        var me = this,
            viewmodel = me.getViewModel();
        var currentUser = Ext.create("Hc_Framework.store.CurrentUser");
        currentUser.load();
        var user = currentUser.getAt(0);
        console.info("uselsdsd");
        console.info(user);
        console.info(user.get('userName'));
        if (user) {
            viewmodel.set('currentUser', user);
            viewmodel.set('system.version', user.get('version'));
            viewmodel.set('system.name', user.get('sysid'));
            return;
        }
        Ext.Ajax.request({
            url:  'getCurrentLoginUser.json',
            success: function (result) {
            	console.info("执行成功了没有");
                var p = JSON.parse(result.responseText);
                if (!p.result) {
                    Hc.alert('获取用户信息出错', function () {
                        me.loginOut();
                    });
                    return;
                }
                if (p.result.resultCode == 0) {
                    var obj = Ext.create(currentUser.model);
                    Ext.apply(obj.data, p.entity);
                    obj.set('version', p.version);
                    obj.set('sysid', p.env);
                    obj.save();
                    currentUser.add(obj);
                    currentUser.sync(true);
                    viewmodel.set('currentUser', obj);
                    viewmodel.set('system.version', obj.get('version'));
                    viewmodel.set('system.name', obj.get('sysid'));
                } else {
                    var msg = p.result.msg || '获取用户信息出错';
                    Hc.alert(msg, function () {
                        me.loginOut();
                    });
                }
            },
            failure: function () {
                Hc.alert('访问系统出错', function () {
                    me.loginOut();
                });
            }
        })
    },

    onExitButtonClick: function (obj) {
        var me = this;
        Hc.confirm('确认退出当前用户？', function (btn) {
            if (btn == 'yes') {
                me.loginOut()
            }
        });
    },

    getUserInfo: function () {
        return this.getViewModel().get('currentUser') || {};
    },

    loginOut: function () {
        var currentUser = Ext.create("Hc_Framework.store.CurrentUser");
        currentUser.load();
        var user = currentUser.getAt(0);
        if (user) {
            user.erase();
            user.save();
        }
        currentUser.sync(true);
        location.href = Hc.basePath + 'logout.json';
    },

    onSearchModule: function (field) {
        var store = this.getView().down('maintree').getStore(),
            value = field.getValue(),
            item;
        if (value == '') return;
        item = store.findRecord('moduleNo', value, 0, false, false, true);
        if (!item || !item.data.leaf) {
            item = store.findRecord('menuName', value, 0, false, false, true)
        }
        if (!item || !item.data.leaf) {
            item = store.findRecord('moduleCode', value, 0, false, false, true)
        }
        if (!item) {
            Hc.alert('模块编号或名称【' + value + '】不存在');
            return;
        }
        this.onTreeMenuClick(null, item);
    },

    onTreeMenuClick: function (treeview, record) {

        if (!record.data.leaf || !record.data.url) return;
           console.info('军事科技----');
           console.info(treeview);
           console.info(record);
        var me = this,
            path = record.data.url.split('#'),
            appCode = record.data.appCode.toLowerCase(),
            jspath = path[0] + record.data.jsUrl;
          console.info(record.data.jsUrl);
         console.info("jspath");
         console.info(path);
         console.info(path[0]);
         console.info(jspath);
        if (appCode == "integ") {
            Hc.basePath = path[0];
        } else {
            Hc[appCode + 'Path'] = path[0];
        }
        var isloaded = appCode + "IsLoaded";
        if (appCode != 'integ' && !Hc[isloaded]) {

            Ext.Loader.loadScript({
                url: jspath, 
                onLoad: function () {
                    me.createTab(record.data);
                    Hc[isloaded] = true;
                }, 
                onError: function () {
                    Hc.alert('加载应用的Js文件出错');
                }
            });

        } else {
            me.createTab(record.data);
        }
    },
    createTab: function (data) {
    	console.info("这是最棒的111");
        var tabPanel = Ext.getCmp('maintabpanel'),
            tabId = 'tab_' + data.menuNo,
            moduleNo = data.url.split('#')[1],
            tabitem = tabPanel.getComponent(tabId),
            userInfo = this.getUserInfo();
          console.info("这是最棒的");
        if (!this.checkModule(moduleNo)) return;
        if (!tabitem) {
            var tab = {
                title: data.menuName,
                itemId: tabId,
                xtype: moduleNo,
                userRight: data.rightValue,
                moduleRight: data.rights,
                userName: userInfo.userName,
                userCode: userInfo.userCode,
                closable: true,
                reorderable: true,
                loadMask: '加载中...'
            };
            tabitem = tabPanel.add(tab);
        }
        tabPanel.setActiveTab(tabitem);
    },

    checkModule: function (moduleNo) {
    	console.info("这是最棒的"+moduleNo);
        var className = Ext.ClassManager.getNameByAlias('widget.' + moduleNo);
        if (className) return true;

        Hc.alert('URL出错,无法创建此模块');
        return false;
    },

    setLastVisitMenu: function (menuData) {
        var ltree = this.lookupReference('lastvisittree'),
            treestore = ltree.getStore(),
            maxCount = 15,
            root = treestore.getRoot(),
            item = root.findChild('menuNo', menuData.menuNo);

        if (item) {
            item.remove();
        }

        if (root.childCount >= maxCount) {
            root.lastChild.remove();
        }

        item = Ext.create('Hc_Framework.model.LastVisit', {
            id: menuData.menuNo,
            text: menuData.menuName,
            leaf: true,
            menuNo: menuData.menuNo,
            menuName: menuData.menuName,
            moduleNo: menuData.moduleNo,
            moduleName: menuData.moduleName,
            moduleUrl: menuData.moduleUrl
        });
        root.insertChild(0, item);
        treestore.sync();
    },

    onDoing: function (btn) {
    	Hc.alert("填出信息");
        this.setMsg('功能【' + btn.getText() + '】正在开发中...');
    },

    setUserPassword: function () {
        var me = this, viewModel = me.getViewModel(),
            currentUser = viewModel.get('currentUser');
        if (!currentUser)return;

        Ext.widget('window', {
            closeAction: 'destroy',
            modal: true,
            bodyPadding: '20 40 20 20',
            title: '更改密码',
            autoShow: true,
            items: {
                xtype: 'form',
                baseCls: 'x-plain',
                defaults:{
                    labelWidth:60,
                    allowBlank: false
                },
                defaultType:'textfield',
                items: [{
                    name: 'oldPassword',
                    inputType: 'password',
                    fieldLabel: '原密码'
                }, {
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: '新密码'
                }, {
                    name: 'newPwd2',
                    inputType: 'password',
                    fieldLabel: '确认密码',
                    vtype:'compareTo',
                    compareTo:'password',
                    compareError:'新密码跟确认密码输入不一致'
                },{
                    name:'userId',
                    xtype:'hiddenfield',
                    bind:{
                        value:'{currentUser.userId}'
                    }
                }]
            },
            bbar: ['->',
                {
                    xtype: 'button',
                    text: '确认',
                    handler: 'onBtnSetPwdClick',
                    scope: me,
                    glyph: Hc.Icon.btnSave
                }, {
                    xtype: 'button',
                    text: '取消',
                    handler: function (btn) {
                        btn.up('window').close()
                    },
                    glyph: Hc.Icon.btnCancel
                }]
        });
    },
    onBtnSetPwdClick: function (btn) {
        var me = this,win = btn.up('window'),
            form = win.down('form'),
            val=form.getValues();
        if (form.isValid()) {
             console.info("单击前");
            var userinfo = {
                userId: val.userId,
                password: hex_md5(val.password),
                oldPassword: hex_md5(val.oldPassword)
            }, param = userinfo;
            console.info("单击后");
            Ext.Ajax.request({
                url: Hc.basePath + 'itg_login_user/changePassword.json',
                //jsonData: JSON.stringify(param),
                params: param,	//单条记录的提交直接使用params定义参数
                method: 'POST',
                success: function (d) {
                    var r = JSON.parse(d.responseText);
                    if (r.result) {
                        if (r.result.resultCode == 0) {
                            Hc.alert('更改密码成功,请重新登录系统', function () {
                                me.loginOut();
                            });
                        } else {
                            Hc.alert(r.result.msg);
                        }
                    } else {
                        Hc.alert('不明错误');
                    }
                },
                failure: function (d) {
                    Hc.alert('系统异常!' + d.responseText)
                }
            });
        }
    },

    setMsg: function (msg) {
        this.getViewModel().set('msg.text', msg);
    }
});

/**
 * Description: 系统主框架 ViewModel
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',
    data: {
        system: {
            name: '',
            version: '',
            copyright: 'Copyright ©2014~2020 Hc All Rights Reserved'
        },

        msg: {
            text: '加载完毕',
            state: 's'
        },

        currentUser: null
    },
    formulas: {
        systemInfo: function (get) {
            return get('name') + get('version') ;
        }
    }
});
/**
 * Description: 最近访问菜单树
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.menu.LastVisitTree', {
    extend : 'Ext.tree.Panel',
    xtype : 'lastvisittree',
    header:{
        hidden:true
    },
    reference:'lastvisittree',
    rootVisible : true,
    lines : true,
    hideHeaders:true,
    columns:[
        { dataIndex: 'menuName',xtype: 'treecolumn',flex: 1}
    ],

    store:{type:'lastvisit'},
    listeners : {
        itemclick : 'onTreeMenuClick'
    },
    initComponent : function() {
        this.callParent();
    }
});
/**
 * Description: 主菜单树 All rights Reserved, Designed By Hc Copyright:
 * Copyright(C) 2014-2015 Company: Wonhigh. author: wudefeng Createdate:
 * 2015/01/20
 * 
 * Modification History: Date Author What
 * ------------------------------------------
 * 
 */
Ext.define('Hc_Framework.view.ucmain.menu.MainTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.maintree',

	header: {
		hidden: true
	},

	rootVisible: false,
	lines: true,
	hideHeaders: true,
	listeners: {
		itemdblclick: 'onTreeMenuClick'
	},
	viewConfig: {
		enableTextSelection: true
	},


	initComponent: function () {
		var me = this;
		me.columns = [{
			xtype: 'treecolumn',
			flex: 1,
			dataIndex: 'menuName',
			renderer: function (value) {
				var searchString = me.searchField.getValue();
				if (searchString.length > 0) {
					return me.strMarkRedPlus(searchString, value);
				}
				return value;
			},
		    listeners:{  
			      expandnode : function(node){  
			        if(node.childNodes.length>0){//展开节点时，更改父节点图标样式  
			            node.getUI().getIconEl().src="folder-open.gif";  
			        }  
			            //更改当前节点下的所有子节点的图标  
			        for (var i = 0, len = node.childNodes.length; i < len; i++) {  
			                var curChild = node.childNodes[i];  
			            curChild.getUI().getIconEl().src ="folder.gif";  
			        }  
			    },  
			    collapsenode : function(node){//收起节点时，更改父节点的图标样式  
			           if(node.childNodes.length>0){  
			               node.getUI().getIconEl().src="folder.gif";  
			           }  
			    }  
			 }  
		}];
		Ext.apply(me, {
			store: Ext.create('Hc_Framework.store.MainTree'),
			dockedItems: [
				{
					xtype: 'textfield',
					dock: 'top',
					emptyText: '查询',
					enableKeyEvents: true,
					triggers: {
						clear: {
							cls: 'x-form-clear-trigger',
							handler: 'onClearTriggerClick',
							hidden: true,
							scope: 'this'
						},
						search: {
							cls: 'x-form-search-trigger',
							weight: 1,
							handler: 'onSearchModule'
						}
					},
					onClearTriggerClick: function () {
						this.setValue();
						me.store.clearFilter();
						this.getTrigger('clear').hide();
					},
					listeners: {
						keyup: {
							fn: function (field,e) {
								if(e.keyCode == Ext.event.Event.ENTER){
									me.up('app-main').controller.onSearchModule(field);
									return;
								}
								var value = field.getValue();
								if (value) {
									field.getTrigger('clear').show();
									me.filterStore(value);
								}else{
									me.store.clearFilter();
									field.getTrigger('clear').hide()
								}
							},
							buffer: 300
						},
						render: function (field) {
							this.searchField = field;
						},
						scope: me
					}
			   }
			]
		});
		me.callParent(arguments);
		me.store.on('load',function(obj,record){
			if(record && record.length>0){
				me.expandNode(record[0],true);
			}
		});
	},

	filterStore: function (value) {
		var me = this,
			store = me.store,
			searchString = value.toLowerCase(),
			filterFn = function (node) {
				var children = node.childNodes,
					len = children && children.length,
					visible = v.test(node.get('menuName'))||v.test(node.get('moduleNo'))||v.test(node.get('moduleCode')),
					i;
				if (!visible) {
					for (i = 0; i < len; i++) {
						if (children[i].isLeaf()) {
							visible = children[i].get('visible');
						} else {
							visible = filterFn(children[i]);
						}
						if (visible) {
							break;
						}
					}
				}
				else {
					for (i = 0; i < len; i++) {
						children[i].set('visible', true);
					}
				}
				return visible;
			}, v;

		if (searchString.length < 1) {
			store.clearFilter();
		} else {
			v = new RegExp(searchString, 'i');
			store.getFilters().replaceAll({
				filterFn: filterFn
			});
		}
	},
	strMarkRedPlus: function (search, subject) {
		return subject.replace(
			new RegExp('(' + search + ')', "gi"),
			"<span style='color: indianred;'><b>$1</b></span>"
		);
	}



});
/**
 * Description: 我的收藏夹菜单树
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/02/07
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.menu.MyFavorite', {
    extend: 'Ext.tree.Panel',

    xtype: 'myfavorite',

    header: {
        hidden: true
    },

    rootVisible: true,
    lines: true,
    hideHeaders: true,

    columns: [
        {dataIndex: 'menuName', xtype: 'treecolumn', flex: 1}
    ],

    store: {type:'myfavorite'},
    listeners: {
        itemclick: 'onTreeMenuClick'
    },

    initComponent: function () {
        this.callParent();
    }
});
/**
 * Description: 主框架工作台
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.region.Center', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.maincenter',

    uses: [
        'Hc_Framework.view.uchome.HomePage','Hc_Framework.view.itgloginuser.ItgLoginUser'
    ],

    closeAction: 'hide',
    autoDestroy: true,
    tabPosition: 'top',
    border: false,
    id: 'maintabpanel',

    plugins: [{
        ptype: 'tabclosemenu',
        closeAllTabsText: '关闭所有',
        closeOthersTabsText: '关闭其他',
        closeTabText: '关闭'
    },Ext.create('Ext.ux.TabReorderer')],

    initComponent: function () {

        this.items = [{
            glyph: Hc.Icon.btnHome,
            xtype: 'homepage', /*调试模块*/
         //   xtype: 'itgloginuser',
			reorderable: false
        }];

        this.callParent();
    }
});
/**
 * Description: 主框架左侧菜单
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.region.LeftMenu', {   
    extend:'Ext.Container',
    alias: 'widget.leftmenu',

    

    layout: 'fit',
    border: false,  

    items: [{           
            xtype: 'maintree',
            reorderable: false,
            border: false
        }],

    initComponent: function () {
        this.callParent();
    }
});
/**
 * Description: 主框架顶部
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      denny.wu
 * Createdate:  2015/01/20
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.ucmain.region.Top', {
    extend: 'Ext.Container',
    alias: 'widget.maintop',

    id: 'app-header',


    title: 'HCSunmo CRM 管理系统',
    titleEn:'',

    layout: {
        type: 'hbox',
        align: 'middle'
    },

    initComponent: function () {
        document.title = this.title;

        this.items = [{
            xtype: 'component',
            id: 'app-header-logo'
        }, {
            xtype: 'component',
            html:'<span id="app-header-title-en"><span>'+this.titleEn+'<span id="app-header-title">'+ this.title+'</span>'
        },{
            xtype:'component',
            id:'app-header-systemname',
            bind: {
                html: '{system.name}'
            }
        },{
            xtype:'component',
            id:'app-header-version',
            bind: {
                html: '<span onclick="Hc.openUrl(\'releaselog.html\',\'发布日志\')" style="cursor: pointer">{system.version}</span>'
            },
            flex: 1
        } , {
            xtype: 'toolbar',
            baseCls: 'x-place',
            id:'app-header-toolbar',
            items: [{
                bind:{
                    text:'{currentUser.deptName}'
                },
                glyph:Hc.Icon.btnGroup
            }, {
                bind:{
                    text:'{currentUser.userName}'
                },
                glyph:Hc.Icon.btnUser
            }, {
                text:'通讯录',
                handler: 'onDoing',
                glyph:Hc.Icon.btnAddressList
            }, {
                text: '设置',
                glyph: Hc.Icon.btnSetting,
                handler: 'setUserPassword'
            }, {
                text: '退出',
                glyph: Hc.Icon.btnExit,
                handler: 'onExitButtonClick'
            }]
        }];

        this.callParent();
    }
});
/**
 * Description: 客户管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierCustomer", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliercustomer',

    

    controller: "hcsuppliercustomercontroller",

    viewModel: {
        type: "hcsuppliercustomermodel"
    },
    title_:'潜在客户',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '客户编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '客户编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '客户名称', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '客户电话',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '客户联系人',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '移动电话 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '客户级别',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '跟单业务',
                				width: 150
                          }      
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierCustomer',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 客户管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierCustomerController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliercustomercontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierPurchase',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 客户管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierCustomerModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsuppliercustomermodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierCustomer", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsuppliercustomer',

    

    controller: "subhcsuppliercustomercontroller",

    viewModel: {
        type: "subhcsuppliercustomermodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsuppliercustomer').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsuppliercustomer',
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户名称',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户电话',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户传真',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '网址',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '电子邮件',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '邮编',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '国家',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 70,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '省份',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '城市',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '详细地址',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:100,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 133,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '组织形式',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '创建用户 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '营业执照',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '行业类型',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户级别',
									    name: 'register',
				     					reference:'register',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户来源',
									    name: 'whetherProductInspection',
				     					reference:'whetherProductInspection',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户银行',
									    name: 'qualityInspector',
				     					reference:'qualityInspector',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '银行帐号',
									    name: 'qualityInspector',
				     					reference:'qualityInspector',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系人',
									    name: 'qualityInspector',
				     					reference:'qualityInspector',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:150,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 236,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '信用额度',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '共享销售',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '采购周期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '跟进周期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '首次购买',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最近购买',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '首次付款',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最近付款',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '首次跟进',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最近跟进',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '使用货币',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '纳税编号',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '业务跟单',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '所在部门',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '创建日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '修改用户',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '修改日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 393,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '客户简介',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierCustomerController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsuppliercustomercontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierBePutInStorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierCustomerModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsuppliercustomermodel'
});
/**
 * Description: 客户联系人 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierCustomerContact", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliercustomercontact',

    

    controller: "hcsuppliercustomercontactcontroller",

    viewModel: {
        type: "hcsuppliercustomercontactmodel"
    },
    title_:'客户联系人',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '联系人编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '联系人编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '联系人姓名', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '固定电话',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '移动电话',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '公司名称 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '电子邮件',
              				width: 150
                          }      
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierCustomerContact',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 客户联系人 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierCustomerContactController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliercustomercontactcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierPurchase',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 客户联系人 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierCustomerContactModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsuppliercustomercontactmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierCustomerContact", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsuppliercustomercontact',

    

    controller: "subhcsuppliercustomercontactcontroller",

    viewModel: {
        type: "subhcsuppliercustomercontactmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsuppliercustomer').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsuppliercustomer',
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系人编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系人名称',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系人电话',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '固定电话',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '出生日期',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '电子邮件',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '部门',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '籍贯',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 70,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '省份',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '城市',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '详细地址',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:100,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 133,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '职位',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '部门 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '毕业院校',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最高学历',
									    name: 'billNo',
				     					reference:'billNo',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:150,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 236,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '公司编码',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '公司名称',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '公司名称',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '公司传真',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '公司地址',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: 'QQ号码',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '移动电话',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是否共享',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '创建人',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 393,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '兴趣爱好',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '印象评价',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '往来策略',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierCustomerContactController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsuppliercustomercontactcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierBePutInStorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierCustomerContactModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsuppliercustomercontactmodel'
});
/**
 * Description:销售计划 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierMarketingPlan", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsuppliermarketingplan',

    

    controller: "hcsuppliermarketingplancontroller",

    viewModel: {
        type: "hcsuppliermarketingplanmodel"
    },
    title_:'销售计划',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '计划编码', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '计划编码', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '计划部门', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '年月',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '预计销售量',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '预计销售额(元)',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '计划员工',
              				width: 150
                          },
                          {
                				dataIndex: 'storageStatus',
                				header: '计划日期',
                				width: 150
                            },
                            {
                  				dataIndex: 'storageStatus',
                  				header: '审核领导',
                  				width: 150
                              },
                              {
                    				dataIndex: 'storageStatus',
                    				header: '当前状态',
                    				width: 150
                                }       
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierMarketingPlan',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 销售计划 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierMarketingPlanController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsuppliermarketingplancontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierPurchase',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 销售计划 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierMarketingPlanModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsuppliermarketingplanmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierMarketingPlan", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsuppliermarketingplan',

    

    controller: "subhcsuppliermarketingplancontroller",

    viewModel: {
        type: "subhcsuppliermarketingplanmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsuppliercustomer').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsuppliercustomer',
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '计划编码',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '计划部门',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '年月',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '登记日期',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '任务量',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '任务金额',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '计划人',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 70,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'combobox',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审核领导',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:443,
                            	width:980,
                            	layout: {
                               	 type: 'fit',
                                    columns:4
                                },
                                x: 3,
                                y: 100,
                                title:'计划内容',
                                padding:'0 0 0 0',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'htmleditor',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:900,
									    height:400,
									  //  fieldLabel: '计划内容',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierMarketingPlanController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsuppliermarketingplancontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierBePutInStorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierMarketingPlanModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsuppliermarketingplanmodel'
});
/**
 * Description: 产品列表view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcSupplierProductList", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcsupplierproductlist',

    

    controller: "hcsupplierproductlistcontroller",

    viewModel: {
        type: "hcsupplierproductlistmodel"
    },
    title_:'产品列表',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '产品编号', 
			    name: 'storageNo'
			}
            ],

            gridModel: 'Hc_Framework.model.HcSupplierPurchase',
            gridSubGrid:'HcSupplierInquiryProduct',
            gridColumns: [
                          {
                          	header: '产品编号', 
                          	dataIndex: 'storageNo', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '型号规格', 
                          	dataIndex: 'supplierName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'storageClass',
              				header: '产品名称',
              				width: 150
                          },
                          {
                				dataIndex: 'register',
                				header: '产品规格',
                				width: 150
                          },
                          {
                				dataIndex: 'storageDate',
                				header: '当前库存 ',
                				width: 150
                          },
                          {
              				dataIndex: 'storageStatus',
              				header: '可供数量',
              				width: 150
                          },
                          {
                				dataIndex: 'purchaseDate',
                				header: '在途数量',
                				width: 150
                          }  ,
                          {
              				dataIndex: 'purchaseDate',
              				header: '公开报价',
              				width: 150
                        },
                        {
            				dataIndex: 'purchaseDate',
            				header: '建议售价',
            				width: 150
                      },
                      {
          				dataIndex: 'purchaseDate',
          				header: '最低限价',
          				width: 150
                    }   ,
                      {
          				dataIndex: 'purchaseDate',
          				header: '仓库名称',
          				width: 150
                    }   
            ],
            allendflag:false,
            gridPrimaryKey: 'inquiryNo',
            gridLoadUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_supplier_inquiry_management_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcSupplierProductList',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 产品列表 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcSupplierProductListController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcsupplierproductlistcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcSupplierPurchase',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['inquiryNo'] = record.data.inquiryNo; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 产品列表 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcSupplierProductListModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcsupplierproductlistmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcSupplierProductList", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcsupplierproductlist',

    

    controller: "subhcsupplierproductlistcontroller",

    viewModel: {
        type: "subhcsupplierproductlistmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsuppliercustomer').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         title:'--->采购管理',
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsuppliercustomer',
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:60,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品编号',
									    name: 'storageNo',
				     					reference:'storageNo',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '型号规格',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品名称',
									    name: 'storageNo',
				     					reference:'storageNo'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '产品类别',
									    name: 'storageNo',
				     					reference:'storageNo'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 70,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '品　　牌',
	   								    name: 'supplierNo',
	   								
				     					reference:'supplierNo'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '仓库名称',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:313,
   									    fieldLabel: '负 责 人',
   									    name: 'supplierName',
				     					reference:'supplierName',
   									    colspan:3
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:100,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 133,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '期初库存',
									    name: 'storageClass',
				     					reference:'storageClass'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '当前库存 ',
									    name: 'monetaryUnit',
				     					reference:'monetaryUnit'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最少存量',
									    name: 'storageDate',
				     					reference:'storageDate',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最多存量',
									    name: 'billNo',
				     					reference:'billNo',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销售提成',
									    name: 'register',
				     					reference:'register',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '公开报价',
									    name: 'whetherProductInspection',
				     					reference:'whetherProductInspection',
									    
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '建议售价',
									    name: 'qualityInspector',
				     					reference:'qualityInspector',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最低限价',
									    name: 'qualityInspector',
				     					reference:'qualityInspector',
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销售折扣',
									    name: 'qualityInspector',
				     					reference:'qualityInspector',
									   
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:150,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 236,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '销售状态',
									    name: 'eExaminationAndApproval',
				     					reference:'eExaminationAndApproval',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '修改日期',
									    name: 'storageConfirmation',
				     					reference:'storageConfirmation',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '首次销售日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '首次销售单价',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最近销售日期',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '最近销售单价',
									    name: 'storageStatus',
				     					reference:'storageStatus',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:130,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 393,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '产品描述',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '技术特性',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '应用范围',
									    name: 'approvalOpinion',
				     					reference:'approvalOpinion',
									    colspan:4
									},{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierProductListController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcsupplierproductlistcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcSupplierBePutInStorage',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcSupplierProductListModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcsupplierproductlistmodel'
});
/**
 * Description: 订单管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcOrder", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcorder',

    

    controller: "hcordercontroller",

    viewModel: {
        type: "hcordermodel"
    },
    title_:'订单管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '订单编码', 
			    name: 'orderCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcOrder',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '订单编码', 
                          	dataIndex: 'orderCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '责任人名称', 
                          	dataIndex: 'perLiabName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'custName',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'custAddr',
                				header: '客户地址',
                				width: 150
                          },
                          {
                				dataIndex: 'takDelivAddr',
                				header: '收货地址 ',
                				width: 150
                          },
                          {
              				dataIndex: 'takDelivBy',
              				header: '收货人',
              				width: 150
                          },
                          {
                				dataIndex: 'contactTel',
                				header: '联系电话',
                				width: 150
                          },
                          {
              				dataIndex: 'transportMode',
              				header: '运输方式',
              				width: 150
                          },
                          {
              				dataIndex: 'contractCode',
              				header: '合同编码',
              				width: 150
                          },
                          {
                				dataIndex: 'custDelivTime',
                				header: '客户交期',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'orderCode',
            gridLoadUrl: Hc.basePath + 'hc_order_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_order_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_order_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_order_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_order_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_order_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcOrder',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 订单管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcOrderController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcordercontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcOrder',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['quoteCode'] = record.data.quoteCode; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 订单管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcOrderModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcordermodel'
});
Ext.define("Hc_Framework.view.hc.SubHcOrder", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcquote',

    

    controller: "subhcordercontroller",

    viewModel: {
        type: "subhcordermodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsuppliercustomer').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsuppliercustomer',
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '订单编码',
									    name: 'orderCode',
				     					reference:'orderCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '责任人名称',
									    name: 'perLiabName',
				     					reference:'perLiabName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '仓库名称',
									    name: 'warehouseName',
				     					reference:'warehouseName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '合同编码',
									    name: 'contractCode',
				     					reference:'contractCode'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 35,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户名称',
	   								    name: 'custName',
	   								
				     					reference:'custName'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '收货人',
   									    name: 'takDelivBy',
				     					reference:'takDelivBy',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:500,
   									    fieldLabel: '收货地址',
   									    name: 'takDelivAddr',
				     					reference:'takDelivAddr',
   									    colspan:4
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '联系电话',
	   								    name: 'contactTel',
	   								
				     					reference:'contactTel'
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 95,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运输方式',
									    name: 'transportMode',
				     					reference:'transportMode'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式 ',
									    name: 'paymentMode',
				     					reference:'paymentMode'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款天数',
									    name: 'paymentDayQty',
				     					reference:'paymentDayQty',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户交期',
									    name: 'custDelivTime',
				     					reference:'custDelivTime',
									 
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '订单日期',
									    name: 'orderDate',
				     					reference:'orderDate',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 128,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '是否预付',
									    name: 'orNotPrepay',
				     					reference:'orNotPrepay',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '发票',
									    name: 'invoice',
				     					reference:'invoice',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费负担',
									    name: 'freightBurden',
				     					reference:'freightBurden',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费金额',
									    name: 'freightSum',
				     					reference:'freightSum',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '货币',
									    name: 'currency',
				     					reference:'currency',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '其它费用',
									    name: 'otherCharges',
				     					reference:'otherCharges',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '银行',
									    name: 'bank',
				     					reference:'bank',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 188,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审批人',
									    name: 'examApprByName',
				     					reference:'examApprByName'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:70,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 222,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },{
          	         xtype:'panel',
          	         layout: {
                   	 type: 'fit',
                    },
                    region: "center",
                    bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                    scrollable:true,
                    items:[{
                   	 xtype:'grid',
                   	 enableHdMenu:false,
                   	 sortableColumns:false,
                   	 columnLines: true,
                   	 enableColumnHide:false,
                   	 enableColumnMove:false,
                   	 store:me.store,
                   	 features: [{
             		        ftype: 'summary'
             		     }],
                   	 columns: {
                   		    items: [
                   		        {
                   		            text: "序号",
                   		            dataIndex: "id",
                   		            width: 150
                   		        },{
                   		            text: "产品编码",
                   		            dataIndex: "prodCode",
                   		            width: 150
                   		        },{
                   		            text: "产品名称",
                   		            dataIndex: "prodName",
                   		            width: 150
                   		        },{
                   		            text: "型号规格",
                   		            dataIndex: "typeModel",
                   		            width: 150
                   		        },{
                   		            text: "产品描述",
                   		            dataIndex: "prodDesc",
                   		            width: 150
                   		        },{
                   		            text: "订单数量",
                   		            dataIndex: "orderQty",
                   		            width: 150
                   		        },{
                   		            text: "单位",
                   		            dataIndex: "unit",
                   		            width: 150
                   		        },{
                   		            text: "单价",
                   		            dataIndex: "univalent",
                   		            width: 150
                   		        },{
                   		            text: "货币",
                   		            dataIndex: "currency",
                   		            width: 150
                   		        },{
                   		            text: "备注",
                   		            dataIndex: "remark",
                   		            width: 150
                   		        },{
                   		            text: "合计",
                   		            dataIndex: "inquiredQTY_quotedPrice$",
                   		            width: 150,
                   		            summaryType: 'sum',
   	                		      	summaryRenderer: function(value, summaryData, dataIndex) {
   	                		            return'金额总计:'+value;
   	                		        }
                   		        }
                   		    ]
                   		}
                   	 
                   	 
                   	 
                 }]
          	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcOrderController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcordercontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcOrder',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcOrderModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcordermodel'
});
/**
 * Description: 项目管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcProject", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcproject',

    

    controller: "hcprojectcontroller",

    viewModel: {
        type: "hcprojectmodel"
    },
    title_:'项目管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '项目编码', 
			    name: 'projtCode'
			},{
			    xtype: 'textfield', 
			    fieldLabel: '项目名称', 
			    name: 'projtName'
			}
            ],

            gridModel: 'Hc_Framework.model.HcProject',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '项目编码', 
                          	dataIndex: 'projtCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '项目名称', 
                          	dataIndex: 'projtName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'applByName',
              				header: '申请人',
              				width: 150
                          },
                          {
                				dataIndex: 'perChargeByName',
                				header: '负责人',
                				width: 150
                          },
                          {
                				dataIndex: 'projtStage',
                				header: '项目阶段 ',
                				width: 150
                          },
                          {
              				dataIndex: 'projtApprDate',
              				header: '立项日期',
              				width: 150
                          },
                          {
                				dataIndex: 'projtSource',
                				header: '项目来源',
                				width: 150
                          },
                          {
              				dataIndex: 'currentState',
              				header: '当前状态',
              				width: 150
                          },
                          {
              				dataIndex: 'custName',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'contactBy',
                				header: '联系人',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'projtCode',
            gridLoadUrl: Hc.basePath + 'hc_project_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_project_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_project_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_project_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_project_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_project_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.SubHcProject',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 项目管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcProjectController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcprojectcontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcProject',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['quoteCode'] = record.data.quoteCode; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 项目管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcProjectModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcprojectmodel'
});
Ext.define("Hc_Framework.view.hc.SubHcProject", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcproject',

    

    controller: "subhcprojectcontroller",

    viewModel: {
        type: "subhcprojectmodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsuppliercustomer').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsuppliercustomer',
                 region: "north",
                 height:3000,
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '项目编码',
									    name: 'projtCode',
				     					reference:'projtCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '项目名称',
									    name: 'projtName',
				     					reference:'projtName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '申请人',
									    name: 'applByName',
				     					reference:'applByName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '负责人',
									    name: 'perChargeByName',
				     					reference:'perChargeByName'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 35,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '项目金额',
	   								    name: 'projtSum',
	   								
				     					reference:'projtSum'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '项目阶段',
   									    name: 'projtStage',
				     					reference:'projtStage',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:500,
   									    fieldLabel: '项目来源',
   									    name: 'projtSource',
				     					reference:'projtSource',
   									    colspan:4
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '立项日期',
	   								    name: 'projtApprDate',
	   								
				     					reference:'projtApprDate'
   									}
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 95,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '成功率估计',
									    name: 'sucRateEstimate',
				     					reference:'sucRateEstimate'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '当前状态 ',
									    name: 'currentState',
				     					reference:'currentState'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款天数',
									    name: 'paymentDayQty',
				     					reference:'paymentDayQty',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 128,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '客户名称',
									    name: 'custName',
				     					reference:'custName',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系人',
									    name: 'contactBy',
				     					reference:'contactBy',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系电话',
									    name: 'contactTel',
				     					reference:'contactTel',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:450,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                defaults: {
                       	        	//height:20
                                },
                                x: 3,
                                y: 160,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									   // height:1,
									    fieldLabel: '终止原因',
									    name: 'endReason',
											reference:'endReason',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '项目简介、主要产品及数量',
									    name: 'introduction',
											reference:'introduction',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '跟进措施',
									    name: 'rootMeasure',
											reference:'rootMeasure',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '需配合/支持措施',
									    name: 'coopRootMeasure',
											reference:'coopRootMeasure',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '结　　果',
									    name: 'result',
											reference:'result',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '小　　结',
									    name: 'summary_',
											reference:'summary_',
									    colspan:4
									},{
									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcProjectController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcprojectcontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcProject',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcProjectModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcprojectmodel'
});
/**
 * Description: 报价管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     hc.
 * author:      jinxi.li
 * Createdate:  2016/01/26
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define("Hc_Framework.view.hc.HcQuote", {
    extend: "Hc_Common.view.BaseSimplePage",

    alias: 'widget.hcquote',

    

    controller: "hcquotecontroller",

    viewModel: {
        type: "hcquotemodel"
    },
    title_:'报价管理',
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
            searchItems: [ 
			{
			    xtype: 'textfield', 
			    fieldLabel: '报价编码', 
			    name: 'quoteCode'
			}
            ],

            gridModel: 'Hc_Framework.model.HcQuote',
            gridSubGrid:'',
            gridColumns: [
                          {
                          	header: '报价编码', 
                          	dataIndex: 'quoteCode', 
                          	width: '15%',
                          	renderer: function (data, metadata, record, rowIndex, columnIndex, store) {  
                          		return '<span onclick=""><a href="#">'+data+' </a></span>';
                            }
                          },
                          {
                          	header: '报价人名称', 
                          	dataIndex: 'quoteByName', 
                          	width: 250
                          },
                          {
              				dataIndex: 'custName',
              				header: '客户名称',
              				width: 150
                          },
                          {
                				dataIndex: 'custAddr',
                				header: '客户地址',
                				width: 150
                          },
                          {
                				dataIndex: 'custTel',
                				header: '客户电话 ',
                				width: 150
                          },
                          {
              				dataIndex: 'contactBy',
              				header: '联系人',
              				width: 150
                          },
                          {
                				dataIndex: 'quoteMode',
                				header: '报价方式',
                				width: 150
                          },
                          {
              				dataIndex: 'deliverGoodsDate',
              				header: '交货时间',
              				width: 150
                          },
                          {
              				dataIndex: 'currency',
              				header: '货币',
              				width: 150
                          },
                          {
                				dataIndex: 'taxRate',
                				header: '税率',
                				width: 150
                          },
                          {
                				dataIndex: 'remark',
                				header: '备注',
                				width: 150
                          }            
            ],
            allendflag:false,
            gridPrimaryKey: 'quoteCode',
            gridLoadUrl: Hc.basePath + 'hc_quote_list/list.json',
            gridLoadSubUrl: Hc.basePath + 'hc_quote_list/listAll.json',
            gridSaveUrl: Hc.basePath + 'hc_quote_list/batchOperate.json',
            gridExportUrl: Hc.basePath + 'hc_quote_list/do_export.json',
            gridDeleteMasterCustomerUrl: Hc.basePath + 'hc_quote_list/deleteMasterCustomer.json',
            gridAddMasterCustomerUrl: Hc.basePath + 'hc_quote_list/addMasterCustomer.json',
            gridImportUrl: Hc.basePath + '',
            subWinTableName:'Hc_Framework.view.hc.HcQuote',
            subformActivate:false
        });
        me.callParent();
    }
});
/**
 * Description: 报价管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */

Ext.define('Hc_Framework.view.hc.HcQuoteController', {
	extend : 'Hc_Common.view.BaseSimplePageController',

	alias : 'controller.hcquotecontroller',
	
	init: function () {
		var me = this;
		Ext.apply(me, {
			windowFlag:true,
			newobj:this.view.subWinTableName
		})
		me.callParent();
	},
	onEditClick:function( obj , record , item , index , e , eOpts){
      
	},
	onEditClick_:function(obj , td , cellIndex , record , tr , rowIndex , e , eOpts ){
		var store = Ext.create('Hc_Common.store.Base', {
            model:'Hc_Framework.model.HcQuote',
            autoLoad: false,
            groupField: 'inquiredQTY_quotedPrice$',
            proxy: {
                url: this.view.gridLoadSubUrl
            }
        });
		
		store.proxy.extraParams['quoteCode'] = record.data.quoteCode; 
		store.load();	      	 
		if(cellIndex==0){
	    	Ext.create(this.view.subWinTableName,{
	    		title:'编辑',
	    		record:record,
	    		me_:this,
	    		store:store
	    	}).show();
	    	this.view.subformActivate=true;
	    	this.onBtnCancelClick();
		}
    	
    }
	
});
/**
 * Description: 报价管理 view
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2016-2017
 * Company:     hcsunmo
 * author:      jinxi.li
 * Createdate:  2016年8月20日
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.define('Hc_Framework.view.hc.HcQuoteModel', {
    extend: 'Hc_Common.view.BaseSimplePageModel',

    alias: 'viewmodel.hcquotemodel'
});
Ext.define("Hc_Framework.view.hc.SubHcQuote", {
    extend: "Hc_Common.view.BaseWinPage",

    alias: 'widget.subhcquote',

    

    controller: "subhcquotecontroller",

    viewModel: {
        type: "subhcquotemodel"
    },
    title:'新增',
    width: 1000,
    height:620,
    
    maxWidth:1000,
   // maxHeight:620,
    
    minWidth:1000,
    minHeight:620,
    
    layout:'border',//设置窗口内部布局
    closeAction:'hide',
    plain:false,//true则主体背景透明，false则和主体背景有些差别
    collapsible:false,//是否可收缩
    modal:true,//是否为模式窗体
   
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
               text: '编辑',
               handler:'onBtnEditClick',
               glyph: Hc.Icon.btnEdit
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
            	// this.lookupReference('createUser').setValue(currentUser.getAt(0).data.userName);
                 supplierNo_='PE'+Ext.util.Format.date((new Date()), "Y").substring(2,5)+Ext.util.Format.date((new Date()), "Y").substring(0,2)+Ext.util.Format.date((new Date()), "dmHis");
              /*   this.lookupReference('inquiryNo').setValue(supplierNo_);
                // this.lookupReference('modifyUser').disabled=true;
                 //this.lookupReference('modifyDate').disabled=true;
                 
                 this.lookupReference('contactsName').disabled=true;
                 this.lookupReference('contactsTel').disabled=true;
                 this.lookupReference('contactsFax').disabled=true;
                 this.lookupReference('supplierName').disabled=true;
                 
                 
                // this.lookupReference('localDepartment').setValue(currentUser.getAt(0).data.deptName);
                 this.lookupReference('inquiryDate').setValue(Ext.util.Format.date((new Date()),'Y-m-d H:i:s'));

            */
             }else if(this.title=='编辑'){
           	 for(i=0;i<this.record.getFields().length;i++){
	                 var  name=Ext.util.Format.trim(this.record.getFields()[i].getName())
           		 
           		 if((this.getReferences())[name]){
           			 if(this.lookupReference(name).is('combo')){
               			 this.lookupReference(name).setRawValue(this.record.get(name));
               		 }else{
               			 this.lookupReference(name).setValue(this.record.get(name));
               		 }
           			this.lookupReference(name).disable();
           		 }
           	 }
             }
             this.lookupReference('subhcsuppliercustomer').title='>>>>'+this.me_.view.title_;
    	}
    },
    initComponent: function () {
        var me = this;
        Ext.apply(me, {
       	 items:[
       	        {
       	         xtype:'panel',
       	         defaults: {
       	        	
                 },
                 layout: {
                	 type: 'absolute'
                 },
                 reference:'subhcsuppliercustomer',
                 region: "north",
                 bodyStyle: 'background:#cbdbe0;',
                 padding:'3 0 3 0',//(top, right, bottom, left).
                    items: [
                            {
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 3,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '报价编码',
									    name: 'quoteCode',
				     					reference:'quoteCode',
									    listeners: {
									    	beforerender: function(obj) {
											   obj.fieldLabel+='<font size="2px" color="red">*</font>';
									        }
										  }
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '报价人编码',
									    name: 'quoteByCode',
				     					reference:'quoteByCode'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '报价人名称',
									    name: 'quoteByName',
				     					reference:'quoteByName'
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '报价方式',
									    name: 'quoteMode',
				     					reference:'quoteMode'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:57,
                            	width:980,
                            	layout: {
                                  	 type: 'table',
                                       columns:4
                                   },
                                x: 3,
                                y: 35,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                               	items:[
   									{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户编码',
	   								    name: 'custCode',
	   								
				     					reference:'custCode'
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									   // width:313,
   									    fieldLabel: '客户名称',
   									    name: 'custName',
				     					reference:'custName',
   									    colspan:1
   									},{
   										xtype:'textfield',
   									    labelAlign:'right',
   									    labelWidth:78, 
   									    width:500,
   									    fieldLabel: '客户地址',
   									    name: 'custAddr',
				     					reference:'custAddr',
   									    colspan:4
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户电话',
	   								    name: 'custTel',
	   								
				     					reference:'custTel'
   									},{
	   								    xtype:'textfield',
	   								    labelAlign:'right',
	   								    labelWidth:78, 
	   								    fieldLabel: '客户传真',
	   								    name: 'custFax',
	   								
				     					reference:'custFax'
   									}
   								
                               	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 95,
                                padding:'3 0 0 10',// (top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系人名称',
									    name: 'contact_by',
				     					reference:'contact_by'
									   
									},{
									    xtype:'datefield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系电话 ',
									    name: 'contacTByTel',
				     					reference:'contacTByTel'
									   
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '联系邮件',
									    name: 'contactByEmail',
				     					reference:'contactByEmail',
									 
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:56,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 128,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '目的站',
									    name: 'purposePlace',
				     					reference:'purposePlace',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '包装',
									    name: 'packing',
				     					reference:'packing',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '货币',
									    name: 'currency',
				     					reference:'currency',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '交货方式',
									    name: 'deliverGoodsMode',
				     					reference:'deliverGoodsMode',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '交货时间',
									    name: 'deliverGoodsDate',
				     					reference:'deliverGoodsDate',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '付款方式',
									    name: 'paymentMode',
				     					reference:'paymentMode',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 188,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '运费',
									    name: 'freight',
				     					reference:'freight',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '保险',
									    name: 'insurance',
				     					reference:'insurance',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '税率',
									    name: 'tax_rate',
				     					reference:'tax_rate',
									
									},{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '折扣',
									    name: 'rebate',
				     					reference:'rebate',
									
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:30,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 222,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{
									    xtype:'textfield',
									    labelAlign:'right',
									    labelWidth:78, 
									    fieldLabel: '审批人',
									    name: 'examApprByName',
				     					reference:'examApprByName'
									}
                            	]
                            },{
                            	xtype:'fieldset',
                            	height:70,
                            	width:980,
                            	layout: {
                               	 type: 'table',
                                    columns:4
                                },
                                x: 3,
                                y: 255,
                                padding:'3 0 0 10',//(top, right, bottom, left).
                            	items:[
									{

									    xtype:'textarea',
									    labelAlign:'right',
									    labelWidth:78, 
									    width:800,
									    fieldLabel: '备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注',
									    name: 'remark',
				     					reference:'remark',
									    colspan:4
									}
                            	]
                            }
                     ]
       	            
       	        },{
          	         xtype:'panel',
          	         layout: {
                   	 type: 'fit',
                    },
                    region: "center",
                    bodyStyle: 'background:#ceebe0; padding:0px;border:0px',
                    scrollable:true,
                    items:[{
                   	 xtype:'grid',
                   	 enableHdMenu:false,
                   	 sortableColumns:false,
                   	 columnLines: true,
                   	 enableColumnHide:false,
                   	 enableColumnMove:false,
                   	 store:me.store,
                   	 features: [{
             		        ftype: 'summary'
             		     }],
                   	 columns: {
                   		    items: [
                   		        {
                   		            text: "序号",
                   		            dataIndex: "id",
                   		            width: 150
                   		        },{
                   		            text: "产品编码",
                   		            dataIndex: "prodCode",
                   		            width: 150
                   		        },{
                   		            text: "产品名称",
                   		            dataIndex: "prodName",
                   		            width: 150
                   		        },{
                   		            text: "型号规格",
                   		            dataIndex: "typeModel",
                   		            width: 150
                   		        },{
                   		            text: "数量",
                   		            dataIndex: "qty",
                   		            width: 150
                   		        },{
                   		            text: "单位",
                   		            dataIndex: "unit",
                   		            width: 150
                   		        },{
                   		            text: "单价",
                   		            dataIndex: "univalent",
                   		            width: 150
                   		        },{
                   		            text: "货币",
                   		            dataIndex: "currency",
                   		            width: 150
                   		        },{
                   		            text: "产品描述",
                   		            dataIndex: "prodDesc",
                   		            width: 150
                   		        },{
                   		            text: "品牌",
                   		            dataIndex: "brand",
                   		            width: 150
                   		        },{
                   		            text: "制造商名称",
                   		            dataIndex: "manufName",
                   		            width: 150
                   		        },{
                   		            text: "货期（交期）",
                   		            dataIndex: "deliveTime",
                   		            width: 150
                   		        },{
                   		            text: "备注",
                   		            dataIndex: "remark",
                   		            width: 150
                   		        },{
                   		            text: "合计",
                   		            dataIndex: "inquiredQTY_quotedPrice$",
                   		            width: 150,
                   		            summaryType: 'sum',
   	                		      	summaryRenderer: function(value, summaryData, dataIndex) {
   	                		            return'金额总计:'+value;
   	                		        }
                   		        }
                   		    ]
                   		}
                   	 
                   	 
                   	 
                 }]
          	   }
       	 ]
       });
        me.callParent();
    }
});
Ext.define('Hc_Framework.view.hc.SubHcQuoteController', {
	extend : 'Hc_Common.view.BaseWinPageController',

	alias : 'controller.subhcquotecontroller',
	flag:false,
	record_:'',
	init: function () {
		var me = this;
		var  record=Ext.create('Hc_Framework.model.HcQuote',{});
		this.record_=record
		for(i=0;i<record.getFields().length;i++){
			var  name=Ext.util.Format.trim(record.getFields()[i].getName())
	   		 
	   		if((this.getReferences())[name]){
				this.lookupReference(name).on("change", me.onBtnchange, me);	   			 
	   		 }
     	}
		me.callParent();
	},
	onBtnEditClick:function(){
		for(i=0;i<this.record_.getFields().length;i++){
            var  name=Ext.util.Format.trim(this.record_.getFields()[i].getName())
  		 if((this.getReferences())[name]){
  			 if('contactsName'==name||'contactsTel'==name||'contactsFax'==name||'supplierName'==name){
  				this.lookupReference(name).disable();
  			 }else{
  				this.lookupReference(name).enable();
  			 }
  			
  		 }
  	    }
		//this.view.lookupReference('inquiryNo').enable()

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
    		
      	this.view.me_.workObject.store.rejectChanges()
      	this.view.me_.workObject.view.refresh();
    		
    	}
          this.view.me_.view.subformActivate=false;
		  this.view.hide();
	}
	
});
Ext.define('Hc_Framework.view.hc.SubHcQuoteModel', {
    extend: 'Hc_Common.view.BaseWinPageModel',

    alias: 'viewmodel.subhcquotemodel'
});
/**
 * Description: 主框架应用程序入口
 * All rights Reserved, Designed By Hc
 * Copyright:   Copyright(C) 2014-2015
 * Company:     Wonhigh.
 * author:      wudefeng
 * Createdate:  2015/01/20 10:30
 *
 * Modification  History:
 * Date         Author             What
 * ------------------------------------------
 *
 */
Ext.application({
    extend: 'Hc_Framework.Application',    
    appFolder:'resources/app',
    name: 'Hc_Framework'
   // autoCreateViewport: 'Hc_Framework.view.ucmain.Main'
});



