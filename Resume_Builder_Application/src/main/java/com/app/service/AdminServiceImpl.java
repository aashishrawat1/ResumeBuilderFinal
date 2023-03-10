package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.pojo.Admin;
import com.app.pojo.Feedback;
import com.app.pojo.User;

@Service
@Transactional
public class AdminServiceImpl implements IAdminService {

	@Autowired
	private IfeedbackService feedbackdao;
	
	@Autowired
	private AdminRepository admindao;
	
	@Autowired
	private IUserService userdao;
	@Override
	public List<User> getAllUser() {
		return userdao.getAllList();
	}

	@Override
	public List<Feedback> getAllFeedback() {
		// TODO Auto-generated method stub
		return feedbackdao.getAllFeedBack();
	}

	@Override
	public List<Admin> getAllAdmin() {
		return admindao.findAll();
	}

	@Override
	public Admin authenticateAdmin(String email, String password) {
		return admindao.findByEmailAndPassword(email, password);
	}

}
