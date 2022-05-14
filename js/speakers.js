const data = [
  {
    id: 'ebeb3b9a-4a52-4fea-bd33-8ff70824ef8b',
    name: 'Frank Heys',
    about: 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio',
    message:
      'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.',
    img: 'img/speaker_03.png',
  },
  {
    id: 'd28c9e17-7dd9-4bc0-8775-0e03fb93665d',
    name: 'Devan Ropkins',
    about: 'Fusce posuere felis sed lacus. Morbi sem mauris',
    message: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    img: 'img/speaker_03.png',
  },
  {
    id: 'dc1a61d9-1a70-4ad9-ad62-13a123865cbf',
    name: 'Corabelle Lambdon',
    about:
      'Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula',
    message:
      'Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
    img: 'img/speaker_03.png',
  },
  {
    id: 'bfa8df75-7556-43d0-a147-7c3e6fb7777f',
    name: 'Lynette Storms',
    about:
      'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    message:
      'Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus ',
    img: 'img/speaker_03.png',
  },
  {
    id: '62c8e787-bcc3-40c3-b80f-9f0a90402a56',
    name: 'Davide Laity',
    about:
      'In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
    message: 'Quisque id justo sit amet sapien dignissim vestibulum.',
    img: 'img/speaker_03.png',
  },
  {
    id: '2219ca0c-403d-42ac-ab30-00674c16b25c',
    name: 'Ingrid Almon',
    about: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
    message: 'Cum sociis natoque penatibus et magnis dis parturient montes',
    img: 'img/speaker_03.png',
  },
  {
    id: '9693c1ab-a6a8-44c9-9e78-fccee1700533',
    name: 'Doralynne Drinkhall',
    about:
      'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
    message: 'Fusce consequat. Nulla nisl. Nunc nisl.',
    img: 'img/speaker_03.png',
  },
  {
    id: 'eeba234e-7f5a-41ef-b88d-4615c37feecd',
    name: 'Felice Assandri',
    about: 'Cum sociis natoque penatibus et magnis dis parturient montes',
    message:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.',
    img: 'img/speaker_03.png',
  },
];

const dynamic = document.querySelector('.speaker-container');

for (let i = 0; i < data.length; i += 1) {
  const fetch = document.querySelector('.speaker-container').innerHTML;

  dynamic.innerHTML = ` 
    <div class="col">
      <div class="speakers__card">
      <div class="speakers__img">
          <img
                src="${data[i].img}"
      alt="${data[i].name}"
      title="${data[i].name}"
            class="img"
          />
        </div>
        <div class="speakers__card--info">
          <h4>${data[i].name}</h4>
          <p class="speakers__card--info__about">
            ${data[i].about}
          </p>
          <hr class="speakers__hr" />
          <p>
            ${data[i].message}
          </p>
        </div>
      </div>
    </div>
    
${fetch}`;
}
