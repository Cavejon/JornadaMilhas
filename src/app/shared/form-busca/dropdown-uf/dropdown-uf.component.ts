import { UnidadeFederativaService } from './../../../core/services/unidade-federativa';
import { UnidadeFederativa } from './../../../core/types/type';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-uf',
  templateUrl: './dropdown-uf.component.html',
  styleUrls: ['./dropdown-uf.component.scss']
})
export class DropdownUfComponent implements OnInit {

  @Input() label: string = '';
  @Input() iconePrefixo: string = '';
  filteredOptions = []

  UnidadeFederativa: UnidadeFederativa[] = [];

  constructor(private UnidadeFederativaService: UnidadeFederativaService) {

  }

  ngOnInit(): void {
    this.UnidadeFederativaService.listar()
      .subscribe(dados => {
        this.UnidadeFederativa = dados;
        console.log(this.UnidadeFederativa);
      })
  }
}
