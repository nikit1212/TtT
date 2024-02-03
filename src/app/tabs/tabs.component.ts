import { Component, OnInit } from '@angular/core';

export interface ExampleTab {
  label: string,
  content: any
}

/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabGroupBasicExample implements OnInit {

  tabs: ExampleTab[]= [
    {label: 'Рейтинг', content: 'Content 1'},
    {label: '2 на 2', content: 'Content 2'},
    {label: 'Выбывание', content: 'Content 3'},
  ];

  ngOnInit(): void {

  }

}
