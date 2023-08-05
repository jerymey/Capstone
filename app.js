const speakers = [
  {
    name: 'Ryan Merkley',
    work: 'Back End Dev',
    Image: 'images/speaker_01 1 (3).png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto,!',
  },
  {
    name: 'SohYeong Noh',
    work: 'Director of Art Centre Nabi and a board member of CC Korea',
    Image: 'images/spea.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident, voluptate sunt architecto!',
  },
  {
    name: 'Kilnam Chon',
    work: 'Manager of the software Development',
    Image: 'images/speak.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident, voluptate sunt architecto!',
  },
  {
    name: 'Julia Leda',
    work: 'President of Young Pirates of Europe',
    Image: 'images/speaker_01 1 (1).png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident,',
  },
  {
    name: 'Lila tretikov',
    work: 'Executive Director of the Wikimedia Foundation',
    Image: 'images/speaker_01 1 (2).png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident,',
  },
  {
    name: 'Yochai Benkler',
    work: 'Berkman Professor of Entrepreneurial Legal Studies',
    Image: 'images/sp.png',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident,',
  },
];

const seeMore = document.getElementById('more');
const seeLess = document.getElementById('hide');
document.querySelector('.speaker').innerHTML = speakers.map((item, index) => {
  let className = '';
  if (index !== 0 && index !== 1) {
    className = 'hide-card';
  }

  seeMore.addEventListener('click', () => {
    const hideCard = document.querySelectorAll('.hide-card');
    for (let i = 0; i < hideCard.length; i += 1) {
      hideCard[i].style.display = 'flex';
    }
    seeLess.style.display = 'block';
    seeMore.style.display = 'none';
  });

  seeLess.addEventListener('click', () => {
    const hideCard = document.querySelectorAll('.hide-card');
    for (let i = 0; i < hideCard.length; i += 1) {
      hideCard[i].style.display = 'none';
    }
    seeLess.style.display = 'none';
    seeMore.style.display = 'block';
  });
  return `
        <div class = "hero">
           <div class = "speaker-card ${className}">
             <div class="image-speaker">
                    <img src="${item.Image}" alt="speaker" />
                </div>
                 <div class="speaker-card-text">
                    <h3 >${item.name}</h3>
                    <h4>${item.work}</h4>
                    <p>${item.description}</p>
                </div>
                </div>
                </div>
        `;
}).join('');