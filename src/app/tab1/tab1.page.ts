import { IGenero } from './../models/Genero.model';
import { IListaFilmes } from './../models/FilmeAPI.model';
import { FilmeService } from './../services/filme.service';
import { DadosService } from './../services/dados.service';
import { IFilme } from '../Models/IFilmes.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

  listaVideos: IFilme[] =[
    {
      nome: 'Avengers',
      lancamento: '12/03/2012',
      duracao: '144 minutos',
      classificacao: 12,
      cartaz: 'https://i0.wp.com/pipocamoderna.com.br/wp-content/uploads/2018/04/avengers-infinity-war-poster-imax.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/avengers'   
    },
 {      
      nome: 'Liga da Justiça de Zack Snyder (2021)',
      lancamento: '18/03/2021',
      duracao: '4h 2m',
      classificacao: 16,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      generos: ['Ação', 'Aventura', 'Fantasia', 'Ficção científica'],
      pagina: '/liga-justica'
    },
  {
    nome:'O Rei do Show (2017)',
    lancamento: '25/12/2017',
    duracao: '1h 44m',
    classificacao: 12,
    cartaz:  'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w5EPR88Kz73eRvnwmgUUKcZQt27.jpg ',
    generos: ['Drama, Musical'],
    pagina: '/o-rei-do-show'
  },
  {
    nome:'Twiligth (2008)',
    lancamento: '19/12/2008',
    duracao: '122 minutos',
    classificacao: 12,
    cartaz:  'https://upload.wikimedia.org/wikipedia/pt/c/c1/Twilight_Poster.jpg ',
    generos: ['Drama, Romance, Fantasia'],
    pagina: '/twiligth'
  },
  {
    nome:'The Hunger Games',
    lancamento: '23/03/2012',
    duracao: '142 minutos',
    classificacao: 14,
    cartaz:  'http://s2.glbimg.com/EATpCIuUlOorUhNzqPEqmHxAIGU=/smart/e.glbimg.com/og/ed/f/original/2014/09/13/abre_j-law-esperanca-parte-1-cartaz.jpg',
    generos: ['Aventura, Ficção Científica'],
    pagina: '/hunger-games'
  }, 
  {
    nome:'Fear Street',
  lancamento: '12/08/2021',
  duracao: '147 minutos',
  classificacao: 18,
  cartaz:  'https://cdn.shopify.com/s/files/1/0693/4223/products/Fear-Street_Cover_1800x1800_7e2cf200-c96f-4266-9758-5d8d86f5e1a5_1800x1800.jpg?v=1626445455',
  generos: ['Terror'],
  pagina: '/fear-street'}
  ]


  listaFilmes: IListaFilmes;

  constructor(
  public dadosService: DadosService,
  public filmeService: FilmeService,
  public route: Router)
  {}

  buscarFilmes(evento: any){
    console.log(evento.target.value);
    const busca = evento.target.value;
    if(busca && busca.trim() !== ''){
      this.filmeService.buscarFilmes(busca).subscribe(dados=>{
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilme){
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

}