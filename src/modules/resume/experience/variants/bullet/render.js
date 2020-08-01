import React from 'react';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  experienceItemHeading: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1rem'
  },
  experienceItem: {
    margin: 0,
    minWidth: '10rem'
  }
});

const Basic = ({ theme, headlineText, experience }) => {
  const styles = useStyles();

  const renderList = (descriptionList) =>
    descriptionList.map((description) => (
      <li key={description}>{description}</li>
    ));

  const renderExperience = (experienceDetails) => (
    <div>
      <div style={styles.experienceItemHeading}>
        <h3 style={styles.experienceItem}>
          {experienceDetails.designation.value}
        </h3>
        <h3 style={styles.experienceItem}>{experienceDetails.company.value}</h3>
        <h3 style={styles.experienceItem}>
          <i>
            {`${experienceDetails.startDate.value} - ${
              experienceDetails.endDate.value || 'Current'
            }`}
          </i>
        </h3>
      </div>
      <ul style={styles.experienceItem}>
        {renderList(experienceDetails.description.value)}
      </ul>
    </div>
  );

  return (
    <div
      style={{
        ...styles.root,
        backgroundColor: theme.value.color,
        color: theme.value.contrast
      }}
    >
      <h1 style={styles.headlineText}>{headlineText.value}</h1>
      <hr />
      {experience.value.map((experienceDetails, id) => {
        return (
          <div key={id}>
            <br />
            {renderExperience(experienceDetails.value)}
          </div>
        );
      })}
    </div>
  );
};

export default Basic;
