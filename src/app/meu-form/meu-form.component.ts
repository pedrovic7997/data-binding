import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrls: ['./meu-form.component.css']
})
export class MeuFormComponent implements OnInit {

  nome: string = 'abc';

  // Como não temos nenhuma classe para esse objeto,
  // podemos usar a tipagem any
  pessoa: any = {
    nome: 'def',
    idade: 20
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
