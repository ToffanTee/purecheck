const SEO = (data = {}) => {
  document.title = data.title;
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", data.metaDescription);
};

export default SEO;
