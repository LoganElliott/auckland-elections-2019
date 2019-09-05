import { infoEndpoint } from './Contants/endpoints';

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

  const votingInformation = await response.json();

  return {
    ward: votingInformation.ward.replace(/ward/gi, '').trim(),
    localBoard: votingInformation.localBoard
      .replace(/local.*board/gi, '')
      .trim(),
    subdivision: votingInformation.subdivision
      .replace(/subdivision/gi, '')
      .trim()
  };
};
