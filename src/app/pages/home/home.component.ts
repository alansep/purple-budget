import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/local-storage/local-storage.service';
import { FurtherDateBalance } from './model/FurtherDateBalance.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public diasParaCalculo: number;
  public orcamento: number = 0;
  public resultado: string = '';
  public podeMostrar: boolean = false;
  public localStorageService: LocalStorageService;
  public furtherMovements: Array<FurtherDateBalance>;

  constructor(localStorageService: LocalStorageService){
    let date = new Date();
    let ultimoDia = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    this.diasParaCalculo = (ultimoDia.getDate() - date.getDate()) + 1;
    this.localStorageService = localStorageService;
    this.furtherMovements = [];
  }

  ngOnInit(): void {
    console.log(this.localStorageService.readFromLocalStorage('resultado'));
  }

  public calcular(): void {
    this.resultado = (this.orcamento / this.diasParaCalculo).toFixed(2).toString().replace('.', ',');
    this.podeMostrar = true;
    this.localStorageService.saveOnLocalStorage('resultado', this.resultado.toString());
    this.furtherMovements = [];

    for (let i = 1; i <= this.diasParaCalculo - 1; i++) {
      let date = new Date();
      let furtherDay = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i);
      let furtherResult = this.orcamento / (this.diasParaCalculo - i);
      this.furtherMovements.push(new FurtherDateBalance(furtherDay.getDate() + "/" + (furtherDay.getMonth() + 1), furtherResult.toFixed(2)));
    }

    for (let i = 0; i < this.furtherMovements.length; i++) {
      if(i != 0){
        this.furtherMovements[i].difference = (parseFloat(this.furtherMovements[i].value) - parseFloat(this.furtherMovements[i-1].value)).toString();
      } else {
        this.furtherMovements[i].difference = (parseFloat(this.furtherMovements[i].value) - parseFloat(this.resultado.replace(',', '.'))).toString();
      }
    }
  }

  public exibirPrimeiraTela(): void {
    this.orcamento = 0;
    this.podeMostrar = false;
  }

}
