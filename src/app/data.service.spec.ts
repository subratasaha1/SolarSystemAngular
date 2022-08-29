import { TestBed,waitForAsync,inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        DataService
      ],
    });
    service = TestBed.get(DataService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it(`should all solar stars`, waitForAsync(inject([HttpTestingController, DataService],
    (httpClient: HttpTestingController, dataService: DataService) => {
      const postItem = [
        {
            "id": "lune",
            "name": "La Lune",
            "englishName": "Moon",
            "isPlanet": false,
            "discoveredBy": "",
            "discoveryDate": "",
            
        },
        {
          "id": "phobos",
          "name": "Phobos",
          "englishName": "Phobos",
          "isPlanet": false,
          "discoveredBy": "Asaph Hall",
          "discoveryDate": "12/08/1877",
          }
      ];

      dataService.GetAllSolarBodies(1)
        .subscribe((posts: any) => {
          expect(posts.length).toBe(2);
        });
      let req = httpMock.expectOne('https://api.le-systeme-solaire.net/rest/bodies?page=1,10?data=name,englishName,discoveredBy,discoveryDate,isPlanet,id');
      expect(req.request.method).toBe("GET");
      req.flush(postItem);
      httpMock.verify();
    })));

    it(`should specific solar star`, waitForAsync(inject([HttpTestingController, DataService],
      (httpClient: HttpTestingController, dataService: DataService) => {
        const postItem = [
          {
              "id": "lune",
              "name": "La Lune",
              "englishName": "Moon",
              "isPlanet": false,
              "moons": null,
              "semimajorAxis": 384400,
              "perihelion": 363300,
              "aphelion": 405500,
              "eccentricity": 0.0549,
              "inclination": 5.145,
              "mass": {
              "massValue": 7.346,
              "massExponent": 22
              },
              "vol": {
              "volValue": 2.1968,
              "volExponent": 10
              },
              "density": 3.344,
              "gravity": 1.62,
              "escape": 2380,
              "meanRadius": 1737,
              "equaRadius": 1738.1,
              "polarRadius": 1736,
              "flattening": 0.0012,
              "dimension": "",
              "sideralOrbit": 27.3217,
              "sideralRotation": 655.728,
              "aroundPlanet": {
              "planet": "terre",
              "rel": "https://api.le-systeme-solaire.net/rest/bodies/terre"
              },
              "discoveredBy": "",
              "discoveryDate": "",
              "alternativeName": "",
              "axialTilt": 6.68,
              "avgTemp": 0,
              "mainAnomaly": 0,
              "argPeriapsis": 0,
              "longAscNode": 0,
              "bodyType": "Moon",
              "rel": "https://api.le-systeme-solaire.net/rest/bodies/lune"
          }
        ];
  
        dataService.GetSolarBodyDetailById("lune")
          .subscribe((posts: any) => {
            expect(posts.length).toBe(1);
          });
        let req = httpMock.expectOne('https://api.le-systeme-solaire.net/rest/bodies/lune');
        expect(req.request.method).toBe("GET");
        req.flush(postItem);
        httpMock.verify();
      })));
});
