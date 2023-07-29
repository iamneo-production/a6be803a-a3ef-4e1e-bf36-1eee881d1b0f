package com.examly.springapp.DTO;

import com.examly.springapp.enumeration.UserRoles;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SignUpDTO {
    private String name;
    private String email;
    private UserRoles roles;
    private String password;
    private String conformPassword;
}

