import { Component } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {

  constructor() {}
  
  display = 'none'
  abrir(){
    this.display='block';
  }
  fechar(){
    this.display='none';
  }
  Cor = "primary"
  Entrada = 0
  Total = 0
  add(){
      this.Entrada.toFixed(2);
      this.Entrada++
      this.Total++
      if(this.Total>=0) {
        this.Cor="primary"
      }
    }

  Saida = 0
  ret(){
    this.Saida++
    this.Total--
    if(this.Total<0) {
      this.Cor="danger"
    }
    }

  zerar(){
    this.Saida=0
    this.Total=0
    this.Entrada=0
    this.Cor="primary"
    }

}
