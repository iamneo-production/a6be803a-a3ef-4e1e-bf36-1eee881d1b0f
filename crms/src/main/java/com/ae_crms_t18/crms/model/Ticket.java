package com.ae_crms_t18.crms.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "tickets")
public class Ticket {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "customer_id")
    private Long customer_id;

    @Column(name = "subject")
    private String subject;

    @Column(name = "description")
    private String description;

    @Column(name = "status")
    private String status;

    @Column(name = "assigned_to")
    private String assigned_to;

    @Column(name = "created_at")
    private LocalDateTime created_at;

    @Column(name = "updated_at")
    private LocalDateTime updated_at;

    public Ticket() {}

    public Ticket(Long customer_id, String subject, String description, String status, String assigned_to, LocalDateTime created_at, LocalDateTime updated_at) {
        this.customer_id = customer_id;
        this.subject = subject;
        this.description = description;
        this.status = status;
        this.assigned_to = assigned_to;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getcustomer_id() {
        return customer_id;
    }

    public void setcustomer_id(Long customer_id) {
        this.customer_id = customer_id;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getassigned_to() {
        return assigned_to;
    }

    public void setassigned_to(String assigned_to) {
        this.assigned_to = assigned_to;
    }

    public LocalDateTime getcreated_at() {
        return created_at;
    }

    public void setcreated_at(LocalDateTime created_at) {
        this.created_at = created_at;
    }

    public LocalDateTime getupdated_at() {
        return updated_at;
    }

    public void setupdated_at(LocalDateTime updated_at) {
        this.updated_at = updated_at;
    }
}
