package com.app.service;

import java.util.List;



import com.app.pojo.User;
public interface IUserService {
 List<User> getAllList(); 
 public User saveUser(User user);
 public User authenticateUser(String email,String password);
}
