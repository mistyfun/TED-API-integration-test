package com.example.backend.tedapi;

import com.example.backend.tedapi.SearchRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@Service
public class SearchService {

    private final String apiUrl = "https://api.ted.europa.eu/v3/notices/search";

    @Autowired
    private RestTemplate restTemplate;

    public String search(SearchRequest searchRequest) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<SearchRequest> requestEntity = new HttpEntity<>(searchRequest, headers);

        ResponseEntity<String> response = restTemplate.exchange(
                apiUrl,
                HttpMethod.POST,
                requestEntity,
                String.class
        );

        return response.getBody();
    }
}
