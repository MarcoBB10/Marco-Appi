import { LitElement, html, css } from 'lit-element';
import styles from './body-comp-styles.js';
import '../comp-comp/comp-comp.js';

class BodyComp  extends LitElement {

  static get is() {
    return 'body-comp';
  }

  static get properties() {
    return {

    };
  }

  static get styles() {
    return [
      styles,
    ]
  }

  constructor() {
    super();
    this.addEventListener('ApiData',(e)=>{
      console.log(e.detail.data);
      this._dataFormat(e.detail.data);
    });
  }
  
  _dataFormat(data){
    let info = [];

    data["results"].forEach((element)=>{
      info.push({
        id:element.id
      })
    })

    console.log(info);
  }

  render() {
    return html`
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <comp-comp url="https://db.ygoprodeck.com/api/v7/cardinfo.php" method="GET" ></comp-comp>
    `;
  }
}


customElements.define(BodyComp.is, BodyComp);
export default BodyComp