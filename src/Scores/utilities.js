import qs from 'qs';
import history from '../history';

const isInViewport = elem => {
  const bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const scrollToCandidate = () => {
  console.log('cdm');
  const query = qs.parse(history.location.search);
  if (history.location.search.includes(`&candidate=`)) {
    console.log('has can');
    const candidateBox = document.getElementById(query.candidate);
    if (candidateBox && !isInViewport(candidateBox)) {
      console.log('has ele');
      candidateBox.scrollIntoView();
    }
  }
};

export const removeCandidateFromQuery = () => {
  const indexOfQuery = history.location.search.indexOf('&candidate');
  if (indexOfQuery > 0) {
    const search = history.location.search.substring(0, indexOfQuery);

    history.push(history.location.pathname + search);
  }
};

export const addCandidateToQuery = (type, candidateSurname) => {
  removeCandidateFromQuery();
  const search = `${history.location.search}&candidate=${type}-${candidateSurname}`;
  history.push(history.location.pathname + search);
};
