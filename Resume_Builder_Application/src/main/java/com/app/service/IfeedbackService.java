package com.app.service;

import java.util.List;

import com.app.pojo.Feedback;

public interface IfeedbackService {
public Feedback saveFeedback(Feedback detail,Long userId);
List<Feedback> getAllFeedBack();
}
