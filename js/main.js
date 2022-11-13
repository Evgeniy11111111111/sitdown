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
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    pagination: {
      el: '.hero__pagination-swiper',
      type: 'bullets',
      clickable: true
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
    }
  });
  var inputName = document.querySelector('.feedback__input[type=text]');
  var inputEmail = document.querySelector('.feedback__input[type=email]');
  var inputTel = document.querySelector('.feedback__input[type=tel]');
  var form = document.querySelector('.feedback__form');
  var checkbox = document.querySelector('.feedback__checkbox');
  var modalCLick = document.querySelector('.modal-click');
  var modalContainer = document.querySelector('.modal__container');
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
  var productBtn = document.querySelector('.product__img-btn');
  var modal = document.querySelector('.modal');
  var modalClose = document.querySelector('.modal__close');
  productBtn.addEventListener('click', function () {
    document.body.classList.add('lock');
    modal.classList.add('modal--active');
  });
  modalClose.addEventListener('click', function () {
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
    }
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
    }
  });
  var modalSwiper = new Swiper('.modal__swiper', {
    navigation: {
      nextEl: ".modal__navigation-next-btn",
      prevEl: ".modal__navigation-prev-btn"
    },
    slidesPerView: 1,
    spaceBetween: 78,
    breakpoints: {
      600: {
        slidesPerView: 'auto',
        spaceBetween: 78
      },
      992: {
        slidesPerView: 'auto',
        spaceBetween: 78
      },
      1300: {
        slidesPerView: 'auto',
        spaceBetween: 78
      }
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJzZWxlY3RSZWdpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaG9pY2VzUmVnaW9uIiwiQ2hvaWNlcyIsInNlYXJjaEVuYWJsZWQiLCJpdGVtU2VsZWN0VGV4dCIsInNlbGVjdENhdGVnb3J5IiwiY2hvaWNlc0NhdGVnb3J5Iiwic2hvdWxkU29ydCIsImJ1cmdlciIsIm1lbnUiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJmb3JFYWNoIiwiZWwiLCJjbGVhcklucHV0IiwiaW5wdXQiLCJ2YWx1ZSIsImFkZEVycm9yIiwicGFyZW50RWxlbWVudCIsImFkZCIsInJlbW92ZUVycm9yIiwiYWRkU3VjY2VzcyIsInJlbW92ZVN1Y2Nlc3MiLCJ0ZXh0VGVzdCIsInRlc3QiLCJlbWFpbFRlc3QiLCJwaG9uZVRlc3QiLCJnZXRFbGVtZW50QnlJZCIsInNob3dNb3JlRnVuYyIsImNvdW50IiwiY291bnRTbGljZSIsIml0ZW1zIiwic2hvd01vcmUiLCJ2aXNJdGVtIiwiYXJyYXkiLCJzbGljZSIsInByb2R1Y3RMZW5ndCIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsIm1hdGNoTWVkaWFGdW5jIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ2YWxpZGF0ZSIsImZvcm0iLCJlcnJvciIsImlucHV0TmFtZSIsImlucHV0RW1haWwiLCJpbnB1dFRlbCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImhlcm9Td2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwic3BlZWQiLCJhdXRvcGxheSIsImRlbGF5IiwiZWZmZWN0IiwiYWxsb3dUb3VjaE1vdmUiLCJwYWdpbmF0aW9uIiwidHlwZSIsImNsaWNrYWJsZSIsInNwZWNpYWxTd2lwZXIiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJHcm91cCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwidXNlZnVsU3dpcGVyIiwibW9kYWxDTGljayIsIm1vZGFsQ29udGFpbmVyIiwicHJldmVudERlZmF1bHQiLCJib2R5IiwicmFuZ2VTbGlkZXIiLCJub1VpU2xpZGVyIiwiY3JlYXRlIiwic3RhcnQiLCJjb25uZWN0Iiwic3RlcCIsInJhbmdlIiwiaW5wdXQwIiwiaW5wdXQxIiwiaW5wdXRzIiwib24iLCJ2YWx1ZXMiLCJoYW5kbGUiLCJNYXRoIiwicm91bmQiLCJzZXRSYW5nZVNsaWRlciIsImkiLCJhcnIiLCJjb25zb2xlIiwibG9nIiwic2V0IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiY2F0YWxvZ1N3aXBlciIsImF1dG9IZWlnaHQiLCJncmlkIiwiZmlsbCIsInJvd3MiLCJyZW5kZXJCdWxsZXQiLCJjbGFzc05hbWUiLCJkcm9wZG93bkhlYWRkZXIiLCJoZWFkIiwiZHJvcGRvd24iLCJkcm9wZG93bkFjdGl2ZSIsImVsZW0iLCJjdXJyZW50IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJ0ZXh0Q29udGVudCIsInB1c2giLCJuZXh0RWxlbWVudFNpYmxpbmciLCJwcm9kdWN0QnRuIiwibW9kYWwiLCJtb2RhbENsb3NlIiwiYnV5IiwibW9kYWxGb3JtIiwibW9kYWxDbG9zZUZvcm0iLCJtb2RhbENsb3NlQ2xpY2siLCJwcm9kdWN0U3dpcGVyIiwiZGlyZWN0aW9uIiwic2ltaWxhclN3aXBlciIsIm1vZGFsU3dpcGVyIiwibGF6eWxvYWQiXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLElBQUlDLE9BQUosQ0FBWUosWUFBWixFQUEwQjtF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TTtRQUNKRCxhQUFhLEVBQUUsTUFEWDtRQUVKQyxZQUFZLEVBQUU7TUFGVjtJQVRLO0VBUGtDLENBQTdCLENBQXBCO0FBc0JEOztBQUVEMEUsUUFBUTs7O0FDL2lCUixJQUFNNUksWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLElBQUlDLE9BQUosQ0FBWUosWUFBWixFQUEwQjtFQUM5Q0ssYUFBYSxFQUFFLEtBRCtCO0VBRTlDQyxjQUFjLEVBQUU7QUFGOEIsQ0FBMUIsQ0FBdEI7QUFLQSxJQUFNQyxjQUFjLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QiwwQkFBdkIsQ0FBdkI7QUFDQSxJQUFNTSxlQUFlLEdBQUcsSUFBSUosT0FBSixDQUFZRyxjQUFaLEVBQTRCO0VBQ2xERixhQUFhLEVBQUUsS0FEbUM7RUFFbERDLGNBQWMsRUFBRSxFQUZrQztFQUdsREcsVUFBVSxFQUFDLENBQUM7QUFIc0MsQ0FBNUIsQ0FBeEIiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3Qgc2VsZWN0UmVnaW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fcmVnaW9uLXNlbGVjdCcpO1xuY29uc3QgY2hvaWNlc1JlZ2lvbiA9IG5ldyBDaG9pY2VzKHNlbGVjdFJlZ2lvbiwge1xuICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgaXRlbVNlbGVjdFRleHQ6ICcnLFxufSlcblxuY29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXRlZ29yeS1zZWxlY3QnKVxuY29uc3QgY2hvaWNlc0NhdGVnb3J5ID0gbmV3IENob2ljZXMoc2VsZWN0Q2F0ZWdvcnksIHtcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgc2hvdWxkU29ydDohMSxcbn0pXG5cbmNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19tZW51Jyk7XG5jb25zdCBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tZW51LWl0ZW1dJyk7XG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci0tYWN0aXZlJylcbiAgbWVudS5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LS1hY3RpdmUnKTtcblxuICBpZiAobWVudT8uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LS1hY3RpdmUnKSkge1xuICAgIGJ1cmdlcj8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICfQl9Cw0LrRgNGL0YLRjCDQvNC10L3RjicpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX21lbnUsIC5idXJnZXInKSkge1xuICAgICAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgICAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICfQntGC0LrRgNGL0YLRjCDQvNC10L3RjicpO1xuICAgICAgICBidXJnZXIuY2xhc3NMaXN0LnJlbW92ZSgnYnVyZ2VyLS1hY3RpdmUnKTtcbiAgICAgICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LS1hY3RpdmUnKTtcblxuICAgICAgfVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICfQntGC0LrRgNGL0YLRjCDQvNC10L3RjicpO1xuICB9XG59KVxuXG5tZW51SXRlbXM/LmZvckVhY2goZWwgPT4ge1xuICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuICAgIGJ1cmdlcj8uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgJ9Ce0YLQutGA0YvRgtGMINC80LXQvdGOJyk7XG4gICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci0tYWN0aXZlJyk7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LS1hY3RpdmUnKTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gY2xlYXJJbnB1dChpbnB1dCkge1xuICBpbnB1dC52YWx1ZSA9ICcnO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvcihpbnB1dCkge1xuICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Vycm9yJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3IoaW5wdXQpIHtcbiAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpXG59XG5cbmZ1bmN0aW9uIGFkZFN1Y2Nlc3MoaW5wdXQpIHtcbiAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJylcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3VjY2VzcyhpbnB1dCkge1xuICBpbnB1dC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3N1Y2Nlc3MnKVxufVxuXG5mdW5jdGlvbiB0ZXh0VGVzdChpbnB1dCkge1xuICByZXR1cm4gL1te0LAt0Y/QkC3Qr9GR0IFdKyQvZy50ZXN0KGlucHV0LnZhbHVlKVxufVxuXG5mdW5jdGlvbiBlbWFpbFRlc3QoaW5wdXQpIHtcbiAgcmV0dXJuIC9cXEFbXkBdK0AoW15AXFwuXStcXC4pK1teQFxcLl0rXFx6L2cudGVzdChpbnB1dC52YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHBob25lVGVzdChpbnB1dCkge1xuICByZXR1cm4gL1teXFxkXS9nLnRlc3QoaW5wdXQudmFsdWUpXG59XG5cbmlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kZXgnKSkge1xuICBjb25zdCBoZXJvU3dpcGVyID0gbmV3IFN3aXBlcignLmhlcm9fX3N3aXBlcicsIHtcbiAgICAvLyBEZWZhdWx0IHBhcmFtZXRlcnNcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMTAsXG4gICAgc3BlZWQ6IDIwMDAsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAyMDAwXG4gICAgfSxcbiAgICBlZmZlY3Q6IFwiZmFkZVwiLFxuICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICBwYWdpbmF0aW9uOiB7XG4gICAgICBlbDogJy5oZXJvX19wYWdpbmF0aW9uLXN3aXBlcicsXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXG4gICAgICBjbGlja2FibGU6IHRydWVcbiAgICB9XG5cbiAgfSlcblxuICBjb25zdCBzcGVjaWFsU3dpcGVyID0gbmV3IFN3aXBlcignLnNwZWNpYWxfX3N3aXBlcicsIHtcbiAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc3BlY2lhbF9fbmF2aWdhdGlvbi1uZXh0LWJ0blwiLFxuICAgICAgcHJldkVsOiBcIi5zcGVjaWFsX19uYXZpZ2F0aW9uLXByZXYtYnRuXCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDJcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDNcbiAgICAgIH0sXG4gICAgICAxMTEwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDNcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc2hvd01vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF0ZV9fYnRuJyk7XG4gIGNvbnN0IHByb2R1Y3RMZW5ndCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yYXRlX19jYXJkJykubGVuZ3RoXG4gIGNvbnN0IGFycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmF0ZV9fY2F0YWxvZycpLmNoaWxkcmVuKVxuXG4gIGZ1bmN0aW9uIHNob3dNb3JlRnVuYyhjb3VudCwgY291bnRTbGljZSkge1xuICAgIGxldCBpdGVtcyA9IGNvdW50O1xuXG4gICAgc2hvd01vcmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBpdGVtcyArPSBjb3VudFNsaWNlXG4gICAgICBjb25zdCB2aXNJdGVtID0gYXJyYXkuc2xpY2UoMCwgaXRlbXMpXG4gICAgICB2aXNJdGVtLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnaXMtdmlzaWJsZScpKVxuICAgICAgaWYgKHByb2R1Y3RMZW5ndCA9PT0gdmlzSXRlbS5sZW5ndGgpIHtcbiAgICAgICAgc2hvd01vcmUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gbWF0Y2hNZWRpYUZ1bmMoKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogOTkycHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIHNob3dNb3JlRnVuYyg2LCAyKVxuICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTEwcHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIHNob3dNb3JlRnVuYyg2LCAgMylcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogMTExMXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICBzaG93TW9yZUZ1bmMoOCwgIDQpXG4gICAgfVxuICB9XG5cbiAgbWF0Y2hNZWRpYUZ1bmMoKVxuXG5cbiAgY29uc3QgdXNlZnVsU3dpcGVyID0gbmV3IFN3aXBlcignLnVzZWZ1bF9fc3dpcGVyJywge1xuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICBzbGlkZXNQZXJHcm91cDogMSxcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLnVzZWZ1bF9fbmF2aWdhdGlvbi1uZXh0LWJ0blwiLFxuICAgICAgcHJldkVsOiBcIi51c2VmdWxfX25hdmlnYXRpb24tcHJldi1idG5cIlxuICAgIH0sXG4gICAgYnJlYWtwb2ludHM6IHtcbiAgICAgIDYwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgfSxcbiAgICAgIDk5Mjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgfSxcbiAgICAgIDExMTA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIH1cbiAgICB9XG5cblxuICB9KVxuXG4gIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19faW5wdXRbdHlwZT10ZXh0XScpO1xuICBjb25zdCBpbnB1dEVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19pbnB1dFt0eXBlPWVtYWlsXScpO1xuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19faW5wdXRbdHlwZT10ZWxdJyk7XG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2Zvcm0nKTtcbiAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2NoZWNrYm94JylcbiAgY29uc3QgbW9kYWxDTGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbGljaycpO1xuICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY29udGFpbmVyJylcbiAgZnVuY3Rpb24gdmFsaWRhdGUoZm9ybSkge1xuICAgIGxldCBlcnJvciA9IDBcbiAgICByZW1vdmVFcnJvcihpbnB1dE5hbWUpXG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dE5hbWUpXG4gICAgaWYgKGlucHV0TmFtZS52YWx1ZS5sZW5ndGggPCA0IHx8IHRleHRUZXN0KGlucHV0TmFtZSkpIHtcbiAgICAgIGFkZEVycm9yKGlucHV0TmFtZSlcbiAgICAgIGVycm9yKytcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dE5hbWUpXG4gICAgfVxuICAgIHJlbW92ZUVycm9yKGlucHV0RW1haWwpO1xuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXRFbWFpbClcbiAgICBpZiAoaW5wdXRFbWFpbC52YWx1ZS5sZW5ndGggPCA0IHx8IGVtYWlsVGVzdChpbnB1dEVtYWlsKSkge1xuICAgICAgYWRkRXJyb3IoaW5wdXRFbWFpbClcbiAgICAgIGVycm9yKytcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dEVtYWlsKVxuICAgIH1cblxuICAgIHJlbW92ZUVycm9yKGlucHV0VGVsKTtcbiAgICByZW1vdmVTdWNjZXNzKGlucHV0VGVsKVxuICAgIGlmIChpbnB1dFRlbC52YWx1ZS5sZW5ndGggPCA2IHx8IHBob25lVGVzdChpbnB1dFRlbCkpIHtcbiAgICAgIGFkZEVycm9yKGlucHV0VGVsKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRTdWNjZXNzKGlucHV0VGVsKVxuICAgIH1cblxuICAgIGlmICghY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgZXJyb3IrK1xuICAgIH1cblxuICAgIHJldHVybiBlcnJvclxuICB9XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGVycm9yID0gdmFsaWRhdGUoZm9ybSlcblxuICAgIGlmIChlcnJvciA9PT0gMCkge1xuICAgICAgY2xlYXJJbnB1dChpbnB1dE5hbWUpO1xuICAgICAgY2xlYXJJbnB1dChpbnB1dEVtYWlsKTtcbiAgICAgIGNsZWFySW5wdXQoaW5wdXRUZWwpXG4gICAgICByZW1vdmVFcnJvcihpbnB1dE5hbWUpXG4gICAgICByZW1vdmVTdWNjZXNzKGlucHV0TmFtZSlcbiAgICAgIHJlbW92ZUVycm9yKGlucHV0RW1haWwpO1xuICAgICAgcmVtb3ZlU3VjY2VzcyhpbnB1dEVtYWlsKVxuICAgICAgcmVtb3ZlRXJyb3IoaW5wdXRUZWwpO1xuICAgICAgcmVtb3ZlU3VjY2VzcyhpbnB1dFRlbCk7XG4gICAgICBtb2RhbENMaWNrLmNsYXNzTGlzdC5hZGQoJ21vZGFsLS1hY3RpdmUnKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgfVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYoZS50YXJnZXQgPT09IG1vZGFsQ0xpY2sgfHwgZS50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyKSB7XG4gICAgICBtb2RhbENMaWNrLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICB9XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHJlbW92ZUVycm9yKGlucHV0TmFtZSlcbiAgICByZW1vdmVTdWNjZXNzKGlucHV0TmFtZSlcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoaW5wdXROYW1lLnZhbHVlLmxlbmd0aCA8IDQgfHwgdGV4dFRlc3QoaW5wdXROYW1lKSkge1xuICAgICAgYWRkRXJyb3IoaW5wdXROYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRTdWNjZXNzKGlucHV0TmFtZSlcbiAgICB9XG4gIH0pXG5cblxuICBpbnB1dEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHJlbW92ZUVycm9yKGlucHV0RW1haWwpO1xuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXRFbWFpbClcbiAgfSlcblxuICBpbnB1dEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaWYgKGlucHV0RW1haWwudmFsdWUubGVuZ3RoIDwgNCB8fCBlbWFpbFRlc3QoaW5wdXRFbWFpbCkpIHtcbiAgICAgIGFkZEVycm9yKGlucHV0RW1haWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN1Y2Nlc3MoaW5wdXRFbWFpbClcbiAgICB9XG4gIH0pXG5cblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICByZW1vdmVFcnJvcihpbnB1dFRlbCk7XG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dFRlbClcbiAgfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoaW5wdXRUZWwudmFsdWUubGVuZ3RoIDwgNiB8fCBwaG9uZVRlc3QoaW5wdXRUZWwpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dFRlbClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dFRlbClcbiAgICB9XG4gIH0pXG5cblxufSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZycpKSB7XG4gIGNvbnN0IHJhbmdlU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXNsaWRlcicpO1xuXG4gIGlmIChyYW5nZVNsaWRlcikge1xuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHJhbmdlU2xpZGVyLCB7XG4gICAgICBzdGFydDogWzIwMDAsIDE1MDAwMF0sXG4gICAgICBjb25uZWN0OiB0cnVlLFxuICAgICAgc3RlcDogMSxcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgICdtaW4nOiBbMF0sXG4gICAgICAgICdtYXgnOiBbMjAwMDAwXVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGlucHV0MCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC0wJyk7XG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LTEnKTtcbiAgICBjb25zdCBpbnB1dHMgPSBbaW5wdXQwLCBpbnB1dDFdO1xuXG4gICAgcmFuZ2VTbGlkZXIubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24odmFsdWVzLCBoYW5kbGUpe1xuICAgICAgaW5wdXRzW2hhbmRsZV0udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldFJhbmdlU2xpZGVyID0gKGksIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgYXJyID0gW251bGwsIG51bGxdO1xuICAgICAgYXJyW2ldID0gdmFsdWU7XG5cbiAgICAgIGNvbnNvbGUubG9nKGFycik7XG5cbiAgICAgIHJhbmdlU2xpZGVyLm5vVWlTbGlkZXIuc2V0KGFycik7XG4gICAgfTtcblxuICAgIGlucHV0cy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgc2V0UmFuZ2VTbGlkZXIoaW5kZXgsIGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBjYXRhbG9nU3dpcGVyID0gbmV3IFN3aXBlcignLmNhdGFsb2dfX3N3aXBlcicsIHtcbiAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgZ3JpZDoge1xuICAgICAgZmlsbDogJ3JvdycsXG4gICAgICByb3dzOiAzXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNjAwOiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgZmlsbDogJ3JvdycsXG4gICAgICAgICAgcm93czogM1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIDk5Mjoge1xuICAgICAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIGZpbGw6ICdyb3cnLFxuICAgICAgICAgIHJvd3M6IDNcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLmNhdGFsb2dfX3BhZ2luYXRpb24tc3dpcGVyJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgXCI8L3NwYW4+XCI7XG4gICAgICB9XG4gICAgfSxcblxuXG4gIH0pXG5cbiAgY29uc3QgZHJvcGRvd25IZWFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWhlYWQnKTtcblxuICBkcm9wZG93bkhlYWRkZXIuZm9yRWFjaChoZWFkID0+IHtcbiAgICBoZWFkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZHJvcGRvd24gPSBoZWFkLnBhcmVudEVsZW1lbnRcbiAgICAgIGNvbnN0IGRyb3Bkb3duQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLS1hY3RpdmUnKVxuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLWFjdGl2ZScpXG4gICAgICBkcm9wZG93bkFjdGl2ZS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1hY3RpdmUnKTtcbiAgICAgIH0pXG4gICAgICBpZiAoaGVhZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tLWFjdGl2ZScpKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuZHJvcGRvd24tYm9keSwgLmRyb3Bkb3duLWhlYWQnKSkge1xuICAgICAgICAgICAgaGVhZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1hY3RpdmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY3VycmVudCA9IGhlYWQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnRcbiAgICBoZWFkLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94JykuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGhlYWQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBlbC5jaGVja2VkICYmIGFycmF5LnB1c2goJyAnICsgZWwubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudClcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGhlYWQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWN1cnJlbnQnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoZWFkLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jdXJyZW50JykudGV4dENvbnRlbnQgPSBhcnJheVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgfSlcbn0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QnKSkge1xuXG4gIGNvbnN0IHByb2R1Y3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1nLWJ0bicpXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJylcblxuICBwcm9kdWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gIH0pXG5cbiAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBidXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fYnRuJyk7XG4gIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtJylcbiAgY29uc3QgbW9kYWxDbG9zZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybV9fY2xvc2UnKTtcblxuICBidXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBtb2RhbEZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gIH0pXG5cbiAgbW9kYWxDbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICBtb2RhbEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsRm9ybSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm1fX2lucHV0W3R5cGU9dGV4dF0nKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtX19pbnB1dFt0eXBlPXRlbF0nKVxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcmVtb3ZlRXJyb3IoaW5wdXROYW1lKVxuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXROYW1lKVxuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoIDwgNCB8fCB0ZXh0VGVzdChpbnB1dE5hbWUpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN1Y2Nlc3MoaW5wdXROYW1lKVxuICAgIH1cbiAgfSlcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICByZW1vdmVFcnJvcihpbnB1dFRlbCk7XG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dFRlbClcbiAgfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoaW5wdXRUZWwudmFsdWUubGVuZ3RoIDwgNiB8fCBwaG9uZVRlc3QoaW5wdXRUZWwpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dFRlbClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dFRlbClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IG1vZGFsQ0xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xpY2snKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtX19mb3JtJyk7XG4gIGNvbnN0IG1vZGFsQ2xvc2VDbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbGlja19fY2xvc2UnKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XG4gICAgbW9kYWxDTGljay5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJyk7XG4gIH0pXG5cbiAgbW9kYWxDbG9zZUNsaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXG4gICAgbW9kYWxDTGljay5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWxDTGljaykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsQ0xpY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHByb2R1Y3RTd2lwZXIgPSBuZXcgU3dpcGVyKCcucHJvZHVjdF9fc3dpcGVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzgsXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzOCxcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc2ltaWxhclN3aXBlciA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyX19zd2lwZXInLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc2ltaWxhcl9fbmF2aWdhdGlvbi1uZXh0LWJ0blwiLFxuICAgICAgcHJldkVsOiBcIi5zaW1pbGFyX19uYXZpZ2F0aW9uLXByZXYtYnRuXCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICB9LFxuICAgICAgOTkyOiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgfSxcbiAgICAgIDExMTA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9kYWxTd2lwZXIgPSBuZXcgU3dpcGVyKCcubW9kYWxfX3N3aXBlcicsIHtcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLm1vZGFsX19uYXZpZ2F0aW9uLW5leHQtYnRuXCIsXG4gICAgICBwcmV2RWw6IFwiLm1vZGFsX19uYXZpZ2F0aW9uLXByZXYtYnRuXCJcbiAgICB9LFxuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiA3OCxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNjAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA3OFxuICAgICAgfSxcbiAgICAgIDk5Mjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNzgsXG4gICAgICB9LFxuICAgICAgMTMwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNzhcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmxhenlsb2FkKCkiLCJjb25zdCBzZWxlY3RSZWdpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19yZWdpb24tc2VsZWN0Jyk7XG5jb25zdCBjaG9pY2VzUmVnaW9uID0gbmV3IENob2ljZXMoc2VsZWN0UmVnaW9uLCB7XG4gIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICBpdGVtU2VsZWN0VGV4dDogJycsXG59KTtcblxuY29uc3Qgc2VsZWN0Q2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19jYXRlZ29yeS1zZWxlY3QnKVxuY29uc3QgY2hvaWNlc0NhdGVnb3J5ID0gbmV3IENob2ljZXMoc2VsZWN0Q2F0ZWdvcnksIHtcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbiAgc2hvdWxkU29ydDohMSxcbn0pO1xuIl19
