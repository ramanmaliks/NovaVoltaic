# Problem statement
It's year 1945 and the Soviet forces need a network for co-ordinating on the war effort. We are tasked with creating an app which can aid the Sovient forces to oust the Axis power from their motherland. You are the Lead engineer selected to design and develop this application.

#Requirements
[Angular CLI](https://github.com/angular/angular-cli)
[POSTMAN](https://www.postman.com/downloads/)
[SPRING BOOT TOOLS SUITE : STS](https://spring.io/tools)
[Java 8](https://www.oracle.com/java/technologies/downloads/)
[Mysql 8](https://dev.mysql.com/downloads/mysql/)
[VSCODE](https://code.visualstudio.com/download)

# NovaVoltaic FrontEnd

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.1.

# NovaVoltaic BackEnd

This project was generated with [SPRING BOOT TOOLS SUITE : STS](https://spring.io/tools) using JAVA 8.

# NovaVoltaic Database

This project database was generated with [Mysql 8](https://dev.mysql.com/downloads/mysql/)

## Development server

### FRONTEND server 
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically load files.

### BACKEND
Run STS for a Tomcat server . `http://localhost:8080/message'. The app api will automatically loaded into memory. 

Installing
1. [Angular CLI](https://github.com/angular/angular-cli)
Angular CLI can be obtained from [Here](https://github.com/angular/angular-cli)
``` npm install -g @angular/cli ```
2. [POSTMAN](https://www.postman.com/downloads/)
Postman can be obtained from [Here](https://www.postman.com/downloads/)

3. [SPRING BOOT TOOLS SUITE : STS](https://spring.io/tools)
STS can be obtained from [Here](https://spring.io/tools)

4. [Java 8](https://www.oracle.com/java/technologies/downloads/)
Java can be obtained from [Here](https://www.oracle.com/java/technologies/downloads/)

5. [Mysql 8](https://dev.mysql.com/downloads/mysql/)
Java can be obtained from [Here](https://dev.mysql.com/downloads/mysql/)

6. [VSCODE](https://code.visualstudio.com/download)
Java can be obtained from [Here](https://code.visualstudio.com/download)

# Setup for FRONT PROJECT 
1. for installation Angular after downloa run at command prompt in projet folder
npm install -g @angular/cli

2. Creating Front project
After completing installation please create a new angular project using below command in SHELL at your desired folder
 ```ng new NovaVoltaicFrontEnd```
 
3. Copying files 
Download all the files from the github repository.

4. Running the server
at command prompt / SHELL at your project folder run below command
```ng serve```

5.Starting Project
at chrome browser visit `http://localhost:4200/`. From here you can surf the **Single Page Web Site**.
>note : backend project should be running before surfing

# Setup for BACKEND PROJECT
1. Creating Backend project
 After competing installation please create a new maven project using sts for spring boot with specified depencies mentioned.

 2. Copying Files
 Download all the files from the github repository.

 3. Running Server
 After completion of download, load sts and run the project.

 4. Starting Project.
 Tomacat Apache server at port 8080 will be loaded in the system. Exploring all the API End points.

 # Setup for MYSQL DB
 1. Run mysql from windows.

 2. enter password as root

 3. to create database in mysql by writing following command.
 ``` create database soviet ```
 
 # Using Postman
 1. To check API using postman.

 2. Run Postman in windows.

 3. to generate token goto url box 'http:\\localhost:8080\generate-token'

 4. Select `POST` method.

 5. for eg. if you have a user whose username is admin and passowrd is root, so in **body** section select json format and write the following
 ```{ 
     "username":"admin",
     "password":"root"
 } ```
 
 6. After send in Repsonse you will get token, copy it.

 7. to view all message in response box , so goto `http://localhost:8080/message/all`

 8. Select Get Method.

 9. in Headers create a Key, Value

 10. Key as Authorization

 11. value as `Bearer <token>`

 12. Send the request and you will see all the messages in the response box.


# Setting up STS Project
1. Add the following dependecies in pom.xml
```1. spring-boot-starter-data-jpa <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-data-jpa -->
2. spring-boot-starter-web <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-web -->
3. mysql-connector-java <!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
4. spring-boot-starter-security <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-security -->
5. jjwt <!-- https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt --> 
6. jaxb-api<!-- https://mvnrepository.com/artifact/javax.xml.bind/jaxb-api -->```

2. Add these in Application.properties file
```server.port = 8080
server.servlet.context-path=/message

spring.datasource.url=jdbc:mysql://localhost:3306/soviet
spring.datasource.username=root
spring.datasource.password=root

spring.jpa.hibernate.ddl-auto=update```


# Adding Components , service, module, class in Angular CLI v.13
Way to add Angular Material io
material.angular.io
c:\<project folder> ng add @angular/material
1.API reference for Angular Material button
import {MatButtonModule} from '@angular/material/button';

2.API reference for Angular Material snack-bar
import {MatSnackBarModule} from '@angular/material/snack-bar';

3. API reference for Angular Material toolbar
import {MatToolbarModule} from '@angular/material/toolbar';

4. API reference for Angular Material icon
import {MatIconModule} from '@angular/material/icon';

5. API reference for Angular Material form-field
import {MatFormFieldModule} from '@angular/material/form-field';

6. API reference for Angular Material input
import {MatInputModule} from '@angular/material/input';

7. forms in Angular
import { FormsModule } from '@angular/forms';

8.Communicating with backend services using HTTP
import { HttpClientModule } from '@angular/common/http';

9.API reference for Angular Material card
import {MatCardModule} from '@angular/material/card';

10.Pagination for Angular
npm install ngx-pagination --save
import { NgxPaginationModule } from 'ngx-pagination';
"# NovaVoltaic" 
