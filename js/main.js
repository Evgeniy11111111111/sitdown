"use strict";

var selectRegion = document.querySelector('.header__region-select');
var choicesRegion = new Choices(selectRegion, {
  searchEnabled: false,
  itemSelectText: ''
});
var selectCategory = document.querySelector('.header__category-select');
var choicesCategory = new Choices(selectCategory, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: !1
});
var burger = document.querySelector('.burger');
var menu = document.querySelector('.header__menu');
var menuItems = document.querySelectorAll('[data-menu-item]');
burger.addEventListener('click', function () {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('menu--active');

  if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.header__menu, .burger')) {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
      }
    });
  } else {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
  }
});
menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(function (el) {
  el.addEventListener('click', function () {
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
  });
});

function clearInput(input) {
  input.value = '';
}

function addError(input) {
  input.parentElement.classList.add('error');
}

function removeError(input) {
  input.parentElement.classList.remove('error');
}

function addSuccess(input) {
  input.parentElement.classList.add('success');
}

function removeSuccess(input) {
  input.parentElement.classList.remove('success');
}

function textTest(input) {
  return /[^а-яА-ЯёЁ]+$/g.test(input.value);
}

function emailTest(input) {
  return /\A[^@]+@([^@\.]+\.)+[^@\.]+\z/g.test(input.value);
}

function phoneTest(input) {
  return /[^\d]/g.test(input.value);
}

if (document.getElementById('index')) {
  var showMoreFunc = function showMoreFunc(count, countSlice) {
    var items = count;
    showMore.addEventListener('click', function () {
      items += countSlice;
      var visItem = array.slice(0, items);
      visItem.forEach(function (el) {
        return el.classList.add('is-visible');
      });

      if (productLengt === visItem.length) {
        showMore.style.display = 'none';
      }
    });
  };

  var matchMediaFunc = function matchMediaFunc() {
    if (window.matchMedia("(max-width: 992px)").matches) {
      showMoreFunc(6, 2);
    } else if (window.matchMedia("(max-width: 1110px)").matches) {
      showMoreFunc(6, 3);
    } else if (window.matchMedia("(min-width: 1111px)").matches) {
      showMoreFunc(8, 4);
    }
  };

  var validate = function validate(form) {
    var error = 0;
    removeError(inputName);
    removeSuccess(inputName);

    if (inputName.value.length < 4 || textTest(inputName)) {
      addError(inputName);
      error++;
    } else {
      addSuccess(inputName);
    }

    removeError(inputEmail);
    removeSuccess(inputEmail);

    if (inputEmail.value.length < 4 || emailTest(inputEmail)) {
      addError(inputEmail);
      error++;
    } else {
      addSuccess(inputEmail);
    }

    removeError(inputTel);
    removeSuccess(inputTel);

    if (inputTel.value.length < 6 || phoneTest(inputTel)) {
      addError(inputTel);
    } else {
      addSuccess(inputTel);
    }

    if (!checkbox.checked) {
      error++;
    }

    return error;
  };

  var heroSwiper = new Swiper('.hero__swiper', {
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 10,
    disableOnInteraction: false,
    speed: 500,
    autoplay: {
      delay: 4500
    },
    effect: "fade",
    allowTouchMove: false,
    pagination: {
      el: '.hero__pagination-swiper',
      // type: 'bullets',
      clickable: false,
      renderBullet: function renderBullet(e, s) {
        return '<span class="'.concat(s, '" data-index="').concat(e, '">\n          <svg viewbox="0 0 20 20">\n              <circle r="8" cx="10" cy="10" fill="none" stroke-width="2" stroke="#fff"/>\n          </svg>\n        </span>');
      }
    }
  });
  var specialSwiper = new Swiper('.special__swiper', {
    spaceBetween: 32,
    navigation: {
      nextEl: ".special__navigation-next-btn",
      prevEl: ".special__navigation-prev-btn"
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      1110: {
        slidesPerView: 'auto',
        slidesPerGroup: 3
      }
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд'
    }
  });
  var showMore = document.querySelector('.rate__btn');
  var productLengt = document.querySelectorAll('.rate__card').length;
  var array = Array.from(document.querySelector('.rate__catalog').children);
  matchMediaFunc();
  var usefulSwiper = new Swiper('.useful__swiper', {
    slidesPerView: 1,
    spaceBetween: 32,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".useful__navigation-next-btn",
      prevEl: ".useful__navigation-prev-btn"
    },
    breakpoints: {
      600: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1110: {
        slidesPerView: 2
      }
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд'
    }
  });
  var inputName = document.querySelector('.feedback__input[type=text]');
  var inputEmail = document.querySelector('.feedback__input[type=email]');
  var inputTel = document.querySelector('.feedback__input[type=tel]');
  var form = document.querySelector('.feedback__form');
  var checkbox = document.querySelector('.feedback__checkbox');
  var modalCLick = document.querySelector('.modal-click');
  var modalContainer = document.querySelector('.modal__container');
  var modalClose = document.querySelector('.modal-click__close');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var error = validate(form);

    if (error === 0) {
      clearInput(inputName);
      clearInput(inputEmail);
      clearInput(inputTel);
      removeError(inputName);
      removeSuccess(inputName);
      removeError(inputEmail);
      removeSuccess(inputEmail);
      removeError(inputTel);
      removeSuccess(inputTel);
      modalCLick.classList.add('modal--active');
      document.body.classList.add('lock');
    }
  });
  modalClose.addEventListener('click', function () {
    modalCLick.classList.remove('modal--active');
    document.body.classList.remove('lock');
  });
  document.addEventListener('click', function (e) {
    if (e.target === modalCLick || e.target === modalContainer) {
      modalCLick.classList.remove('modal--active');
      document.body.classList.remove('lock');
    }
  });
  inputName.addEventListener('input', function () {
    removeError(inputName);
    removeSuccess(inputName);
  });
  inputName.addEventListener('blur', function () {
    if (inputName.value.length < 4 || textTest(inputName)) {
      addError(inputName);
    } else {
      addSuccess(inputName);
    }
  });
  inputEmail.addEventListener('input', function () {
    removeError(inputEmail);
    removeSuccess(inputEmail);
  });
  inputEmail.addEventListener('blur', function () {
    if (inputEmail.value.length < 4 || emailTest(inputEmail)) {
      addError(inputEmail);
    } else {
      addSuccess(inputEmail);
    }
  });
  inputTel.addEventListener('input', function () {
    removeError(inputTel);
    removeSuccess(inputTel);
  });
  inputTel.addEventListener('blur', function () {
    if (inputTel.value.length < 6 || phoneTest(inputTel)) {
      addError(inputTel);
    } else {
      addSuccess(inputTel);
    }
  });
} else if (document.getElementById('catalog')) {
  var rangeSlider = document.getElementById('range-slider');

  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [2000, 150000],
      connect: true,
      step: 1,
      range: {
        'min': [0],
        'max': [200000]
      }
    });
    var input0 = document.getElementById('input-0');
    var input1 = document.getElementById('input-1');
    var inputs = [input0, input1];
    rangeSlider.noUiSlider.on('update', function (values, handle) {
      inputs[handle].value = Math.round(values[handle]);
    });

    var setRangeSlider = function setRangeSlider(i, value) {
      var arr = [null, null];
      arr[i] = value;
      console.log(arr);
      rangeSlider.noUiSlider.set(arr);
    };

    inputs.forEach(function (el, index) {
      el.addEventListener('change', function (e) {
        console.log(index);
        setRangeSlider(index, e.currentTarget.value);
      });
    });
  }

  var catalogSwiper = new Swiper('.catalog__swiper', {
    spaceBetween: 16,
    autoHeight: false,
    slidesPerView: 2,
    slidesPerGroup: 2,
    grid: {
      fill: 'row',
      rows: 3
    },
    breakpoints: {
      600: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          fill: 'row',
          rows: 3
        }
      },
      992: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          fill: 'row',
          rows: 3
        }
      }
    },
    pagination: {
      el: '.catalog__pagination-swiper',
      clickable: true,
      renderBullet: function renderBullet(index, className) {
        return '<span class="' + className + '">' + (index + 1) + "</span>";
      }
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд'
    }
  });
  var dropdownHeadder = document.querySelectorAll('.dropdown-head');
  dropdownHeadder.forEach(function (head) {
    head.addEventListener('click', function () {
      var dropdown = head.parentElement;
      var dropdownActive = document.querySelectorAll('.dropdown--active');
      dropdown.classList.toggle('dropdown--active');
      dropdownActive.forEach(function (elem) {
        elem.classList.remove('dropdown--active');
      });

      if (head.parentElement.classList.contains('dropdown--active')) {
        document.addEventListener('click', function (e) {
          if (!e.target.closest('.dropdown-body, .dropdown-head')) {
            head.parentElement.classList.remove('dropdown--active');
          }
        });
      }
    });
    var current = head.firstElementChild.textContent;
    head.parentElement.querySelectorAll('.checkbox').forEach(function (checkbox) {
      checkbox.addEventListener('click', function () {
        var array = [];
        head.parentElement.querySelectorAll('.checkbox').forEach(function (el) {
          el.checked && array.push(' ' + el.nextElementSibling.nextElementSibling.textContent);
        });

        if (array.length === 0) {
          head.querySelector('.dropdown-current').textContent = current;
        } else {
          head.querySelector('.dropdown-current').textContent = array;
        }
      });
    });
  });
} else if (document.getElementById('product')) {
  var productBtn = document.querySelectorAll('.product__img-btn');
  var modal = document.querySelector('.modal');

  var _modalClose = document.querySelector('.modal__close');

  productBtn.forEach(function (elem) {
    elem.addEventListener('click', function () {
      document.body.classList.add('lock');
      modal.classList.add('modal--active');
    });
  });

  _modalClose.addEventListener('click', function () {
    document.body.classList.remove('lock');
    modal.classList.remove('modal--active');
  });

  document.addEventListener('click', function (e) {
    if (e.target === modal) {
      document.body.classList.remove('lock');
      modal.classList.remove('modal--active');
    }
  });
  var buy = document.querySelector('.product__btn');
  var modalForm = document.querySelector('.modal-form');
  var modalCloseForm = document.querySelector('.modal-form__close');
  buy.addEventListener('click', function () {
    document.body.classList.add('lock');
    modalForm.classList.add('modal--active');
  });
  modalCloseForm.addEventListener('click', function () {
    document.body.classList.remove('lock');
    modalForm.classList.remove('modal--active');
  });
  document.addEventListener('click', function (e) {
    if (e.target === modalForm) {
      document.body.classList.remove('lock');
      modalForm.classList.remove('modal--active');
    }
  });

  var _inputName = document.querySelector('.modal-form__input[type=text]');

  var _inputTel = document.querySelector('.modal-form__input[type=tel]');

  _inputName.addEventListener('input', function () {
    removeError(_inputName);
    removeSuccess(_inputName);
  });

  _inputName.addEventListener('blur', function () {
    if (_inputName.value.length < 4 || textTest(_inputName)) {
      addError(_inputName);
    } else {
      addSuccess(_inputName);
    }
  });

  _inputTel.addEventListener('input', function () {
    removeError(_inputTel);
    removeSuccess(_inputTel);
  });

  _inputTel.addEventListener('blur', function () {
    if (_inputTel.value.length < 6 || phoneTest(_inputTel)) {
      addError(_inputTel);
    } else {
      addSuccess(_inputTel);
    }
  });

  var _modalCLick = document.querySelector('.modal-click');

  var _form = document.querySelector('.modal-form__form');

  var modalCloseClick = document.querySelector('.modal-click__close');

  _form.addEventListener('submit', function (e) {
    e.preventDefault();
    modalForm.classList.remove('modal--active');

    _modalCLick.classList.add('modal--active');
  });

  modalCloseClick.addEventListener('click', function () {
    document.body.classList.remove('lock');

    _modalCLick.classList.remove('modal--active');
  });
  document.addEventListener('click', function (e) {
    if (e.target === _modalCLick) {
      document.body.classList.remove('lock');

      _modalCLick.classList.remove('modal--active');
    }
  });
  var productSwiper = new Swiper('.product__swiper', {
    spaceBetween: 38,
    slidesPerView: 'auto',
    direction: 'horizontal',
    breakpoints: {
      600: {
        direction: 'vertical',
        slidesPerView: 'auto',
        allowTouchMove: false,
        spaceBetween: 18
      },
      992: {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 38
      }
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд'
    }
  });
  document.querySelectorAll('.product__slide').forEach(function (elem) {
    elem.addEventListener('click', function (e) {
      var path = e.currentTarget.dataset.path;
      document.querySelectorAll('.product__img').forEach(function (img) {
        img.classList.remove('active-tab');
      });
      document.querySelector("[data-target=\"".concat(path, "\"]")).classList.add('active-tab');
    });
  });
  var similarSwiper = new Swiper('.similar__swiper', {
    spaceBetween: 16,
    slidesPerView: 2,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".similar__navigation-next-btn",
      prevEl: ".similar__navigation-prev-btn"
    },
    breakpoints: {
      600: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      992: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      1110: {
        spaceBetween: 32,
        slidesPerView: 4,
        slidesPerGroup: 1
      }
    },
    a11y: {
      prevSlideMessage: 'Предыдущий слайд',
      nextSlideMessage: 'Следующий слайд'
    }
  });
  var modalSwiper = new Swiper('.modal__swiper', {
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".modal__navigation-next-btn",
      prevEl: ".modal__navigation-prev-btn"
    },
    breakpoints: {
      600: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1300: {
        slidesPerView: 4,
        spaceBetween: 30
      }
    }
  });
  var modalMainSwiper = new Swiper('.modal__main-swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    thumbs: {
      swiper: modalSwiper
    }
  });
}

lazyload();
"use strict";

var selectRegion = document.querySelector('.header__region-select');
var choicesRegion = new Choices(selectRegion, {
  searchEnabled: false,
  itemSelectText: ''
});
var selectCategory = document.querySelector('.header__category-select');
var choicesCategory = new Choices(selectCategory, {
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: !1
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJzZWxlY3RSZWdpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaG9pY2VzUmVnaW9uIiwiQ2hvaWNlcyIsInNlYXJjaEVuYWJsZWQiLCJpdGVtU2VsZWN0VGV4dCIsInNlbGVjdENhdGVnb3J5IiwiY2hvaWNlc0NhdGVnb3J5Iiwic2hvdWxkU29ydCIsImJ1cmdlciIsIm1lbnUiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJmb3JFYWNoIiwiZWwiLCJjbGVhcklucHV0IiwiaW5wdXQiLCJ2YWx1ZSIsImFkZEVycm9yIiwicGFyZW50RWxlbWVudCIsImFkZCIsInJlbW92ZUVycm9yIiwiYWRkU3VjY2VzcyIsInJlbW92ZVN1Y2Nlc3MiLCJ0ZXh0VGVzdCIsInRlc3QiLCJlbWFpbFRlc3QiLCJwaG9uZVRlc3QiLCJnZXRFbGVtZW50QnlJZCIsInNob3dNb3JlRnVuYyIsImNvdW50IiwiY291bnRTbGljZSIsIml0ZW1zIiwic2hvd01vcmUiLCJ2aXNJdGVtIiwiYXJyYXkiLCJzbGljZSIsInByb2R1Y3RMZW5ndCIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsIm1hdGNoTWVkaWFGdW5jIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ2YWxpZGF0ZSIsImZvcm0iLCJlcnJvciIsImlucHV0TmFtZSIsImlucHV0RW1haWwiLCJpbnB1dFRlbCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImhlcm9Td2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZGlzYWJsZU9uSW50ZXJhY3Rpb24iLCJzcGVlZCIsImF1dG9wbGF5IiwiZGVsYXkiLCJlZmZlY3QiLCJhbGxvd1RvdWNoTW92ZSIsInBhZ2luYXRpb24iLCJjbGlja2FibGUiLCJyZW5kZXJCdWxsZXQiLCJzIiwiY29uY2F0Iiwic3BlY2lhbFN3aXBlciIsIm5hdmlnYXRpb24iLCJuZXh0RWwiLCJwcmV2RWwiLCJicmVha3BvaW50cyIsInNsaWRlc1Blckdyb3VwIiwiYTExeSIsInByZXZTbGlkZU1lc3NhZ2UiLCJuZXh0U2xpZGVNZXNzYWdlIiwiQXJyYXkiLCJmcm9tIiwiY2hpbGRyZW4iLCJ1c2VmdWxTd2lwZXIiLCJtb2RhbENMaWNrIiwibW9kYWxDb250YWluZXIiLCJtb2RhbENsb3NlIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwicmFuZ2VTbGlkZXIiLCJub1VpU2xpZGVyIiwiY3JlYXRlIiwic3RhcnQiLCJjb25uZWN0Iiwic3RlcCIsInJhbmdlIiwiaW5wdXQwIiwiaW5wdXQxIiwiaW5wdXRzIiwib24iLCJ2YWx1ZXMiLCJoYW5kbGUiLCJNYXRoIiwicm91bmQiLCJzZXRSYW5nZVNsaWRlciIsImkiLCJhcnIiLCJjb25zb2xlIiwibG9nIiwic2V0IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiY2F0YWxvZ1N3aXBlciIsImF1dG9IZWlnaHQiLCJncmlkIiwiZmlsbCIsInJvd3MiLCJjbGFzc05hbWUiLCJkcm9wZG93bkhlYWRkZXIiLCJoZWFkIiwiZHJvcGRvd24iLCJkcm9wZG93bkFjdGl2ZSIsImVsZW0iLCJjdXJyZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ0ZXh0Q29udGVudCIsInB1c2giLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm9kdWN0QnRuIiwibW9kYWwiLCJidXkiLCJtb2RhbEZvcm0iLCJtb2RhbENsb3NlRm9ybSIsIm1vZGFsQ2xvc2VDbGljayIsInByb2R1Y3RTd2lwZXIiLCJkaXJlY3Rpb24iLCJwYXRoIiwiZGF0YXNldCIsImltZyIsInNpbWlsYXJTd2lwZXIiLCJtb2RhbFN3aXBlciIsImZyZWVNb2RlIiwid2F0Y2hTbGlkZXNQcm9ncmVzcyIsIm1v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RSxLQUQrQjtFQUU5Q0MsY0FBYyxFQUFFO0FBRjhCLENBQTFCLENBQXRCO0FBS0EsSUFBTUMsY0FBYyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXZCO0FBQ0EsSUFBTU0sZUFBZSxHQUFHLElBQUlKLE9BQUosQ0FBWUcsY0FBWixFQUE0QjtFQUNsREYsYUFBYSxFQUFFLEtBRG1DO0VBRWxEQyxjQUFjLEVBQUUsRUFGa0M7RUFHbERHLFVBQVUsRUFBQyxDQUFDO0FBSHNDLENBQTVCLENBQXhCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHNlbGVjdFJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JlZ2lvbi1zZWxlY3QnKTtcbmNvbnN0IGNob2ljZXNSZWdpb24gPSBuZXcgQ2hvaWNlcyhzZWxlY3RSZWdpb24sIHtcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbn0pXG5cbmNvbnN0IHNlbGVjdENhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2F0ZWdvcnktc2VsZWN0JylcbmNvbnN0IGNob2ljZXNDYXRlZ29yeSA9IG5ldyBDaG9pY2VzKHNlbGVjdENhdGVnb3J5LCB7XG4gIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICBpdGVtU2VsZWN0VGV4dDogJycsXG4gIHNob3VsZFNvcnQ6ITEsXG59KVxuXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpO1xuY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWVudS1pdGVtXScpO1xuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWFjdGl2ZScpXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS0tYWN0aXZlJyk7XG5cbiAgaWYgKG1lbnU/LmNsYXNzTGlzdC5jb250YWlucygnbWVudS0tYWN0aXZlJykpIHtcbiAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19tZW51LCAuYnVyZ2VyJykpIHtcbiAgICAgICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAn0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4nKTtcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci0tYWN0aXZlJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tYWN0aXZlJyk7XG5cbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGJ1cmdlcj8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAn0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4nKTtcbiAgfVxufSlcblxubWVudUl0ZW1zPy5mb3JFYWNoKGVsID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICfQntGC0LrRgNGL0YLRjCDQvNC10L3RjicpO1xuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItLWFjdGl2ZScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3IoaW5wdXQpIHtcbiAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yKGlucHV0KSB7XG4gIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKVxufVxuXG5mdW5jdGlvbiBhZGRTdWNjZXNzKGlucHV0KSB7XG4gIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN1Y2Nlc3MoaW5wdXQpIHtcbiAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJylcbn1cblxuZnVuY3Rpb24gdGV4dFRlc3QoaW5wdXQpIHtcbiAgcmV0dXJuIC9bXtCwLdGP0JAt0K/RkdCBXSskL2cudGVzdChpbnB1dC52YWx1ZSlcbn1cblxuZnVuY3Rpb24gZW1haWxUZXN0KGlucHV0KSB7XG4gIHJldHVybiAvXFxBW15AXStAKFteQFxcLl0rXFwuKStbXkBcXC5dK1xcei9nLnRlc3QoaW5wdXQudmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwaG9uZVRlc3QoaW5wdXQpIHtcbiAgcmV0dXJuIC9bXlxcZF0vZy50ZXN0KGlucHV0LnZhbHVlKVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGV4JykpIHtcbiAgY29uc3QgaGVyb1N3aXBlciA9IG5ldyBTd2lwZXIoJy5oZXJvX19zd2lwZXInLCB7XG4gICAgLy8gRGVmYXVsdCBwYXJhbWV0ZXJzXG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgICBzcGVlZDogNTAwLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogNDUwMFxuICAgIH0sXG4gICAgZWZmZWN0OiBcImZhZGVcIixcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuaGVyb19fcGFnaW5hdGlvbi1zd2lwZXInLFxuICAgICAgLy8gdHlwZTogJ2J1bGxldHMnLFxuICAgICAgY2xpY2thYmxlOiBmYWxzZSxcbiAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24oZSwgcykge1xuICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJy5jb25jYXQocywgJ1wiIGRhdGEtaW5kZXg9XCInKS5jb25jYXQoZSwgJ1wiPlxcbiAgICAgICAgICA8c3ZnIHZpZXdib3g9XCIwIDAgMjAgMjBcIj5cXG4gICAgICAgICAgICAgIDxjaXJjbGUgcj1cIjhcIiBjeD1cIjEwXCIgY3k9XCIxMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiMlwiIHN0cm9rZT1cIiNmZmZcIi8+XFxuICAgICAgICAgIDwvc3ZnPlxcbiAgICAgICAgPC9zcGFuPicpXG4gICAgICB9XG4gICAgfVxuXG4gIH0pXG5cblxuICBjb25zdCBzcGVjaWFsU3dpcGVyID0gbmV3IFN3aXBlcignLnNwZWNpYWxfX3N3aXBlcicsIHtcbiAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc3BlY2lhbF9fbmF2aWdhdGlvbi1uZXh0LWJ0blwiLFxuICAgICAgcHJldkVsOiBcIi5zcGVjaWFsX19uYXZpZ2F0aW9uLXByZXYtYnRuXCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDJcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDNcbiAgICAgIH0sXG4gICAgICAxMTEwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDNcbiAgICAgIH1cbiAgICB9LFxuICAgIGExMXk6IHtcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcbiAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQodC70LXQtNGD0Y7RidC40Lkg0YHQu9Cw0LnQtCdcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc2hvd01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF0ZV9fYnRuJyk7XG4gIGNvbnN0IHByb2R1Y3RMZW5ndCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYXRlX19jYXJkJykubGVuZ3RoXG4gIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF0ZV9fY2F0YWxvZycpLmNoaWxkcmVuKVxuXG4gIGZ1bmN0aW9uIHNob3dNb3JlRnVuYyhjb3VudCwgY291bnRTbGljZSkge1xuICAgIGxldCBpdGVtcyA9IGNvdW50O1xuXG4gICAgc2hvd01vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpdGVtcyArPSBjb3VudFNsaWNlXG4gICAgICBjb25zdCB2aXNJdGVtID0gYXJyYXkuc2xpY2UoMCwgaXRlbXMpXG4gICAgICB2aXNJdGVtLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpKVxuICAgICAgaWYgKHByb2R1Y3RMZW5ndCA9PT0gdmlzSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgc2hvd01vcmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hNZWRpYUZ1bmMoKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTkycHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIHNob3dNb3JlRnVuYyg2LCAyKVxuICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTEwcHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIHNob3dNb3JlRnVuYyg2LCAgMylcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTExMXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICBzaG93TW9yZUZ1bmMoOCwgIDQpXG4gICAgfVxuICB9XG5cbiAgbWF0Y2hNZWRpYUZ1bmMoKVxuXG5cbiAgY29uc3QgdXNlZnVsU3dpcGVyID0gbmV3IFN3aXBlcignLnVzZWZ1bF9fc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLnVzZWZ1bF9fbmF2aWdhdGlvbi1uZXh0LWJ0blwiLFxuICAgICAgcHJldkVsOiBcIi51c2VmdWxfX25hdmlnYXRpb24tcHJldi1idG5cIlxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDYwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgfSxcbiAgICAgIDk5Mjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgfSxcbiAgICAgIDExMTA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIH1cbiAgICB9LFxuICAgIGExMXk6IHtcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcbiAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQodC70LXQtNGD0Y7RidC40Lkg0YHQu9Cw0LnQtCdcbiAgICB9XG5cblxuICB9KVxuXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19faW5wdXRbdHlwZT10ZXh0XScpO1xuICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19pbnB1dFt0eXBlPWVtYWlsXScpO1xuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19faW5wdXRbdHlwZT10ZWxdJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2Zvcm0nKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2NoZWNrYm94JylcbiAgY29uc3QgbW9kYWxDTGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbGljaycpO1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGFpbmVyJyk7XG4gIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xpY2tfX2Nsb3NlJylcbiAgZnVuY3Rpb24gdmFsaWRhdGUoZm9ybSkge1xuICAgIGxldCBlcnJvciA9IDBcbiAgICByZW1vdmVFcnJvcihpbnB1dE5hbWUpXG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dE5hbWUpXG4gICAgaWYgKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPCA0IHx8IHRleHRUZXN0KGlucHV0TmFtZSkpIHtcbiAgICAgIGFkZEVycm9yKGlucHV0TmFtZSlcbiAgICAgIGVycm9yKytcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dE5hbWUpXG4gICAgfVxuICAgIHJlbW92ZUVycm9yKGlucHV0RW1haWwpO1xuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXRFbWFpbClcbiAgICBpZiAoaW5wdXRFbWFpbC52YWx1ZS5sZW5ndGggPCA0IHx8IGVtYWlsVGVzdChpbnB1dEVtYWlsKSkge1xuICAgICAgYWRkRXJyb3IoaW5wdXRFbWFpbClcbiAgICAgIGVycm9yKytcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dEVtYWlsKVxuICAgIH1cblxuICAgIHJlbW92ZUVycm9yKGlucHV0VGVsKTtcbiAgICByZW1vdmVTdWNjZXNzKGlucHV0VGVsKVxuICAgIGlmIChpbnB1dFRlbC52YWx1ZS5sZW5ndGggPCA2IHx8IHBob25lVGVzdChpbnB1dFRlbCkpIHtcbiAgICAgIGFkZEVycm9yKGlucHV0VGVsKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRTdWNjZXNzKGlucHV0VGVsKVxuICAgIH1cblxuICAgIGlmICghY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgZXJyb3IrK1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGVycm9yID0gdmFsaWRhdGUoZm9ybSlcblxuICAgIGlmIChlcnJvciA9PT0gMCkge1xuICAgICAgY2xlYXJJbnB1dChpbnB1dE5hbWUpO1xuICAgICAgY2xlYXJJbnB1dChpbnB1dEVtYWlsKTtcbiAgICAgIGNsZWFySW5wdXQoaW5wdXRUZWwpXG4gICAgICByZW1vdmVFcnJvcihpbnB1dE5hbWUpXG4gICAgICByZW1vdmVTdWNjZXNzKGlucHV0TmFtZSlcbiAgICAgIHJlbW92ZUVycm9yKGlucHV0RW1haWwpO1xuICAgICAgcmVtb3ZlU3VjY2VzcyhpbnB1dEVtYWlsKVxuICAgICAgcmVtb3ZlRXJyb3IoaW5wdXRUZWwpO1xuICAgICAgcmVtb3ZlU3VjY2VzcyhpbnB1dFRlbCk7XG4gICAgICBtb2RhbENMaWNrLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgfVxuICB9KVxuXG4gIG1vZGFsQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbW9kYWxDTGljay5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJyk7XG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZihlLnRhcmdldCA9PT0gbW9kYWxDTGljayB8fCBlLnRhcmdldCA9PT0gbW9kYWxDb250YWluZXIpIHtcbiAgICAgIG1vZGFsQ0xpY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgIH1cbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcmVtb3ZlRXJyb3IoaW5wdXROYW1lKVxuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXROYW1lKVxuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoIDwgNCB8fCB0ZXh0VGVzdChpbnB1dE5hbWUpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN1Y2Nlc3MoaW5wdXROYW1lKVxuICAgIH1cbiAgfSlcblxuXG4gIGlucHV0RW1haWwuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcmVtb3ZlRXJyb3IoaW5wdXRFbWFpbCk7XG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dEVtYWlsKVxuICB9KVxuXG4gIGlucHV0RW1haWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoaW5wdXRFbWFpbC52YWx1ZS5sZW5ndGggPCA0IHx8IGVtYWlsVGVzdChpbnB1dEVtYWlsKSkge1xuICAgICAgYWRkRXJyb3IoaW5wdXRFbWFpbClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dEVtYWlsKVxuICAgIH1cbiAgfSlcblxuXG4gIGlucHV0VGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHJlbW92ZUVycm9yKGlucHV0VGVsKTtcbiAgICByZW1vdmVTdWNjZXNzKGlucHV0VGVsKVxuICB9KVxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlmIChpbnB1dFRlbC52YWx1ZS5sZW5ndGggPCA2IHx8IHBob25lVGVzdChpbnB1dFRlbCkpIHtcbiAgICAgIGFkZEVycm9yKGlucHV0VGVsKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRTdWNjZXNzKGlucHV0VGVsKVxuICAgIH1cbiAgfSlcblxuXG59IGVsc2UgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRhbG9nJykpIHtcbiAgY29uc3QgcmFuZ2VTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2Utc2xpZGVyJyk7XG5cbiAgaWYgKHJhbmdlU2xpZGVyKSB7XG4gICAgbm9VaVNsaWRlci5jcmVhdGUocmFuZ2VTbGlkZXIsIHtcbiAgICAgIHN0YXJ0OiBbMjAwMCwgMTUwMDAwXSxcbiAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICBzdGVwOiAxLFxuICAgICAgcmFuZ2U6IHtcbiAgICAgICAgJ21pbic6IFswXSxcbiAgICAgICAgJ21heCc6IFsyMDAwMDBdXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaW5wdXQwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LTAnKTtcbiAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtMScpO1xuICAgIGNvbnN0IGlucHV0cyA9IFtpbnB1dDAsIGlucHV0MV07XG5cbiAgICByYW5nZVNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUnLCBmdW5jdGlvbih2YWx1ZXMsIGhhbmRsZSl7XG4gICAgICBpbnB1dHNbaGFuZGxlXS52YWx1ZSA9IE1hdGgucm91bmQodmFsdWVzW2hhbmRsZV0pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2V0UmFuZ2VTbGlkZXIgPSAoaSwgdmFsdWUpID0+IHtcbiAgICAgIGxldCBhcnIgPSBbbnVsbCwgbnVsbF07XG4gICAgICBhcnJbaV0gPSB2YWx1ZTtcblxuICAgICAgY29uc29sZS5sb2coYXJyKTtcblxuICAgICAgcmFuZ2VTbGlkZXIubm9VaVNsaWRlci5zZXQoYXJyKTtcbiAgICB9O1xuXG4gICAgaW5wdXRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xuICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpO1xuICAgICAgICBzZXRSYW5nZVNsaWRlcihpbmRleCwgZS5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IGNhdGFsb2dTd2lwZXIgPSBuZXcgU3dpcGVyKCcuY2F0YWxvZ19fc3dpcGVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMTYsXG4gICAgYXV0b0hlaWdodDogZmFsc2UsXG4gICAgc2xpZGVzUGVyVmlldzogMixcbiAgICBzbGlkZXNQZXJHcm91cDogMixcbiAgICBncmlkOiB7XG4gICAgICBmaWxsOiAncm93JyxcbiAgICAgIHJvd3M6IDNcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICBmaWxsOiAncm93JyxcbiAgICAgICAgICByb3dzOiAzXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgOTkyOiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAzLFxuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgZmlsbDogJ3JvdycsXG4gICAgICAgICAgcm93czogM1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIH0sXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuY2F0YWxvZ19fcGFnaW5hdGlvbi1zd2lwZXInLFxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxuICAgICAgcmVuZGVyQnVsbGV0OiBmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICByZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyBcIjwvc3Bhbj5cIjtcbiAgICAgIH1cbiAgICB9LFxuICAgIGExMXk6IHtcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcbiAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQodC70LXQtNGD0Y7RidC40Lkg0YHQu9Cw0LnQtCdcbiAgICB9XG5cbiAgfSlcblxuICBjb25zdCBkcm9wZG93bkhlYWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24taGVhZCcpO1xuXG4gIGRyb3Bkb3duSGVhZGRlci5mb3JFYWNoKGhlYWQgPT4ge1xuICAgIGhlYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBkcm9wZG93biA9IGhlYWQucGFyZW50RWxlbWVudFxuICAgICAgY29uc3QgZHJvcGRvd25BY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJvcGRvd24tLWFjdGl2ZScpXG4gICAgICBkcm9wZG93bi5jbGFzc0xpc3QudG9nZ2xlKCdkcm9wZG93bi0tYWN0aXZlJylcbiAgICAgIGRyb3Bkb3duQWN0aXZlLmZvckVhY2goZWxlbSA9PiB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tLWFjdGl2ZScpO1xuICAgICAgfSlcbiAgICAgIGlmIChoZWFkLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkcm9wZG93bi0tYWN0aXZlJykpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5kcm9wZG93bi1ib2R5LCAuZHJvcGRvd24taGVhZCcpKSB7XG4gICAgICAgICAgICBoZWFkLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZHJvcGRvd24tLWFjdGl2ZScpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBjdXJyZW50ID0gaGVhZC5maXJzdEVsZW1lbnRDaGlsZC50ZXh0Q29udGVudFxuICAgIGhlYWQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKS5mb3JFYWNoKGNoZWNrYm94ID0+IHtcbiAgICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgaGVhZC5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgIGVsLmNoZWNrZWQgJiYgYXJyYXkucHVzaCgnICcgKyBlbC5uZXh0RWxlbWVudFNpYmxpbmcubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50KVxuICAgICAgICB9KVxuICAgICAgICBpZiAoYXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaGVhZC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tY3VycmVudCcpLnRleHRDb250ZW50ID0gY3VycmVudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhlYWQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWN1cnJlbnQnKS50ZXh0Q29udGVudCA9IGFycmF5XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcblxuICB9KVxufSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdCcpKSB7XG5cbiAgY29uc3QgcHJvZHVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0X19pbWctYnRuJylcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgY29uc3QgbW9kYWxDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UnKVxuXG4gIHByb2R1Y3RCdG4uZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKVxuICAgIH0pXG4gIH0pXG5cbiAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBidXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fYnRuJyk7XG4gIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtJylcbiAgY29uc3QgbW9kYWxDbG9zZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybV9fY2xvc2UnKTtcblxuICBidXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBtb2RhbEZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gIH0pXG5cbiAgbW9kYWxDbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICBtb2RhbEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsRm9ybSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm1fX2lucHV0W3R5cGU9dGV4dF0nKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtX19pbnB1dFt0eXBlPXRlbF0nKVxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcmVtb3ZlRXJyb3IoaW5wdXROYW1lKVxuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXROYW1lKVxuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoIDwgNCB8fCB0ZXh0VGVzdChpbnB1dE5hbWUpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN1Y2Nlc3MoaW5wdXROYW1lKVxuICAgIH1cbiAgfSlcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICByZW1vdmVFcnJvcihpbnB1dFRlbCk7XG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dFRlbClcbiAgfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoaW5wdXRUZWwudmFsdWUubGVuZ3RoIDwgNiB8fCBwaG9uZVRlc3QoaW5wdXRUZWwpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dFRlbClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dFRlbClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IG1vZGFsQ0xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xpY2snKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtX19mb3JtJyk7XG4gIGNvbnN0IG1vZGFsQ2xvc2VDbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbGlja19fY2xvc2UnKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XG4gICAgbW9kYWxDTGljay5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJyk7XG4gIH0pXG5cbiAgbW9kYWxDbG9zZUNsaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXG4gICAgbW9kYWxDTGljay5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWxDTGljaykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsQ0xpY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHByb2R1Y3RTd2lwZXIgPSBuZXcgU3dpcGVyKCcucHJvZHVjdF9fc3dpcGVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzgsXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzOCxcbiAgICAgIH1cbiAgICB9LFxuICAgIGExMXk6IHtcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcbiAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQodC70LXQtNGD0Y7RidC40Lkg0YHQu9Cw0LnQtCdcbiAgICB9XG4gIH0pXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX3NsaWRlJykuZm9yRWFjaChlbGVtID0+IHtcbiAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQucGF0aDtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3RfX2ltZycpLmZvckVhY2goaW1nID0+IHtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS10YWInKTtcbiAgICAgIH0pXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10YXJnZXQ9XCIke3BhdGh9XCJdYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLXRhYicpO1xuICAgIH0pXG4gIH0pXG5cbiAgY29uc3Qgc2ltaWxhclN3aXBlciA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyX19zd2lwZXInLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc2ltaWxhcl9fbmF2aWdhdGlvbi1uZXh0LWJ0blwiLFxuICAgICAgcHJldkVsOiBcIi5zaW1pbGFyX19uYXZpZ2F0aW9uLXByZXYtYnRuXCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICB9LFxuICAgICAgOTkyOiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgfSxcbiAgICAgIDExMTA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG5cbiAgICAgIH1cbiAgICB9LFxuICAgIGExMXk6IHtcbiAgICAgIHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcbiAgICAgIG5leHRTbGlkZU1lc3NhZ2U6ICfQodC70LXQtNGD0Y7RidC40Lkg0YHQu9Cw0LnQtCdcbiAgICB9XG4gIH0pXG5cblxuICBjb25zdCBtb2RhbFN3aXBlciA9IG5ldyBTd2lwZXIoJy5tb2RhbF9fc3dpcGVyJywge1xuICAgIGZyZWVNb2RlOiB0cnVlLFxuICAgIHdhdGNoU2xpZGVzUHJvZ3Jlc3M6IHRydWUsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi5tb2RhbF9fbmF2aWdhdGlvbi1uZXh0LWJ0blwiLFxuICAgICAgcHJldkVsOiBcIi5tb2RhbF9fbmF2aWdhdGlvbi1wcmV2LWJ0blwiXG4gICAgfSxcblxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMFxuICAgICAgfSxcbiAgICAgIDk5Mjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzcGFjZUJldHdlZW46IDMwLFxuICAgICAgfSxcbiAgICAgIDEzMDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMCxcbiAgICAgIH1cbiAgICB9LFxuICB9KVxuXG4gIGNvbnN0IG1vZGFsTWFpblN3aXBlciA9IG5ldyBTd2lwZXIoJy5tb2RhbF9fbWFpbi1zd2lwZXInLCB7XG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIHRodW1iczoge1xuICAgICAgc3dpcGVyOiBtb2RhbFN3aXBlcixcbiAgICB9LFxuICB9KVxufVxuXG5sYXp5bG9hZCgpXG4iLCJjb25zdCBzZWxlY3RSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19yZWdpb24tc2VsZWN0Jyk7XG5jb25zdCBjaG9pY2VzUmVnaW9uID0gbmV3IENob2ljZXMoc2VsZWN0UmVnaW9uLCB7XG4gIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICBpdGVtU2VsZWN0VGV4dDogJycsXG59KTtcblxuY29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXRlZ29yeS1zZWxlY3QnKVxuY29uc3QgY2hvaWNlc0NhdGVnb3J5ID0gbmV3IENob2ljZXMoc2VsZWN0Q2F0ZWdvcnksIHtcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgc2hvdWxkU29ydDohMSxcbn0pO1xuIl19
