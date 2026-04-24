import { Place } from '../models/place';

const STORAGE_KEY = 'favorite-places';

function readStoredPlaces() {
  const raw = globalThis?.localStorage?.getItem(STORAGE_KEY);
  if (!raw) {
    return [];
  }

  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeStoredPlaces(places) {
  globalThis?.localStorage?.setItem(STORAGE_KEY, JSON.stringify(places));
}

export async function init() {
  const existing = readStoredPlaces();
  if (!Array.isArray(existing)) {
    writeStoredPlaces([]);
  }
}

export async function insertPlace(place) {
  const existing = readStoredPlaces();
  const id = Date.now().toString();

  existing.push({
    id,
    title: place.title,
    imageUri: place.imageUri,
    address: place.address,
    lat: place.location.lat,
    lng: place.location.lng,
  });

  writeStoredPlaces(existing);

  return { insertId: id };
}

export async function fetchPlaces() {
  const records = readStoredPlaces();

  return records.map(
    (dp) =>
      new Place(
        dp.title,
        dp.imageUri,
        {
          address: dp.address,
          lat: dp.lat,
          lng: dp.lng,
        },
        dp.id
      )
  );
}

export async function fetchPlaceDetails(id) {
  const records = readStoredPlaces();
  const dbPlace = records.find((item) => item.id === id);

  if (!dbPlace) {
    return null;
  }

  return new Place(
    dbPlace.title,
    dbPlace.imageUri,
    {
      lat: dbPlace.lat,
      lng: dbPlace.lng,
      address: dbPlace.address,
    },
    dbPlace.id
  );
}
