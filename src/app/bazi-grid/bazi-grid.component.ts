import { Component, Input } from '@angular/core';
import { AppComponent } from '../app.component';
import { BaZiResponse } from 'src/models/bazi-response';
import { BaziExpertService } from 'src/services/bazi-expert.service';

@Component({
  selector: 'app-bazi-grid',
  templateUrl: './bazi-grid.component.html',
  styleUrls: ['./bazi-grid.component.css']
})
export class BaziGridComponent {

  elementNamesInTianGan: string[] = ["", "甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  elementNamesInDiZhi: string[] = ["", "子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

  constructor(private baziExpertService: BaziExpertService) { }

  @Input() parent: AppComponent = null;

  explore(): void {
    this.parent.baZiResponses = [];
    this.baziExpertService.explore(this.parent.baZiGrid).subscribe((data: BaZiResponse[])=>{
      this.parent.baZiResponses.push(data);
    });
  }

  // validateElementNameInTianGan(event: KeyboardEvent): void {
  //   let elementsInTianGan: string[] = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
  //   let isElementNameValid = elementsInTianGan.indexOf((event.target as HTMLInputElement).value) > -1 ? true : false;

  //   if(!isElementNameValid) {
  //   }
  // }
}
