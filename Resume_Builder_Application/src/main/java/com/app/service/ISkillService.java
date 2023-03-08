package com.app.service;

import java.util.List;
import com.app.pojo.Skill;

public interface ISkillService {
	public Skill saveSkill(Skill detail,Long userId);
	public List<Skill> getAllDetails();
}
