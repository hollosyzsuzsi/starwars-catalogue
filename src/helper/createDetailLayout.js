export default function createDetailLayout({ imageSrc, imageAlt, titleText, contentNodes = [] }) {
  const container = document.createElement('div');
  container.className = 'itemdetails';

  const wrapper = document.createElement('div');
  wrapper.className = 'item-detail-wrapper';

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'item-details-img-wrapper';

  const img = document.createElement('img');
  img.className = 'item-details-img';
  img.src = imageSrc;
  img.alt = imageAlt || titleText;

  imgWrapper.appendChild(img);

  const content = document.createElement('div');
  content.className = 'item-content';

  const title = document.createElement('h1');
  title.className = 'name';
  title.textContent = titleText;
  content.appendChild(title);

  contentNodes.forEach((node) => content.appendChild(node));

  wrapper.appendChild(imgWrapper);
  wrapper.appendChild(content);

  container.appendChild(wrapper);
  return container;
}
