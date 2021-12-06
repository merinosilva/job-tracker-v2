import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Application } from "../model/Application";
import { City } from "../model/City";
import { Company } from "../model/Company";
import { Country } from "../model/Country";

export default class DataStore {
  countryList: Country[] = [];
  cityList: City[] = [];
  companyList: Company[] = [];
  applicationList: Application[] = [];

  editingCountry: Country = {
    name: "",
    weather: "",
    jobOpportunities: "",
    economy: "",
    specialNotes: "",
  };
  editingCity: City = {
    name: "",
    economy: "",
    jobOpportunities: "",
    weather: "",
  };
  editingCompany: Company = {
    name: "",
    businessArea: "",
    devPractices: "",
    keyNotes: "",
    keyTechnologies: "",
    website: "",
    youtubeChnl: "",
  };
  editingApplication: Application = {
    position: "",
    jobUrl: "",
    requirements: "",
    salary: "",
  };
  editingType = "";

  constructor() {
    makeAutoObservable(this);
  }

  loadCountryList = async () => {
    try {
      const result = await agent.Countries.listAll();
      this.setCountryList(result);
    } catch (error) {
      console.log(error);
    }
  };

  setCountryList = (list: Country[]) => {
    this.countryList = list;
  };

  setEditingCountry = (country: Country) => {
    this.editingCountry = country;
    this.cityList = [];
    this.editingType = "C";
    if (country._links !== undefined) {
      this.loadCityList();
    }
  };

  loadCityList = async () => {
    try {
      const result = await agent.Cities.listAllOf(
        this.editingCountry._links!.self.href
      );
      this.setCityList(result);
    } catch (error) {
      console.log(error);
    }
  };

  setCityList = (list: City[]) => {
    this.cityList = list;
  };

  setEditingCity = (city: City) => {
    this.editingCity = city;
    this.companyList = [];
    this.editingType = "T";
    if (city._links !== undefined) {
      this.loadCompanyList();
    }
  };

  loadCompanyList = async () => {
    try {
      const result = await agent.Companies.listAllOf(
        this.editingCity._links!.self.href
      );
      this.setCompanyList(result);
    } catch (error) {
      console.log(error);
    }
  };

  setCompanyList = (list: Company[]) => {
    this.companyList = list;
  };

  setEditingCompany = (commany: Company) => {
    this.editingCompany = commany;
    this.applicationList = [];
    this.editingType = "O";
    if (commany._links !== undefined) {
      this.loadApplicationList();
    }
  };

  loadApplicationList = async () => {
    try {
      const result = await agent.Applications.listAllOf(
        this.editingCompany._links!.self.href
      );
      this.setApplicationList(result);
    } catch (error) {
      console.log(error);
    }
  };

  setApplicationList = (list: Application[]) => {
    this.applicationList = list;
  };

  setEditingApplication = (application: Application) => {
    this.editingApplication = application;
    this.editingType = "A";
  };

  saveCountry = async (country: Country) => {
    if (this.editingCountry._links !== undefined) {
      try {
        const result = await agent.Countries.patch(
          country,
          this.editingCountry._links.self.href
        );
        this.setEditingCountry(result);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const result = await agent.Countries.post(country);
        this.setEditingCountry(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  saveCity = async (city: City) => {
    if (this.editingCity._links !== undefined) {
      try {
        const result = await agent.Cities.patch(
          city,
          this.editingCity._links.self.href
        );
        this.setEditingCity(result);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const result = await agent.Cities.post(city);
        await agent.Cities.put(result._links!.self.href, this.editingCountry._links!.self.href);
        this.setEditingCity(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  saveCompany = async (company: Company) => {
    if (this.editingCompany._links !== undefined) {
      try {
        const result = await agent.Companies.patch(
          company,
          this.editingCompany._links.self.href
        );
        this.setEditingCompany(result);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const result = await agent.Companies.post(company);
        await agent.Companies.put(result._links!.self.href, this.editingCity._links!.self.href);
        this.setEditingCompany(result);
      } catch (error) {
        console.log(error);
      }
    }
  };

  saveApplication = async (application: Application) => {
    if (this.editingApplication._links !== undefined) {
      try {
        const result = await agent.Applications.patch(
          application,
          this.editingApplication._links.self.href
        );
        this.setEditingApplication(result);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const result = await agent.Applications.post(application);
        await agent.Applications.put(result._links!.self.href, this.editingCompany._links!.self.href);
        this.setEditingApplication(result);
      } catch (error) {
        console.log(error);
      }
    }
  };
}
