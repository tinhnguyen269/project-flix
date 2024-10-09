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
@Table(name = "category", schema = "phimhay")
public class Category {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "title", length = 100)
    private String title;

}