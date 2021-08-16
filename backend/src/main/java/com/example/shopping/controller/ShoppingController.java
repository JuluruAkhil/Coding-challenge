package com.example.shopping.controller;

import com.example.shopping.entity.*;
import com.example.shopping.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
public class ShoppingController {

    @Autowired
    private ShoppingCartServices cartService;

    @Autowired
    private CustomerServices customerService;

    @Autowired
    private ProductServices productServices;

    @Autowired
    private OrderServices orderServices;


    //check customer
    @GetMapping("/dbkudos/login/{email}")
    public Customer checkCustomer(@PathVariable("email") String email){
        return customerService.getCustomerByEmail(email);
    }

    // Get customer by id
    @GetMapping("/dbkudos/customers/{customer_id}")
    public Customer getCustomer(@PathVariable("customer_id") Integer id) {
        return customerService.getCustomerById(id);
    }

    //Get all products from database //DONE
    @GetMapping("/dbkudos/products")
    public List<Product> getAllProductsFromDatabse() {
        return productServices.getAllProducts();
    }

    //Gett product from database by productId //DONE
    @GetMapping("/dbkudos/products/{product_id}")
    public Product getAllProductsFromDatabse(@PathVariable("product_id") Integer productId) {
        return productServices.getProductById(productId);
    }

    //Get All products from cart //DONE
    @GetMapping("/dbkudos/cart/{customer_id}")
    public List<CartItem> showShoppingCart(@PathVariable("customer_id") Integer id) {
        Customer customer = customerService.getCustomerById(id);
        return cartService.listCartItems(customer);
    }

    //Add product to cart //DONE
    @PostMapping("/dbkudos/cart/add")
    public CartItem addProductToCart(@RequestBody CartItem cartItem) {
        if (cartItem.getQuantity() > 0) {
            return cartService.addProduct(cartItem);
        } else {
            return null;
        }
    }

    //Update quantity of product added in cart//DONE
    //if product already exits in cart then quantity is updated for it
    @PostMapping("/dbkudos/cart/update/{customer_id}/{product_id}/{quantity}")
    public String updateQuantity(@PathVariable("customer_id") Integer customerId,
                                 @PathVariable("product_id") Integer productId,
                                 @PathVariable("quantity") Integer quantity) {
        if (quantity > 0) {
            Customer customer = customerService.getCustomerById(customerId);
            return cartService.updateQuantity(productId, quantity, customer);
        } else {
            return "Quantity cannot be updated";
        }
    }

    //remove product from cart //DONE
    @PostMapping("/dbkudos/cart/remove/{customer_id}/{product_id}")
    public String removeProductFromCart(@PathVariable("customer_id") Integer customerId,
                                        @PathVariable("product_id") Integer productId) {

        return cartService.removeProduct(productId, customerId);
    }

    //save orders


    @PostMapping("/dbkudos/checkout/{customer_id}")
    public String checkout(@PathVariable("customer_id") Integer customerId) {
        //get all produycts from cart for customer
        Customer customer = customerService.getCustomerById(customerId);
        List<CartItem> cartItems = cartService.listCartItems(customer);
        if(cartItems.isEmpty()){
            return "Cart is Empty. Cannot order.";
        }
        else {

            double total_amount = 0.0;
            long millis = System.currentTimeMillis();

            String order_date = String.valueOf(new Date(millis));
            String order_time = String.valueOf(new Time(millis));
            ;
            for (CartItem cartItem : cartItems) {
                total_amount += cartItem.getSubtotal();
            }
            if (customer.getBalance() >= total_amount) {
                for (CartItem cartItem : cartItems) {
                    orderServices.createOrder(cartItem.getCustomer(),
                            cartItem.getProduct(),
                            cartItem.getQuantity(),
                            cartItem.getProduct().getPrice(),
                            order_date,
                            order_time);

                }
                double newBalance = customer.getBalance()-total_amount;
                customerService.updateBalanceById(customerId, newBalance);
                double newScore=customer.getScore()+total_amount;
                customerService.updateCustomerScore(customerId,newScore);
                cartService.removeAllProducts(customerId);
                return "Order successfull";

            } else {
                return "Order Cancelled.";
            }
        }
    }

    //get leaderboard
    @GetMapping("/dbkudos/leaderboard")
    public List<Customer> getLeaderboardSortedByScore() {
        return customerService.getLeaderboard();
    }

    //get all orders for customer
    @GetMapping("/dbkudos/orders/{customer_id}")
    public List<Order> getAllOrders(@PathVariable("customer_id") Integer customerId) {
        return orderServices.getAllOrdersByCustomerId(customerId);
    }
}