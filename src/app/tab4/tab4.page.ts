import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  constructor(private alertController: AlertController) {

  }
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
    displayCalc = 'none'
    abrir2(){
      this.displayCalc='block';
    }
    fechar2(){
      this.displayCalc='none';
    }
    n1:number = 0
    n2:number = 0
    n3:number = 0
    n4:number = 0
    media:number = 0
    situacao:string = ""
    situacaoCor:string = "primary"

    async calcular(){
      if(this.n1 === undefined || this.n2 === undefined || this.n3 === undefined || this.n4 === undefined ||
        this.n1 === null || this.n2 === null || this.n3 === null || this.n4 === null){
        const alert = await this.alertController.create({
          header: 'Muito Leigo',
          message: 'Preencha todos os campos',
          buttons: ['OK'],
        });
        await alert.present()
      }else{
        this.media = (this.n1 + this.n2 + this.n3 + this.n4)/4
        if(this.media >= 6){
          this.situacao = "APROVADO"
          this.situacaoCor = "success"
        } else{
          this.situacao = "REPROVADO"
          this.situacaoCor = "danger"
        }
      }

    }
}
