package com.example.shopping.repository;

import com.example.shopping.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.example.shopping.entity.CartItem;
import com.example.shopping.entity.Customer;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface CartItemRepository extends JpaRepository<CartItem,Integer> {

    public List<CartItem> findByCustomer(Customer customer);

    @Query("DELETE FROM CartItem c WHERE c.customer.id=?1 AND " +
            "c.product.id=?2")
    @Modifying
    public void deleteByCustomerAndProduct(Integer customerId,Integer productId);

    @Query("UPDATE CartItem c SET c.quantity=?1 WHERE c.product.id=?2 " +
            " AND c.customer.id=?3")
    @Modifying
    public void updateQuantity(Integer quantity,Integer customerId,Integer productId);


    public CartItem findByCustomerAndProduct(Customer customer, Product product);

    @Query("DELETE FROM CartItem c WHERE c.customer.id=?1")
    @Modifying
    public void deleteCart(Integer customerId);
}
