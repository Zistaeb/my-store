import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  img: string = '';

  @Input('img')                      //cada vez que llegue el Input correra este metodo
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just image =>', this.img)
    //code
  }

  //@Input() img: string = '';
  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './../../../assets/images/foto.jpg';

  counter: number = 0;
  counterFn: number | undefined;

  constructor() {
    //before render
    //NO correr cosas asyncronas en el constructor, ejemplo fetch --- esto corre solo una vez
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //before y durante render
    //su objetivo es estar actualizando los cambios en el input --- corre muchas veces
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log("changes", changes);  //obtendre cuando cambie cualquiera, no sabre especificamente quien cambio
    /*if(changes.) {
      //code
    }*/
  }

  ngOnInit(): void {
    //before render
    //se puede correr cosas async -- fetch, llamadas API, promesas -- corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);
    /*this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log("run couter")
    }, 1000)*/
  }

  ngAfterViewInit(): void {
    // after render
    //handler children
    console.log('ngAfterViewInit');
  }

  ngOnDestroy(): void {
    //solo se corre cuando se vaya a eliminar ese compoenente
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log("log hijo");
    this.loaded.emit(this.img);
  }
}
