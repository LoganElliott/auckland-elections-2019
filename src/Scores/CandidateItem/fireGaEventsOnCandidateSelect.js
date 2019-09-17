import ReactGA from 'react-ga';

export const fireGaEventsOnCandidateSelect = (type, candidate) => {
  ReactGA.event({
    category: `Candidate-Select`,
    action: `${type}_${candidate.surname.trim()}_${candidate.firstName.trim}`
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
