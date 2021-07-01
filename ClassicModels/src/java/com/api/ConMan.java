
package com.api;

import java.sql.*;

public class ConMan {
     static Connection con;
    static String url;

    public static Connection getConnection() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            try {
                url = "jdbc:mysql://localhost:3306/mokda";
                con = DriverManager.getConnection(url, "root", "admin");
            } catch (SQLException e) {
                e.printStackTrace();

            }
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        return con;
    }

}
