package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Feedback;
import com.app.service.IfeedbackService;

@RestController
@RequestMapping("/feedback")
@CrossOrigin(origins = "http://localhost:3000")
public class FeedbackController {

	@Autowired
	private IfeedbackService feedbackService;
	
	@GetMapping
	public List<Feedback> getAllList()
	{
	  return feedbackService.getAllFeedBack();
	}
	@PostMapping("/{userId}")
	public Feedback saveFeedback(@RequestBody Feedback detail,@PathVariable Long userId)
	{
		
		System.out.println("feedback contrller"+detail);
		return feedbackService.saveFeedback(detail, userId);
	}
	
	
}
