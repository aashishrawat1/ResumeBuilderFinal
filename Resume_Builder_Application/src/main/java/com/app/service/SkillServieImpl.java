package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.SkillRepository;
import com.app.dao.UserRepository;
import com.app.pojo.Skill;
import com.app.pojo.User;

@Service
@Transactional
public class SkillServieImpl implements ISkillService {
     
	@Autowired
	private SkillRepository skilldao;
	
	 @Autowired
		private UserRepository userRepo;
		
	
	@Override
	public Skill saveSkill(Skill detail,Long userId) {
		User user = userRepo.findById(userId).orElseThrow();
		detail.setUser(user);
		return  skilldao.save(detail);
	}

	@Override
	public List<Skill> getAllDetails() {
		
		return skilldao.findAll();
	}

}
