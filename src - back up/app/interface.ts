export interface SolarBodies
{
    bodies:SolarBody[];
    filtered: number;
    total: number;
}
export interface SolarBody {
    id: string;
    name: string;
    englishName: string;
    discoveredBy: string;
    alternativeName: string;
}

export interface Moon {
    moon: string;
    rel: string;
}

export interface Mass {
    massValue: 0;
    massExponent: 0;
}
export interface Vol{
    volValue: number;
    volExponent: number;
}
export interface AroundPlanet{
    planet: String;
    rel: String;
}
export interface Response {
    bodies: SolarBody[];
    filtered: number;
    total: number;
}

export interface Options {
    orderBy: string;
    orderDir: 'asc' | 'desc';
    search: string,
    size: number,
    page: number;
}



