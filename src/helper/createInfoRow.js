const createInfoRow = (label, value) => {
  const row = document.createElement('div');
  row.className = 'info-row';

  const labelSpan = document.createElement('span');
  labelSpan.className = 'info-label';
  labelSpan.textContent = label;

  const valueSpan = document.createElement('span');
  valueSpan.className = 'info-value';
  valueSpan.textContent = value;

  if (!value) {
    valueSpan.textContent = 'n/a';
  }

  row.appendChild(labelSpan);
  row.appendChild(valueSpan);

  return row;
};

export default createInfoRow;
