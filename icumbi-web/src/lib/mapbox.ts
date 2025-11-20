import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

const token = process.env.MAPBOX_ACCESS_TOKEN;

export const geocodingClient = token ? mbxGeocoding({ accessToken: token }) : null;
