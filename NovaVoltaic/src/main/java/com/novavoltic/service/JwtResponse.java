package com.novavoltic.service;

public class JwtResponse {
String token;

public String getToken() {
	return token;
}

public void setToken(String token) {
	this.token = token;
}

public JwtResponse(String token) {
	super();
	this.token = token;
}

public JwtResponse() {
	super();
	
}

}
