package com.novavoltic.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.novavoltic.dao.MessageDao;
import com.novavoltic.entity.Message;
@Service
public class MessageServiceImpl implements MessageService{

	@Autowired
	MessageDao messageDao;
	
	
	@Override
	public List<Message> getMessages() {
		
		return this.messageDao.findAll();
	}


	@Override
	public Message addMessage(Message message) {
		return this.messageDao.save(message);
		
	}

	
	

}
