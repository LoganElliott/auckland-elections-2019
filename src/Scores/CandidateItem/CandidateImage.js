import React from 'react';
import ReactImageFallback from 'react-image-fallback';
import { candidateImagesRoute } from '../../Contants/routes';

export const CandidateImage = ({ candidate }) => {
  const candidateImageUrl = () => {
    const firstName = candidate.firstName.toLowerCase().replace(/[^a-z]+/, '');

    const lastName = candidate.surname.toLowerCase().replace(/[^a-z]+/, '');

    return `${firstName}${lastName}.jpg`;
  };

  return (
    <ReactImageFallback
      height={175}
      width={175}
      src={`${process.env.PUBLIC_URL}
         ${candidateImagesRoute}/${candidateImageUrl(candidate)}`}
      fallbackImage={`${candidateImagesRoute}/missing.jpg`}
    />
  );
};
