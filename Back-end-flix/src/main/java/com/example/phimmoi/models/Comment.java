package com.example.phimmoi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "comment", schema = "phimhay")
public class Comment {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "time")
    private LocalDate time;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_account")
    private Account idAccount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_movie")
    private Movie idMovie;

}