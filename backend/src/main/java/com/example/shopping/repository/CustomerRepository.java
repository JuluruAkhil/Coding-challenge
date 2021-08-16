package com.example.shopping.repository;

import com.example.shopping.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface CustomerRepository extends JpaRepository<Customer,Integer> {

    @Query("")
    public Customer getCustomerByEmail(String email);

    @Query("UPDATE Customer c SET c.balance=?2 WHERE c.id=?1")
    @Modifying
    public void updateBalance(Integer customerId,double newBalance);

    @Query("UPDATE Customer c SET c.score=?2 WHERE c.id=?1")
    @Modifying
    public void updateScore(Integer customerId,double new_score);

    @Query("SELECT new com.example.shopping.entity.Customer(c.id,c.name,c.balance,c.score,c.email) FROM Customer c ORDER BY c.score DESC")
    public List<Customer> getLeaders();
}
