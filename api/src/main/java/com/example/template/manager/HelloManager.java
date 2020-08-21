package com.example.template.manager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.naming.NameNotFoundException;

@Service
public class HelloManager {
    private final Logger log = LoggerFactory.getLogger(getClass());

    public String sayHello(String name) throws NameNotFoundException {
        if (name == null || name.isEmpty()) {
            throw new NameNotFoundException("I don't know your name!");
        }
        log.info("Saying hello to {}", name);
        return "Hello " + name;
    }
}
