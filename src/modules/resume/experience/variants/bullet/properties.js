import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.light.iceWhite,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Experience',
    required: true
  },
  experience: {
    name: 'Experience',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Experience',
        type: propertyTypes.OBJECT,
        required: true,
        value: {
          type: propertyTypes.OBJECT,
          designation: {
            name: 'Designation',
            type: propertyTypes.STRING,
            value: 'Designation',
            required: true
          },
          company: {
            name: 'Company',
            type: propertyTypes.STRING,
            value: 'Company',
            required: true
          },
          startDate: {
            name: 'Start Date',
            type: propertyTypes.STRING,
            value: 'mm-yyyy',
            required: true
          },
          endDate: {
            name: 'End Date',
            type: propertyTypes.STRING,
            value: 'mm-yyyy',
            required: false
          },
          description: {
            name: 'Description',
            type: propertyTypes.ARRAY,
            value: [
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum nunc a neque cursus, quis vehicula risus fringilla.',
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum nunc a neque cursus, quis vehicula risus fringilla.'
            ],
            required: true
          }
        }
      }
    ]
  }
};

export default properties;
