package com.example.module3.model;

import java.sql.Date;

public class User {
    private int id;
    private String name;
    private String userName;
    private String email;
    private Date dob;
    private EGender gender;
    private Role role;
    public User(){

    }
    public User(int id, String name, String userName, String email, Date dob, EGender gender, Role role) {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.dob = dob;
        this.gender = gender;
        this.role = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public EGender getGender() {
        return gender;
    }

    public void setGender(EGender gender) {
        this.gender = gender;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }
}
