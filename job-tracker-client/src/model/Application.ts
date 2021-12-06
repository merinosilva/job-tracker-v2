export interface Application{
    position : string,
    jobUrl : string,
    requirements : string,
    salary : string,
    _links? : { self : { href : string}}

}