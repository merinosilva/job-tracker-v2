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
    listAllOf : ( countryRef : string ) => axios.get<{_embedded : {city : City[] }}>( countryRef + '/cities').then(responseBody).then((data)=> data._embedded.city)
}

const Companies = {
    listAllOf : ( cityRef : string ) => axios.get<{_embedded : {company : Company[] }}>( cityRef + '/companies').then(responseBody).then((data)=> data._embedded.company)
}

const Applications = {
    listAllOf : ( companyRef : string ) => axios.get<{_embedded : {application : Application[] }}>( companyRef + '/applications').then(responseBody).then((data)=> data._embedded.application)
}

const agent = {
    Countries,
    Cities,
    Companies,
    Applications
}

export default agent;