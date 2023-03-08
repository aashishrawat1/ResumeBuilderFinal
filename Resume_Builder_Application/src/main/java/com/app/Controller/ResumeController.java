package com.app.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Resume;
import com.app.service.IResumeService;

@RestController
@RequestMapping("/resume")
@CrossOrigin(origins = "http://localhost:3000")
public class ResumeController {
       
	
	public ResumeController() {
	  System.out.println("resumeController"+getClass().getName());
	}

	@Autowired
	private IResumeService resumeservice;
	
	@GetMapping("/{userId}")
	public Resume getResumeData(@PathVariable Long userId)
	{
		return resumeservice.getAllUserDetails(userId);
	}
}
