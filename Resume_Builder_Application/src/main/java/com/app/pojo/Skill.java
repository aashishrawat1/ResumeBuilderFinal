package com.app.pojo;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

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
@Table(name = "skill_table")
public class Skill extends BaseEntity{
	 @Type(type = "text")
     private String objective;
     @Column(length =200)
	 private String skill;
     
     @ManyToOne
     @JoinColumn(name = "user_id")
     private User user;
}

