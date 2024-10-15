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
@Table(name = "category", schema = "flix")
public class Category {
    @Id
    @Column(name = "id_category", nullable = false)
    private Integer id;

    @Column(name = "category", length = 20)
    private String category;

}