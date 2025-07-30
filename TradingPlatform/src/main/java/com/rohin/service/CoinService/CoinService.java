package com.rohin.service.CoinService;

import com.rohin.modal.Coin;

import java.util.List;

public interface CoinService {

    List<Coin> getCoinlist(int page) throws Exception;

    String getMarketChart(String coinId, int days) throws Exception;

    String getCoinDetails(String coinId) throws Exception;

    Coin findById(String coinId) throws Exception; // Id that comes from database

    String searchCoin(String keyword) throws Exception;

    String getTop50CoinByMarketCapRank() throws Exception;

    String getTrendingCoins() throws Exception;

}
