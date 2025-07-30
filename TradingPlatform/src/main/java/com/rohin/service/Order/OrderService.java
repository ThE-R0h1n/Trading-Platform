package com.rohin.service.Order;

import com.rohin.domain.OrderType;
import com.rohin.modal.Coin;
import com.rohin.modal.Order;
import com.rohin.modal.OrderItem;
import com.rohin.modal.User;

import java.util.List;

public interface OrderService {

    Order createOrder(User user , OrderItem orderItem, OrderType orderType);

    Order getOrderById(Long orderId) throws Exception;

    List<Order> getAllOrderOfUser (Long userId , OrderType OrderType , String assetSymbol);

    Order processOrder(Coin coin , double quantity , OrderType orderType, User user) throws Exception;


}
