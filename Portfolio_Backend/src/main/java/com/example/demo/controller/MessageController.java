package com.example.demo.controller;

import com.example.demo.Entity.Message;
import com.example.demo.dto.MessageDto;
import com.example.demo.service.MessageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/message")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class MessageController {
    private final MessageService messageService;

    @PostMapping
    public ResponseEntity<Message> saveMessage(@RequestBody MessageDto dto){
Message saveMessage = messageService.savemessage(dto);
return new ResponseEntity<>(saveMessage, HttpStatus.CREATED);
    }
}
