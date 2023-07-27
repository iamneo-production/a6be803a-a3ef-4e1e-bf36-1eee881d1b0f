package com.examly.springapp.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="Customer")
public class Customer {
    @Id
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String address;
    @Column
    private String[] purchaseHistory;
    @Column
    private String[] communicationHistory;
    public Customer() {}
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String[] getPurchaseHistory() {
        return purchaseHistory;
    }
    public void setPurchaseHistory(String[] purchaseHistory) {
        this.purchaseHistory = purchaseHistory;
    }
    public String[] getCommunicationHistory() {
        return communicationHistory;
    }
    public void setCommunicationHistory(String[] communicationHistory) {
        this.communicationHistory = communicationHistory;
    }
    public Customer(Long id, String name, String email, String phone, String address, String[] purchaseHistory, String[] communicationHistory) 
    {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.purchaseHistory = purchaseHistory;
        this.communicationHistory = communicationHistory;
    }
}
