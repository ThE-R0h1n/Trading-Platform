package com.rohin.repository;

import com.rohin.modal.PaymentDetails;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentDetailsRepository extends JpaRepository<PaymentDetails ,Long> {

    PaymentDetails findByUserId(Long userId);

}
