package com.rohin.repository;

import com.rohin.modal.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

            User findByEmail(String email);

}
