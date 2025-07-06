/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
    if (value > 100) {
        throw new Error("Value should be between 0 and 100");
    }
    let Wrapper;
    let Inner;

    switch (size) {
        case "small":
            Wrapper = SmallWrapperBar;
            Inner = SmallInnerBar;
            break;
        case "medium":
            Wrapper = MediumWrapperBar;
            Inner = MediumInnerBar;
            break;
        case "large":
            Wrapper = LargeWrapperBar;
            Inner = LargeInnerBar;
            break;
        default:
            throw new Error("No such progress bar variant");
    }

     return (
         <Wrapper 
         role="progressBar" 
         aria-valuetext={value} 
         aria-valuenow={value} 
         aria-valuemin="0" 
         aria-valuemax="100" 
         >
            {value}%
            <Inner value={value} />
        </Wrapper>
     );
};

const ProgressBarBase = styled.div`
    width: 370px;
    height: 24px;
    background-color: ${COLORS.gray50};
    border-radius: 8px;
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    padding: 0;
`;

const InnerProgressBase = styled.div`
    width: ${p => (370 / 100) * p.value}px;
    border-radius: 4px;
    padding: 0;
    margin: 0;
    height: 18px;
    background-color: ${COLORS.primary};
    border-radius: 4px ${p => p.value === 100 ? '4 4' : '0 0'} 4px;
`;

const SmallInnerBar = styled(InnerProgressBase)`
    height: 8px;
`;

const SmallWrapperBar = styled(ProgressBarBase)`
    height: 8px;
`;

const MediumInnerBar = styled(InnerProgressBase)`
    height: 12px;
`;

const MediumWrapperBar = styled(ProgressBarBase)`
    height: 12px;
`;

const LargeInnerBar = styled(InnerProgressBase)`
    width: ${p => (364 / 100) * p.value}px;
    height: 18px;
    position: absolute;
    top: 3px;
    left: 3px; 
`;

const LargeWrapperBar = styled(ProgressBarBase)`
    position: relative;
    height: 24px;
`;


export default ProgressBar;
