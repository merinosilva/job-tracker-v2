package com.example.jobtracker.api.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class City {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "country_id")
    private Country country;
    @Column(length = 500)
    private String name;
    @Column(length = 2000)
    private String weather;
    @Column(length = 2000)
    private String economy;
    @Column(length = 2000)
    private String jobOpportunities;
    @Column(length = 2000)
    private String specialNotes;
    @OneToMany(mappedBy = "city")
    private List<Company> companies;

    public City() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWeather() {
        return weather;
    }

    public void setWeather(String weather) {
        this.weather = weather;
    }

    public String getEconomy() {
        return economy;
    }

    public void setEconomy(String economy) {
        this.economy = economy;
    }

    public String getJobOpportunities() {
        return jobOpportunities;
    }

    public void setJobOpportunities(String jobOpportunities) {
        this.jobOpportunities = jobOpportunities;
    }

    public String getSpecialNotes() {
        return specialNotes;
    }

    public void setSpecialNotes(String specialNotes) {
        this.specialNotes = specialNotes;
    }

    public List<Company> getCompanies() {
        return companies;
    }

    public void setCompanies(List<Company> companies) {
        this.companies = companies;
    }
}
