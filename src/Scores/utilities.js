import qs from 'qs';
import React from 'react';
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';

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
  const query = qs.parse(history.location.search);
  if (history.location.search.includes(`&candidate=`)) {
    const candidateBox = document.getElementById(query.candidate);
    if (candidateBox && !isInViewport(candidateBox)) {
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

export const Sharing = ({ candidate }) => {
  const lastName =
    candidate.surname.charAt(0) + candidate.surname.toLowerCase().substring(1);
  const title = `See how Generation Zero scored ${candidate.firstName} ${lastName} on Transport, Urban From and the environment #aucklandelections`;
  const shareUrl = window.location.href;
  console.log(shareUrl);
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        margin: '8px'
      }}
    >
      <span style={{ color: 'white', marginRight: '8px' }}>
        Share how {candidate.firstName} {lastName} scored on
      </span>
      <FacebookShareButton url={shareUrl} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <TwitterShareButton url={shareUrl} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={shareUrl} windowWidth={750} windowHeight={600}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <RedditShareButton
        url={shareUrl}
        title={title}
        windowWidth={660}
        windowHeight={460}
      >
        <RedditIcon size={32} round />
      </RedditShareButton>
      <EmailShareButton url={shareUrl} subject={title} body="Go to">
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
};
