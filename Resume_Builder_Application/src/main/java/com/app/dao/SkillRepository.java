package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Skill;
import com.app.pojo.User;

public interface SkillRepository extends JpaRepository<Skill, Long>{
List<Skill> findByUser(User user);
}
