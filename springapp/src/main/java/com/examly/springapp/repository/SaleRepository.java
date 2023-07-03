package com.examly.springapp.repository;

import com.examly.springapp.model.Sale;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SaleRepository extends JpaRepository<Sale,Long> {
    List<Sale> findByCustomerId(Long customerId);
}
