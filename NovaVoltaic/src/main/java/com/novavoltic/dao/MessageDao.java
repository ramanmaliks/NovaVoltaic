package com.novavoltic.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.novavoltic.entity.Message;

public interface MessageDao extends JpaRepository<Message, Integer> {

}
