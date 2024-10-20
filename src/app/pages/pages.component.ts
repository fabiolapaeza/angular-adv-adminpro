import { Component } from '@angular/core';
import { HeaderComponent } from "../share/header/header.component";
import { SidebarComponent } from "../share/sidebar/sidebar.component";
import { BreadcrumbsComponent } from "../share/breadcrumbs/breadcrumbs.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, BreadcrumbsComponent],
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent {

}
