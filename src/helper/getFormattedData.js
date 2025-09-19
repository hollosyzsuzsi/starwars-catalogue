const getFormattedData = (dataObject, data) => {
  if (!Array.isArray(dataObject[data])) return dataObject[data];
  return dataObject[data]
    .slice(0, 3)
    .map((dataType) => dataType.name)
    .join(', ');
};

export default getFormattedData;
