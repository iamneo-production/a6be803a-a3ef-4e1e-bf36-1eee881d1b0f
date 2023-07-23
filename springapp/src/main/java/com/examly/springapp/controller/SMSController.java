package com.examly.springapp.controller;

import org.springframework.web.bind.annotation.RestController;
import javax.annotation.PostConstruct;

@RestController
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
