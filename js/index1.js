const productsContainer = document.querySelector('.products');
let isDragging = false;
let startX;
let scrollLeft;

productsContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.pageX - productsContainer.offsetLeft;
  scrollLeft = productsContainer.scrollLeft;
  productsContainer.style.cursor = 'grabbing';
});

productsContainer.addEventListener('mouseup', () => {
  isDragging = false;
  productsContainer.style.cursor = 'grab';
});

productsContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.pageX - productsContainer.offsetLeft;
  const walk = (x - startX) * 3; // Adjust the multiplier for faster/slower scrolling
  productsContainer.scrollLeft = scrollLeft - walk;
});

// Prevent selecting text when dragging
productsContainer.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

const maleProductsContainer = document.querySelector('.products2');
let isMaleDragging = false;
let maleStartX;
let maleScrollLeft;

maleProductsContainer.addEventListener('mousedown', (e) => {
  isMaleDragging = true;
  maleStartX = e.pageX - maleProductsContainer.offsetLeft;
  maleScrollLeft = maleProductsContainer.scrollLeft;
  maleProductsContainer.style.cursor = 'grabbing';
});

maleProductsContainer.addEventListener('mouseup', () => {
  isMaleDragging = false;
  maleProductsContainer.style.cursor = 'grab';
});

maleProductsContainer.addEventListener('mousemove', (e) => {
  if (!isMaleDragging) return;
  e.preventDefault();
  const x = e.pageX - maleProductsContainer.offsetLeft;
  const walk = (x - maleStartX) * 3; // Adjust the multiplier for faster/slower scrolling
  maleProductsContainer.scrollLeft = maleScrollLeft - walk;
});

// Prevent selecting text when dragging
maleProductsContainer.addEventListener('selectstart', (e) => {
  e.preventDefault();
});

const categoryContainer = document.querySelector('.category');
let isCategoryDragging = false;
let categoryStartX;
let categoryScrollLeft;

categoryContainer.addEventListener('mousedown', (e) => {
  isCategoryDragging = true;
  categoryStartX = e.pageX - categoryContainer.offsetLeft;
  categoryScrollLeft = categoryContainer.scrollLeft;
  categoryContainer.style.cursor = 'grabbing';
});

categoryContainer.addEventListener('mouseup', () => {
  isCategoryDragging = false;
  categoryContainer.style.cursor = 'grab';
});

categoryContainer.addEventListener('mousemove', (e) => {
  if (!isCategoryDragging) return;
  e.preventDefault();
  const x = e.pageX - categoryContainer.offsetLeft;
  const walk = (x - categoryStartX) * 3; // Adjust the multiplier for faster/slower scrolling
  categoryContainer.scrollLeft = categoryScrollLeft - walk;
});

// Prevent selecting text when dragging
categoryContainer.addEventListener('selectstart', (e) => {
  e.preventDefault();
});
