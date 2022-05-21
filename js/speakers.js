const detectMob = () => window.innerWidth <= 768;

const data = [
  {
    id: 'ebeb3b9a-4a52-4fea-bd33-8ff70824ef8b',
    name: 'Frank Heys',
    about: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio',
    message:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    img: 'img/speakers/1.webp',
  },
  {
    id: 'd28c9e17-7dd9-4bc0-8775-0e03fb93665d',
    name: 'Devan Ropkins',
    about: 'Fusce posuere felis sed lacus. Morbi sem mauris',
    message: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    img: 'img/speakers/2.webp',
  },
  {
    id: 'dc1a61d9-1a70-4ad9-ad62-13a123865cbf',
    name: 'Corabelle Lambdon',
    about:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula',
    message:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    img: 'img/speakers/3.webp',
  },
  {
    id: 'bfa8df75-7556-43d0-a147-7c3e6fb7777f',
    name: 'Lynette Storms',
    about:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    message:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus ',
    img: 'img/speakers/4.webp',
  },
  {
    id: '62c8e787-bcc3-40c3-b80f-9f0a90402a56',
    name: 'Davide Laity',
    about:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    message: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    img: 'img/speakers/5.webp',
  },
  {
    id: '2219ca0c-403d-42ac-ab30-00674c16b25c',
    name: 'Ingrid Almon',
    about: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    message: 'Cum sociis natoque penatibus et magnis dis parturient montes',
    img: 'img/speakers/6.webp',
  },
];

const viewMore = document.querySelector('.view-more');
const viewLess = document.querySelector('.view-less');
const defaultArrLength = 2;

viewLess.classList.add('d-none');
const dynamic = document.querySelector('.speaker-container');
let speakersLength = detectMob() ? defaultArrLength : data.length;

const printData = (arrLength) => {
  for (let i = arrLength - 1; i >= 0; i -= 1) {
    const fetch = document.querySelector('.speaker-container').innerHTML;

    dynamic.innerHTML = ` 
  <div class="col">
              <div class="speakers--content">

    <div class="speakers__card">
    <div class="speakers__img--container">
        <img
              src="${data[i].img}"
    alt="${data[i].name}"
    title="${data[i].name}"
          class="speakers__img"
        />
      </div>
      <div class="speakers__card--info">
        <h4 class='speakers__card--header'>${data[i].name}</h4>
        <p class="speakers__card--info__about">
          ${data[i].about}
        </p>
        <hr class="speakers__hr" />
        <p class="speakers__card--info__msg">
          ${data[i].message}
        </p>
      </div>
      </div>

    </div>
  </div>
  
${fetch}`;
  }
};
printData(speakersLength);

viewMore.addEventListener('click', () => {
  dynamic.innerHTML = '';
  viewMore.classList.add('d-none');
  viewLess.classList.remove('d-none');
  printData(data.length);
});

viewLess.addEventListener('click', () => {
  dynamic.innerHTML = '';
  viewMore.classList.remove('d-none');
  viewLess.classList.add('d-none');
  speakersLength = defaultArrLength;
  printData(speakersLength);
});

window.onresize = () => {
  if (detectMob()) {
    dynamic.innerHTML = '';
    printData(2);
  } else {
    dynamic.innerHTML = '';
    printData(data.length);
  }
};
