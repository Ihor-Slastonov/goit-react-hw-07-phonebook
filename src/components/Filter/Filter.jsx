import PropTypes from 'prop-types';

import { FilterTitle, FilterField } from './Filter.styled';

export const Filter = ({ onChange }) => {
  const filter = e => {
    const contactName = e.target.value.toLowerCase();
    onChange(contactName);
  };

  return (
    <FilterTitle>
      Find contact by name
      <FilterField type="text" onChange={filter} placeholder="Annie" />
    </FilterTitle>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
