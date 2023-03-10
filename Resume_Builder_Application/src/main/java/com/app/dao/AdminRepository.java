package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Admin;

public interface AdminRepository extends JpaRepository<Admin,Long> {
  Admin findByEmailAndPassword(String email,String password);
}
