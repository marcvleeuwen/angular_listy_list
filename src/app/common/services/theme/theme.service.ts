import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StyleManagerService} from '../style-manager/style-manager.service';
import {Observable} from 'rxjs';
import {ThemeOption} from '../../models/theme-option.model';
import {STYLE_TO_SET, THEME_BASE_PATH, THEME_OPTIONS_URL} from '../../constants/common.const';


@Injectable()
export class ThemeService {
  constructor(
    private http: HttpClient,
    private styleManager: StyleManagerService
  ) {
  }

  getThemeOptions(): Observable<Array<ThemeOption>> {
    return this.http.get<Array<ThemeOption>>(THEME_OPTIONS_URL);
  }

  setTheme(themeToSet) {
    this.styleManager.setStyle(
      STYLE_TO_SET,
      `${THEME_BASE_PATH}/${themeToSet}.css`
    );
  }
}
