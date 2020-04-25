import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import {
  Container,
  AreaHeader,
  AreaLogo,
  ContainerBox,
  ContainerBoxHeader,
  ContainerBoxHeaderImage,
  ContainerBoxHeaderImageBlank,
  ContainerBoxHeaderTitle,
  ContainerBoxBody,
  AreaForm,
  BoxRow,
  BoxColumn,
  AreaCheckBox,
  Text,
  AreaInputSelect,
  Input,
  AreaInputSelectIcon,
  AreaInputSelectInput,
  AreaSelectTwo,
  AreaSelect,
  TextInput,
  TextAdvanced,
  AreaTextAdvanced,
  AreaSelectTwoText,
  AreaButton,
  TextButton,
  Image,
} from './styles';
import * as CarsActions from '../../store/modules/car/actions';
import Logo from '../../components/Logo';
import { icons, colors } from '../../styles';
import imageCarTransition from '../../assets/images/selectCar.png';
import imageCarTransitionTwo from '../../assets/images/unselectCar.png';
import imageBikerTransition from '../../assets/images/motoSelect.png';
import imageBikerTransitionTwo from '../../assets/images/motounselect.png';

const customStyles = {
  control: (base, state) => ({
    ...base,
    height: 35,
    minHeight: 35,
    fontSize: 14,
    border: 0,
    fontWeight: 'bold',
    color: colors.black,
    placeholderColor: colors.black,
    // This line disable the blue border
    boxShadow: 'none',
    backgroundColor: 'transparent',
    minWidth: state.selectProps.width,
  }),
  option: (option, state) => ({
    ...option,
    fontSize: 14,
    height: 35,
    minHeight: 35,
    border: 0,
    // This line disable the blue border
    boxShadow: 'none',
    minWidth: state.selectProps.width,
  }),
};
function onHover(e) {
  console.log('uhul');
  e.setAttribute('src', '../../assets/images/selectCar.png');
}

function onUnhover(e) {
  e.setAttribute('src', '../../assets/images/unselectCar.png');
}
export default function Login() {
  const { loading, error, message } = useSelector(state => state.commons);
  const { marks, models, versions, cars, years, prices } = useSelector(
    state => state.car
  );
  const dispatch = useDispatch();
  const [imageBackground, setImageBackground] = useState(imageCarTransition);
  const [selectPageOne, setSelectPageOne] = useState(true);
  const [selectPageTwo, setSelectPageTwo] = useState(false);
  const [infoNew, setInfoNew] = useState(false);
  const [infoUsed, setInfoUsed] = useState(false);
  const [city, setCity] = useState('');
  const [optionRaio, setOptionRaio] = useState([
    { value: 100, label: '100 km' },
    { value: 200, label: '200 km' },
    { value: 300, label: '300 km' },
  ]);
  const [selectOptionRaio, setSelectOptionValue] = useState({
    value: 100,
    label: '100 km',
  });
  const [optionMarks, setOptionMarks] = useState(marks);
  const [selectOptionMark, setSelectOptionMark] = useState({
    value: 0,
    label: 'Todas',
  });
  const [optionModels, setOptionModels] = useState(models);
  const [selectOptionModels, setSelectOptionModels] = useState({
    value: 0,
    label: 'Todas',
  });
  const [optionVersions, setOptionVersions] = useState(versions);
  const [selectOptionVersions, setSelectOptionVersions] = useState({
    value: 0,
    label: 'Todas',
  });
  const [optionYears, setOptionYears] = useState([
    {
      value: 0,
      label: 'Todas',
    },
  ]);
  const [selectOptionYear, setSelectOptionYear] = useState({
    value: 0,
    label: 'Todas',
  });
  const [optionPrice, setOptionPrice] = useState([
    {
      value: 0,
      label: 'Todas',
    },
  ]);
  const [selectOptionPrice, setSelectOptionPrice] = useState({
    value: 0,
    label: 'Todas',
  });
  const [selectCarsOptions, setSelectCarsOptions] = useState([]);
  useEffect(() => {
    dispatch(CarsActions.requestMarks());
  }, [dispatch]);
  useEffect(() => {
    setOptionMarks(marks);
  }, [marks]);
  useEffect(() => {
    setOptionModels(models);
  }, [models]);
  useEffect(() => {
    setOptionVersions(versions);
  }, [versions]);
  useEffect(() => {
    setOptionYears(years);
  }, [years]);
  useEffect(() => {
    setOptionPrice(prices);
  }, [prices]);

  function setOptionMark(option) {
    dispatch(CarsActions.requestModels(option));
    setSelectOptionMark(option);
  }
  function setOptionModel(option) {
    dispatch(CarsActions.requestVersions(option));
    setSelectOptionModels(option);
  }
  function setOptionVersion(option, carsParam) {
    setSelectOptionVersions(option);
    let newArrayYear = [
      {
        value: 0,
        label: 'Todas',
      },
    ];
    let newArrayPrice = [
      {
        value: 0,
        label: 'Todas',
      },
    ];
    let newArrayYears = [];
    let newArrayPrices = [];
    const newArrayYearTwo = carsParam.filter(
      car =>
        car.Make === selectOptionMark.label &&
        car.Model === selectOptionModels.label &&
        car.Version === selectOptionVersions.label
    );
    if (newArrayYearTwo.length > 0) {
      const newArrayYearsAux = newArrayYearTwo.map(car => car.YearModel);
      const newArrayPricesAux = newArrayYearTwo.map(car => car.Price);
      newArrayYears = newArrayYearsAux.map((year, index) => {
        return {
          value: index,
          label: year,
        };
      });
      newArrayPrices = newArrayPricesAux.map((price, index) => {
        return {
          value: index,
          label: price,
        };
      });
    }

    newArrayYear = [...newArrayYear, ...newArrayYears];
    newArrayPrice = [...newArrayPrice, ...newArrayPrices];
    setOptionYears(newArrayYear);
    setOptionPrice(newArrayPrice);
  }
  return (
    <Container>
      <AreaHeader>
        <AreaLogo>
          <Logo />
        </AreaLogo>
      </AreaHeader>
      <ContainerBox>
        <ContainerBoxHeader>
          <ContainerBoxHeaderImage>
            <img
              src={selectPageOne ? imageCarTransition : imageCarTransitionTwo}
              alt="Italian Trulli"
              onMouseEnter={() => setSelectPageOne(true)}
              onClick={() => {
                setSelectPageOne(true);
                setSelectPageTwo(false);
              }}
            />
          </ContainerBoxHeaderImage>
          <ContainerBoxHeaderImage>
            <img
              src={
                selectPageTwo ? imageBikerTransition : imageBikerTransitionTwo
              }
              alt="Italian Trulli"
              onMouseEnter={() => setSelectPageTwo(true)}
              onMouseLeave={() => setSelectPageTwo(false)}
              onClick={() => {
                setSelectPageOne(false);
                setSelectPageTwo(true);
              }}
            />
          </ContainerBoxHeaderImage>
          <ContainerBoxHeaderImageBlank />
          <ContainerBoxHeaderImageBlank />
          <ContainerBoxHeaderTitle>
            <h3>Vender meu carro</h3>
          </ContainerBoxHeaderTitle>
        </ContainerBoxHeader>
        <ContainerBoxBody>
          <AreaForm>
            <BoxRow>
              <BoxColumn>
                <AreaCheckBox active onClick={() => setInfoNew(!infoNew)}>
                  {infoNew ? (
                    <icons.IconCheckSquare color={colors.pickerOne} />
                  ) : (
                    <icons.IconUncheckSquare />
                  )}

                  <Text> Novos</Text>
                </AreaCheckBox>
                <AreaCheckBox active onClick={() => setInfoUsed(!infoUsed)}>
                  {infoUsed ? (
                    <icons.IconCheckSquare color={colors.pickerOne} />
                  ) : (
                    <icons.IconUncheckSquare />
                  )}

                  <Text> Usados</Text>
                </AreaCheckBox>
              </BoxColumn>
              <BoxColumn />
              <BoxColumn />
              <BoxColumn />
              <BoxColumn />
            </BoxRow>
            <BoxRow>
              <BoxColumn flex={2}>
                <AreaInputSelect>
                  <AreaInputSelectIcon>
                    <icons.IconPointer />
                  </AreaInputSelectIcon>
                  <AreaInputSelectInput>
                    <TextInput>Onde:</TextInput>
                    <Input
                      value={city}
                      onChange={text => setCity(text.target.value)}
                    />
                  </AreaInputSelectInput>
                  <AreaInputSelectIcon
                    active
                    onClick={() => setCity('')}
                    border="solid"
                  >
                    {city && (
                      <icons.IconCircleTimes
                        color={colors.darknesTransparent}
                      />
                    )}
                  </AreaInputSelectIcon>
                  <TextInput>Raio:</TextInput>
                  <AreaSelect width={120}>
                    <Select
                      width={100}
                      styles={customStyles}
                      value={selectOptionRaio}
                      onChange={text => setSelectOptionValue(text)}
                      options={optionRaio}
                    />
                  </AreaSelect>
                </AreaInputSelect>
              </BoxColumn>
              <BoxColumn>
                <AreaSelectTwo width={200} margin={10}>
                  <TextInput> Marca:</TextInput>
                  <Select
                    styles={customStyles}
                    width={140}
                    value={selectOptionMark}
                    onChange={option => setOptionMark(option)}
                    options={optionMarks}
                  />
                </AreaSelectTwo>
              </BoxColumn>
              <BoxColumn>
                <AreaSelectTwo width={200} margin={10}>
                  <TextInput> Modelo:</TextInput>
                  <Select
                    styles={customStyles}
                    width={130}
                    value={selectOptionModels}
                    onChange={option => setOptionModel(option)}
                    options={optionModels}
                  />
                </AreaSelectTwo>
              </BoxColumn>
            </BoxRow>
            <BoxRow>
              <BoxColumn>
                <AreaSelectTwo width={220} margin={10}>
                  <TextInput> Ano Desejado:</TextInput>
                  <Select
                    styles={customStyles}
                    width={90}
                    value={selectOptionYear}
                    onChange={option => setSelectOptionYear(option)}
                    options={optionYears}
                  />
                </AreaSelectTwo>
              </BoxColumn>
              <BoxColumn>
                <AreaSelectTwo width={220} margin={10}>
                  <TextInput> Faixa de Preço:</TextInput>
                  <Select
                    styles={customStyles}
                    width={90}
                    value={selectOptionPrice}
                    onChange={option => setSelectOptionPrice(option)}
                    options={optionPrice}
                  />
                </AreaSelectTwo>
              </BoxColumn>

              <BoxColumn flex={2}>
                <AreaSelectTwo width={410} margin={10}>
                  <TextInput> Versão:</TextInput>
                  <Select
                    styles={customStyles}
                    width={340}
                    value={selectOptionVersions}
                    onChange={option => setOptionVersion(option, cars)}
                    options={optionVersions}
                  />
                </AreaSelectTwo>
              </BoxColumn>
            </BoxRow>
            <BoxRow>
              <BoxColumn>
                <AreaTextAdvanced width={200}>
                  <AreaInputSelectIcon>
                    <icons.IconLeft color={colors.pickerOne} />
                  </AreaInputSelectIcon>
                  <TextAdvanced>Busca Avançada</TextAdvanced>
                </AreaTextAdvanced>
              </BoxColumn>
              <BoxColumn />
              <BoxColumn>
                <AreaSelectTwoText width={200}>
                  <Text>Limpar Filtros</Text>
                </AreaSelectTwoText>
              </BoxColumn>
              <BoxColumn>
                <AreaButton width={200} margin={10}>
                  <TextButton>Ver Ofertas</TextButton>
                </AreaButton>
              </BoxColumn>
            </BoxRow>
          </AreaForm>
        </ContainerBoxBody>
      </ContainerBox>
    </Container>
  );
}
