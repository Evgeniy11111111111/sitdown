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

  var _modalClose = document.querySelector('.modal__close');

  productBtn.addEventListener('click', function () {
    document.body.classList.add('lock');
    modal.classList.add('modal--active');
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJjb21wb25lbnRzL3NlbGVjdC5qcyJdLCJuYW1lcyI6WyJzZWxlY3RSZWdpb24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjaG9pY2VzUmVnaW9uIiwiQ2hvaWNlcyIsInNlYXJjaEVuYWJsZWQiLCJpdGVtU2VsZWN0VGV4dCIsInNlbGVjdENhdGVnb3J5IiwiY2hvaWNlc0NhdGVnb3J5Iiwic2hvdWxkU29ydCIsImJ1cmdlciIsIm1lbnUiLCJtZW51SXRlbXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwic2V0QXR0cmlidXRlIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJyZW1vdmUiLCJmb3JFYWNoIiwiZWwiLCJjbGVhcklucHV0IiwiaW5wdXQiLCJ2YWx1ZSIsImFkZEVycm9yIiwicGFyZW50RWxlbWVudCIsImFkZCIsInJlbW92ZUVycm9yIiwiYWRkU3VjY2VzcyIsInJlbW92ZVN1Y2Nlc3MiLCJ0ZXh0VGVzdCIsInRlc3QiLCJlbWFpbFRlc3QiLCJwaG9uZVRlc3QiLCJnZXRFbGVtZW50QnlJZCIsInNob3dNb3JlRnVuYyIsImNvdW50IiwiY291bnRTbGljZSIsIml0ZW1zIiwic2hvd01vcmUiLCJ2aXNJdGVtIiwiYXJyYXkiLCJzbGljZSIsInByb2R1Y3RMZW5ndCIsImxlbmd0aCIsInN0eWxlIiwiZGlzcGxheSIsIm1hdGNoTWVkaWFGdW5jIiwid2luZG93IiwibWF0Y2hNZWRpYSIsIm1hdGNoZXMiLCJ2YWxpZGF0ZSIsImZvcm0iLCJlcnJvciIsImlucHV0TmFtZSIsImlucHV0RW1haWwiLCJpbnB1dFRlbCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImhlcm9Td2lwZXIiLCJTd2lwZXIiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwic3BlZWQiLCJhdXRvcGxheSIsImRlbGF5IiwiZWZmZWN0IiwiYWxsb3dUb3VjaE1vdmUiLCJwYWdpbmF0aW9uIiwidHlwZSIsImNsaWNrYWJsZSIsInNwZWNpYWxTd2lwZXIiLCJuYXZpZ2F0aW9uIiwibmV4dEVsIiwicHJldkVsIiwiYnJlYWtwb2ludHMiLCJzbGlkZXNQZXJHcm91cCIsIkFycmF5IiwiZnJvbSIsImNoaWxkcmVuIiwidXNlZnVsU3dpcGVyIiwibW9kYWxDTGljayIsIm1vZGFsQ29udGFpbmVyIiwibW9kYWxDbG9zZSIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsInJhbmdlU2xpZGVyIiwibm9VaVNsaWRlciIsImNyZWF0ZSIsInN0YXJ0IiwiY29ubmVjdCIsInN0ZXAiLCJyYW5nZSIsImlucHV0MCIsImlucHV0MSIsImlucHV0cyIsIm9uIiwidmFsdWVzIiwiaGFuZGxlIiwiTWF0aCIsInJvdW5kIiwic2V0UmFuZ2VTbGlkZXIiLCJpIiwiYXJyIiwiY29uc29sZSIsImxvZyIsInNldCIsImluZGV4IiwiY3VycmVudFRhcmdldCIsImNhdGFsb2dTd2lwZXIiLCJhdXRvSGVpZ2h0IiwiZ3JpZCIsImZpbGwiLCJyb3dzIiwicmVuZGVyQnVsbGV0IiwiY2xhc3NOYW1lIiwiZHJvcGRvd25IZWFkZGVyIiwiaGVhZCIsImRyb3Bkb3duIiwiZHJvcGRvd25BY3RpdmUiLCJlbGVtIiwiY3VycmVudCIsImZpcnN0RWxlbWVudENoaWxkIiwidGV4dENvbnRlbnQiLCJwdXNoIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwicHJvZHVjdEJ0biIsIm1vZGFsIiwiYnV5IiwibW9kYWxGb3JtIiwibW9kYWxDbG9zZUZvcm0iLCJtb2RhbENsb3NlQ2xpY2siLCJwcm9kdWN0U3dpcGVyIiwiZGlyZWN0aW9uIiwic2ltaWxhclN3aXBlciIsIm1vZGFsU3dpcGVyIiwibGF6eWxvYWQiXSwibWFwcGluZ3MiOiI7O0FBQ0EsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsd0JBQXZCLENBQXJCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLElBQUlDLE9BQUosQ0FBWUosWUFBWixFQUEwQjtF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Q1ZDLE1BQU0sRUFBRSw2QkFERTtNQUVWQyxNQUFNLEVBQUU7SUFGRSxDQURtQztJQUsvQ2IsYUFBYSxFQUFFLENBTGdDO0lBTS9DQyxZQUFZLEVBQUUsRUFOaUM7SUFPL0NhLFdBQVcsRUFBRTtNQUNYLEtBQUs7UUFDSGQsYUFBYSxFQUFFLE1BRFo7UUFFSEMsWUFBWSxFQUFFO01BRlgsQ0FETTtNQUtYLEtBQUs7UUFDSEQsYUFBYSxFQUFFLE1BRFo7UUFFSEMsWUFBWSxFQUFFO01BRlgsQ0FMTTtNQVNYLE1BQU07UUFDSkQsYUFBYSxFQUFFLE1BRFg7UUFFSkMsWUFBWSxFQUFFO01BRlY7SUFUSztFQVBrQyxDQUE3QixDQUFwQjtBQXNCRDs7QUFFRDBFLFFBQVE7OztBQ3JqQlIsSUFBTTVJLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFyQjtBQUNBLElBQU1DLGFBQWEsR0FBRyxJQUFJQyxPQUFKLENBQVlKLFlBQVosRUFBMEI7RUFDOUNLLGFBQWEsRUFBRSxLQUQrQjtFQUU5Q0MsY0FBYyxFQUFFO0FBRjhCLENBQTFCLENBQXRCO0FBS0EsSUFBTUMsY0FBYyxHQUFHTixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsMEJBQXZCLENBQXZCO0FBQ0EsSUFBTU0sZUFBZSxHQUFHLElBQUlKLE9BQUosQ0FBWUcsY0FBWixFQUE0QjtFQUNsREYsYUFBYSxFQUFFLEtBRG1DO0VBRWxEQyxjQUFjLEVBQUUsRUFGa0M7RUFHbERHLFVBQVUsRUFBQyxDQUFDO0FBSHNDLENBQTVCLENBQXhCIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHNlbGVjdFJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JlZ2lvbi1zZWxlY3QnKTtcbmNvbnN0IGNob2ljZXNSZWdpb24gPSBuZXcgQ2hvaWNlcyhzZWxlY3RSZWdpb24sIHtcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbn0pXG5cbmNvbnN0IHNlbGVjdENhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fY2F0ZWdvcnktc2VsZWN0JylcbmNvbnN0IGNob2ljZXNDYXRlZ29yeSA9IG5ldyBDaG9pY2VzKHNlbGVjdENhdGVnb3J5LCB7XG4gIHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxuICBpdGVtU2VsZWN0VGV4dDogJycsXG4gIHNob3VsZFNvcnQ6ITEsXG59KVxuXG5jb25zdCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJyk7XG5jb25zdCBtZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpO1xuY29uc3QgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWVudS1pdGVtXScpO1xuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItLWFjdGl2ZScpXG4gIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS0tYWN0aXZlJyk7XG5cbiAgaWYgKG1lbnU/LmNsYXNzTGlzdC5jb250YWlucygnbWVudS0tYWN0aXZlJykpIHtcbiAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG4gICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAn0JfQsNC60YDRi9GC0Ywg0LzQtdC90Y4nKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19tZW51LCAuYnVyZ2VyJykpIHtcbiAgICAgICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICAgICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAn0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4nKTtcbiAgICAgICAgYnVyZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ2J1cmdlci0tYWN0aXZlJyk7XG4gICAgICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tYWN0aXZlJyk7XG5cbiAgICAgIH1cbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGJ1cmdlcj8uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG4gICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCAn0J7RgtC60YDRi9GC0Ywg0LzQtdC90Y4nKTtcbiAgfVxufSlcblxubWVudUl0ZW1zPy5mb3JFYWNoKGVsID0+IHtcbiAgZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYnVyZ2VyPy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnKTtcbiAgICBidXJnZXI/LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsICfQntGC0LrRgNGL0YLRjCDQvNC10L3RjicpO1xuICAgIGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdidXJnZXItLWFjdGl2ZScpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tYWN0aXZlJyk7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFySW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3IoaW5wdXQpIHtcbiAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdlcnJvcicpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVycm9yKGlucHV0KSB7XG4gIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZXJyb3InKVxufVxuXG5mdW5jdGlvbiBhZGRTdWNjZXNzKGlucHV0KSB7XG4gIGlucHV0LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpXG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN1Y2Nlc3MoaW5wdXQpIHtcbiAgaW5wdXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJylcbn1cblxuZnVuY3Rpb24gdGV4dFRlc3QoaW5wdXQpIHtcbiAgcmV0dXJuIC9bXtCwLdGP0JAt0K/RkdCBXSskL2cudGVzdChpbnB1dC52YWx1ZSlcbn1cblxuZnVuY3Rpb24gZW1haWxUZXN0KGlucHV0KSB7XG4gIHJldHVybiAvXFxBW15AXStAKFteQFxcLl0rXFwuKStbXkBcXC5dK1xcei9nLnRlc3QoaW5wdXQudmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwaG9uZVRlc3QoaW5wdXQpIHtcbiAgcmV0dXJuIC9bXlxcZF0vZy50ZXN0KGlucHV0LnZhbHVlKVxufVxuXG5pZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luZGV4JykpIHtcbiAgY29uc3QgaGVyb1N3aXBlciA9IG5ldyBTd2lwZXIoJy5oZXJvX19zd2lwZXInLCB7XG4gICAgLy8gRGVmYXVsdCBwYXJhbWV0ZXJzXG4gICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICBzcGFjZUJldHdlZW46IDEwLFxuICAgIHNwZWVkOiAyMDAwLFxuICAgIGF1dG9wbGF5OiB7XG4gICAgICBkZWxheTogMjAwMFxuICAgIH0sXG4gICAgZWZmZWN0OiBcImZhZGVcIixcbiAgICBhbGxvd1RvdWNoTW92ZTogZmFsc2UsXG4gICAgcGFnaW5hdGlvbjoge1xuICAgICAgZWw6ICcuaGVyb19fcGFnaW5hdGlvbi1zd2lwZXInLFxuICAgICAgdHlwZTogJ2J1bGxldHMnLFxuICAgICAgY2xpY2thYmxlOiB0cnVlXG4gICAgfVxuXG4gIH0pXG5cbiAgY29uc3Qgc3BlY2lhbFN3aXBlciA9IG5ldyBTd2lwZXIoJy5zcGVjaWFsX19zd2lwZXInLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLnNwZWNpYWxfX25hdmlnYXRpb24tbmV4dC1idG5cIixcbiAgICAgIHByZXZFbDogXCIuc3BlY2lhbF9fbmF2aWdhdGlvbi1wcmV2LWJ0blwiXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNjAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAyXG4gICAgICB9LFxuICAgICAgOTkyOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAzXG4gICAgICB9LFxuICAgICAgMTExMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAzXG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHNob3dNb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGVfX2J0bicpO1xuICBjb25zdCBwcm9kdWN0TGVuZ3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmF0ZV9fY2FyZCcpLmxlbmd0aFxuICBjb25zdCBhcnJheSA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJhdGVfX2NhdGFsb2cnKS5jaGlsZHJlbilcblxuICBmdW5jdGlvbiBzaG93TW9yZUZ1bmMoY291bnQsIGNvdW50U2xpY2UpIHtcbiAgICBsZXQgaXRlbXMgPSBjb3VudDtcblxuICAgIHNob3dNb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgaXRlbXMgKz0gY291bnRTbGljZVxuICAgICAgY29uc3QgdmlzSXRlbSA9IGFycmF5LnNsaWNlKDAsIGl0ZW1zKVxuICAgICAgdmlzSXRlbS5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2lzLXZpc2libGUnKSlcbiAgICAgIGlmIChwcm9kdWN0TGVuZ3QgPT09IHZpc0l0ZW0ubGVuZ3RoKSB7XG4gICAgICAgIHNob3dNb3JlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hdGNoTWVkaWFGdW5jKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDk5MnB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICBzaG93TW9yZUZ1bmMoNiwgMilcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTExMHB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICBzaG93TW9yZUZ1bmMoNiwgIDMpXG4gICAgfSBlbHNlIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDExMTFweClcIikubWF0Y2hlcykge1xuICAgICAgc2hvd01vcmVGdW5jKDgsICA0KVxuICAgIH1cbiAgfVxuXG4gIG1hdGNoTWVkaWFGdW5jKClcblxuXG4gIGNvbnN0IHVzZWZ1bFN3aXBlciA9IG5ldyBTd2lwZXIoJy51c2VmdWxfX3N3aXBlcicsIHtcbiAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgbmF2aWdhdGlvbjoge1xuICAgICAgbmV4dEVsOiBcIi51c2VmdWxfX25hdmlnYXRpb24tbmV4dC1idG5cIixcbiAgICAgIHByZXZFbDogXCIudXNlZnVsX19uYXZpZ2F0aW9uLXByZXYtYnRuXCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIH0sXG4gICAgICAxMTEwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICB9XG4gICAgfVxuXG5cbiAgfSlcblxuICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2lucHV0W3R5cGU9dGV4dF0nKTtcbiAgY29uc3QgaW5wdXRFbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19faW5wdXRbdHlwZT1lbWFpbF0nKTtcbiAgY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2lucHV0W3R5cGU9dGVsXScpO1xuICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19mb3JtJyk7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19jaGVja2JveCcpXG4gIGNvbnN0IG1vZGFsQ0xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xpY2snKTtcbiAgY29uc3QgbW9kYWxDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2NvbnRhaW5lcicpO1xuICBjb25zdCBtb2RhbENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNsaWNrX19jbG9zZScpXG4gIGZ1bmN0aW9uIHZhbGlkYXRlKGZvcm0pIHtcbiAgICBsZXQgZXJyb3IgPSAwXG4gICAgcmVtb3ZlRXJyb3IoaW5wdXROYW1lKVxuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXROYW1lKVxuICAgIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoIDwgNCB8fCB0ZXh0VGVzdChpbnB1dE5hbWUpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dE5hbWUpXG4gICAgICBlcnJvcisrXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN1Y2Nlc3MoaW5wdXROYW1lKVxuICAgIH1cbiAgICByZW1vdmVFcnJvcihpbnB1dEVtYWlsKTtcbiAgICByZW1vdmVTdWNjZXNzKGlucHV0RW1haWwpXG4gICAgaWYgKGlucHV0RW1haWwudmFsdWUubGVuZ3RoIDwgNCB8fCBlbWFpbFRlc3QoaW5wdXRFbWFpbCkpIHtcbiAgICAgIGFkZEVycm9yKGlucHV0RW1haWwpXG4gICAgICBlcnJvcisrXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN1Y2Nlc3MoaW5wdXRFbWFpbClcbiAgICB9XG5cbiAgICByZW1vdmVFcnJvcihpbnB1dFRlbCk7XG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dFRlbClcbiAgICBpZiAoaW5wdXRUZWwudmFsdWUubGVuZ3RoIDwgNiB8fCBwaG9uZVRlc3QoaW5wdXRUZWwpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dFRlbClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dFRlbClcbiAgICB9XG5cbiAgICBpZiAoIWNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIGVycm9yKytcbiAgICB9XG5cbiAgICByZXR1cm4gZXJyb3JcbiAgfVxuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBlcnJvciA9IHZhbGlkYXRlKGZvcm0pXG5cbiAgICBpZiAoZXJyb3IgPT09IDApIHtcbiAgICAgIGNsZWFySW5wdXQoaW5wdXROYW1lKTtcbiAgICAgIGNsZWFySW5wdXQoaW5wdXRFbWFpbCk7XG4gICAgICBjbGVhcklucHV0KGlucHV0VGVsKVxuICAgICAgcmVtb3ZlRXJyb3IoaW5wdXROYW1lKVxuICAgICAgcmVtb3ZlU3VjY2VzcyhpbnB1dE5hbWUpXG4gICAgICByZW1vdmVFcnJvcihpbnB1dEVtYWlsKTtcbiAgICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXRFbWFpbClcbiAgICAgIHJlbW92ZUVycm9yKGlucHV0VGVsKTtcbiAgICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXRUZWwpO1xuICAgICAgbW9kYWxDTGljay5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvY2snKVxuICAgIH1cbiAgfSlcblxuICBtb2RhbENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG1vZGFsQ0xpY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpO1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpO1xuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYoZS50YXJnZXQgPT09IG1vZGFsQ0xpY2sgfHwgZS50YXJnZXQgPT09IG1vZGFsQ29udGFpbmVyKSB7XG4gICAgICBtb2RhbENMaWNrLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICB9XG4gIH0pXG5cbiAgaW5wdXROYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHJlbW92ZUVycm9yKGlucHV0TmFtZSlcbiAgICByZW1vdmVTdWNjZXNzKGlucHV0TmFtZSlcbiAgfSlcblxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoaW5wdXROYW1lLnZhbHVlLmxlbmd0aCA8IDQgfHwgdGV4dFRlc3QoaW5wdXROYW1lKSkge1xuICAgICAgYWRkRXJyb3IoaW5wdXROYW1lKVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRTdWNjZXNzKGlucHV0TmFtZSlcbiAgICB9XG4gIH0pXG5cblxuICBpbnB1dEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgIHJlbW92ZUVycm9yKGlucHV0RW1haWwpO1xuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXRFbWFpbClcbiAgfSlcblxuICBpbnB1dEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgaWYgKGlucHV0RW1haWwudmFsdWUubGVuZ3RoIDwgNCB8fCBlbWFpbFRlc3QoaW5wdXRFbWFpbCkpIHtcbiAgICAgIGFkZEVycm9yKGlucHV0RW1haWwpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN1Y2Nlc3MoaW5wdXRFbWFpbClcbiAgICB9XG4gIH0pXG5cblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICByZW1vdmVFcnJvcihpbnB1dFRlbCk7XG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dFRlbClcbiAgfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoaW5wdXRUZWwudmFsdWUubGVuZ3RoIDwgNiB8fCBwaG9uZVRlc3QoaW5wdXRUZWwpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dFRlbClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dFRlbClcbiAgICB9XG4gIH0pXG5cblxufSBlbHNlIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0YWxvZycpKSB7XG4gIGNvbnN0IHJhbmdlU2xpZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmdlLXNsaWRlcicpO1xuXG4gIGlmIChyYW5nZVNsaWRlcikge1xuICAgIG5vVWlTbGlkZXIuY3JlYXRlKHJhbmdlU2xpZGVyLCB7XG4gICAgICBzdGFydDogWzIwMDAsIDE1MDAwMF0sXG4gICAgICBjb25uZWN0OiB0cnVlLFxuICAgICAgc3RlcDogMSxcbiAgICAgIHJhbmdlOiB7XG4gICAgICAgICdtaW4nOiBbMF0sXG4gICAgICAgICdtYXgnOiBbMjAwMDAwXVxuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGlucHV0MCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC0wJyk7XG4gICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LTEnKTtcbiAgICBjb25zdCBpbnB1dHMgPSBbaW5wdXQwLCBpbnB1dDFdO1xuXG4gICAgcmFuZ2VTbGlkZXIubm9VaVNsaWRlci5vbigndXBkYXRlJywgZnVuY3Rpb24odmFsdWVzLCBoYW5kbGUpe1xuICAgICAgaW5wdXRzW2hhbmRsZV0udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHNldFJhbmdlU2xpZGVyID0gKGksIHZhbHVlKSA9PiB7XG4gICAgICBsZXQgYXJyID0gW251bGwsIG51bGxdO1xuICAgICAgYXJyW2ldID0gdmFsdWU7XG5cbiAgICAgIGNvbnNvbGUubG9nKGFycik7XG5cbiAgICAgIHJhbmdlU2xpZGVyLm5vVWlTbGlkZXIuc2V0KGFycik7XG4gICAgfTtcblxuICAgIGlucHV0cy5mb3JFYWNoKChlbCwgaW5kZXgpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgc2V0UmFuZ2VTbGlkZXIoaW5kZXgsIGUuY3VycmVudFRhcmdldC52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGxldCBjYXRhbG9nU3dpcGVyID0gbmV3IFN3aXBlcignLmNhdGFsb2dfX3N3aXBlcicsIHtcbiAgICBzcGFjZUJldHdlZW46IDE2LFxuICAgIGF1dG9IZWlnaHQ6IGZhbHNlLFxuICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgc2xpZGVzUGVyR3JvdXA6IDIsXG4gICAgZ3JpZDoge1xuICAgICAgZmlsbDogJ3JvdycsXG4gICAgICByb3dzOiAzXG4gICAgfSxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNjAwOiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAyLFxuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgZmlsbDogJ3JvdycsXG4gICAgICAgICAgcm93czogM1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIDk5Mjoge1xuICAgICAgICBzcGFjZUJldHdlZW46IDMyLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgICBzbGlkZXNQZXJHcm91cDogMyxcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIGZpbGw6ICdyb3cnLFxuICAgICAgICAgIHJvd3M6IDNcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LFxuICAgIHBhZ2luYXRpb246IHtcbiAgICAgIGVsOiAnLmNhdGFsb2dfX3BhZ2luYXRpb24tc3dpcGVyJyxcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICAgIHJlbmRlckJ1bGxldDogZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbGFzc05hbWUgKyAnXCI+JyArIChpbmRleCArIDEpICsgXCI8L3NwYW4+XCI7XG4gICAgICB9XG4gICAgfSxcblxuXG4gIH0pXG5cbiAgY29uc3QgZHJvcGRvd25IZWFkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLWhlYWQnKTtcblxuICBkcm9wZG93bkhlYWRkZXIuZm9yRWFjaChoZWFkID0+IHtcbiAgICBoZWFkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3QgZHJvcGRvd24gPSBoZWFkLnBhcmVudEVsZW1lbnRcbiAgICAgIGNvbnN0IGRyb3Bkb3duQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRyb3Bkb3duLS1hY3RpdmUnKVxuICAgICAgZHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnZHJvcGRvd24tLWFjdGl2ZScpXG4gICAgICBkcm9wZG93bkFjdGl2ZS5mb3JFYWNoKGVsZW0gPT4ge1xuICAgICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1hY3RpdmUnKTtcbiAgICAgIH0pXG4gICAgICBpZiAoaGVhZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZHJvcGRvd24tLWFjdGl2ZScpKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcuZHJvcGRvd24tYm9keSwgLmRyb3Bkb3duLWhlYWQnKSkge1xuICAgICAgICAgICAgaGVhZC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3Bkb3duLS1hY3RpdmUnKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgY3VycmVudCA9IGhlYWQuZmlyc3RFbGVtZW50Q2hpbGQudGV4dENvbnRlbnRcbiAgICBoZWFkLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94JykuZm9yRWFjaChjaGVja2JveCA9PiB7XG4gICAgICBjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGFycmF5ID0gW107XG4gICAgICAgIGhlYWQucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgICBlbC5jaGVja2VkICYmIGFycmF5LnB1c2goJyAnICsgZWwubmV4dEVsZW1lbnRTaWJsaW5nLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudClcbiAgICAgICAgfSlcbiAgICAgICAgaWYgKGFycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgIGhlYWQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWN1cnJlbnQnKS50ZXh0Q29udGVudCA9IGN1cnJlbnRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBoZWFkLnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jdXJyZW50JykudGV4dENvbnRlbnQgPSBhcnJheVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG5cbiAgfSlcbn0gZWxzZSBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2R1Y3QnKSkge1xuXG4gIGNvbnN0IHByb2R1Y3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9faW1nLWJ0bicpXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IG1vZGFsQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlJylcblxuICBwcm9kdWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9jaycpXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gIH0pXG5cbiAgbW9kYWxDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2xvY2snKVxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLS1hY3RpdmUnKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBidXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fYnRuJyk7XG4gIGNvbnN0IG1vZGFsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtJylcbiAgY29uc3QgbW9kYWxDbG9zZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtZm9ybV9fY2xvc2UnKTtcblxuICBidXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2NrJylcbiAgICBtb2RhbEZvcm0uY2xhc3NMaXN0LmFkZCgnbW9kYWwtLWFjdGl2ZScpXG4gIH0pXG5cbiAgbW9kYWxDbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICBtb2RhbEZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gIH0pXG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsRm9ybSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWZvcm1fX2lucHV0W3R5cGU9dGV4dF0nKVxuICBjb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtX19pbnB1dFt0eXBlPXRlbF0nKVxuICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoKSA9PiB7XG4gICAgcmVtb3ZlRXJyb3IoaW5wdXROYW1lKVxuICAgIHJlbW92ZVN1Y2Nlc3MoaW5wdXROYW1lKVxuICB9KVxuXG4gIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgIGlmIChpbnB1dE5hbWUudmFsdWUubGVuZ3RoIDwgNCB8fCB0ZXh0VGVzdChpbnB1dE5hbWUpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dE5hbWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN1Y2Nlc3MoaW5wdXROYW1lKVxuICAgIH1cbiAgfSlcblxuICBpbnB1dFRlbC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcbiAgICByZW1vdmVFcnJvcihpbnB1dFRlbCk7XG4gICAgcmVtb3ZlU3VjY2VzcyhpbnB1dFRlbClcbiAgfSlcbiAgaW5wdXRUZWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBpZiAoaW5wdXRUZWwudmFsdWUubGVuZ3RoIDwgNiB8fCBwaG9uZVRlc3QoaW5wdXRUZWwpKSB7XG4gICAgICBhZGRFcnJvcihpbnB1dFRlbClcbiAgICB9IGVsc2Uge1xuICAgICAgYWRkU3VjY2VzcyhpbnB1dFRlbClcbiAgICB9XG4gIH0pXG4gIGNvbnN0IG1vZGFsQ0xpY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY2xpY2snKTtcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1mb3JtX19mb3JtJyk7XG4gIGNvbnN0IG1vZGFsQ2xvc2VDbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jbGlja19fY2xvc2UnKTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgIG1vZGFsRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJyk7XG4gICAgbW9kYWxDTGljay5jbGFzc0xpc3QuYWRkKCdtb2RhbC0tYWN0aXZlJyk7XG4gIH0pXG5cbiAgbW9kYWxDbG9zZUNsaWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbG9jaycpXG4gICAgbW9kYWxDTGljay5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC0tYWN0aXZlJylcbiAgfSlcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWxDTGljaykge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdsb2NrJylcbiAgICAgIG1vZGFsQ0xpY2suY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtLWFjdGl2ZScpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHByb2R1Y3RTd2lwZXIgPSBuZXcgU3dpcGVyKCcucHJvZHVjdF9fc3dpcGVyJywge1xuICAgIHNwYWNlQmV0d2VlbjogMzgsXG4gICAgc2xpZGVzUGVyVmlldzogJ2F1dG8nLFxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAndmVydGljYWwnLFxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIGFsbG93VG91Y2hNb3ZlOiBmYWxzZSxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAxOCxcbiAgICAgIH0sXG4gICAgICA5OTI6IHtcbiAgICAgICAgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzOCxcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc2ltaWxhclN3aXBlciA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyX19zd2lwZXInLCB7XG4gICAgc3BhY2VCZXR3ZWVuOiAxNixcbiAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgIG5hdmlnYXRpb246IHtcbiAgICAgIG5leHRFbDogXCIuc2ltaWxhcl9fbmF2aWdhdGlvbi1uZXh0LWJ0blwiLFxuICAgICAgcHJldkVsOiBcIi5zaW1pbGFyX19uYXZpZ2F0aW9uLXByZXYtYnRuXCJcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICA2MDA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG4gICAgICB9LFxuICAgICAgOTkyOiB7XG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzIsXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICAgIHNsaWRlc1Blckdyb3VwOiAxLFxuICAgICAgfSxcbiAgICAgIDExMTA6IHtcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMixcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc2xpZGVzUGVyR3JvdXA6IDEsXG5cbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgbW9kYWxTd2lwZXIgPSBuZXcgU3dpcGVyKCcubW9kYWxfX3N3aXBlcicsIHtcbiAgICBuYXZpZ2F0aW9uOiB7XG4gICAgICBuZXh0RWw6IFwiLm1vZGFsX19uYXZpZ2F0aW9uLW5leHQtYnRuXCIsXG4gICAgICBwcmV2RWw6IFwiLm1vZGFsX19uYXZpZ2F0aW9uLXByZXYtYnRuXCJcbiAgICB9LFxuICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgc3BhY2VCZXR3ZWVuOiA3OCxcbiAgICBicmVha3BvaW50czoge1xuICAgICAgNjAwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiA3OFxuICAgICAgfSxcbiAgICAgIDk5Mjoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNzgsXG4gICAgICB9LFxuICAgICAgMTMwMDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAnYXV0bycsXG4gICAgICAgIHNwYWNlQmV0d2VlbjogNzhcbiAgICAgIH1cbiAgICB9XG4gIH0pXG59XG5cbmxhenlsb2FkKClcbiIsImNvbnN0IHNlbGVjdFJlZ2lvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3JlZ2lvbi1zZWxlY3QnKTtcbmNvbnN0IGNob2ljZXNSZWdpb24gPSBuZXcgQ2hvaWNlcyhzZWxlY3RSZWdpb24sIHtcbiAgc2VhcmNoRW5hYmxlZDogZmFsc2UsXG4gIGl0ZW1TZWxlY3RUZXh0OiAnJyxcbn0pO1xuXG5jb25zdCBzZWxlY3RDYXRlZ29yeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2NhdGVnb3J5LXNlbGVjdCcpXG5jb25zdCBjaG9pY2VzQ2F0ZWdvcnkgPSBuZXcgQ2hvaWNlcyhzZWxlY3RDYXRlZ29yeSwge1xuICBzZWFyY2hFbmFibGVkOiBmYWxzZSxcbiAgaXRlbVNlbGVjdFRleHQ6ICcnLFxuICBzaG91bGRTb3J0OiExLFxufSk7XG4iXX0=
