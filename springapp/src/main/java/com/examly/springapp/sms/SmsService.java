package com.examly.springapp.sms;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.stereotype.Component;
import org.springframework.util.MultiValueMap;


@Component
public class SmsService {


    private final String ACCOUNT_SID ="ACCOUNT_SID";

    private final String AUTH_TOKEN = "ac164474b42cb138a8a57fab88f9878a";

    private final String FROM_NUMBER = "+15735494529";



    public void send(SmsDTO sms) {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

        Message message = Message.creator(new PhoneNumber(sms.getPhone()), new PhoneNumber(FROM_NUMBER), sms.getMessage())
                .create();
        System.out.println("here is my id:"+message.getSid());// Unique resource ID created to manage this transaction

    }

    public void receive(MultiValueMap<String, String> smscallback) {
    }

}