package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FeedBackRepository;
import com.app.dao.UserRepository;
import com.app.pojo.Feedback;
import com.app.pojo.User;
@Service
@Transactional
public class FeedbackServiceImpl implements IfeedbackService {

	@Autowired
	private FeedBackRepository feedbackdao;
	 @Autowired
	  	private UserRepository userRepo;
	@Override
	public Feedback saveFeedback(Feedback detail, Long userId) {
		User user = userRepo.findById(userId).orElseThrow();
		detail.setUser(user);
		return feedbackdao.save(detail);
	}

	@Override
	public List<Feedback> getAllFeedBack() {
		
		return feedbackdao.findAll();
	}

}
