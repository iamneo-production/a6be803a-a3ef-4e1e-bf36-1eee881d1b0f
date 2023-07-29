package com.examly.springapp.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import com.examly.springapp.DTO.AuthenticationResponse;
import com.examly.springapp.DTO.LoginDTO;
import com.examly.springapp.DTO.SignUpDTO;
import com.examly.springapp.enumeration.UserRoles;
import com.examly.springapp.model.User;
import com.examly.springapp.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@ComponentScan
public class UserController {

    @Autowired
    UserService userService;

    @GetMapping(value="/crm/user")
    public List<User> getAllUser(){
        return userService.getAllUser();
    }

    
    @GetMapping(value="/crm/user/roles")
    public List<User> getUser(@RequestParam("role") UserRoles[] role){
        return userService.getUserByRoles(role);
    }


    @GetMapping(value="/crm/user/{id}")
    public User getUser(@PathVariable("id")Long userId){
        return userService.getUserById(userId);
    }

    @PostMapping("/signUp")
    public AuthenticationResponse register(@RequestBody SignUpDTO request){
        return userService.register(request);

    }
    @PostMapping("/login")
    public AuthenticationResponse authenticate(@RequestBody LoginDTO request){
        return userService.authenticate(request);
    }

    @PutMapping(value="/crm/user/{id}")
    public String updateUserById(@PathVariable("id") Long userId,@RequestBody User updatedUser){
        return userService.updateUserById(userId,updatedUser);
    }

    @DeleteMapping(value="/crm/user/{id}")
    public String deleteUserById(@PathVariable("id") Long userId){
        return userService.deleteUserById(userId);
    }
}
