const Timestamp = '4';
const apipublic = 'e0fd078af7bf3d541d05369214791aa5';
const apiPrivate = '08af704124957089ed4151233c7acf2aef57f45b';

const myMD5 = '93c0f1dbe84026b03ccd1f2deea26542';

/* md5 = timestamp+puboic + private */
/*  'https://gateway.marvel.com/v1/public/comics?ts=4&apikey=public&hash=md5';
 */

const marvel ={


  render: () =>{
    const urlAPI = 'https://gateway.marvel.com/v1/public/comics?ts=4&apikey=e0fd078af7bf3d541d05369214791aa5&hash=93c0f1dbe84026b03ccd1f2deea26542';
    const cont = document.querySelector('#marvel-row');
    let contentHTML = '';

    fetch(urlAPI)
    .then(res => res.json())
    .then((json) => {
      for (const hero of json.data.results) {
          let urlHero = hero.urls[0].url;
          contentHTML += `
            <div class="">
                <a href="${urlHero}" target="_blank">
                  <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${hero.name}</h3>
            </div>`;
        }
        cont.innerHTML = contentHTML;
    })
  }
};

marvel.render();