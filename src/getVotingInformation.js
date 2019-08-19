const baseEndpoint = 'https://auck-elec.herokuapp.com';
const apiEndpoint = `${baseEndpoint}/api`;
const infoEndpoint = `${apiEndpoint}/info`;

export const getVotingInformation = async addressId => {
  const headers = new Headers();

  headers.append('Access-Control-Allow-Origin', '*');
  headers.append('Access-Control-Allow-Methods', 'GET');
  headers.append('Content-Type', 'application/json');

  const requestInit = {
    headers,
    method: 'GET'
  };

  const request = new Request(`${infoEndpoint}/${addressId}`, requestInit);
  const response = await fetch(request);

  return response.json();
};
