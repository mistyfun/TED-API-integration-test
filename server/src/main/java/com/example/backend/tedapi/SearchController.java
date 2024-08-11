package com.example.backend.tedapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api.ted.europa.eu/v3")
@CrossOrigin(origins = "http://localhost:3000")
public class SearchController {
    @Autowired
    private final RestTemplate restTemplate;

    public SearchController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }
    @PostMapping("/notices/search")
    public ResponseEntity<String> search(@RequestBody SearchRequest request) {
        String url = "https://api.ted.europa.eu/v3/notices/search";
        String response = restTemplate.postForObject(url, request, String.class);
        return ResponseEntity.ok(response);
    }
    @GetMapping("/hello")
    public String hello() {
        return "Hello from Spring Boot!";
    }
}
