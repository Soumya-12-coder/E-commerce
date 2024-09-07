// JavaScript to dynamically create the HTML structure

// Create and append the category container
const categoryContainer = document.createElement('div');
categoryContainer.className = 'category-container';
document.body.appendChild(categoryContainer);

// Create and append the category buttons
const categories = [
  { name: 'Category 1', id: 'category1' },
  { name: 'Category 2', id: 'category2' },
  { name: 'Category 3', id: 'category3' }
];

categories.forEach(category => {
  const button = document.createElement('button');
  button.className = 'category-btn';
  button.setAttribute('data-category', category.id);
  button.textContent = category.name;
  categoryContainer.appendChild(button);
});

// Create and append the category content sections
categories.forEach(category => {
  const contentDiv = document.createElement('div');
  contentDiv.className = 'category-content';
  contentDiv.id = category.id;
  const paragraph = document.createElement('p');
  paragraph.textContent = This is content for ${category.name}.;
  contentDiv.appendChild(paragraph);
  document.body.appendChild(contentDiv);
});