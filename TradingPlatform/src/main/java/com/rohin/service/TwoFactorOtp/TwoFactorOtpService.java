package com.rohin.service.TwoFactorOtp;

import com.rohin.modal.TwoFactorOTP;
import com.rohin.modal.User;

public interface TwoFactorOtpService {

    TwoFactorOTP createTwoFactorOtp(User user , String otp , String jwt);

    TwoFactorOTP findByUser(Long userId);

    TwoFactorOTP findById(String id);

    boolean verifyTwoFactorOtp(TwoFactorOTP twoFactorOTP , String otp);

    void deleteTwoFactorOtp( TwoFactorOTP twoFactorOTP);
}
