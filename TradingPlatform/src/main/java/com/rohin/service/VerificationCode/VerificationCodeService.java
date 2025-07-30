package com.rohin.service.VerificationCode;

import com.rohin.domain.VerificationType;
import com.rohin.modal.User;
import com.rohin.modal.VerificationCode;

public interface VerificationCodeService {

    VerificationCode sendVerificationCode(User user, VerificationType verificationType);

    VerificationCode getVerificationCodeById(Long id) throws Exception;

    VerificationCode getVerificationCodeByUser(Long UserId);

    void deleteVerificationCodeById(VerificationCode verificationCode);
}
