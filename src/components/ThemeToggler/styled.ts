import styled from 'styled-components';

export const TogglerContainer = styled.div`
    display: flex;
    align-items: flex-end;
    flex-direction: column;
`;
export const TogglerInput = styled.input`
    height: 0;
    width: 0;
    visibility: hidden;
`;

export const TogglerLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 68px;
    height: 40px;
    border-radius: ${({ theme }) => theme.radiuses.togglerLabel};
    border: 3px solid ${({ theme }) => theme.colors.font};
    position: relative;
    transition: background-color 0.2s;
`;

export const TogglerButton = styled.span`
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    width: 38px;
    height: 38px;
    border-radius: ${({ theme }) => theme.radiuses.togglerButton};
    transition: 0.2s;
    border: 3px solid ${({ theme }) => theme.colors.font};
    ${TogglerInput}:checked + ${TogglerLabel} & {
        left: calc(100% + 2px);
        transform: translateX(-100%);
    }

    ${TogglerLabel}:active & {
        width: 45px;
    }
`;
