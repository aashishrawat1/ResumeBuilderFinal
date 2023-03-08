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
import com.app.pojo.Education;
import com.app.service.IEducationService;

@RestController
@RequestMapping("/education")
@CrossOrigin(origins = "http://localhost:3000")
public class EducationController {
	
	@Autowired
	private IEducationService educationservice;
	
	@GetMapping
	public List<Education> getAllDetails()
	{
		return educationservice.getAllEducationdetails();
	}

	@PostMapping("/{userId}")
	public Education saveEducation(@RequestBody Education details,@PathVariable Long userId) {
	
		System.out.println("in education contrll"+details);
	    return educationservice.saveEducation(details,userId);
}
}

