import { LitElement, html, css } from 'lit-element';


export class CompComp  extends LitElement {

  static get is() {
    return 'comp-comp';
  }

  static get properties() {
    return {
        url : {type : String},
        method : {type : String},

    };
  }


  firstUpdated(){
    this.getData();
  }

  _enviarDat(data){
    this.dispatchEvent(new CustomEvent('ApiData',{
        detail: {data},bubbles: true, composed:true
    }));
  }

  getData(){
    fetch(this.url,{method:this.method})
        .then((response) =>{
            if(response.ok) return response.json();
            return Promise.reject(response);
        })
        .then((data) => {this._enviarDat(data); })
        .catch((error) => { console.warn('Error desconocido...'); })
  }

  render() {
    return html`
      
    `;
  }
}

customElements.define(CompComp.is, CompComp);
export default CompComp