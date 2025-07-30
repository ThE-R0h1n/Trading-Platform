package com.rohin.service.PaymentDetail;

import com.rohin.modal.PaymentDetails;
import com.rohin.modal.User;

public interface PaymentDetailService {

    public PaymentDetails addPaymentDetails(String accountNumber,
                                            String accountHolderName,
                                            String ifsc,
                                            String bankName,
                                            User user);

    public PaymentDetails getUserPaymentDetails(User user);




}
