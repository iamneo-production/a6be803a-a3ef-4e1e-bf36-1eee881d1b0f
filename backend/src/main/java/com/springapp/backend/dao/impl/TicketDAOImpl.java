package com.springapp.backend.dao.impl;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Repository;
import com.springapp.backend.dao.TicketDAO;
import com.springapp.backend.model.Ticket;
import com.springapp.backend.repository.TicketRepository;
@Repository
public class TicketDAOImpl implements TicketDAO {
    private final TicketRepository ticketRepository;
    public TicketDAOImpl(TicketRepository ticketRepository) {
        this.ticketRepository = ticketRepository;
    }
    @Override
    public List<Ticket> getAllTickets() {
        return ticketRepository.findAll();
    }
    @Override
    public Ticket saveTicket(Ticket ticket) {
        return ticketRepository.save(ticket);
    }
    @Override
    public Ticket getTicketById(Long id) {
        Optional<Ticket> optionalTicket = ticketRepository.findById(id);
        return optionalTicket.orElse(null);
    }
    @Override
    public void deleteTicket(Ticket ticket) {
        ticketRepository.delete(ticket);
    }
}
