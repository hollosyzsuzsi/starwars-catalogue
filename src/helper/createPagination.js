export default function createPagination({ totalPages, currentPage, onPageClick, onNextClick, vectorIcon }) {
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.className = 'page-buttons';

  for (let pageNum = 1; pageNum <= totalPages; pageNum += 1) {
    const button = document.createElement('button');
    button.textContent = pageNum;

    if (pageNum === currentPage) {
      button.classList.add('active-page');
    }

    button.addEventListener('click', () => onPageClick(pageNum));
    buttonsWrapper.appendChild(button);
  }

  const nextButton = document.createElement('button');
  nextButton.classList.add('next-button');

  const arrow = document.createElement('img');
  arrow.src = vectorIcon;
  arrow.alt = 'Next';
  arrow.className = 'next-icon';

  nextButton.appendChild(arrow);
  nextButton.disabled = currentPage === totalPages;

  nextButton.addEventListener('click', () => onNextClick());

  buttonsWrapper.appendChild(nextButton);

  const pagination = document.createElement('div');
  pagination.className = 'pagination';
  pagination.appendChild(buttonsWrapper);

  return pagination;
}
