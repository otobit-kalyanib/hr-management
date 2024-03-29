import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { FuseCardModule } from '@fuse/components/card';
// import { FuseAlertModule } from '@fuse/components/alert';
import { SharedModule } from 'app/shared/shared.module';
import { ComingSoonClassicComponent } from './classic/coming-soon.component';
import { ComingSoonModernComponent } from './modern/coming-soon.component';
import { ComingSoonModernReversedComponent } from './modern-reversed/coming-soon.component';
import { ComingSoonSplitScreenComponent } from './split-screen/coming-soon.component';
import { ComingSoonSplitScreenReversedComponent } from './split-screen-reversed/coming-soon.component';
import { ComingSoonFullscreenComponent } from './fullscreen/coming-soon.component';
import { ComingSoonFullscreenReversedComponent } from './fullscreen-reversed/coming-soon.component';

const routes: Routes = [
    {
        path: 'classic',
        component: ComingSoonClassicComponent,
    },
    {
        path: 'modern',
        component: ComingSoonModernComponent,
    },
    {
        path: 'modern-reversed',
        component: ComingSoonModernReversedComponent,
    },
    {
        path: 'split-screen',
        component: ComingSoonSplitScreenComponent,
    },
    {
        path: 'split-screen-reversed',
        component: ComingSoonSplitScreenReversedComponent,
    },
    {
        path: 'fullscreen',
        component: ComingSoonFullscreenComponent,
    },
    {
        path: 'fullscreen-reversed',
        component: ComingSoonFullscreenReversedComponent,
    },
];

@NgModule({
    declarations: [
        ComingSoonClassicComponent,
        ComingSoonModernComponent,
        ComingSoonModernReversedComponent,
        ComingSoonFullscreenComponent,
        ComingSoonFullscreenReversedComponent,
        ComingSoonSplitScreenComponent,
        ComingSoonSplitScreenReversedComponent,
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        // FuseCardModule,
        // FuseAlertModule,
        SharedModule,
    ],
})
export class ComingSoonModule {}
