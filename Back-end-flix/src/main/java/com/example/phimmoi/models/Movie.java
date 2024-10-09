package com.example.phimmoi.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "movie", schema = "phimhay")
public class Movie {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "title", length = 245)
    private String title;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "img", length = 245)
    private String img;

    @Column(name = "trailer", length = 200)
    private String trailer;

    @Column(name = "link", length = 245)
    private String link;

}