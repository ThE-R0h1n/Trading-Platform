package com.rohin.controller;

import com.razorpay.RazorpayException;
import com.rohin.domain.PaymentMethod;
import com.rohin.modal.PaymentOrder;
import com.rohin.modal.User;
import com.rohin.response.PaymentResponse;
import com.rohin.service.Payment.PaymentService;
import com.rohin.service.User.UserService;
import com.stripe.exception.StripeException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class PaymentController {

    @Autowired
    private UserService userService;

    @Autowired
    private PaymentService paymentService;


    @PostMapping("/api/payment/{paymentMethod}/amount/{amount}")
    public ResponseEntity<PaymentResponse> paymentHandler(
            @PathVariable PaymentMethod paymentMethod,
            @PathVariable Long amount,
            @RequestHeader("Authorization") String jwt) throws Exception , RazorpayException, StripeException {

        User user = userService.findUserProfileByJwt(jwt);

        PaymentResponse paymentResponse;

        PaymentOrder order = paymentService.createOrder(user , amount ,paymentMethod);

        if(paymentMethod.equals(PaymentMethod.RAZORPAY)){
            paymentResponse = paymentService.createRazorpayPaymentLink(user , amount , order.getId());
        }
        else{
            paymentResponse = paymentService.createStripePaymentLink(user , amount, order.getId());
        }
        return  new ResponseEntity<>(paymentResponse , HttpStatus.CREATED);
    }

}
