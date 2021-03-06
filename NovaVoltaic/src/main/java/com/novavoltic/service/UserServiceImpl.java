package com.novavoltic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.novavoltic.dao.UserRepository;
import com.novavoltic.entity.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepo;
	
	// createing user
	@Override
	public User createUser(User user)  throws Exception{
		
		User local = this.userRepo.findByUsername(user.getUsername());
		if(local!=null)
		{
			System.out.println("User is already Exits");
			throw new Exception("User Already Registered");
		}else {
			// user creation
			local = this.userRepo.save(user);
			
		}
		return local;
	}

	//getting User by username
	@Override
	public User getUser(String username) {
		return this.userRepo.findByUsername(username);
	}

	
}
