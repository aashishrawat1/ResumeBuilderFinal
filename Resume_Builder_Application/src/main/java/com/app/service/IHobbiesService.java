package com.app.service;

import java.util.List;
import com.app.pojo.Hobbies;

public interface IHobbiesService {
	public Hobbies saveHobbies(Hobbies detail,Long userId);
	 public List<Hobbies> getAllDetails();
}


