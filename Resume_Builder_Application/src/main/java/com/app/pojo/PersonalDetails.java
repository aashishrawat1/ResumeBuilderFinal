package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.OneToOne;
import javax.persistence.Table;
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
@Table(name = "personal_details")
public class PersonalDetails extends BaseEntity {
	
	    @Column(length =50 )
	    private String firstName;
	    @Column(length =50 )
	    private String lastName;
	    @Column(length =50 )
	    private String city;
	    @Column(length =50 )
	    private String country;
	    @Column(length =50 )
	    private String pincode;
	    @Column(length =40 )
	    private String gender;
	    @Column(length =50 )
	    private String state;
	    @Column(length =50 ,unique = true)
	    private String email;
	    @Column(length =50 )
	    private String phone;
	    @Lob
	    private byte[] image;  //to store image
	    
	    @OneToOne
	    @JoinColumn(name="userId")
	    private User user;
	    
	    
	   
}

