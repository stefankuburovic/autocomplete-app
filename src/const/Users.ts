export const API_URL: string = 'https://jsonplaceholder.typicode.com/users';
export interface Users
{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    geo: GeoLocation;
    phone: string;
    website: string;
    company: Company;
}
interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}
interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}
interface GeoLocation {
    lat: string;
    lon: string;
}