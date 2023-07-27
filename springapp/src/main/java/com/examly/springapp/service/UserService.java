package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.examly.springapp.DTO.AuthenticationResponse;
import com.examly.springapp.DTO.LoginDTO;
import com.examly.springapp.DTO.SignUpDTO;
import com.examly.springapp.config.JwtService;
import com.examly.springapp.enumeration.UserRoles;
import com.examly.springapp.model.User;
import com.examly.springapp.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService{
    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Autowired
    private final JwtService jwtService;

    private final AuthenticationManager authenticationManager;

    public List<User> getAllUser() {
        return userRepository.findAll();
    }
    
    public User getUserById(Long userId){
        return userRepository.findById(userId).orElse(null);
    }   
    
    public List<User> getUserByRoles(UserRoles[] role){
        return userRepository.findByRolesIn(role);
    }

    public AuthenticationResponse register(SignUpDTO request) {
        var user= User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .conformPassword(passwordEncoder.encode(request.getConformPassword()))
                .roles(request.getRoles())
                .build();
        userRepository.save(user);

        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder().token(jwtToken).build();
    }


    public AuthenticationResponse authenticate(LoginDTO request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        var user =userRepository.findByEmail(request.getEmail()).orElseThrow();
        var jwtToken = jwtService.generateToken(user);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    public String updateUserById(Long userId,User updatedUser) {
        User user=userRepository.findById(userId).orElse(null);
        if(user==null){
            return "User not Found";
        }
        Optional.ofNullable(updatedUser.getName())
            .ifPresent(user::setName);

        Optional.ofNullable(updatedUser.getEmail())
            .ifPresent(user::setEmail);

        Optional.ofNullable(updatedUser.getRoles())
            .ifPresent(user::setRoles);

        Optional.ofNullable(updatedUser.getPassword())
            .ifPresent(user::setPassword);

        Optional.ofNullable(updatedUser.getConformPassword())
            .ifPresent(user::setConformPassword);    
        
        if(!user.getPassword().equals(user.getConformPassword())){
            return "Your password and conformPassword doesnt Looks same";
        }

        userRepository.save(user);
        return "User Updated Successfully";   
    }

    public String deleteUserById(Long userId){
        userRepository.deleteById(userId);
        return "Account Deleted Successfully";
    }
}