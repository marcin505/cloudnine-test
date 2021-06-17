import React, { ReactElement, useMemo } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { PRICE_OPTIONS } from 'constants/constants';
import { AvailablePriceRangesType } from 'types';
import { getSelectedPriceOption } from 'utils/utils';

interface PriceFilterProps {
  priceSelectionHandler: (val: {
    value: string;
    label: string;
  }) => void;
  selectedPriceRange: AvailablePriceRangesType;
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
    padding: '12px 16px',
    '&:hover': {
      backgroundColor: '#fae39f',
    },
  }),
  singleValue: (base: any) => ({
    ...base,
    ...textStyle,
    marginLeft: '8px',
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
  selectedPriceRange,
}: PriceFilterProps): ReactElement => {
  const selectedPriceOption = useMemo(() => {
    return getSelectedPriceOption({ priceRange: selectedPriceRange });
  }, [selectedPriceRange]);

  return (
    <form>
      <StyledSelect
        options={PRICE_OPTIONS}
        onChange={priceSelectionHandler}
        value={selectedPriceOption}
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
    </form>
  );
};

export default PriceFilter;
