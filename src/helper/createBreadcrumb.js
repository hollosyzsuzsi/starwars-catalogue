export default function createBreadcrumb(pathItems = []) {
  const breadcrumb = document.createElement('div');
  breadcrumb.className = 'home-menu';

  pathItems.forEach(({ text, href }, index) => {
    if (href) {
      const link = document.createElement('a');
      link.className = 'home-link';
      link.href = href;
      link.textContent = text;
      breadcrumb.appendChild(link);
    } else {
      const span = document.createElement('span');
      span.className = 'link-end';
      span.textContent = text;
      breadcrumb.appendChild(span);
    }

    if (index < pathItems.length - 1) {
      const separator = document.createElement('span');
      separator.className = 'link-end';
      separator.textContent = ' / ';
      breadcrumb.appendChild(separator);
    }
  });

  return breadcrumb;
}
