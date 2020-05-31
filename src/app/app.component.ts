import {Component, OnInit} from '@angular/core';
import {ThemeService} from './common/services/theme/theme.service';
import {DARK_THEME, LIGHT_THEME} from './common/constants/common.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'listy-list';
  private currentTheme: string;

  constructor(private readonly themeService: ThemeService) {
  }

  public ngOnInit(): void {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.themeService.setTheme(DARK_THEME);
      this.currentTheme = 'dark';
    } else {
      this.themeService.setTheme(LIGHT_THEME);
      this.currentTheme = 'light';
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (this.currentTheme === 'dark') {
        this.currentTheme = 'light';
        this.themeService.setTheme(LIGHT_THEME);
      } else {
        this.currentTheme = 'dark';
        this.themeService.setTheme(DARK_THEME);
      }
    });
  }
}
