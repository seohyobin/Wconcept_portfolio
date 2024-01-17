<%

    response.setHeader("Access-Control-Allow-Origin","*");

%>
<%@
    page language = "java"
    contentType = "text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import ="wconcept.UserDAO" %>
<%
    request.setCharacterEncoding("UTF-8");
%>
<jsp:useBean id="userDTO" class="wconcept.UserDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="email"/>
<jsp:setProperty name="userDTO" property="pw"/>

<%
   UserDAO userDAO = new UserDAO();
   int result  =  userDAO.login(userDTO);
%>


<%= result%>
