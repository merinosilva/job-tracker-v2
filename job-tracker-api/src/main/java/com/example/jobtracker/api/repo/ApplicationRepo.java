package com.example.jobtracker.api.repo;

import com.example.jobtracker.api.entity.Application;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "application", path = "application")
public interface ApplicationRepo extends CrudRepository<Application, Long> {
}
