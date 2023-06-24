package com.ae_crms_t18.crms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.ae_crms_t18.crms.model.Ticket;

public interface TicketRepository extends JpaRepository<Ticket, Long> {
}