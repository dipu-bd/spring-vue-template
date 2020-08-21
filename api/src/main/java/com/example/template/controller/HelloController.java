package com.example.template.controller;

import com.example.template.manager.HelloManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.NameNotFoundException;

@CrossOrigin
@RestController
@RequestMapping(value = "/api")
public class HelloController {
    private final Logger log = LoggerFactory.getLogger(getClass());

    private final HelloManager manager;

    @Autowired
    public HelloController(HelloManager manager) {
        this.manager = manager;
    }

    @RequestMapping(value = "/ping")
    public ResponseEntity<?> requestPing() {
        return ResponseEntity.ok("pong");
    }

    @GetMapping(value = "/say/hello")
    public ResponseEntity<?> sayHello(@RequestParam("name") String name) throws NameNotFoundException {
        log.info("Hello requested by {}", name);
        String result = manager.sayHello(name);
        return ResponseEntity.ok(result);
    }
}
