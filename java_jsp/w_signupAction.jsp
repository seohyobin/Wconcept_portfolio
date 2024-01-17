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
<jsp:setProperty name="userDTO" property="pwOk"/>
<jsp:setProperty name="userDTO" property="name"/>
<jsp:setProperty name="userDTO" property="hp"/>
<jsp:setProperty name="userDTO" property="addr1"/>
<jsp:setProperty name="userDTO" property="addr2"/>
<jsp:setProperty name="userDTO" property="event"/>
<jsp:setProperty name="userDTO" property="service"/>

<%
   UserDAO userDAO = new UserDAO();
   int result  =  userDAO.signup(userDTO);
%>

{"AJAX실행 DTO & DAO 결과" : "<%= result%>"}
