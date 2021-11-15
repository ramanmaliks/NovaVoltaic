package com.novavoltic.service;

import com.novavoltic.entity.User;


public interface UserService {

	//creating user
	public User createUser(User user) throws Exception;
	
	//get User by username
	public User getUser(String username);
}
