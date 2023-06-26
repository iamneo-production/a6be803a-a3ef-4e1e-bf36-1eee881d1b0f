package com.springapp.backend.service;
import java.util.List;
import com.springapp.backend.dto.TicketResponseDTO;
import com.springapp.backend.model.Ticket;
public interface TicketService {
    List<TicketResponseDTO> getAllTickets();
    TicketResponseDTO createTicket(Ticket ticket);
    TicketResponseDTO getTicketById(Long id);
    TicketResponseDTO updateTicket(Long id, Ticket ticket);
    boolean deleteTicket(Long id);
}
