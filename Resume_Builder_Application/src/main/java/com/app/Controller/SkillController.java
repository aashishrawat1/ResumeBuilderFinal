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
import com.app.pojo.Skill;
import com.app.service.ISkillService;

@RestController
@RequestMapping("/skill")
@CrossOrigin(origins = "http://localhost:3000")
public class SkillController {

	@Autowired
	private ISkillService skillservice;
	
	@GetMapping
	public List<Skill> getAllDetails()
	{
		return skillservice.getAllDetails();
				
	}

	@PostMapping("/{userId}")
	public Skill saveSkill(@RequestBody Skill details,@PathVariable Long userId) {
	
		System.out.println("in skill contllr"+details);
	    return skillservice.saveSkill(details,userId);
	
	}
}
