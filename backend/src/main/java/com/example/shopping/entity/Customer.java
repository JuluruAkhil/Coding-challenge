package com.example.shopping.entity;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.*;

@Entity
@Table(name="customers")
public class Customer {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id")
    private Integer id;

    @NotNull
    @Column(name="name")
    private String name;

    @NotNull
    @Column(name="balance")
    private double balance;

    @NotNull
    @Column(name="score")
    private double score;

    @NotNull
    @Column(name="email")
    private String email;

    public double getScore() {
        return score;
    }

    public Customer() {
    }

    public Customer(Integer id, String name, double balance, double score, String email) {
        this.id = id;
        this.name = name;
        this.balance = balance;
        this.score = score;
        this.email = email;
    }

    public void setScore(double score) {
        this.score = score;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
