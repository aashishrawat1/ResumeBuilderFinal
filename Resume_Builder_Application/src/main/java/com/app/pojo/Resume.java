package com.app.pojo;

import java.util.List;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Resume { 
	private User user;
	private PersonalDetails personaldetails;
	private Education educationlist;
	private List<Experience> experiencelist;
	private List<Skill> skilllist;
	private List<Hobbies> hobbieslist;
	
}
