package com.rohin.modal;

import com.rohin.domain.OrderStatus;
import com.rohin.domain.OrderType;
import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private User user;

    @Column(nullable = false)       //  means  THIS FIELD IS REQUIRED
    private OrderType orderType;

    @Column(nullable = false)
    private BigDecimal price;

    private LocalDateTime timeStamp = LocalDateTime.now();

    private OrderStatus status;

    @OneToOne(mappedBy = "order" , cascade = CascadeType.ALL)
    private OrderItem orderItem;
}
