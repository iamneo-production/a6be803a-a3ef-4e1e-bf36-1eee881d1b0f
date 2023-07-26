package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.RestController;
import javax.annotation.PostConstruct;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "https://8081-fadbdaaeeabdaaefeedabbcfeaeaadbdbabf.project.examly.io")
public class SMSController {

    static int sms_count;
    @PostConstruct
    public void init() {
        sms_count = 4;
    }

    public int smsCount(){
        return sms_count;
    }
}
