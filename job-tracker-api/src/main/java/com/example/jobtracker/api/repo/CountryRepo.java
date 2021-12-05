package com.example.jobtracker.api.repo;

import com.example.jobtracker.api.entity.Country;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "country", path = "country")
public interface CountryRepo extends CrudRepository<Country, Long> {
}
