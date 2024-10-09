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
@Table(name = "account", schema = "phimhay")
public class Account {
    @Id
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "password")
    private String password;

    @Column(name = "email", length = 45)
    private String email;

}