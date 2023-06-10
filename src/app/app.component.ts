import { Component } from '@angular/core';
import { BaZiResponse } from 'src/models/bazi-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "BaZiExpert";

  baZiGrid = {
    gender: 0,
    baZiGridInTianGan: {
      typeOfTianGanDiZhi: 0,
      elementInHourOfBirth: "丁",
      elementInDayOfBirth: "丙",
      elementInMonthOfBirth: "乙",
      elementInYearOfBirth: "甲",
      elementInDecade: "",
      elementInYear: "",
      elementInMonth: ""
    },
    baZiGridInDiZhi: {
      typeOfTianGanDiZhi: 1,
      elementInHourOfBirth: "卯",
      elementInDayOfBirth: "寅",
      elementInMonthOfBirth: "丑",
      elementInYearOfBirth: "子",
      elementInDecade: "",
      elementInYear: "",
      elementInMonth: "寅"
    }
  };

  baZiResponses: BaZiResponse[][] = [];

  constructor() { }
}