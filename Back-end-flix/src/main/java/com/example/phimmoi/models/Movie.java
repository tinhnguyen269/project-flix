package com.example.phimmoi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "movie", schema = "flix")
public class Movie {
    @Id
    @Column(name = "id_movie", nullable = false)
    private Integer id;

    @Column(name = "title", length = 50)
    private String title;

    @Column(name = "rating")
    private Double rating;

    @Column(name = "duration", nullable = false)
    private Integer duration;

    @Lob
    @Column(name = "quantity", nullable = false)
    private String quantity;

    @Column(name = "description", length = 500)
    private String description;

    @Column(name = "image", length = 500)
    private String image;

    @OneToMany
    @JoinColumn(name = "id_movie")
    private List<MovieCategory> categories;

    @OneToMany
    @JoinColumn(name = "id_movie")
    private List<ShortScreen> shortScreens;

}