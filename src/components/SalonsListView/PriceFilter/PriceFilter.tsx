import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { PRICE_OPTIONS } from 'constants/constants';

interface PriceFilterProps {
  priceSelectionHandler: (val: { value: string; label: string }) => void;
}

const StyledSelect = styled(Select)`
  width: 100%;
`;

const PriceFilter = ({ priceSelectionHandler }: PriceFilterProps): ReactElement => {
  return (
    <StyledSelect
      options={PRICE_OPTIONS}
      onChange={priceSelectionHandler}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default PriceFilter;
