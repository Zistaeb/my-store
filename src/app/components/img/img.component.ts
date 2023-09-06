import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault = './../../../assets/images/foto.jpg';

  constructor() {
    //before render
    //NO correr cosas asyncronas en el constructor, ejemplo fetch --- esto corre solo una vez
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges() {
    //before y durante render
    //su objetivo es estar actualizando los cambios en el input --- corre muchas veces
    console.log('ngOnChanges', 'imgValue =>', this.img);
  }

  ngOnInit(): void {
    //before render
    //se puede correr cosas async -- fetch, llamadas API, promesas -- corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
  }

  ngAfterViewInit(): void {
    // after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //solo se corre cuando se vaya a eliminar ese compoenente
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("log hijo");
    this.loaded.emit(this.img);
  }
}
