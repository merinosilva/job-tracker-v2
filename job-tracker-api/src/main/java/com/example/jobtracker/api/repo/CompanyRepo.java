package com.example.jobtracker.api.repo;

import com.example.jobtracker.api.entity.Company;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "company", path = "company")
public interface CompanyRepo extends CrudRepository<Company, Long> {
}
