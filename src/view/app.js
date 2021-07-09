import Xeon from "/xeon";

export default class extends Xeon {
      constructor(params){
            super(params);
            this.setTitle("Xeon Js Template");
      }

      async getHtml(){
            return(`
                  <h1>Hello World</h1>
            `);
      }
}