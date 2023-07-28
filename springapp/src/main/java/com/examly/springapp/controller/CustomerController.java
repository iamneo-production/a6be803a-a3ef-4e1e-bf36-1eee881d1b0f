package com.examly.springapp.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.examly.springapp.model.Customer;
import com.examly.springapp.service.CustomerService;
@RestController
public class CustomerController {
    @Autowired
    CustomerService customerService;
    @GetMapping(value="/customer")
    public List<Customer> getCustomer(){
        return customerService.getCustomer();
    }
    @GetMapping(value="/customer/{id}")
    public Customer getCustomerById(@PathVariable("id")Long customerId){
        return customerService.getCustomerById(customerId);
    }
    @PostMapping(value="/customer")
    public boolean addCustomer(@RequestBody Customer newCustomer){
        return customerService.addCustomer(newCustomer);
    }
    @PutMapping(value="/customer/{id}")
    public Customer updateCustomer(@PathVariable("id")Long customerId,@RequestBody Customer updatedCustomer){
        return customerService.updateCustomer(customerId,updatedCustomer);
    }
    @DeleteMapping(value="/customer/{id}")
    public String deleteCustomerById(@PathVariable("id") Long customerId){
        return customerService.deleteCustomerById(customerId);
    }
}