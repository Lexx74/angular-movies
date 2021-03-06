import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAddModalComponent } from './categories-add-modal.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MAT_DIALOG_DATA , MatDialogModule, MatDialogRef, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {Observable} from 'rxjs/Observable';

const translations: any = {'foo': 'bar'};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return Observable.of(translations);
  }
}

describe('CategoriesAddModalComponent', () => {
  let component: CategoriesAddModalComponent;
  let fixture: ComponentFixture<CategoriesAddModalComponent>;

  const matDialogRef = jasmine.createSpyObj('MatDialogRef', ['afterClose']);
  const matDialogData = jasmine.createSpyObj('MAT_DIALOG_DATA', ['']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useClass: FakeLoader},
        })
      ],
      declarations: [ CategoriesAddModalComponent ],
      providers: [
        { provide: MatDialogRef, useValue: matDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: matDialogData }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesAddModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
