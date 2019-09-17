import React from 'react';

const styles = {
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    minHeight: '100vh',
    padding: '8px',
    backgroundColor: '#DAFFED'
  },
  innerWrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    maxWidth: '700px'
  },
  textHighlight: {
    color: '#DB3069',
    fontWeight: 'bold'
  }
};
export const About = () => (
  <div style={styles.wrapper}>
    <div style={styles.innerWrapper}>
      <h1>About us</h1>
      <h2>Why we do the scorecards</h2>

      <p>
        The people who are elected will be making decisions that affect our
        daily lives and will indelibly shape Auckland’s future. Local Government
        has a critical role in overseeing how{' '}
        <span style={styles.textHighlight}>
          Auckland transitions to a net zero emissions city
        </span>
        , and we need a Mayor, Council and Local Boards who are ready to deliver
        this transition. Regardless of who is elected, Generation Zero wants to
        ensure that liveable cities, smarter transport and a more equitable
        urban form are high priorities for Auckland’s local government.
      </p>

      <p>
        For the past two local body elections we have produced scorecards to{' '}
        <span style={styles.textHighlight}>
          help voters engage meaningfully
        </span>{' '}
        with the political system, empowering voters who are concerned about
        climate change to identify candidates who will be effective at shaping
        Auckland's response to the crisis. We selected three categories based on
        their potential{' '}
        <span style={styles.textHighlight}> impact on climate change</span> and
        then posed questions based on these categories to the candidates.
        Mayoral and councillor candidates were interviewed in person and Local
        Board candidates filled out a questionnaire. Their responses were marked
        and moderated according to how well they aligned with our vision, then
        formatted into scorecards and the website you’re looking at now!
      </p>

      <p>
        We hope you find this resource helpful. If you wish to provide us with
        your feedback, our email is{' '}
        <a href="mailto: auckland@generationzero.org.nz">
          auckland@generationzero.org.nz
        </a>
        .
      </p>

      <p>
        <div style={styles.textHighlight}>🗳️ Happy voting! 🗳️</div>
      </p>

      <p>Ngā mihi, Generation Zero Auckland</p>
    </div>
  </div>
);
