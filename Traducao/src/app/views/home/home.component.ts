import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/app/models/frase';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public titulo: string = 'Aprendendo Ingles'
  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ""
  public rodada: number = 0
  public rodadaFrase: Frase
  public traducao: string = 'Traduza a frase'
  public coracaoCheio: string = 'assets/coracao_cheio.png'
  public coracaoVazio: string = 'assets/coracao_vazio.png'
  public progresso: number = 0


  constructor() {
    this.rodadaFrase = this.frases[this.rodada]
    console.log(this.rodadaFrase)
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    // console.log('Verificar resposta: ', this.resposta)
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta.')
      this.rodada++
      this.rodadaFrase = this.frases[this.rodada]

      this.progresso = this.progresso + (100 / this.frases.length)

      this.resposta = ""
      
    } else {
      alert('A tradução está errada')
    }

  }
}
