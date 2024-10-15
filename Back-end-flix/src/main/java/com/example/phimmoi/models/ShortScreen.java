package com.example.phimmoi.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "short_screen", schema = "flix")
public class ShortScreen {
    @Id
    @Column(name = "id_short_screen", nullable = false)
    private Integer id;

    @Column(name = "short_screen")
    private String shortScreen;


}