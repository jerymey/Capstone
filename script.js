const hamb = document.querySelector('.hamb');
const navLinks = document.querySelector('.nav');

hamb.addEventListener('click', () => {
  hamb.classList.toggle('active');
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav').forEach((n) => n
  .addEventListener('click', () => {
    hamb.classList.remove('active');
    navLinks.classList.remove('active');
  }));

  // -------------------------Document object----------------------//

  // const data = [
  //   {
  //     name: 'Ryan Merkley',
  //     profession: 'Back End Dev',
  //     Image: 'images/speaker_01 1 (3).png',
  //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto,!',
  //   },
  //   {
  //     name: 'SohYeong Noh',
  //     profession: 'Director of Art Centre Nabi and a board member of CC Korea',
  //     Image: 'images/spea.png',
  //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident, voluptate sunt architecto!',
  //   },
  //   {
  //     name: 'Kilnam Chon',
  //     profession: '',
  //     Image: 'images/speak.png',
  //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident, voluptate sunt architecto!',
  //   },
  //   {
  //     name: 'Julia Leda',
  //     profession: 'President of Young Pirates of Europe',
  //     Image: 'images/speaker_01 1 (1).png',
  //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident,',
  //   },
  //   {
  //     name: 'Lila tretikov',
  //     profession: 'Executive Director of the Wikimedia Foundation',
  //     Image: 'images/speaker_01 1 (2).png',
  //     description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime veritatis ut deleniti iusto, in provident,',
  //   },
  // ];

  // const btnMore = document.getElementById('btn-more');
  // const btnHide = document.getElementById('btn-hide');
  // document.querySelector('.speaker').innerHTML = data.map((item, index) => {
  //   let className = '';
  //   if (index !== 0 && index !== 1) {
  //     className = 'hide-card';
  //   }
  
  //   btnMore.addEventListener('click', () => {
  //     const hideCard = document.querySelectorAll('.hide-card');
  //     for (let i = 0; i < hideCard.length; i += 1) {
  //       hideCard[i].style.display = 'flex';
  //     }
  //     btnHide.style.display = 'block';
  //     btnMore.style.display = 'none';
  //   });
  
  //   btnHide.addEventListener('click', () => {
  //     const hideCard = document.querySelectorAll('.hide-card');
  //     for (let i = 0; i < hideCard.length; i += 1) {
  //       hideCard[i].style.display = 'none';
  //     }
  //     btnHide.style.display = 'none';
  //     btnMore.style.display = 'block';
  //   });
  //   return `
  //     <div class = "container">
  //        <div class = "speaker-card ${className}">
  //          <div class="image-container">
  //                 <img src="${item.Image}" alt="speaker" />
  //             </div>
  //              <div class="speaker-card-text">
  //                 <h3 >${item.name}</h3>
  //                 <h4>${item.profession}.</h4>
  //                 <p>${item.description}</p>
  //             </div>
  //             </div>
  //             </div>
  //     `;
  // }).join('');