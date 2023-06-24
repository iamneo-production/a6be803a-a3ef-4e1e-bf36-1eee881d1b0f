package com.springapp.backend.service.impl;
import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.stereotype.Service;
import com.springapp.backend.dao.TicketDAO;
import com.springapp.backend.dto.TicketResponseDTO;
import com.springapp.backend.exception.TicketNotFoundException;
import com.springapp.backend.model.Ticket;
import com.springapp.backend.service.TicketService;
@Service
public class TicketServiceImpl implements TicketService {
    private final TicketDAO ticketDAO;
    public TicketServiceImpl(TicketDAO ticketDAO) {
        this.ticketDAO = ticketDAO;
    }
    @Override
    public List<TicketResponseDTO> getAllTickets() {
        List<Ticket> tickets = ticketDAO.getAllTickets();
        return tickets.stream()
                .map(this::mapTicketToResponseDTO)
                .collect(Collectors.toList());
    }
    @Override
    public TicketResponseDTO createTicket(Ticket ticket) {
        Ticket savedTicket = ticketDAO.saveTicket(ticket);
        return mapTicketToResponseDTO(savedTicket);
    }
    @Override
    public TicketResponseDTO getTicketById(Long id) {
        Ticket ticket = ticketDAO.getTicketById(id);
        if (ticket == null) {
            throw new TicketNotFoundException("Ticket not found with id: " + id);
        }
        return mapTicketToResponseDTO(ticket);
    }
    @Override
    public TicketResponseDTO updateTicket(Long id, Ticket ticket) {
        Ticket existingTicket = ticketDAO.getTicketById(id);
        if (existingTicket == null) {
            throw new TicketNotFoundException("Ticket not found with id: " + id);
        }
        existingTicket.setSubject(ticket.getSubject());
        existingTicket.setDescription(ticket.getDescription());
        existingTicket.setStatus(ticket.getStatus());
        existingTicket.setAssignedTo(ticket.getAssignedTo());
        existingTicket.setUpdatedAt(LocalDateTime.now());
        Ticket updatedTicket = ticketDAO.saveTicket(existingTicket);
        return mapTicketToResponseDTO(updatedTicket);
    }
    @Override
    public boolean deleteTicket(Long id) {
        Ticket ticket = ticketDAO.getTicketById(id);
        if (ticket == null) {
            throw new TicketNotFoundException("Ticket not found with id: " + id);
        }
        ticketDAO.deleteTicket(ticket);
        return true;
    }
    private TicketResponseDTO mapTicketToResponseDTO(Ticket ticket) {
        TicketResponseDTO responseDTO = new TicketResponseDTO();
        responseDTO.setId(ticket.getId());
        responseDTO.setCustomerId(ticket.getCustomerId());
        responseDTO.setSubject(ticket.getSubject());
        responseDTO.setDescription(ticket.getDescription());
        responseDTO.setStatus(ticket.getStatus());
        responseDTO.setAssignedTo(ticket.getAssignedTo());
        responseDTO.setCreatedAt(ticket.getCreatedAt());
        responseDTO.setUpdatedAt(ticket.getUpdatedAt());
        return responseDTO;
    }
}
