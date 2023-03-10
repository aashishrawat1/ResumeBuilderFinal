package com.app.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Admin;
import com.app.pojo.AdminLogin;
import com.app.pojo.Feedback;
import com.app.pojo.User;
import com.app.service.IAdminService;
@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
@Autowired
private IAdminService adminService;

@GetMapping("/users")
public List<User> getAllList()
{
	return adminService.getAllUser();
}

@GetMapping("/feedbacks")
public List<Feedback> getAllFeedback()
{
	return adminService.getAllFeedback();
}

@GetMapping
public List<Admin> getAllAdminn(){
	return adminService.getAllAdmin();
}

@PostMapping("/login")
public ResponseEntity<?> Authenticate(@RequestBody AdminLogin adminCred)
{
  Admin admin = adminService.authenticateAdmin(adminCred.getEmail(), adminCred.getPassword());
  if(admin!=null)
	 {
		return ResponseEntity.ok(admin);
	 }
	 else
	 {
		return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid user");
	 }
}
}
