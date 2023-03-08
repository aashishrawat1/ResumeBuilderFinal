package com.app.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import com.app.pojo.User;
import com.app.pojo.UserLogin;
import com.app.service.IUserService;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController{
	 @Autowired
	private IUserService userService;

	public UserController() {
		System.out.println("resume cntr called"+getClass().getName());
	                        }
	 @GetMapping
	public List<User> getfetch()
	{
		return userService.getAllList();
	}
	 @PostMapping
	 public User saveUser(@RequestBody User user)
	 {
		 System.out.println("user details"+user);
	     return userService.saveUser(user);
	 } 
	 @PostMapping("/login")
	 public ResponseEntity<?> Authenticate(@RequestBody UserLogin userCred)
	 {
		 User user = userService.authenticateUser(userCred.getEmail(), userCred.getPassword());
		 if(user!=null)
		 {
			return ResponseEntity.ok(user);
		 }
		 else
		 {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid user");
		 }
	 }
}


