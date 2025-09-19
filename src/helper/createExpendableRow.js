import getFormattedData from './getFormattedData';
import getRemainingData from './getRemainingData';
import '../index.css';

const createExpandableRow = (label, dataObject, key) => {
  const row = document.createElement('div');
  row.className = 'info-row';

  const labelElement = document.createElement('span');
  labelElement.className = 'info-label';
  labelElement.textContent = label;
  row.appendChild(labelElement);

  const valueElement = document.createElement('span');
  valueElement.className = 'info-value';
  valueElement.textContent = getFormattedData(dataObject, key);
  row.appendChild(valueElement);

  if (Array.isArray(dataObject[key]) && dataObject[key].length > 3) {
    const showMoreLink = document.createElement('a');

    showMoreLink.href = '#';
    showMoreLink.textContent = ' Show More...';
    showMoreLink.className = 'show-more-link';

    const showLessLink = document.createElement('a');

    showLessLink.href = '#';
    showLessLink.textContent = ' Show Less...';
    showLessLink.className = 'show-more-link';

    showMoreLink.addEventListener('click', (e) => {
      e.preventDefault();

      const remaining = getRemainingData(dataObject, key);

      showMoreLink.remove();

      valueElement.textContent += `,  ${remaining}`;
      valueElement.append(showLessLink);
    });

    showLessLink.addEventListener('click', (e) => {
      e.preventDefault();

      const defaultList = getFormattedData(dataObject, key);

      showLessLink.remove();

      valueElement.textContent = defaultList;
      valueElement.append(showMoreLink);
    });

    valueElement.append(showMoreLink);
  }

  return row;
};

export default createExpandableRow;
