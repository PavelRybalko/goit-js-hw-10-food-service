import './styles.css';
import itemTemplate from './templates/list-item.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  output: document.querySelector('ul.js-menu'),
  checkbox: document.querySelector('input.js-switch-input'),
};

const markup = menu.map(item => itemTemplate(item)).join('');
refs.output.insertAdjacentHTML('beforeend', markup);

const currentTheme = localStorage.getItem('currentTheme');
const saveTheme = theme => localStorage.setItem('currentTheme', theme);

AddSavedTheme(currentTheme);
refs.checkbox.addEventListener('change', isChecked);

function isChecked() {
  if (refs.checkbox.checked) {
    document.body.classList.replace(Theme.LIGHT, Theme.DARK);
    saveTheme(Theme.DARK);
    return;
  }
  document.body.classList.replace(Theme.DARK, Theme.LIGHT);
  saveTheme(Theme.LIGHT);
}

function AddSavedTheme(currentTheme) {
  document.body.classList.add(Theme.LIGHT);
  refs.checkbox.checked = false;

  if (currentTheme) {
    if (currentTheme === Theme.DARK) {
      document.body.classList.add(currentTheme);
      refs.checkbox.checked = currentTheme === Theme.DARK;
    }
  }
}
