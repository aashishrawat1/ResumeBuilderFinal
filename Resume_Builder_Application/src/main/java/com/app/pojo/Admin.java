package com.app.pojo;

import javax.persistence.Column;
import javax.persistence.Entity;
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
@Table(name = "admin_table")
public class Admin extends BaseEntity{

	@Column(length = 30,unique = true)
	private String email;
	@Column(length = 50)
	private String password;
}

