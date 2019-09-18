import ReactGA from 'react-ga';

export const fireGaEventsOnCandidateSelect = (type, candidate) => {
  const name = `${candidate.surname.trim()}_${candidate.firstName.trim()}`;
  ReactGA.event({
    category: `Candidate-Select`,
    action: `${type}_${name}`
  });
};

export const fireGaEventsOnGetVotingInformation = (
  votingInformation,
  category
) => {
  ReactGA.event({
    category,
    action: `Ward`,
    label: votingInformation.ward
  });

  ReactGA.event({
    category,
    action: `LocalBoard`,
    label: votingInformation.localBoard
  });

  if (votingInformation.subdivision) {
    ReactGA.event({
      category,
      action: `subdivision`,
      label: votingInformation.subdivision
    });
  }
};
