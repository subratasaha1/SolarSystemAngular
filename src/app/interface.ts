export interface SolarBodies
{
    bodies:SolarBody[];
    filtered: number;
    total: 287;
}
export interface SolarBody {
    id: string;
    name: string;
    englishName: string;
    isPlanet:boolean;
    semimajorAxis:number;
    perihelion:number;
    aphelion:number;
    eccentricity:number;
    inclination:number;
    density: number;
    gravity: number;
    escape: number;
    meanRadius: number;
    equaRadius: number;
    polarRadius: number;
    flattening: number;
    dimension: String;
    sideralOrbit: number;
    sideralRotation: number;
    discoveredBy:String
    discoveryDate: String;
    alternativeName: String;
    axialTilt: number;
    avgTemp: number;
    mainAnomaly: number;
    argPeriapsis: number;
    longAscNode: number;
    bodyType: String
    moons: Moon[];
    mass:Mass;
    vol: Vol;
    aroundPlanet:AroundPlanet;
}

export interface Moon {
    moon: string;
    rel: string;
}

export interface Mass {
    massValue: number;
    massExponent: number;
}
export interface Vol{
    volValue: number;
    volExponent: number;
}
export interface AroundPlanet{
    planet: String;
    rel: String;
}
export interface Options {
    orderBy: string;
    orderDir: 'asc' | 'desc';
    search: string;
    size: number;
    page: number;
}


