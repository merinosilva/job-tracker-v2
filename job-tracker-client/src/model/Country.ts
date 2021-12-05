export interface Country{
    name: string,
    weather: string,
    economy: string,
    jobOpportunities: string,
    specialNotes: string
    _links? : { self : { href : string}}
}