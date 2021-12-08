package com.example.jobtracker.api.entity;

import javax.persistence.*;
import java.util.List;

@Entity
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "city_id")
    private City city;
    @Column(length = 500)
    private String name;
    @Column(length = 500)
    private String website;
    @Column(length = 500)
    private String youtubeChnl;
    @Column(length = 2000)
    private String businessArea;
    @Column(length = 2000)
    private String keyTechnologies;
    @Column(length = 2000)
    private String devPractices;
    @Column(length = 2000)
    private String keyNotes;
    @OneToMany(mappedBy = "company")
    private List<Application> applications;

    public Company() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website;
    }

    public String getYoutubeChnl() {
        return youtubeChnl;
    }

    public void setYoutubeChnl(String youtubeChnl) {
        this.youtubeChnl = youtubeChnl;
    }

    public String getBusinessArea() {
        return businessArea;
    }

    public void setBusinessArea(String businessArea) {
        this.businessArea = businessArea;
    }

    public String getKeyTechnologies() {
        return keyTechnologies;
    }

    public void setKeyTechnologies(String keyTechnologies) {
        this.keyTechnologies = keyTechnologies;
    }

    public String getDevPractices() {
        return devPractices;
    }

    public void setDevPractices(String devPractices) {
        this.devPractices = devPractices;
    }

    public String getKeyNotes() {
        return keyNotes;
    }

    public void setKeyNotes(String keyNotes) {
        this.keyNotes = keyNotes;
    }

    public List<Application> getApplications() {
        return applications;
    }

    public void setApplications(List<Application> applications) {
        this.applications = applications;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }
}
