package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.PersonalRepository;
import com.app.dao.UserRepository;
import com.app.pojo.PersonalDetails;
import com.app.pojo.User;
@Service
@Transactional
public class PersonalServiceImpl implements IPersonalService{
    @Autowired
	private PersonalRepository personaldao;
    
   
  	 @Autowired
  	private UserRepository userRepo;
    
	@Override
	public PersonalDetails savePersonal(PersonalDetails detail,Long userId) {
		User user = userRepo.findById(userId).orElseThrow();
		detail.setUser(user);	
		
		return personaldao.save(detail);
	}
	@Override
	public List<PersonalDetails> getAllDetails() {
		// TODO Auto-generated method stub
		return personaldao.findAll();
	}

}
