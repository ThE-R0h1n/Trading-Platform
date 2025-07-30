package com.rohin.service.Wallet;

import com.rohin.modal.Order;
import com.rohin.modal.User;
import com.rohin.modal.Wallet;

public interface WalletService {
    Wallet getUserWallet(User user);
    Wallet addBalance(Wallet wallet,Long money);
    Wallet findWalletById(Long id) throws Exception;
    Wallet walletToWalletTransfer(User sender , Wallet receiverWallet , Long amount) throws Exception;

    Wallet payOrderPayment(Order order , User user) throws Exception;
}
