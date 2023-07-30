import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './EmailAndSmsAnalytics.css';

const EmailAndSmsAnalytics = () => {
    const [emailCount, setEmailCount] = useState(0);
    const [smsCount, setSmsCount] = useState(0);

    useEffect(() => {
        fetchEmailCount();
        fetchSMSCount();
    }, []);

    const fetchEmailCount = async () => {
        try {
<<<<<<< HEAD
            const response = await axios.get('https://8080-dfeaeacbeeefeedabbcfeaeaadbdbabf.project.examly.io/analytics/emailCount');
=======
            const response = await axios.get('https://8080-cdfadaffefeedabbcfeaeaadbdbabf.project.examly.io/analytics/emailCount');
>>>>>>> 5c0006b9ec96ad8f44c859f17bb14343daaf6817
            setEmailCount(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchSMSCount = async () => {
        try {
<<<<<<< HEAD
            const response = await axios.get('https://8080-dfeaeacbeeefeedabbcfeaeaadbdbabf.project.examly.io/analytics/smsCount');
=======
            const response = await axios.get('https://8080-cdfadaffefeedabbcfeaeaadbdbabf.project.examly.io/analytics/smsCount');
>>>>>>> 5c0006b9ec96ad8f44c859f17bb14343daaf6817
            setSmsCount(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="emailsms-container" style={{ display: 'flex' }}>
            <div className="analytics-box" style={{marginTop:'70px'}}>
            <p>Emails Today<span className="blueBox">{emailCount}</span></p>
            </div>
            <div className="analytics-box" style={{marginTop:'170px'}}>
            <p>SMS Today<span className="blueBox">{smsCount}</span></p>
            </div>
        </div>
    );
}
export default EmailAndSmsAnalytics;