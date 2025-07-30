package com.rohin.repository;

import com.rohin.modal.VerificationCode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VerificationCodeRepository extends JpaRepository<VerificationCode , Long> {

    public VerificationCode findByUserId(Long userId);
}
