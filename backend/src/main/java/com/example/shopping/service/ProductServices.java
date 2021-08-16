package com.example.shopping.service;

import com.example.shopping.entity.Product;
import com.example.shopping.repository.ProductRepository;
import org.aspectj.weaver.patterns.PerObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServices {

    @Autowired
    private ProductRepository productRepo;

    public Product getProductById(Integer id){
        return productRepo.findById(id).get();
    }
    public List<Product> getAllProducts(){
        return productRepo.findAll();
    }

}
