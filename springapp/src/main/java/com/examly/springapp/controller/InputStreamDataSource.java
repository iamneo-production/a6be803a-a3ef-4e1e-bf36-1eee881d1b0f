// package com.examly.springapp.controller;

// import javax.activation.DataSource;
// import java.io.ByteArrayInputStream;
// import java.io.IOException;
// import java.io.InputStream;
// import java.io.OutputStream;

// public class InputStreamDataSource implements DataSource, javax.activation.DataSource {

//     private final InputStream inputStream;
//     private final String name;

//     public InputStreamDataSource(InputStream inputStream, String name) {
//         this.inputStream = inputStream;
//         this.name = name;
//     }

//     @Override
//     public InputStream getInputStream() throws IOException {
//         return new ByteArrayInputStream(inputStream.readAllBytes());
//     }

//     @Override
//     public OutputStream getOutputStream() throws IOException {
//         throw new UnsupportedOperationException("Read-only data");
//     }

//     @Override
//     public String getContentType() {
//         return "application/octet-stream";
//     }

//     @Override
//     public String getName() {
//         return name;
//     }
// }
