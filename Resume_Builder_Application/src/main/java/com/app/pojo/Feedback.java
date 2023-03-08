package com.app.pojo;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

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
@Table(name = "feedback_table")
public class Feedback extends BaseEntity {
 
	@Type(type = "text")
	private String text;

	@OneToOne
	@JoinColumn(name = "user_id")
	private User user;
}