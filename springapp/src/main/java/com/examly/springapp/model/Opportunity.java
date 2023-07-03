package com.examly.springapp.model;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.examly.springapp.enumeration.OpportunityStatus;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="opportunity")
public class Opportunity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @ManyToOne
    @JoinColumn(name="customer_id",referencedColumnName="id")
    @JsonIgnoreProperties({"purchase_history","communication_history"})
    private Customer customer;

    @Enumerated(EnumType.STRING)
    private OpportunityStatus status;
    
    private Double value;

    @Column(name="close_date")
    private LocalDateTime closeDate;

    private String notes; 
}
