package com.example.shopping.service;

import com.example.shopping.entity.Customer;
import com.example.shopping.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CustomerServices {

    @Autowired
    private CustomerRepository customerRepo;

    public Customer getCustomerById(Integer id){
        return customerRepo.findById(id).get();
    }
    public Customer getCustomerByEmail(String email){
        return customerRepo.getCustomerByEmail(email);
    }
    public String updateBalanceById(Integer customerId,double newBalance)
    {
         customerRepo.updateBalance(customerId,newBalance);
         return "Balance updated.";
    }
    public void updateCustomerScore(Integer customerId,double newScore){
        customerRepo.updateScore(customerId,newScore);
    }
    public List<Customer> getLeaderboard(){
        return customerRepo.getLeaders();
    }
}
