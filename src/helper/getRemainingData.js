const getRemainingData = (dataObject, data) => {
  return dataObject[data]
    .slice(3)
    .map((dataType) => dataType.name)
    .join(', ');
};

export default getRemainingData;
