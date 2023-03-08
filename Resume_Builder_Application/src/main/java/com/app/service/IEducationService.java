package com.app.service;

import java.util.List;

import com.app.pojo.Education;

public interface IEducationService {
	 public Education saveEducation(Education detail,Long userId);
	 public List<Education> getAllEducationdetails();
}
