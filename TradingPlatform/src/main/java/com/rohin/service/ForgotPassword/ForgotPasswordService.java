package com.rohin.service.ForgotPassword;

import com.rohin.domain.VerificationType;
import com.rohin.modal.ForgotPasswordToken;
import com.rohin.modal.User;

public interface ForgotPasswordService {

    ForgotPasswordToken createToken(User user , String id, String otp, VerificationType verificationType,
                                    String sendTo);

    ForgotPasswordToken findById(String id);

    ForgotPasswordToken findByUser(Long userId);

    void deleteToken(ForgotPasswordToken token);

}
