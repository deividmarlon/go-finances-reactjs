const formatValue = (value: number): string => {
  let formattedValue = Intl.NumberFormat('br-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
  formattedValue = formattedValue.includes(',')
    ? formattedValue
    : `${formattedValue},00`;
  return formattedValue;
};
// TODO

export default formatValue;
