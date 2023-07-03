//Sale: id, name, customer_id, opportunity_id, amount, date, notes
package com.examly.springapp.model;

import java.time.LocalDateTime;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="sale")
public class Sale {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name="customer_id",referencedColumnName = "id")
    @JsonIgnoreProperties({"purchase_history","communication_history"})
    private Customer customer;

    @ManyToOne
    @JoinColumn(name="opportunity_id",referencedColumnName = "id")
    @JsonIgnoreProperties({"customer"})
    private Opportunity opportunity;
    
    private Double amount;
    private LocalDateTime date;
    private String notes;

    
    @PrePersist
    public void onSave(){
        LocalDateTime currenDateTime=LocalDateTime.now();
        this.date=currenDateTime;
    }
}
