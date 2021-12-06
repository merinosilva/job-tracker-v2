import axios, { AxiosResponse } from 'axios';
import { Application } from '../model/Application';
import { City } from '../model/City';
import { Company } from '../model/Company';
import { Country } from '../model/Country';


const responseBody = <T> (response : AxiosResponse<T>) => response.data;

const Countries = {
    listAll : () => axios.get<{_embedded : {country : Country[] }}>('http://localhost:8080/api/country').then(responseBody).then((data)=> data._embedded.country),
    post : ( country : Country ) => axios.post<Country>('http://localhost:8080/api/country', country).then(responseBody),
    patch : ( country : Country, ref : string ) => axios.patch<Country>(ref, country).then(responseBody)
}

const Cities = {
    listAllOf : ( countryRef : string ) => axios.get<{_embedded : {city : City[] }}>( countryRef + '/cities').then(responseBody).then((data)=> data._embedded.city),
    post : ( city : City ) => axios.post<City>('http://localhost:8080/api/city', city).then(responseBody),
    patch : ( city : City, ref : string ) => axios.patch<City>(ref, city).then(responseBody),
    put : ( cityRef : string, countryRef : string) => axios.put( cityRef + '/country', countryRef, {headers:{'Content-Type': 'text/uri-list'}})
}

const Companies = {
    listAllOf : ( cityRef : string ) => axios.get<{_embedded : {company : Company[] }}>( cityRef + '/companies').then(responseBody).then((data)=> data._embedded.company),
    post : ( company : Company ) => axios.post<Company>('http://localhost:8080/api/company', company).then(responseBody),
    patch : ( company : Company, ref : string ) => axios.patch<Company>(ref, company).then(responseBody),
    put : ( companyRef : string, cityRef : string) => axios.put( companyRef + '/city', cityRef, {headers:{'Content-Type': 'text/uri-list'}})
}

const Applications = {
    listAllOf : ( companyRef : string ) => axios.get<{_embedded : {application : Application[] }}>( companyRef + '/applications').then(responseBody).then((data)=> data._embedded.application),
    post : ( application : Application ) => axios.post<Application>('http://localhost:8080/api/application', application).then(responseBody),
    patch : ( application : Application, ref : string ) => axios.patch<Application>(ref, application).then(responseBody),
    put : ( applicationRef : string, companyRef : string) => axios.put( applicationRef + '/company', companyRef, {headers:{'Content-Type': 'text/uri-list'}})
}

const agent = {
    Countries,
    Cities,
    Companies,
    Applications
}

export default agent;