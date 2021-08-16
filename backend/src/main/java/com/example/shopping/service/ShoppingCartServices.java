package com.example.shopping.service;

import com.example.shopping.entity.CartItem;
import com.example.shopping.entity.Customer;
import com.example.shopping.entity.Product;
import com.example.shopping.repository.CartItemRepository;
import com.example.shopping.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShoppingCartServices {

    @Autowired
    private CartItemRepository cartRepo;

    @Autowired
    private ProductRepository productRepo;



    public List<CartItem> listCartItems(Customer customer){
        return cartRepo.findByCustomer(customer);
    }

    public CartItem addProduct(CartItem cartItem){
        Integer addedquantity;

        Product product=productRepo.findById(cartItem.getProduct().getId()).get();

        CartItem cartItem1=cartRepo.findByCustomerAndProduct(cartItem.getCustomer(),product);

        if(cartItem1!=null){
            //product already in cart
            addedquantity=cartItem1.getQuantity()+cartItem.getQuantity();
            cartItem1.setQuantity(addedquantity);
            return cartRepo.save(cartItem1);
        }
        else{
            return cartRepo.save(cartItem);
        }

    }

    public String updateQuantity(Integer productId,Integer quantity,Customer customer){


        cartRepo.updateQuantity(quantity,productId,customer.getId());
        return "Quantity updated.";
    }

    public String removeProduct(Integer productId,Integer customerId){
        cartRepo.deleteByCustomerAndProduct(customerId,productId);
        return "Item removed from cart";
    }

    public String removeAllProducts(Integer customerId){
        cartRepo.deleteCart(customerId);
        return "Cart is empty for customerId:"+customerId;
    }

}
