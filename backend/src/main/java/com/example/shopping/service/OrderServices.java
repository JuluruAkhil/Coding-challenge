package com.example.shopping.service;

import com.example.shopping.entity.Customer;
import com.example.shopping.entity.Order;
import com.example.shopping.entity.Product;
import com.example.shopping.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderServices {

    @Autowired
    OrderRepository orderRepo;

    public Order createOrder(Order order){
        return orderRepo.save(order);
    }

    public List<Order> getAllOrdersByCustomerId(Integer customerId){
        return orderRepo.findAllOrdersByCustomerId(customerId);
    }
    public void createOrder(Customer customer,
                            Product product,
                            int quantity,
                            double sub_amount,
                            String date,
                            String time){
      //  Order newOrder=new Order(customer,sub_amount,product,quantity,date,time);
     //   orderRepo.save(newOrder);
       orderRepo.saveOrder(customer.getId(),
                product.getId(),quantity,sub_amount,date,time);
    }

}
