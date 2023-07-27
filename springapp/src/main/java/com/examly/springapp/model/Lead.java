package com.examly.springapp.model;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="leads")
public class Lead {
    @Id
    private Long id;
    private String name;
    private String email;
    private String phone;
    private String source;
    private String status;
    private String notes;
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
    public String getSource() {
        return source;
    }
    public void setSource(String source) {
        this.source = source;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getNotes() {
        return notes;
    }
    public void setNotes(String notes) {
        this.notes = notes;
    }
    public Lead() {}
    public Lead(Long id, String name, String email, String phone, String source, String status, String notes) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.source = source;
        this.status = status;
        this.notes = notes;
    }
}