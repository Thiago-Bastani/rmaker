import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-criar-secao',
  templateUrl: './criar-secao.page.html',
  styleUrls: ['./criar-secao.page.scss'],
})
export class CriarSecaoPage implements OnInit {

  @Output() text = new EventEmitter();
  @Input() inText = '';
  items = [];
  constructor() { }

  ngOnInit() {
  }

  public handleClick(){
    this.items.push(this.inText);
  }

}
