import IPGeolocationClient from "./IPGeolocationClient";

export const metadata = {
  title: "IP Geolocation Lookup | Find Location by IP Address | CyberTools",

  description:
    "Lookup any public IP address to find its country, city, region, coordinates and network information instantly using CyberTools free IP Geolocation tool.",

  keywords: [
    "ip geolocation",
    "ip lookup",
    "ip location",
    "find location by ip",
    "ip tracker",
    "ip address lookup",
    "geolocate ip",
    "public ip location",
  ],
};

export default function Page() {
  return <IPGeolocationClient />;
}