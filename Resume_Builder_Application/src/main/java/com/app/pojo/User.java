package com.app.pojo;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
@Entity
@Table(name = "user_table")

public class User extends BaseEntity
{
	    @Column(length =50 )
	    private String firstName;
	    @Column(length =50 )
	    private String lastName;
	    @Column(name = "date")
	    private LocalDate date;
	    @Column(length =50 )
	    private String gender;
	    @Column(length =50 ,unique = true)
	    private String email;
	    @Column(length = 50,nullable = false)
	    private String password;
	    
	    @OneToMany(mappedBy = "user")
	    @JsonIgnore
	    private List<Experience> experienceList;
	    
	    @OneToMany(mappedBy = "user")
	    @JsonIgnore
	    private List<Hobbies> hobbiesList;
	    
	    @OneToMany(mappedBy = "user")
	    @JsonIgnore
	    private List<Skill> skillList;
	    
}


