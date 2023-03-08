package com.app.service;

import java.util.List;

import com.app.pojo.Admin;
import com.app.pojo.Feedback;
import com.app.pojo.User;

public interface IAdminService {
public List<User> getAllUser();
public List<Feedback> getAllFeedback();
public List<Admin> getAllAdmin();
}
