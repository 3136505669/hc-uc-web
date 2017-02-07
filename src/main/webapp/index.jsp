<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<% 
   response.setContentType("text/html;charset=UTF-8");
   System.out.println("输出有错误吗hjjgjgjj");
   System.out.println(request.getAttribute("currentuser"));
%>
<!DOCTYPE HTML>
<html manifest="">

<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <title>HCSunmo CRM 管理系统</title>
    <script type="text/javascript" src="resources/static/bootstrap.js"></script>
    <script type="text/javascript">  
 
    Ext.onReady(function() {  
        // 可以制作一个控件，来修改这二个属性，达到可以修改金额单位的目的  
        Ext.monetary = ''; // 加在数字后面的金额单位  
        Ext.monetaryUnit = 1;  

        // Ext.monetary = '亿';  
        // Ext.monetaryUnit = 10000*10000;  

        if (Ext.util && Ext.util.Format) {  

            Ext.apply(Ext.util.Format, {  
                        monetary : function(val) {  
                            if (val) {  
                                if (Ext.monetaryUnit && Ext.monetaryUnit != 1)  
                                    val = val / Ext.monetaryUnit;  
                                // 正数用蓝色显示，负数用红色显示  
                                return '<span style="color:' + (val > 0 ? 'blue' : 'red')  
                                        + ';">'+Ext.monetary + Ext.util.Format.number(val, '0,000.00')  
                                         + '</span>';  
                            } else  
                                return ''; // 如果为0,则不显示  
                        }  
                    })  
        };  
    });  
	</script>  
    <script type="text/javascript" src="resources/js/uc-all-debug.js"></script>
    <!--<script type="text/javascript" src="resources/app.js"></script>-->
</head>
<body scroll="yes">
	
</body>
</html>
