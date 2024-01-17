package wconcept;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import wconcept.UserDTO;

public class UserDAO {

    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public UserDAO(){
        try {
            final String URL = "jdbc:mariadb://localhost:3306/janeseo0530";
            final String ID = "janeseo0530";
            final String PW = "Ejqmf5767^^";
            Class.forName("org.mariadb.jdbc.Driver");
            this.conn = DriverManager.getConnection(URL, ID, PW);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public int signup(UserDTO userDTO){
        String SQL = "INSERT INTO w_user(email,pw,pwOk,name,hp,addr1,addr2,event,service) VALUES(?,?,?,?,?,?,?,?,?)";
        try {
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getEmail());
            ps.setString(2, userDTO.getPw());
            ps.setString(3, userDTO.getPwOk());
            ps.setString(4, userDTO.getName());
            ps.setString(5, userDTO.getHp());
            ps.setString(6, userDTO.getAddr1());
            ps.setString(7, userDTO.getAddr2());
            ps.setString(8, userDTO.getEvent());
            ps.setString(9, userDTO.getService());
            return ps.executeUpdate();
        } 
        catch(Exception e){
            e.printStackTrace();
        }
    return -1;
    }


    
    public int login(UserDTO userDTO){
        String SQL = "SELECT pw FROM w_user WHERE email =? ";  //user_pw 라서 => getString(1)  //* 로하면 ㅎㄷ     //user_pw   rs.getString(3)
        try{
            ps=conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getEmail());
            rs= ps.executeQuery();

            if(rs.next()){
                if(rs.getString(1).equals(userDTO.getPw())){
                    return 1; //로그인성공

                }
                else{
                    return 0;//비밀번호 실패
                }
            }
            else{
                return -1; //아이디실패
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{  //무조건 실행하는 키워드 finally{} -> catch문 바로 밑!!!
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){
                
            }
        }
        return -2;//데이터베이스 오류
    }


    
}