package com.app.service;

import java.util.List;

import com.app.pojo.PersonalDetails;

public interface IPersonalService {
	 public PersonalDetails savePersonal(PersonalDetails detail,Long userId);
	 public List<PersonalDetails> getAllDetails();
}
