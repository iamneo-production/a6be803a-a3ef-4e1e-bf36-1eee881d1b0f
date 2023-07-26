package com.examly.springapp.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Customer;
import com.examly.springapp.repository.CustomerRepository;
@Service
public class CustomerService {
    @Autowired
    CustomerRepository customerRepository;
    public boolean addCustomer(Customer newCustomer) {
        customerRepository.save(newCustomer);
        return true;
    }
    public Customer getCustomerById(Long customerId){
        return customerRepository.findById(customerId).orElse(null);
        
    }
    public List<Customer> getCustomer() {
        return customerRepository.findAll();
    }
    public Customer updateCustomer(Long customerId,Customer updatedCustomer) {
        Customer customer=customerRepository.findById(customerId).orElse(null);
        if(customer==null) {return null;}
        Optional.ofNullable(updatedCustomer.getEmail())
            .ifPresent(customer::setEmail);
        Optional.ofNullable(updatedCustomer.getName())
            .ifPresent(customer::setName);
        Optional.ofNullable(updatedCustomer.getAddress())
            .ifPresent(customer::setAddress);
        Optional.ofNullable(updatedCustomer.getPhone())
            .ifPresent(customer::setPhone);
        Optional.ofNullable(updatedCustomer.getCommunicationHistory())
            .ifPresent(customer::setCommunicationHistory);
        Optional.ofNullable(updatedCustomer.getPurchaseHistory())
            .ifPresent(customer::setPurchaseHistory);  
        customerRepository.save(customer);
        return customer;
    }
    public String deleteCustomerById(Long customerId) {
        Customer customer=customerRepository.findById(customerId).orElse(null);
        if(customer==null) {return "Customer not Found";}
        customerRepository.deleteById(customerId);
        return "Customer Deleted Successfully";
    }
}