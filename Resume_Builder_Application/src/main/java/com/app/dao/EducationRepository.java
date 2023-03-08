package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Education;
import com.app.pojo.User;

public interface EducationRepository extends JpaRepository<Education,Long> {
	public Education findByUser(User user);

}
