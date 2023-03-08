package com.app.dao;
import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.PersonalDetails;
import com.app.pojo.User;

public interface PersonalRepository extends JpaRepository<PersonalDetails, Long> {
  public PersonalDetails findByUser(User user);
}
