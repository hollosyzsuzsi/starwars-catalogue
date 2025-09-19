import createInfoRow from './createInfoRow';

export default function createCard({
  item,
  imageKey = 'src',
  routeBase = '',
  titleKey = 'name',
  infoFields = [],
  classNames = {
    wrapper: 'card-wrapper',
    content: 'card-content',
    image: 'card-img',
    name: 'card-title',
    link: 'card-link',
  },
  titleRender,
}) {
  const wrapper = document.createElement('div');
  wrapper.className = classNames.wrapper;

  const content = document.createElement('div');
  content.className = classNames.content;

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'img-wrapper';

  const img = document.createElement('img');
  img.className = classNames.image;
  img.src = item[imageKey];
  imgWrapper.appendChild(img);

  let title;
  if (titleRender) {
    title = titleRender();
  } else {
    title = document.createElement('h1');
    title.className = 'name';
    const link = document.createElement('a');
    link.className = classNames.link;
    link.href = `/${routeBase}/${item.id}`;
    link.textContent = item[titleKey];
    title.appendChild(link);
  }

  content.appendChild(title);

  infoFields.forEach(({ label, key }) => {
    content.appendChild(createInfoRow(label, item[key]));
  });

  wrapper.appendChild(imgWrapper);
  wrapper.appendChild(content);

  return wrapper;
}
