var app = document.getElementById('app');

var appForma = document.createElement ('div');
    appForma.setAttribute('id', 'app-forms');

var navTitle = document.createElement('div');
    navTitle.setAttribute('id', 'div-title');
    navTitle.setAttribute('class', 'title');
    navTitle.innerText = 'POKEDEX';

var sideLeft = document.createElement('div');
var sideRight = document.createElement('div');

var boxRadio = document.createElement('div');
    boxRadio.setAttribute('id', 'box-radio');
    boxRadio.setAttribute('class', 'box');

var labelName = document.createElement('label'),
    labelPower = document.createElement('label'),
    labelAttack = document.createElement('label'),
    labelDefense = document.createElement('label'),
    labelType = document.createElement('label'),
    labelPhoto = document.createElement('label'),
    labelLegendary = document.createElement('label'),
    labelRadioYes = document.createElement('label'),
    labelRadioNot = document.createElement('label');

var inputName = document.createElement('input'),
    inputPower = document.createElement('input'),
    inputAttack = document.createElement('input'),
    inputDefense = document.createElement('input'),
    selectType = document.createElement('select'),
    inputPhoto = document.createElement('input'),
    inputRadioYes = document.createElement('input'),
    inputRadioNot = document.createElement('input'),
    btnAdd = document.createElement('button');


sideLeft.setAttribute('id', 'side-left');
sideLeft.setAttribute('class', 'side');

sideRight.setAttribute('id', 'side-right');
sideRight.setAttribute('class', 'side');



labelName.innerText = 'Nome';
labelName.setAttribute('for', 'nome');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'nome');
inputName.setAttribute('value', '');

labelPower.innerText = 'Poder';
labelPower.setAttribute('for', 'power');
inputPower.setAttribute('type', 'text');
inputPower.setAttribute('name', 'power ');
inputPower.setAttribute('value', '');

labelAttack.innerText = 'Ataque';
labelAttack.setAttribute('for', 'attack');
inputAttack.setAttribute('type', 'number');
inputAttack.setAttribute('name', 'attack ');
inputAttack.setAttribute('value', '');

labelDefense.innerText = 'Defesa';
labelDefense.setAttribute('for', 'defense');
inputDefense.setAttribute('type', 'number');
inputDefense.setAttribute('name', 'defense');
inputDefense.setAttribute('value', '');

labelType.innerText = 'Selecione o tipo de raridade';
labelType.setAttribute('for', 'type');
labelType.setAttribute('name', 'type');

    let selectTypes = document.createElement('select')

    let opt1 = document.createElement('option')
    opt1.innerHTML = `FOGO`

    let opt2 = document.createElement('option')
    opt2.innerHTML = `ÁGUA`

    let opt3 = document.createElement('option')
    opt3.innerHTML = `PLANTA`

    let opt4 = document.createElement('option')
    opt4.innerHTML = `PSÍQUICO`

    selectType.appendChild(opt1)
    selectType.appendChild(opt2)
    selectType.appendChild(opt3)
    selectType.appendChild(opt4)

    
labelPhoto.innerText = 'Foto';
labelPhoto.setAttribute('for', 'photo');
inputPhoto.setAttribute('type', 'text');
inputPhoto.setAttribute('name', 'photo');
inputPhoto.setAttribute('value', '');


labelRadioYes.innerText = 'Sim';
labelRadioYes.setAttribute('for', 'legendary');
inputRadioYes.setAttribute('type', 'radio');
inputRadioYes.setAttribute('name', 'legendary');
inputRadioYes.setAttribute('value', 'Sim');


labelRadioNot.innerText = 'Não';
labelRadioNot.setAttribute('for', 'legendary');
inputRadioNot.setAttribute('type', 'radio');
inputRadioNot.setAttribute('name', 'legendary');
inputRadioNot.setAttribute('value', 'Não');


btnAdd.setAttribute('id', 'btn-adc');
btnAdd.setAttribute('class', 'btn');
btnAdd.innerText = 'Adicionar';

app.appendChild(navTitle);
app.appendChild(appForma);
appForma.appendChild(sideLeft);
appForma.appendChild(sideRight);

sideLeft.appendChild(labelName);
sideLeft.appendChild(inputName);
sideLeft.appendChild(labelPower);
sideLeft.appendChild(inputPower);
sideLeft.appendChild(labelAttack);
sideLeft.appendChild(inputAttack);
sideLeft.appendChild(labelDefense);
sideLeft.appendChild(inputDefense);
sideLeft.appendChild(labelType);
sideLeft.appendChild(selectType);
sideLeft.appendChild(labelPhoto);
sideLeft.appendChild(inputPhoto);


labelLegendary.innerText = 'Lendário?';
sideLeft.appendChild(labelLegendary);

boxRadio.appendChild(labelRadioYes);
boxRadio.appendChild(inputRadioYes);
boxRadio.appendChild(labelRadioNot);
boxRadio.appendChild(inputRadioNot);

sideLeft.appendChild(boxRadio);
sideLeft.appendChild(btnAdd);

btnAdd.onclick = function() {

    //var resultRadio = inputRadioYes.checked;
    var cardContainer = document.createElement('div');
        //cardContainer.setAttribute('id', '');
        cardContainer.setAttribute('class', 'card');
        //cardContainer.innerHTML = `<div id="card_img${inputName.value}${inputAttack.value}" class="img" ></div><div id="card_info${inputName.value}${inputAttack.value}" class="info" ></div>`;

    sideRight.appendChild(cardContainer);

    var cardImg = document.createElement('div');
    
    var imgPokemon = document.createElement('img');
    
    imgPokemon.setAttribute('src', `${inputPhoto.value}`);
    imgPokemon.setAttribute('class', 'http-img');
    
    cardImg.appendChild(imgPokemon);

    cardContainer.appendChild(cardImg)

 var cardInformações =  document.createElement('div'); //Sempre que quiser criar algum elemento html, usar o document.createElemente
    cardContainer.appendChild(cardInformações)

    var pokemonName = document.createElement('h4')
    pokemonName.innerHTML = `Nome: ${inputName.value}`

    
    var pokemonPower = document.createElement('h4')
    pokemonPower.innerHTML = `Poder: ${inputPower.value}`

    var pokemonAtk = document.createElement('h4')
    pokemonAtk.innerHTML = `Ataque: ${inputAttack.value}`

    var pokemonDef = document.createElement('h4')
    pokemonDef.innerHTML = `Defesa: ${inputDefense.value}`

    var pokemonType = document.createElement('h4')
    pokemonType.innerHTML = `Lendário: ${selectType.value}`

    cardInformações.appendChild(pokemonName) //Jogar todos os h4 dentro da div cardInformações. Essas inforamçãoes são filhos dessa div pai.
    cardInformações.appendChild(pokemonPower) 
    cardInformações.appendChild(pokemonAtk)
    cardInformações.appendChild(pokemonDef)
    cardInformações.appendChild(pokemonType)

}




