package com.springapp.backend.dto;
import java.time.LocalDateTime;
public class TicketResponseDTO {
    private Long id;
    private Long customerId;
    private String subject;
    private String description;
    private String status;
    private String assignedTo;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    public TicketResponseDTO() {}
    public TicketResponseDTO(Long id, Long customerId, String subject, String description, String status, String assignedTo, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.id = id;
        this.customerId = customerId;
        this.subject = subject;
        this.description = description;
        this.status = status;
        this.assignedTo = assignedTo;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getCustomerId() {
        return customerId;
    }
    public void setCustomerId(Long customerId) {
        this.customerId = customerId;
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
    public String getAssignedTo() {
        return assignedTo;
    }
    public void setAssignedTo(String assignedTo) {
        this.assignedTo = assignedTo;
    }
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
