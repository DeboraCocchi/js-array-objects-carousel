/* Riprendiamo l’esercizio carosello e rifacciamolo, questa volta usando un array di oggetti.
Ogni elemento deve avere un titolo, una descrizione e il riferimento ad una immagine. */

/* NOTA A STEFANO , LORIS, ALFREDO:
Ciao! Come potrete evincere c'è qualche problema di loop-bootoni...Ci vediamo presto in ticket! :) */


const mainContainer = document.querySelector('.main-container');
const paintingsContainer = document.querySelector('.big-paintings-container');
const thumbnailsContainer = document.querySelector('.thumbnails-container');
const items = document.getElementsByClassName('item');
const miniItems = document.getElementsByClassName('mini-item');

const paintings =[
  {
    author: "Pieter Bruegel il Vecchio",
    year: 1562,
    title: "Trionfo della morte",
    more: "I toni caldi del quadro evocano un'atmosfera infernale, che ben rappresenta la drammaticità del momento. La Morte, infatti, è giunta e sta uccidendo gli uomini, che reagiscono nei più svariati modi: sorpresa, sgomento, rassegnazione, inutile ribellione o indifferenza - come la coppia in basso a destra, che ignora quanto sta avvenendo distraendosi con la musica (rappresentazione della lussuria) di un liuto.",
    image:"img/bruegel.jpeg"
  },
    
  {
    author:"Alexandre Cabanel",
    year: 1847,
    title: "L'angelo caduto",
    more: "Il dipinto immortala l’esatto momento in cui dal risentimento della caduta nasce la ribellione dell’angelo 'perfetto in bellezza': uno sguardo pieno di rabbia e di indignazione sconvolge lo spettatore. L’atmosfera è tesa e pungente, accentuata da alcuni piccoli gesti e dettagli: la posizione scomoda, con la schiena poggiata, mostra un corpo carico di energia distruttiva e pronto a colpire. Anche la posizione degli arti e il tono della muscolatura inducono quasi una sorta di violenza, una reazione furiosa nei confronti di un gesto imperdonabile.",
    image:"img/cabanel.jpeg"
  },
  
  {
    author: "Vincent Van Gogh",
    year: 1890,
    title: "Campo di grano con volo di corvi",
    more: "In questo quadro si ha una chiara rappresentazione dello stato d'animo tormentato e angosciato dell'artista: la tela è uno straziante grido di dolore, accentuato dal ritmo vorticoso delle pennellate, mediante le quali il pittore proietta il proprio stato d'animo e la propria dimensione di sofferenza sulla realtà circostante.",
    image:"img/vangogh.jpeg"
  },
  
  {
    author: "Salvador Dali",
    year: 1946,
    title: "Tentazioni di sant'Antonio",
    more: "Il dipinto mostra Sant'Antonio nel deserto, inginocchiato mentre brandisce una croce per proteggersi dalle tentazioni che lo assalgono, quasi in un gesto di esorcismo. Di fronte a questa processione di sfide, rappresentate dagli animali, Sant'Antonio sembra debole; è nudo e spogliato, relegato nell'angolo sinistro del dipinto, quasi inerme mentre la sua fede viene messa a dura prova.",
    image:"img/dali.jpeg"
  },

  {
    author: "René Magritte",
    year: 1953,
    title: "Golconda",
    more: "La peculiare prospettiva e la vista delle case -di cui è visibile la sola sommità - ci danno un suggerimento sulla posizione dello spettatore: è possibile che anche chi osserva il dipinto sia sospeso a mezz'aria come i curiosi personaggi, identificandosi addirittura come uno di essi. Se la geometria degli elementi suscita entusiasmo e piacevolezza, la moltitudine di figure indistinguibili crea una forte inquietudine: si tratta di una probabile critica all'omologazione e alla meccanicità della routine che mette in luce il rapporto uomo-lavoro, dove le peculiarità dell'individuo sono destinate a venire silenziate in nome del progresso economico.",
    image:"img/magritte.jpeg"
  },
  
  ];





for(let painting of paintings){
  let bigPaintTags = `<img class="item hide" src="${painting.image}" alt="${painting.title}">`;

  const thumbDiv = document.createElement('div');
  thumbDiv.className = 'thumbnail';
  thumbDiv.innerHTML =  `<img class="mini-item thumb-cover" src="${painting.image}" alt="${painting.title}">`;

  
  thumbnailsContainer.append(thumbDiv);
  
  paintingsContainer.innerHTML += bigPaintTags;

  const mainPaintInfo = document.createElement('div');
  mainPaintInfo.className = 'paint-info';
  mainPaintInfo.classList.add('hide');
  mainPaintInfo.innerHTML = `
  <h5 class="paint-author">${painting.author}, <span class="paint-year">${painting.year}</span></h5>
  <h3 class="paint-title">${painting.title}</h3>
  `;

  const paintMore = document.createElement('div');
  paintMore.className = 'paint-more';
  paintMore.classList.add('hide');
  paintMore.innerHTML = `${painting.more}`;

  paintingsContainer.append(mainPaintInfo);
  paintingsContainer.append(paintMore);
}


const info = (document.getElementsByClassName('paint-info'));
const more = (document.getElementsByClassName('paint-more'));
const prev=document.querySelector('.fa-chevron-left');
const next=document.querySelector('.fa-chevron-right');
let counter = 0;

// status di default del primo quadro (e del quadro visibile)
items[0].classList.add('active');
miniItems[0].classList.add('active');
info[0].classList.remove('hide');
more[0].classList.remove('hide');

next.addEventListener('click', nextEl);
prev.addEventListener('click', prevEl);

let leftToRight=true;
let isAutoPlay =false;

//autoplay e bottoni per lo scorrimento

const reverseBtn = document.getElementById('reverse');
const stopBtn = document.getElementById('stop');

let autoPlay;
const startPlay = setTimeout(function(){
  console.log('startplay!');
  autoPlay=setInterval(nextEl, 5000);
  console.log('autoPlay started working------');
  isAutoPlay=true;
 

  mainContainer.addEventListener('mouseover', function(){
    console.log('mouseover: stop');
    isAutoPlay=false;
    clearInterval(autoPlay);
    stopBtn.innerHTML='Riprendi scorrimento automatico'
  });

  mainContainer.addEventListener('mouseleave', function(){
    isAutoPlay=false;
    clearInterval(autoPlay);  leftToRight=true;
  });

}, 5000);



reverseBtn.addEventListener('click', function(){
  console.log(isAutoPlay);
  if(isAutoPlay===true){
    
    if (!leftToRight){
      console.log('left to right è '+ leftToRight);
      leftToRight=true;
      console.log('left to right diventa '+leftToRight);
      console.log('Standard autoPlay is working!')
      autoPlay=setInterval(nextEl, 5000);
       }
    else{
      console.log('left to right è '+leftToRight);
      clearInterval(autoPlay);
      leftToRight=false;
      console.log('left to right diventa '+leftToRight);
      console.log('Reverse autoPlay is working!');
      autoPlay=setInterval(prevEl, 5000);
    
        }
  }else{
    console.log('----------> riparto!');
    autoPlay=setInterval(nextEl, 5000);
    isAutoPlay=true;
    leftToRight=true;
  }}
)

stopBtn.addEventListener('click', function(){

  if(isAutoPlay===true){
    console.log('isAutoPlay è' + isAutoPlay);
    console.log('stoppato!');
    clearInterval(autoPlay);
    console.log('AutoPlay is not working!');
    stopBtn.innerHTML ='Riprendi scorrimento automatico';
    isAutoPlay=false;
    console.log('adesso isAutoPlay è' + isAutoPlay);

  }else{
    console.log('isAutoPlay è' + isAutoPlay);
    autoPlay=setInterval(nextEl, 5000);
    leftToRight=true;
    isAutoPlay=true;
    console.log('adesso isAutoPlay è' + isAutoPlay);
    stopBtn.innerHTML ='Interrompi scorrimento automatico';
  }
})



function nextEl(){
  if(leftToRight===true){
    console.log('nexTEl auto is working!');
    items[counter].classList.remove('active');
    miniItems[counter].classList.remove('active');
    info[counter].classList.add('hide');
    more[counter].classList.add('hide');

    if(counter===paintings.length-1){
      counter = 0;
    }else{++counter};

    items[counter].classList.add('active');
    miniItems[counter].classList.add('active');
    info[counter].classList.remove('hide');
    more[counter].classList.remove('hide');
  }
}

function prevEl(){
  if(leftToRight===false){

  console.log('prevEl auto is working!');
  items[counter].classList.remove('active');
  miniItems[counter].classList.remove('active');
  info[counter].classList.add('hide');
  more[counter].classList.add('hide');

  if(counter===0){
    counter = paintings.length-1;
  }else{--counter};

  items[counter].classList.add('active');
  miniItems[counter].classList.add('active');
  info[counter].classList.remove('hide');
  more[counter].classList.remove('hide');
}
}