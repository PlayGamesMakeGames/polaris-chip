import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "MOST EPIC WATERPARK (GONE WET💦!!)!";
    this.imageSrc = "https://www.crosstimbersgazette.com/crosstimbersgazette/wp-content/uploads/2018/03/epic-waters-slides.jpg";
    this.imageAlt = "Epic Waterslide Picture";
    this.desc = "This waterpark is so very coolio! They have like at least 5 slides just in this one picture! Come along and find out how wild this waterpark can really be (please)!!!!";
    this.detailLink = "https://hax.psu.edu";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .editbutton{
    font-size: 20px;
    margin: 2px 2px 2px 2px;
    padding: 5px;
    border: 3px navy dashed;
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
  render() {
    return html`<button class="editbutton" id="duplicate" @click=${this.duplicateCard}>Copy Card</button>
    <button class="editbutton" id="namechange" @click=${this.changeTitle}>Change Title</button>
    <button class="editbutton" id="changeimg" @click=${this.changeImage}>Change Image</button>
    <button class="editbutton" id="changebg" @click=${this.changeBg}>Change Background Color</button>
    <button class="editbutton" id="delete" @click=${this.deleteCard}>Delete Card</button>
    
    <div id="cardlist">
    <div class="card"> 
      <h1 class="title"><u><em>${this.title}</em></u></h1>
      <img class="thumbnail" src=${this.imageSrc} alt=${this.imageAlt}>
    <p class="desc">${this.desc}</p>
      <a href="${this.detailLink}">
        <button class="detail">Details</button>
      </a>
    </div>
    </div>`;
  }

  

  static get properties() {
    return {
      title: { type: String },
      imageSrc: { type: String },
      imageAlt: {type: String },
      desc: { type: String },
      detailLink: { type: String}
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
