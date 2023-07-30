package com.examly.springapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
<<<<<<< HEAD
                .allowedOrigins("https://8081-dfeaeacbeeefeedabbcfeaeaadbdbabf.project.examly.io/")
=======
                .allowedOrigins("https://8081-cdfadaffefeedabbcfeaeaadbdbabf.project.examly.io")
>>>>>>> 5c0006b9ec96ad8f44c859f17bb14343daaf6817
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .exposedHeaders("Access-Control-Allow-Origin")
                .allowCredentials(true);
    }
}