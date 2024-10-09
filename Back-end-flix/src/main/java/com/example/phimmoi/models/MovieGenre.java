package com.example.phimmoi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "movie_genres", schema = "phimhay")
public class MovieGenre {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_movie")
    private Movie idMovie;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_genres")
    private Genres idGenres;

}