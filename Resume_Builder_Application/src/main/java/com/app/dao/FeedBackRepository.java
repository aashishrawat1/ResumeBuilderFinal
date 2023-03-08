package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Feedback;
import com.app.pojo.User;

public interface FeedBackRepository extends JpaRepository<Feedback,Long>{
 public Feedback findByUser(User user);
}
