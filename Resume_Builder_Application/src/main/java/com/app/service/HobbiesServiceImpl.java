package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.HobbiesRepository;
import com.app.dao.UserRepository;
import com.app.pojo.Hobbies;
import com.app.pojo.User;

@Service
@Transactional
public class HobbiesServiceImpl implements IHobbiesService {
    @Autowired
	private HobbiesRepository hobbiesdao;
    
	 @Autowired
	private UserRepository userRepo;
	
	@Override
	public Hobbies saveHobbies(Hobbies detail,Long userId ) {
		User user = userRepo.findById(userId).orElseThrow();
		detail.setUser(user);	
		return hobbiesdao.save(detail);
	}

	@Override
	public List<Hobbies> getAllDetails() {
		// TODO Auto-generated method stub
		return hobbiesdao.findAll();
	}

}
