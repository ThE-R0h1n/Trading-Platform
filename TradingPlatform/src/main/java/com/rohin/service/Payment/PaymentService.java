package com.rohin.service.Payment;

import com.razorpay.RazorpayException;
import com.rohin.domain.PaymentMethod;
import com.rohin.modal.PaymentOrder;
import com.rohin.modal.User;
import com.rohin.response.PaymentResponse;
import com.stripe.exception.StripeException;

public interface PaymentService {

    PaymentOrder createOrder(User user, Long amount , PaymentMethod paymentMethod);

    PaymentOrder getPaymentOrderById(Long id) throws Exception;

    Boolean proceedPaymentOrder(PaymentOrder paymentOrder , String paymentId) throws RazorpayException;

    PaymentResponse createRazorpayPaymentLink(User user , Long amount ,  Long orderId) throws RazorpayException;

    PaymentResponse createStripePaymentLink(User user , Long amount , Long orderId) throws StripeException;
}
