package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Hobbies;
import com.app.pojo.User;

public interface HobbiesRepository extends JpaRepository<Hobbies, Long>{
List<Hobbies> findByUser(User user);
}
