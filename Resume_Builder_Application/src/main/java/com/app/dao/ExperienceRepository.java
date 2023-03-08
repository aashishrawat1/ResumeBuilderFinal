package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Experience;
import com.app.pojo.User;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {
  List<Experience> findByUser(User user);
}
