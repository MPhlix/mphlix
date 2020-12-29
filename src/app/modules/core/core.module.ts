// Importing Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Importing our custom modules
// Importing components
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
// Importing services
import { SkinTypeService } from './services/skin-type.service';
import { ScreenResizeService } from './services/screen-resize.service';
import { MembersService } from './services/members.service';
import { SvgDefinitionsComponent } from './components/svg-definitions/svg-definitions.component';
import { SvgIconComponent } from './components/svg-icon/svg-icon.component';
import { ReleaseService } from './services/release.service';
import { CommonComponentsModule } from '../shared/common-components/common-components.module';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    SvgDefinitionsComponent,
    SvgIconComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CommonComponentsModule,
    MatDialogModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SvgDefinitionsComponent,
    SvgIconComponent
  ],
  providers: [
    SkinTypeService,
    ScreenResizeService,
    MembersService,
    ReleaseService
  ],
  entryComponents: [
    PopUpComponent
  ]
})
export class CoreModule { }
