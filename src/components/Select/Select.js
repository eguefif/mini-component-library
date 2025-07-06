import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
        <SelectWrapper>
            <HiddenSelect value={value} onChange={onChange}>
              {children}
            </HiddenSelect>
            <TextWrapper>{displayedValue}</TextWrapper>
            <Chevron 
              id='chevron-down' 
              size='12'
              strokeWidth='2' 
            />
        </SelectWrapper>
    </>
  );
};


const HiddenSelect = styled.select`
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    opacity: 0;
`;

const TextWrapper = styled.span`
    display: inline;
    color: inherit;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
`

const SelectWrapper = styled.div`
    position: relative;
    padding: 10px;
    width: fit-content;
    height: fit-content;
    background-color: ${COLORS.transparentGray15};
    border-radius: 8px;
    border: none;
    color: ${COLORS.gray700};
    &:hover {
        color: ${COLORS.black};
    }
`;

const Chevron = styled(Icon)`
    margin-left: 10px;
    display: inline;
    color=${COLORS.gray700};
    &:hover {
        color=${COLORS.black};
    }
    & > svg {
        display: inline;
    }
`;

export default Select;
