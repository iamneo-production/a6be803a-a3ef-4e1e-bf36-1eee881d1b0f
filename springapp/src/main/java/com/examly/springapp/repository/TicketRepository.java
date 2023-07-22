package com.examly.springapp.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.examly.springapp.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket,Long>{
    List<Ticket> findByCustomerId(Long customerId);
    
    long countByStatus(TicketStatus status);
}
