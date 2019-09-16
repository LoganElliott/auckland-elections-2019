import React from 'react';
import ReactImageFallback from 'react-image-fallback';
import { candidateImagesRoute } from '../../Contants/routes';

export const CandidateImage = ({ candidate }) => {
  const candidateImageUrl = () => {
    const lowerCaseFirstName = candidate.firstName.toLowerCase();
    const firstName =
      lowerCaseFirstName.charAt(0).toUpperCase() + lowerCaseFirstName.slice(1);

    const lowerCaseLastName = candidate.surname.toLowerCase();
    const lastName =
      lowerCaseLastName.charAt(0).toUpperCase() + lowerCaseLastName.slice(1);

    return `${firstName}-${lastName}.jpg`;
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
