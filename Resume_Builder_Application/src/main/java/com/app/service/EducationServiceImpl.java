package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EducationRepository;
import com.app.dao.UserRepository;
import com.app.pojo.Education;
import com.app.pojo.User;

@Service
@Transactional
public class EducationServiceImpl implements IEducationService{

	@Autowired
	private EducationRepository educationdao;
	
	@Autowired
	private UserRepository userRepo;
	
	@Override
	public Education saveEducation(Education detail,Long userId) {
		User user = userRepo.findById(userId).orElseThrow();
		detail.setUser(user);
		
		return educationdao.save(detail);
	}

	@Override
	public List<Education> getAllEducationdetails() {
		// TODO Auto-generated method stub
		return educationdao.findAll();
	}

}
