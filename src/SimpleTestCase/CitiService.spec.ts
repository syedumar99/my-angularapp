import { CityService } from './CityService';

fdescribe('CityService', () => {
  let cityService : CityService;

  beforeEach(async () => {
    cityService = new CityService();
  });

  beforeEach(() => {

  });

  it('Array Test', () => {
    let a = [1 , 2 , 3];
    expect(a).toEqual([1 , 2 , 3]);
  });
  it('should check if specified cities are present in the array', () => {
    const cities = cityService.getCities();
    expect(cities).toContain('benguluru');
    expect(cities).toContain('mumbai');
  });
  it('should check if new city is added to the array', () => {
    const newCity = 'pune';
    cityService.addCity(newCity);
    expect(cityService.cities).toContain(newCity);
  });
});
