export class CityService{
    cities = ['benguluru' , 'mumbai' , 'chennai' , 'new delhi'];
    getCities() {
        return this.cities;
    }
    addCity(city : string) {
        this.cities.push(city);
    }
}