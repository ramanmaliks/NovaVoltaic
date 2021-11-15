package com.novavoltic.service;

import java.util.List;

import com.novavoltic.entity.Message;

public interface MessageService {

	public List<Message> getMessages();

	public Message addMessage(Message message);
	
}
