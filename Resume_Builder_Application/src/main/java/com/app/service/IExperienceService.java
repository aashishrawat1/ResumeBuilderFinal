package com.app.service;

import java.util.List;

import com.app.pojo.Experience;

public interface IExperienceService {
	 public Experience saveExperience(Experience detail,Long userId);
	 public List<Experience> getAllDetails();
}
