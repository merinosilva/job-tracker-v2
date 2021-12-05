export interface City{
    name: string,
    weather: string,
    economy: string,
    jobOpportunities: string,
    _links? : { self : { href : string}}
}