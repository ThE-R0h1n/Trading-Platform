package com.rohin.repository;

import com.rohin.modal.Coin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CoinRepository  extends JpaRepository<Coin, String> {

}
