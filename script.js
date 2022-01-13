'use strict';

document.addEventListener('DOMContentLoaded', function () {
  const title = document.getElementById('title');

  document.addEventListener('click', function (e) {
    if (e.target.classList.contains('test__title')) {
      e.target.classList.add('test__title--active');
    };
  });

  document.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
      title.remove();
    }
  });
});