import createBreadcrumb from './createBreadcrumb';
import createDetailLayout from './createDetailLayout';

export default async function renderDetailsPage(listName, infoNodes, data) {
  const main = document.querySelector('.main');
  main.innerHTML = '';

  try {
    const breadcrumb = createBreadcrumb([
      { text: 'Home', href: `/${listName}` },
      { text: `${listName.slice(0, 1).toUpperCase()}${listName.slice(1)}` },
    ]);
    main.appendChild(breadcrumb);

    const detailLayout = createDetailLayout({
      imageSrc: data.src,
      titleText: data.name,
      contentNodes: infoNodes,
    });

    main.appendChild(detailLayout);
  } catch (error) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = `Failed to load ${listName.slice(listName.length - 2)}. ${error.message}`;
    main.appendChild(errorMessage);
  }
}
