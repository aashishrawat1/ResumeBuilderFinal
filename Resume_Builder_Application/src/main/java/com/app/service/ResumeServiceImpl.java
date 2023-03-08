package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.EducationRepository;
import com.app.dao.ExperienceRepository;
import com.app.dao.HobbiesRepository;
import com.app.dao.PersonalRepository;
import com.app.dao.SkillRepository;
import com.app.dao.UserRepository;
import com.app.pojo.Education;
import com.app.pojo.Experience;
import com.app.pojo.Hobbies;
import com.app.pojo.PersonalDetails;
import com.app.pojo.Resume;
import com.app.pojo.Skill;
import com.app.pojo.User;

@Service
@Transactional
public class ResumeServiceImpl implements IResumeService {
    @Autowired
	private UserRepository userdao;
    @Autowired
    private PersonalRepository personaldao;
    
	@Autowired
	private EducationRepository educationdao;
	
	@Autowired
	private ExperienceRepository experiencedao;
	
	@Autowired
	private HobbiesRepository hobbiesdao;
	
	@Autowired
	private SkillRepository skilldao;
	@Override
	public Resume getAllUserDetails(Long id) {
	  Resume resume = new Resume();
	  
      User user = userdao.findById(id).orElseThrow();
	  resume.setUser(user);
	  
	  PersonalDetails personal = personaldao.findByUser(user);
	  resume.setPersonaldetails(personal);
	  
	  Education education = educationdao.findByUser(user);
	  resume.setEducationlist(education);
	  
	  List<Experience> experience = experiencedao.findByUser(user);
	  resume.setExperiencelist(experience);
		
	  List<Skill> skill = skilldao.findByUser(user);
	  resume.setSkilllist(skill);
	  
	  List<Hobbies> hobbies = hobbiesdao.findByUser(user);
	  resume.setHobbieslist(hobbies);

	return resume;
	}

}
