import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']//,
  // outputs: ['mudouValor']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    // Essa funcao emit, aceita qualquer coisa como parametro
    this.mudouValor.emit({novoValor: this.valor});
  }

  decrementa() {
    this.valor--;
    // Essa funcao emit, aceita qualquer coisa como parametro
    this.mudouValor.emit({novoValor: this.valor});
  }

  constructor() { }

  ngOnInit(): void {

  }

}
