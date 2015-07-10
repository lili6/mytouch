<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/jsp/include/common.jsp"%>
<%
	Object obj = session.getAttribute("admin");
    Boolean isDebug =(Boolean)session.getAttribute("isDebug");
	if(obj==null){
		response.sendRedirect(path+"/login.jsp");
	} 
%>
<script type="text/javascript">
//app 是否显示
function isShow(value){
	if(value){
		return "<span style='color:green;'>是</span>";
	}else{
		return "<span style='color:red;'>否</span>";
	}
    
}
function isGM(value){
	if(value){
		return "<span style='color:green;'>是</span>";
	}else{
		return "<span style='color:red;'>否</span>";
	}
}
//记录是否有效（是否被删除）
function isValid(value){
	if(value){
		return "<span style='color:green;'>有效</span>";
	}else{
		return "<span style='color:red;'>无效</span>";
	}
    
}
//订单状态
function orderStatus(value){
	var reslut="";
	switch(value){
		case 0:
			reslut="<span style='color:red;'>生成成功</span>";
			break;
		case 1:
			reslut="<span style='color:red;'>付费成功</span>";
			break;
		case 2:
			reslut="<span style='color:green;'>发货成功</span>";
			break;
		case 3:
			reslut="<span style='color:green;'>补单成功</span>";
			break;
		default:
			reslut="<span>"+value+"</span>";
	}
	return reslut;
}
//错误类型 opcode
function errorType(value){
	var reslut="";
	switch(value){
		case 1001:
			reslut="<span>登录</span>";
			break;
		case 1002:
			reslut="<span>注册</span>";
			break;
		case 2001:
			reslut="<span>网页充值</span>";
			break;
		case 2008:
			reslut="<span>订单验证</span>";
			break;
		default:
			reslut="<span>"+value+"</span>";
	}
	return reslut;
}

function isRepairOrder(value){
	if(value=="补单成功"){
		return "<span style='color:red;'>"+value+"</span>";
	}else{
		return value;
	}
	
}

function getbeforeTime(){
	var now = new Date().format('Y-m-d');
	var arr = now.split('-');
	var year = arr[0];
	var month = arr[1];
	var day = arr[2];
	if(day>5){
		day = day-5;
	}else if(day==5){
		if(month==1){
			year = year-1;	
			month=12;
		}else{
			month=month-1;
		}
		day = 30;
	}else{
		if(month==1){
			year = year-1;	
			month=12;
		}else{
			month=month-1;
		}
		temp = 5-day;
		day = 30 - temp;
	}
	return year+'-'+month+'-'+day;
}
</script>
