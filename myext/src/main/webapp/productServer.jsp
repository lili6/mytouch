<%--
  Created by IntelliJ IDEA.
  User: lili
  Date: 15/7/13
  Time: 21:39
  To change this template use File | Settings | File Templates.
--%>
<%@ page import="javax.servlet.*" contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<%
  //获取产品ID
  String productId= request.getParameter("productId");
  System.out.println("productId=" + productId);
  if ("001".equals(productId)) {
    String msg = "{success:true,data:{introduction:'本产品完美！【我是回填字段】'}}";
//    String msg = "{success:true,errorMessage:'数据完美'}";
    response.getWriter().write(msg);
  } else {
    String msg = "{success:false,errorMessage:'数据不存在'}";
    response.getWriter().write(msg);
  }
%>

