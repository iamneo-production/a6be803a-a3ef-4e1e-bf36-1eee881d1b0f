package com.springapp.backend.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.springapp.backend.model.Ticket;
public interface TicketRepository extends JpaRepository<Ticket, Long> {}
