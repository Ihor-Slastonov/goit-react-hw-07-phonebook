import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { FilterTitle, FilterField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = e => {
    const contactName = e.target.value.toLowerCase();
    dispatch(changeFilter(contactName));
  };

  return (
    <FilterTitle>
      Find contact by name
      <FilterField type="text" placeholder="Annie" onChange={filter} />
    </FilterTitle>
  );
};
