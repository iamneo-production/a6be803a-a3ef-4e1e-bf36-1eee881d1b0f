package com.examly.springapp.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import com.examly.springapp.model.Lead;
import com.examly.springapp.service.LeadService;
@RestController
public class LeadController {
    @Autowired
    LeadService leadService;
    @GetMapping(value="/lead")
    public List<Lead> getLead(){
        return leadService.getLead();
    }
    @GetMapping(value="/lead/{id}")
    public Lead getLeadById(@PathVariable("id")Long leadId){
        return leadService.getLeadById(leadId);
    }
    @PostMapping(value="/lead")
    @ResponseStatus(HttpStatus.OK)
    public boolean addLead(@RequestBody Lead newLead){
        return leadService.addLead(newLead);
    }
    @PutMapping(value="/lead/{id}")
    public String updateLead(@PathVariable("id")Long leadId,@RequestBody Lead updatedLead){
        return leadService.updateLead(leadId,updatedLead);
    }
    @DeleteMapping(value="/lead/{id}")
    @ResponseStatus(HttpStatus.OK)
    public boolean deleteLeadById(@PathVariable("id") Long leadId){
        return leadService.deleteLeadById(leadId);
    }
}