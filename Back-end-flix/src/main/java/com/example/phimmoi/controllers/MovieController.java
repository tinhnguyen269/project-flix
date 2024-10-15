package com.example.phimmoi.controllers;
import com.example.phimmoi.models.Movie;
import com.example.phimmoi.services.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class MovieController {
    @Autowired
    private IMovieService movieService;

    @GetMapping("/movies")
    public ResponseEntity<List<Movie>> getAllMovies() {
        return new ResponseEntity<>(movieService.finAllMovies(), HttpStatus.OK);
    }


}
