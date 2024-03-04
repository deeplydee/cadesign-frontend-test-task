const dropdown = document.querySelector('.header__menu-item_dropdown');
const dropdownContent = document.querySelector('.header__dropdown');

dropdown.addEventListener('mouseover', function () {
	dropdownContent.style.display = 'grid';
});

dropdown.addEventListener('mouseout', function () {
	dropdownContent.style.display = 'none';
});
