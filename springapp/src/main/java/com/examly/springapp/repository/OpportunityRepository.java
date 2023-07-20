package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.model.Opportunity;

public interface OpportunityRepository extends JpaRepository<Opportunity,Long>{
    
}

