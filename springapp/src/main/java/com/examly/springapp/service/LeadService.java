package com.examly.springapp.service;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.examly.springapp.model.Lead;
import com.examly.springapp.repository.LeadRepository;
import org.springframework.dao.EmptyResultDataAccessException;
@Service
public class LeadService {
    @Autowired
    LeadRepository leadRepository;
    public boolean addLead(Lead newLead) {
        leadRepository.save(newLead);
        return true;
    }
    public Lead getLeadById(Long leadId){
        return leadRepository.findById(leadId).orElse(null);
    }
    public List<Lead> getLead() {
        return leadRepository.findAll();
    }
    public String updateLead(Long leadId,Lead updatedLead) {
        Lead lead=leadRepository.findById(leadId).orElse(null);
        if(lead==null){return "Lead not Found";}
        Optional.ofNullable(updatedLead.getEmail())
            .ifPresent(lead::setEmail);
        Optional.ofNullable(updatedLead.getName())
            .ifPresent(lead::setName);
        Optional.ofNullable(updatedLead.getPhone())
            .ifPresent(lead::setPhone);
        Optional.ofNullable(updatedLead.getSource())
            .ifPresent(lead::setSource);
        Optional.ofNullable(updatedLead.getStatus())
            .ifPresent(lead::setStatus);
        Optional.ofNullable(updatedLead.getNotes())
            .ifPresent(lead::setNotes);
        leadRepository.save(lead);
        return "Lead Updated Successfully";
    }
    public boolean deleteLeadById(Long leadId) {
        try {
            leadRepository.deleteById(leadId);
            return true;
        } catch (EmptyResultDataAccessException ex) {
            return false;
        }
    }
}