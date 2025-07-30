package com.rohin.service.Withdrawal;

import com.rohin.modal.User;
import com.rohin.modal.Withdrawal;

import java.util.List;

public interface WithdrawalService {

    Withdrawal requestWithdrawal(Long amount , User user);

    Withdrawal proceedWithdrawal(long withdrawalId , boolean accept) throws Exception;

    List<Withdrawal> getUserWithdrawalHistory(User user);

    List<Withdrawal> getAllWithdrawalRequest();

}
