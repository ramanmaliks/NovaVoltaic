package com.novavoltic.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.novavoltic.entity.User;

public interface UserRepository  extends JpaRepository<User, Integer>{

	public User findByUsername(String username);

}
