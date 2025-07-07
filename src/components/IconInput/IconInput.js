import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
    small: {
        height: "16px",
        fontSize: "1rem",
        borderThickness: "1px",
        iconSize: "10",
        iconStroke: "2",
        iconTop: "4px",
        leftPadding: "12px"
    }, 
    large: {
        height: "36px",
        fontSize: "1.1rem",
        borderThickness: "2px",
        iconSize: "12",
        iconStroke: "2",
        iconTop: "6px",
        leftPadding: "14px"
    }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
    const sizeStyle = SIZES[size];

  return (
      <>
          <InputLabel>Input</InputLabel>
            <Wrapper
                  height={sizeStyle.height} 
                  width={width + 'px'} 
                >
                <IconWrapper 
                      id={icon} 
                      iconTop={sizeStyle.iconTop}
                      size={sizeStyle.iconSize} 
                      strokeWidth={sizeStyle.iconStroke}
                  />
                <WrapperInput 
                  leftPadding={sizeStyle.leftPadding}
                  fontSize={sizeStyle.fontSize}
                  borderThickness={sizeStyle.borderThickness}
                  placeholder={placeholder}
                />
            </Wrapper>
      </>
  );
};

const Wrapper = styled.div`
    height:${p => p.height}; 
    width: ${p => p.width};
    padding: 0;
    margin: 0;
    position: relative;
    isolation: isolate;
`;

const IconWrapper = styled(Icon)`
    color: ${COLORS.gray700};
    position: absolute;
    left: 0px;
    top: ${p => p.iconTop};
    height: ${p => p.iconSize}px;
    width: ${p => p.iconSize}px;
    pointer-events: none;
    z-index: 2;
`;

const InputLabel = styled(VisuallyHidden)``;

const WrapperInput = styled.input`
    position: absolute;
    z-index: 0;
    top: 0px;
    left: 0px;
    padding-left: ${ p => p.leftPadding };
    font-size: ${p => p.fontSize};
    font-weight: 700;
    color: ${COLORS.gray700};
    border: none;
    border-bottom: ${p => p.borderThickness} solid ${COLORS.black};

    &::placeholder {
        font-weight: 400;
        font-size: ${p => p.fontSize};
        color: ${COLORS.gray500};
    }

    &:focus {
        outline-offset: 2px;
    }

    ${IconWrapper}:hover + & {
        color: ${COLORS.black};
    }
`;

export default IconInput;
