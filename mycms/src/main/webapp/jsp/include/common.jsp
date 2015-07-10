<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>Billing后台管理系统</title>
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">
	<link rel="stylesheet" type="text/css" href="<%=path%>/ext/ext-all.css" />
 	<script type="text/javascript" src="<%=path%>/ext/ext-base.js"></script>
    <script type="text/javascript" src="<%=path%>/ext/ext-all.js"></script>
    <script type="text/javascript" src="<%=path%>/ext/ext-lang-zh_CN.js"></script>
    <script type="text/javascript">
    	//错误提示
		function error() {
			Ext.MessageBox.alert('系统消息', '系统发生错误，请联系管理员。');
		}
		//弹出进度条
		function progress() {
			   //Ext.Msg.wait("内容","Extjs进度条应用",{text:"正在加载。。。"});
	            Ext.Msg.show({
	                modal:false,
	                msg:"请等待...",
	                width:300,
	                wait:true,
	                waitConfig:{interval:500,duration:10000,fn:function () {
	                           Ext.Msg.hide();
	                           }},
	                closable:true
	            });
            }
            
          //加载控件进度条  
          function html_progress(){
             var progressBar=Ext.Msg.show({
                 msg:"正在加载控件",
                  progress:true,
                  width:300
             });
              var count=0; 
              var bartext=""; 
              var curnum=0;
              Ext.TaskMgr.start({ 
                   run:function () {
                        count++; 
                        if (count>=10) { 
                             progressBar.hide(); 
                         } 
                        curnum=count/10; 
                        bartext=curnum*100+"%"; 
                        progressBar.updateProgress(curnum,bartext); 
                    }, 
               interval:1000 
              });
          }
	</script>
  </head>
</html>