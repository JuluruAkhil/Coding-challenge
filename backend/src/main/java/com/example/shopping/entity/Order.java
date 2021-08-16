package com.example.shopping.entity;

import com.sun.istack.NotNull;

import javax.persistence.*;


@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private Integer id;

    @NotNull
    @ManyToOne
    @JoinColumn(name="customer_id")
    private Customer customer;


    @NotNull
    @Column(name="amount")
    private double amount;

    @NotNull
    @ManyToOne
    @JoinColumn(name="product_id")
    private Product product;

    @NotNull
    @Column(name="quantity")
    private int quantity;

    @NotNull
    @Column(name="order_date")
    private String order_date;

    @NotNull
    @Column(name="order_time")
    private String order_time;

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getOrder_date() {
        return order_date;
    }

    public void setOrder_date(String order_date) {
        this.order_date = order_date;
    }

    public String getOrder_time() {
        return order_time;
    }

    public void setOrder_time(String order_time) {
        this.order_time = order_time;
    }

    public Order(Integer id, Customer customer, double amount,
                 Product product, int quantity, String order_date,String order_time) {
        this.id = id;
        this.customer = customer;
        this.amount = amount;
        this.product = product;
        this.quantity = quantity;
        this.order_date = order_date;
        this.order_time = order_time;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }


    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
