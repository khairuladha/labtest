/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.api;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import org.json.simple.JSONObject;
import org.json.simple.JSONArray;

public class DBApi {

    static Connection con;
    static ResultSet rs;
    
public static JSONObject getContactData() {
        JSONObject jo = new JSONObject();
        int index = 0;
        int ada = 0;
        try {
            con = ConMan.getConnection();
            String sql = "select * from maksu where";
            PreparedStatement ps = con.prepareStatement(sql);
            rs = ps.executeQuery();
            while (rs.next()) {
                ada = 1;
                
                jo.put("id", rs.getString("id"));
                jo.put("email", rs.getString("email"));
                
            }
            if (ada == 1) {//ada data contacts
                
                jo.put("status", 1);
                
            } else {//tiada data contacts
                
                jo.put("status", 0);
                
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return jo;

    }
}

     
