package com.app.pojo;

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
@Table(name = "Hobbies_table")
public class Hobbies extends BaseEntity{
	@Column(length =100)
	private String hobbies;
	
	@ManyToOne
	@JoinColumn(name = "user_id")
	private User user;
}
