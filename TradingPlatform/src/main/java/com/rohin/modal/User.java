package com.rohin.modal;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.rohin.domain.USER_ROLE;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {
    @Id               //determines  unique identifier for id variable
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private String fullName;
    private String email;

    //password will be only writable with this annotation - on client side password won't appear
    @JsonProperty(access= JsonProperty.Access.WRITE_ONLY)
    private String password;

    @Embedded
    private TwoFactorAuth twoFactorAuth = new TwoFactorAuth();

    private USER_ROLE role = USER_ROLE.ROLE_CUSTOMER;
}
