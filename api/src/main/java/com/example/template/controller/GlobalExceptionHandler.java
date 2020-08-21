package com.example.template.controller;

import com.example.template.model.ErrorDetails;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.naming.NameNotFoundException;
import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    private final Logger log = LoggerFactory.getLogger(getClass());

    @ExceptionHandler(NameNotFoundException.class)
    public ResponseEntity<?> handleNoSuchElementException(NameNotFoundException ex,
                                                          @NonNull WebRequest request) {
        ErrorDetails details = new ErrorDetails(LocalDateTime.now(), ex.getMessage(),
                request.getDescription(false));
        return ResponseEntity.badRequest().body(details);
    }

    @Override
    @NonNull
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  @NonNull HttpHeaders headers,
                                                                  @NonNull HttpStatus status,
                                                                  @NonNull WebRequest request) {
        ErrorDetails details = new ErrorDetails(LocalDateTime.now(), ex.getMessage(),
                ex.getBindingResult().toString());
        return ResponseEntity.badRequest().body(details);
    }
}
