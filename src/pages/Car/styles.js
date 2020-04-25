import styled from 'styled-components';
import { colors, metrics } from '../../styles';
import imageCarTransition from '../../assets/images/selectCar.png';
import imageCarTransitionTwo from '../../assets/images/unselectCar.png';
import imageBikerTransition from '../../assets/images/motoSelect.png';
import imageBikerTransitionTwo from '../../assets/images/motounselect.png';

export const Container = styled.div``;
export const ContainerBox = styled.div`
  width: 100%;
  max-width: 933px;
  height: 100%;
  max-height: 312px;
  margin: 0 auto;
`;
export const AreaHeader = styled.header`
  width: 100%;
  max-width: 933px;
  height: 100%;
  max-height: 312px;
  margin: 0 auto;
  display: flex;
  flex: 1;
`;
export const AreaLogo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ContainerBoxHeader = styled.div`
  width: 100%;
  max-width: 933px;
  height: 100%;
  max-height: 312px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const ContainerBoxHeaderImage = styled.div`
  display: flex;
  flex: 1;
  width: 150px;
  height: 60px;
  margin-left: 15px;
  border-bottom: solid 3px ${colors.tranparent};
  img {
    width: 100%;
    height: 100%;
  }
  transition: border-bottom 0.2s;
  :hover {
    cursor: pointer;
    border-bottom: solid 3px ${colors.pickerOne};
  }
`;
export const Image = styled.div`
  background: url('../../assets/images/selectCar.png');
  width: 100%;
  height: 100%;
`;
export const ContainerBoxHeaderImageBlank = styled.div`
  display: flex;
  flex: 1;
  max-width: 200px;
  margin-left: 15px;
  border-bottom: solid 3px ${colors.tranparent};
`;
export const ContainerBoxHeaderTitle = styled.div`
  display: flex;
  flex: 1;
  padding: 12px;
  width: 200px;
  justify-content: center;
  align-items: center;
  border: solid 3px ${colors.pickerTwo};
  border-radius: 0px;
  transition: border-bottom 0.2s;

  h3 {
    color: ${colors.pickerTwo};
  }
`;
export const ContainerBoxBody = styled.div`
  width: 100%;
  max-width: 933px;
  height: 100%;
  max-height: 312px;
  background-color: ${colors.white};
  margin: 0 auto;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`;
export const AreaForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${() => colors.white};
  border-radius: 4px;
  box-shadow: 0 0 20px ${() => colors.boxShadownBlueTransparent};
  font-size: 1.5em;
  border-radius: 4px;
  padding: 40px 30px;
  transition-duration: 0.3s;
`;

export const BoxRow = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;
export const BoxColumn = styled.div`
  display: flex;
  flex: ${({ flex = 1 }) => flex};
  flex-direction: row;
  margin-bottom: 10px;
`;
export const AreaCheckBox = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 120px;
  :hover {
    cursor: ${active => (active ? 'pointer' : 'normal')};
  }
  svg {
    transition: background-color 0.7s;
    color: #b5b5b5;
    padding: 1px;
    border-radius: 8px;
    :hover {
      background-color: ${colors.darknesTransparent};
    }
    :active {
      background-color: ${colors.whiteTransparent};
    }
  }
`;
export const AreaInputSelect = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  /* min-width: 180px; */
  height: 40px;
  margin-left: 5px;
  border: solid 1px;
`;
export const AreaInputSelectInput = styled.div`
  height: 100%;
  flex-direction: row;
  display: flex;
  align-items: center;
`;
export const AreaInputSelectIcon = styled.div`
  display: flex;
  height: 100%;
  width: 40px;
  justify-content: center;
  align-items: center;
  border-right: ${({ border = 'none' }) => border};
  border-right-width: ${({ borderWidth = 1 }) => borderWidth}px;
  :hover {
    cursor: ${({ active }) => (active ? 'pointer' : 'normal')};
  }
`;

export const Input = styled.input`
  border: none;
  background-color: transparent;
  padding-left: 3px;
  font-weight: bold;
  width: 140px;
`;
export const TextInput = styled.p`
  color: ${colors.pickerTree};
  font-size: 16px;
`;
export const Text = styled.p`
  color: ${colors.pickerTree};
  font-size: 18px;
`;
export const TextAdvanced = styled.p`
  color: ${colors.pickerOne};
  font-size: 18px;
  font-weight: bold;
  border-bottom: solid 1px ${colors.pickerOne};
`;
export const TextButton = styled.p`
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
`;
export const AreaSelect = styled.div`
  display: block;
  flex-direction: row;
  width: ${({ width = 100 }) => width}px;
  margin-left: ${({ margin = 0 }) => margin}px;
  border-left: ${({ border = 'none' }) => border};
  border-left-width: ${({ borderWidth = 0 }) => borderWidth}px;
`;
export const AreaSelectTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width = 100 }) => width}px;
  margin-left: ${({ margin = 0 }) => margin}px;
  border: solid 1px;
`;
export const AreaSelectTwoText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width = 100 }) => width}px;
  margin-left: ${({ margin = 0 }) => margin}px;
  :hover {
    cursor: pointer;
  }
`;
export const AreaTextAdvanced = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: ${({ width = 100 }) => width}px;
  :hover {
    cursor: pointer;
  }
`;
export const DataSelect = styled.datalist`
  height: 40px;
  font-size: 14px;
  border: none;
`;

export const AreaRegisterForgotedPassword = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;
export const AreaLink = styled.div`
  display: flex;
  flex: 1;
  justify-content: ${({ position }) => (position ? 'flex-start' : 'flex-end')};
  flex-direction: row;
  margin-top: 20px;
`;
export const Link = styled.a`
  color: ${() => colors.regular};
  font-size: ${() => metrics.fontSize - 2}px;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    & + li {
      border-top: 1px solid #eee;
    }
    a {
      color: #7159c1;
      text-decoration: none;
    }
  }
`;
export const AreaButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: ${({ width = 100 }) => width}px;
  margin-left: ${({ margin = 0 }) => margin}px;
  background-color: ${colors.pickerFour};
  transform: background-color 0.5s;
  height: 70px;
  :hover {
    cursor: pointer;
    background-color: ${colors.pickerTree};
  }
`;
