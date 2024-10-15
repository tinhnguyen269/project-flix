package com.example.phimmoi.services.impl;

import com.example.phimmoi.models.Movie;
import com.example.phimmoi.repositories.IMovieRepository;
import com.example.phimmoi.services.IMovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService implements IMovieService {

    @Autowired
    private IMovieRepository movieRepository;

    @Override
    public List<Movie> finAllMovies() {
        return movieRepository.findAll();
    }

}
