import { LitElement, html, css } from 'lit'; //called a bare-import, instead of ../node_modules/.....(hover over lit to see path) just grab what we need

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

//webcomponent MyCard Class
export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    //can't put html in these b/c we defined these as strings in the properties unless we use the <slot> tag (called slot or light dom)
    this.title = "MOST EPIC WATERPARK (GONE WET💦!!)!";
    this.imageSrc = "https://www.crosstimbersgazette.com/crosstimbersgazette/wp-content/uploads/2018/03/epic-waters-slides.jpg";
    this.imageAlt = "Epic Waterslide Picture";
    this.desc = "This waterpark is so very coolio! They have like at least 5 slides just in this one picture! Come along and find out how wild this waterpark can really be (please)!!!!";
    this.detailLink = "https://hax.psu.edu";
    this.fancy = false; //if set true here it cannot be set to false due to reflect
  }

  static get styles() {
    return css`
    //:host is least specific selector for the webcomponent
      :host {
        display: block;
      }
      :host([fancy]) .card{
        background-color: #606060;
        border-radius: 16px;
        color: white;
      }

    .editbutton{
    font-size: 20px;
    margin: 2px 2px 2px 2px;
    padding: 5px;
    border: 3px navy dashed;
    border-radius: 4px;
    background-color: #808080;
    color: #00c8de;
    -webkit-text-stroke: .1px #00a3b5;
  }
  .editbutton:hover{
    border: 3px navy dashed;
    background-color: #00c8de;
    color: #808080;
  }
  .editbutton:active{
    background-color: #00a8ce;
  }
  #cardlist{
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 500px) {
      /*scale every card*/
      .card{
        transform: scale(0.5);
        background-color: #DDDDDD;
        width: 700px;
        max-width: 800px;
        max-height: 1280px;
        border: 3px solid;
        border-color: navy;
        border-width: 5px;
        padding: 8px;
      }
    }
  @media (min-width: 500px){
    .card{
      transform: scale(1);
      background-color: #DDDDDD;
      width: 700px;
      max-width: 800px;
      max-height: 1280px;
      border: 3px solid;
      border-color: navy;
      border-width: 5px;
      display: block;
      margin: 10px;
      padding: 8px;
    }
  }
  .fancy{
    background-color: #c78c4a;
  }
  .title{
    color: #102090;
    text-align: center;
    font-style: bold;
    font-style: underline;
    //overflow-wrap: break-word;
    overflow: hidden;
    //word-wrap: break-word; alternative to overflow-wrap, not sure difference
  }
  .detail, 
    .detial:hover{
      display: block;
      margin-right: auto;
      margin-left: auto;
      border-color: rgba(0,0,0,0);
      background-color: rgba(0,0,0,0);
      font-size: 0; /*only thing needed here*/
      text-decoration: none;
    }
  .thumbnail{
    border: 4px solid;
    border-color: black;
    /*margin: 0px 5px 0px 100px;*/
    padding: 0px;
    max-width: 400px;
    width: 399px;
    display: block;
    margin-right: auto;
    margin-left: auto;
  }
  .desc{
    font-size: 20px;
    text-align: center;
  }
  @media (max-width: 800px) and (min-width: 500px) {
      .detail{
      border-radius: 20px;
      border-color: cyan;
      border-width: 10px;
      background-color: #115599;
      color: white;
      font-size: 30px;
      display: block;
      margin-right: auto;
      margin-left: auto;
      text-decoration: none;
    }
    .detail:hover{
      border-color: green;
      background-color: #21A973;
      font-size: 30px;
    }
  }
    `;
  }

  duplicateCard(){
    //copy card
  if(this.shadowRoot.querySelectorAll(".card").length < 10){ //or change .card to querySelector #cardlist.children.length BUT this is bad bc there could be other children that aren't cards
    const newCard = this.shadowRoot.querySelector('#cardlist .card').cloneNode(true);
 this.shadowRoot.querySelector("#cardlist").appendChild(newCard);
  }
  }

  changeTitle(){
    this.shadowRoot.querySelector(".title").innerHTML = "<u><em>LEAST DUMB DRYPLACE (CAME DRY🏜️!)!!</u></em>";
  }

  changeImage(){
    this.shadowRoot.querySelector(".card img").src = "https://www.giantfreakinrobot.com/wp-content/uploads/2024/03/image.png";
  }

  changeBg(){
  //toggle fancy background class on and off
  const bgColorList = this.shadowRoot.querySelectorAll('.card');
  let i = 0;
  for(i = 0; i < bgColorList.length; i++){
    let bgColor = bgColorList[i];
  if (bgColor.classList.contains('fancy')) {
      bgColor.classList.remove('fancy');    
    }
    else {
      bgColor.classList.add('fancy');      
    }
  }
  }

  deleteCard(){
    let cardList = this.shadowRoot.querySelectorAll(".card");
    console.log(cardList);
    //delete only if more than one card
    if(cardList.length > 1){
    cardList[cardList.length-1].remove();
    }
  }

  //TODO: update this to only update its specific card 
  toggleFancyBool(){
    //const button = document.querySelector("toggleFancy");
    const card = document.querySelector("my-card");
    card.fancy = !card.fancy;
  }

  //when desc is toggled, it turns fancy to the correct state (fancy = drop down open) (e can be anything, just a param)
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }


  render() {
    return html`
    <!-- Buttons -->
  <button class="editbutton" id="duplicate" @click=${this.duplicateCard}>Copy Card</button>
  <button class="editbutton" id="namechange" @click=${this.changeTitle}>Change Title</button>
  <button class="editbutton" id="changeimg" @click=${this.changeImage}>Change Image</button>
  <button class="editbutton" id="changebg" @click=${this.changeBg}>Change Background Color</button>
  <button class="editbutton" id="delete" @click=${this.deleteCard}>Delete Card</button>
  <button class="editbutton" id="toggleFancy" @click=${this.toggleFancyBool}>Toggle Fancy</button>
    <div id="cardlist">
    <div class="card"> 
      <h1 class="title">
        <slot name="titleSlot">${this.title}</slot>
      </h1>
      <img class="thumbnail" src=${this.imageSrc} alt=${this.imageAlt}>
    <p class="desc">
      <slot name="descSlot">${this.desc}</slot>
    </p>
      <a href="${this.detailLink}">
        <button class="detail">Details</button>
      </a>
      <!-- if fancy, auto open desc dropdown of card -->
      <details ?open="${this.fancy}" @toggle="${this.openChanged}"> 
        <summary>Description</summary>
        <div>
          <slot>${this.desc}</slot>
          <a href="${this.detailLink}" target="blank">
            <button class="editbutton">Link for more info</button>
          </a>
        </div>
      </details>

    </div>
    </div>`;
  }

  //allows updating/overriding default values in html when instantiating webcomponent
  static get properties() {
    return {
      title: { type: String },
      imageSrc: { type: String },
      imageAlt: {type: String },
      desc: { type: String },
      detailLink: { type: String},
      fancy: { type: Boolean, reflect: true} //bool, but reflect is critical bc when val of fancy changes, it will be shown in the dom of the webpage, allows css selectors to be found
    };
  }
}

//define MyCard tag <my-card> (saved as a str in the class) as the class MyCard
globalThis.customElements.define(MyCard.tag, MyCard);
