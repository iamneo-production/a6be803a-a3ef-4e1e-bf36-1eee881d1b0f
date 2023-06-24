package com.springapp.backend.dao;
import java.util.List;
import com.springapp.backend.model.Ticket;
public interface TicketDAO {
    List<Ticket> getAllTickets();
    Ticket saveTicket(Ticket ticket);
    Ticket getTicketById(Long id);
    void deleteTicket(Ticket ticket);
}
