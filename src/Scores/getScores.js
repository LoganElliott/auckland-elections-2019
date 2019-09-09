import { scoresEndpoint } from '../Contants/endpoints';

export const getScores = async query => {
  const headers = new Headers();

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'POST');
  headers.append('Content-Type', 'application/json');

  const requestInit = {
    headers,
    method: 'GET'
  };

  const request = new Request(`${scoresEndpoint}/?${query}`, requestInit);

  const response = await fetch(request);
  return response.json();
};
