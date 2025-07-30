package com.rohin.request;

import com.rohin.domain.OrderType;
import lombok.Data;

@Data
public class CreateOrderRequest {

    private String coinId;

    private double quantity;

    private OrderType orderType;

}
