package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.ExperienceRepository;
import com.app.dao.UserRepository;
import com.app.pojo.Experience;
import com.app.pojo.User;

@Service
@Transactional
public class ExperienceServiceImpl implements IExperienceService {
    @Autowired
	private ExperienceRepository experiencedao;
    
    @Autowired
	private UserRepository userRepo;
    
	@Override
	public Experience saveExperience(Experience detail,Long userId) {
		User user = userRepo.findById(userId).orElseThrow();
		detail.setUser(user);
		// TODO Auto-generated method stub
		return experiencedao.save(detail);
	}

	@Override
	public List<Experience> getAllDetails() {
		// TODO Auto-generated method stub
		return experiencedao.findAll();
	}

}
