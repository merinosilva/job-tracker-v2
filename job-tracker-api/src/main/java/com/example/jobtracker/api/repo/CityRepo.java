package com.example.jobtracker.api.repo;

import com.example.jobtracker.api.entity.City;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "city", path = "city")
public interface CityRepo extends CrudRepository<City, Long> {
}
