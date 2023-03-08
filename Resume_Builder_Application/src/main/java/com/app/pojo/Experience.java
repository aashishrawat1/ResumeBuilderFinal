package com.app.pojo;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "experience_table")

public class Experience extends BaseEntity{

	 @Column(length =50 )
    private String jobTitle;
	 @Column(length =50 )
    private String company;
	 @Column(length =50 )
    private String city;
	 @Column(length =50 )
    private String country;
	 @Column(length =50 )
    private LocalDate startDate;
	 @Column(length =50 )
    private LocalDate endDate;

	    @ManyToOne
	    @JoinColumn(name = "user_id")
	    private User user;
}
