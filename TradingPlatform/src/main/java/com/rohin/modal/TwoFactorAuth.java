package com.rohin.modal;

import com.rohin.domain.VerificationType;
import lombok.Data;

@Data
public class TwoFactorAuth {
    private boolean isEnabled= false;
    private VerificationType sendTo;
}
