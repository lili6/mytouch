<%--
  Created by IntelliJ IDEA.
  User: lili
  Date: 15/7/13
  Time: 23:24
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="javax.servlet.*"  contentType="text/html;charset=UTF-8" language="java" %>
<%
String password = request.getParameter("password");
  String msg = "";
  System.out.println("password=" + password);
  if(password.length() <3){
    msg = "{success:false,errors:{password:'密码不能小与3为数字'}}";
  }else {
    msg="{success:true}";
    System.out.println("success...."+msg );
  }
  response.getWriter().write(msg);

%>

