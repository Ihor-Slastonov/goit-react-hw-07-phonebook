import PropTypes from 'prop-types';

export const Filter = ({ onChange }) => {
  const filter = e => {
    const contactName = e.target.value.toLowerCase();
    onChange(contactName);
  };

  return (
    <label>
      Find contact by name
      <input type="text" onChange={filter} />
    </label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};