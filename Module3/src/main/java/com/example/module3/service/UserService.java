package com.example.module3.service;

import com.example.module3.dao.UserDAO;
import com.example.module3.model.User;

import java.util.List;

public class UserService {
    private final UserDAO userDAO;
    public UserService(){
        userDAO = new UserDAO();
    }
    public List<User> getAllUser(boolean delete){
        return userDAO.selectAllUsers(delete);
    }
    public User findById(int id){
        return userDAO.findById(id);
    }
    public void create(User user){
         userDAO.create(user);
    }
    public void update(User user, int id){
        user.setId(id);
        userDAO.update(user);
    }
    public void delete(int id){
        userDAO.delete(id);
    }
    public void restore(int id){
        userDAO.restore(id);
    }
    public void restoreAll(List<Integer> ids){
        for (Integer id : ids) {
            userDAO.restore(id);
        }
    }
}
