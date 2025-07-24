import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { SectionOneComponent } from "./section-one/section-one.component";
import { SectionTwoComponent } from "./section-two/section-two.component";
import { SectionThreeComponent } from "./section-three/section-three.component";
import { SectionFourComponent } from "./section-four/section-four.component";
import { SectionFiveComponent } from "./section-five/section-five.component";
import { SectionSixComponent } from "./section-six/section-six.component";
import { SectionSevenComponent } from "./section-seven/section-seven.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent, SectionSixComponent, SectionSevenComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
