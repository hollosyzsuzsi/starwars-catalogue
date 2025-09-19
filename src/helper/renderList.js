import createPagination from './createPagination';
import createCard from './cardRenderer';

export default async function renderList({
  containerSelector,
  data,
  itemsPerPage = 5,
  routeBase = '',
  cardConfig = {},
  listClassName = '',
  headerTitle = '',
  headerClassName = '',
  vectorIcon,
}) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    throw new Error(`Container not found for selector: ${containerSelector}`);
  }

  let currentPage = 1;

  function renderPage(page) {
    container.innerHTML = '';

    if (headerTitle) {
      const header = document.createElement('div');
      if (headerClassName) header.className = headerClassName;

      const title = document.createElement('h1');
      title.textContent = headerTitle;

      header.appendChild(title);
      container.appendChild(header);
    }

    const listWrapper = document.createElement('div');
    if (listClassName) listWrapper.className = listClassName;

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = data.slice(startIndex, endIndex);

    itemsToShow.forEach((item) => {
      const card = createCard({
        item,
        routeBase,
        ...cardConfig,
      });
      listWrapper.appendChild(card);
    });

    container.appendChild(listWrapper);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const onPageClick = (pageNum) => {
      currentPage = pageNum;
      renderPage(currentPage);
    };

    const onNextClick = () => {
      currentPage += 1;
      renderPage(currentPage);
    };

    const pagination = createPagination({
      totalPages,
      currentPage,
      onPageClick,
      onNextClick,
      vectorIcon,
    });

    container.appendChild(pagination);
  }

  try {
    renderPage(currentPage);
  } catch (error) {
    const main = document.querySelector('.main');
    main.innerHTML = `<p>Failed to load ${routeBase}s. ${error.message}</p>`;
  }
}
