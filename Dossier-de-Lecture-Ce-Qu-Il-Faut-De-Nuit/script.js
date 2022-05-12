// Activation des animations lorsque visible

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });



// Changement d'images en fonction de la scène choisie

const image_scene_n = document.getElementById('images_scene_n');
const scene_1 = document.getElementById("scene_1");
const scene_2 = document.getElementById("scene_2");
const scene_3 = document.getElementById("scene_3");

scene_1.addEventListener('click', event => {
  image_scene_n.innerHTML = `<table class="tableaux_images">
  <tr>
    <td><img class="mise_image_images" src="css/terrain.jpg"></td>
    <td><p class="titre_scene_image">Le match de foot</p></td>
  </tr>
  <tr>
    <td></td>
    <td><img class="mise_image_images" src="css/supporter.jpg"</td>
  </tr>
  </table>`;
  scene_1.style = 'background-color: rgb(29, 103, 189);';
  scene_2.style = 'background-color: #fff;';
  scene_3.style = 'background-color: #fff;';
});

scene_2.addEventListener('click', event => {
  image_scene_n.innerHTML = `<table class="tableaux_images">
  <tr>
    <td><p class="titre_scene_image">Le départ de Gillou</p></td>
    <td><img class="mise_image_images" src="css/paysage.gif"></td>
  </tr>
  <tr>
    <td><img class="mise_image_images" src="css/man.webp"</td>
    <td></td>
  </tr>
  </table>`;
  scene_1.style = 'background-color: #fff;';
  scene_2.style = 'background-color: rgb(29, 103, 189);';
  scene_3.style = 'background-color: #fff;';
});

scene_3.addEventListener('click', event => {
  image_scene_n.innerHTML = `<table class="tableaux_images">
  <tr>
    <td><img class="mise_image_images" src="css/justice.jpg"></td>
    <td><img class="mise_image_images" src="css/tribunal.jpg"></td>
  </tr>
  <tr>
    <td><p class="titre_scene_image">Le procès</p></td>
    <td><img class="mise_image_images" src="css/grille.jpg"</td>
  </tr>
  </table>`;
  scene_1.style = 'background-color: #fff;';
  scene_2.style = 'background-color: #fff;';
  scene_3.style = 'background-color: rgb(29, 103, 189);';
});

image_scene_n.innerHTML = `<table class="tableaux_images">
  <tr>
    <td><img src="css/terrain.jpg"></td>
    <td><p class="titre_scene_image">Le match de foot</p></td>
  </tr>
  <tr>
    <td></td>
    <td><img src="css/supporter.jpg"</td>
  </tr>
  </table>`;
scene_1.style = 'background-color: rgb(29, 103, 189);';
scene_2.style = 'background-color: #fff;';
scene_3.style = 'background-color: #fff;';


// Défilement des musiques

const musics = require('./musics.json');
var index_music = 0;

const previous = document.getElementById('previous');
const next = document.getElementById('next');
const music = document.getElementById('music');
const justification = document.getElementById('justification')

function updateMusic(index, first=false) {
  var src = musics[index][5].replace("https://drive.google.com/file/d/","").replace("/view?usp=sharing","");
  music.innerHTML = `<table class="musique">
  <thead><p class="scene">${musics[index][3]}</p></thead>
  <tr><td><p>${index+1}/${musics.length}</p></td></tr>
  <tr><td><img class="cover" src="${musics[index][2]}"></td></tr>
  <tr><td><p class="titre">${musics[index][0]}</p></td></tr>
  <tr><td><p class="artiste">${musics[index][1]}</p></td></tr>
  <tr><td><audio id="audio_player" controls="controls" src="https://docs.google.com/uc?export=download&id=${src}"></audio></td></tr>
  </table>`;
  justification.innerHTML = musics[index][4]

  var audio_player = document.getElementById('audio_player');
  if (!first) {audio_player.play();}
}

previous.addEventListener('click', event => {
  index_music--;
  if (index_music < 0) {index_music = musics.length-1;}
  updateMusic(index_music);
});

next.addEventListener('click', event => {
  index_music++;
  if (index_music > musics.length-1) {index_music = 0;}
  updateMusic(index_music);
});

updateMusic(0, true)

// Selection des scènes clefs

const scenes = require('./scenes_clefs.json');

const scenes_clefs_n = document.getElementById('scenes_clefs_n');
const clef_1 = document.getElementById("clef_1");
const clef_2 = document.getElementById("clef_2");
const clef_3 = document.getElementById("clef_3");
const clef_4 = document.getElementById("clef_4");
const clef_5 = document.getElementById("clef_5");

function text_scenes_clefs(titre, scene, justification) {
  var text = `<table>
  <thead><p class="scenes_clefs_titre">${titre}</p></thead>
  <tr><td><p class="scenes_clefs_text"><i>${scene}</i></p></td></tr>
  <tr><td><p class="scenes_clefs_text"><strong><u>Justification:</u></strong> ${justification}</td></tr>
  </table>`;
  return text;
}

clef_1.addEventListener('click', event => {
  scenes_clefs_n.innerHTML = text_scenes_clefs(scenes[0][0], scenes[0][1], scenes[0][2]);
  clef_1.style = 'background-color: rgb(29, 103, 189);';
  clef_2.style = 'background-color: #fff;';
  clef_3.style = 'background-color: #fff;';
  clef_4.style = 'background-color: #fff;';
  clef_5.style = 'background-color: #fff;';
});

clef_2.addEventListener('click', event => {
  scenes_clefs_n.innerHTML = text_scenes_clefs(scenes[1][0], scenes[1][1], scenes[1][2]);
  clef_1.style = 'background-color: #fff;';
  clef_2.style = 'background-color: rgb(29, 103, 189);';
  clef_3.style = 'background-color: #fff;';
  clef_4.style = 'background-color: #fff;';
  clef_5.style = 'background-color: #fff;';
});

clef_3.addEventListener('click', event => {
  scenes_clefs_n.innerHTML = text_scenes_clefs(scenes[2][0], scenes[2][1], scenes[2][2]);
  clef_1.style = 'background-color: #fff;';
  clef_2.style = 'background-color: #fff;';
  clef_3.style = 'background-color: rgb(29, 103, 189);';
  clef_4.style = 'background-color: #fff;';
  clef_5.style = 'background-color: #fff;';
});

clef_4.addEventListener('click', event => {
  scenes_clefs_n.innerHTML = text_scenes_clefs(scenes[3][0], scenes[3][1], scenes[3][2]);
  clef_1.style = 'background-color: #fff;';
  clef_2.style = 'background-color: #fff;';
  clef_3.style = 'background-color: #fff;';
  clef_4.style = 'background-color: rgb(29, 103, 189);';
  clef_5.style = 'background-color: #fff;';
});

scenes_clefs_n.innerHTML = text_scenes_clefs(scenes[0][0], scenes[0][1], scenes[0][2]);
clef_1.style = 'background-color: rgb(29, 103, 189);';

//Selection des pages de mon roman

const premiere_page = document.getElementById('premiere_page');
const derniere_page = document.getElementById('derniere_page');
const contenu_roman = document.getElementById('contenu_roman');

premiere_page.addEventListener('click', event => {
  contenu_roman.innerHTML =  '<embed src="css/premiere_page.pdf" type="application/pdf" class="CV">'
  premiere_page.style = 'background-color: rgb(29, 103, 189);';
  derniere_page.style = 'background-color: #fff;';
});

derniere_page.addEventListener('click', event => {
  contenu_roman.innerHTML =  '<embed src="css/derniere_page.pdf" type="application/pdf" class="CV">'
  premiere_page.style = 'background-color: #fff;';
  derniere_page.style = 'background-color: rgb(29, 103, 189);';
});

premiere_page.style = 'background-color: rgb(29, 103, 189);';