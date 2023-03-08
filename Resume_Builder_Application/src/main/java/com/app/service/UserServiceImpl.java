package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.UserRepository;
import com.app.pojo.User;

@Service
@Transactional
public class UserServiceImpl implements IUserService{
	@Autowired
	private UserRepository userdao;
	@Override
	public List<User> getAllList()
	{
		return userdao.findAll();
	}
	@Override
	public User saveUser(User user) {
		return userdao.save(user);
	}
	@Override
	public User authenticateUser(String email, String password) {
		return userdao.findByEmailAndPassword(email, password);
	}
}
