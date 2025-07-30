package com.rohin.service.Watchlist;

import com.rohin.modal.Coin;
import com.rohin.modal.User;
import com.rohin.modal.Watchlist;

public interface WatchlistService {

    Watchlist findUserWatchlist(Long userId) throws Exception;
    Watchlist createWatchlist(User user);
    Watchlist findById(Long id) throws Exception;

    Coin addItemToWatchlist(Coin coin,User user) throws Exception;


}
