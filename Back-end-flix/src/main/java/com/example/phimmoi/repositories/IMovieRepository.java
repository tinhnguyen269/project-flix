package com.example.phimmoi.repositories;


import com.example.phimmoi.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IMovieRepository extends JpaRepository<Movie,Integer> {

}


