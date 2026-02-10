package com.example.demo.service;

import com.example.demo.Entity.Message;
import com.example.demo.dto.MessageDto;
import com.example.demo.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MessageService {
    private final MessageRepository messageRepository;

    public Message savemessage(MessageDto dto){
        Message message = Message.builder()
                .name(dto.getName())
                .email(dto.getEmail())
                .message(dto.getMessage())
                .build();
        return messageRepository.save(message);
    }

}
