package com.example.shopping.repository;

import com.example.shopping.entity.Customer;
import com.example.shopping.entity.Order;
import com.example.shopping.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Repository
public interface OrderRepository extends JpaRepository<Order,Integer> {


    @Query("SELECT " +
            "new com.example.shopping.entity.Order(o.id,o.customer,o.amount," +
            "o.product,o.quantity,o.order_date,o.order_time)" +
                " FROM Order o WHERE o.customer.id=?1")
    public List<Order> findAllOrdersByCustomerId(Integer customerId);

    @Query(value="INSERT INTO orders (customer_id,amount,product_id,quantity,order_date,order_time) VALUES (" +
            ":customerId,:sub_amount,:productId,:quantity,:date,:time)",nativeQuery = true)
    @Modifying
    public void saveOrder(@Param("customerId") Integer customerId,
                          @Param("productId") Integer productId,
                          @Param("quantity") int quantity,
                          @Param("sub_amount") double sub_amount,
                          @Param("date") String date,
                          @Param("time") String time);


}
