const API_BASE = 'http://localhost:3000';

export async function fetchMedia(media) {
  const res = await fetch(`${API_BASE}/${media}`);
  return res.json();
}

export async function fetchMediaById(media, id) {
  const res = await fetch(`${API_BASE}/${media}/${id}`);
  return res.json();
}
