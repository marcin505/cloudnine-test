import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import {
  PRICE_OPTIONS,
  DEFAULT_PRICE_OPTION,
} from 'constants/constants';

interface PriceFilterProps {
  priceSelectionHandler: (val: {
    value: string;
    label: string;
  }) => void;
}

const StyledSelect = styled(Select)`
  width: 100%;
`;

const textStyle = {
  fontFamily: 'HelveticaNeue, sans-serif',
  fontSize: '15px',
  fontWeight: 300,
  color: '#202020',
};

const styles = {
  control: (base: any) => ({
    ...base,
    ...textStyle,
    cursor: 'pointer',
    boxShadow: 'none',
    borderWidth: 0,
    borderBottomWidth: '1px',
    borderBottomColor: '#b69f58',
    height: '56px',
    '&:hover': {
      borderBottomColor: '#b69f58',
    },
  }),
  option: (base: any, state: any) => ({
    ...base,
    ...textStyle,
    backgroundColor: state.isSelected ? '#fae39f' : 'transparent',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#fae39f',
    },
  }),
  singleValue: (base: any) => ({
    ...base,
    ...textStyle,
    marginLeft: '6px',
  }),
  menu: (base: any) => ({
    ...base,
    marginTop: '0',
  }),
  indicatorsContainer: (base: any) => ({
    ...base,
    marginRight: '8px',
  }),
};

const PriceFilter = ({
  priceSelectionHandler,
}: PriceFilterProps): ReactElement => {
  return (
    <StyledSelect
      options={PRICE_OPTIONS}
      onChange={priceSelectionHandler}
      defaultValue={DEFAULT_PRICE_OPTION}
      components={{
        IndicatorSeparator: () => null,
      }}
      theme={(theme: any) => ({
        ...theme,
        borderRadius: 0,
      })}
      isSearchable={false}
      styles={styles}
    />
  );
};

export default PriceFilter;
