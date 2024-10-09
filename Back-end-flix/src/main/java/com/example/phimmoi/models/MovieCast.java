package com.example.phimmoi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "movie_cast", schema = "phimhay")
public class MovieCast {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_cast")
    private Cast idCast;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_movie")
    private Movie idMovie;

}