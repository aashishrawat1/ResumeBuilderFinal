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
import com.app.pojo.Experience;
import com.app.service.IExperienceService;

@RestController
@RequestMapping("/experience")
@CrossOrigin(origins = "http://localhost:3000")
public class ExperienceController {

	@Autowired
	private IExperienceService experienceservice;
	
	@GetMapping
	public List<Experience> getAllDetails()
	{
		return experienceservice.getAllDetails();
	}
	@PostMapping("/{userId}")
	public Experience saveExperince(@RequestBody Experience details,@PathVariable Long userId) {
	
		System.out.println("in experience contllr "+details);
	    return experienceservice.saveExperience(details,userId);
}	
}
