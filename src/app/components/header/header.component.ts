import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  textButtonCurriculum = 'Cursus';
  linkButtonCurriculum = '#cursus';
  textButtonProjects = 'Projets Informatiques';
  linkButtonProjects = '#projects';
  textButtonHobbies = 'Hobbies';
  linkButtonHobbies = '#hobbies';
  // others buttons to display outside the homepage


  styleClassHeader = 'styleHeader';
}
