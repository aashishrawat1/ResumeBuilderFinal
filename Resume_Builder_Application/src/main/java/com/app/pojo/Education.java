package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
@Table(name = "education_table")
public class Education extends BaseEntity{
    //details of high school
	  @Column(length =200,name = "SSC")
	private String nameHigh;
	  @Column(length =50,name = "percentage_SSC")
	private String percentageHigh;
	  @Column(length =50,name = "year_SSC")
	private String yearHigh;
	  @Column(length =50,name = "board_SSC")
	private String boardHigh;
	 //details of  Intermediate
	  @Column(length =200,name = "HSC")
	private String nameInter;
	  @Column(length =50,name = "percentage_HSC")  
	private String percentageInter;
	  @Column(length =50,name = "year_HSC")
	private String yearInter;
	  @Column(length =50,name = "board_HSC")  
	private String boardInter;
	 //details of  Graduation
	  @Column(length =200,name = "Grad")
	private String nameGraduation;
	  @Column(length =50,name = "percentage_Grad")
	private String percentageGraduation;
	  @Column(length =50,name = "year_Grad")
	private String yearGraduation;
	  @Column(length =50,name = "board_Grad")
	private String boardGraduation;
	  @OneToOne
	  @JoinColumn(name = "user_id")
	  private User user;
}
