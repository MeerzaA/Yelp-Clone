import { Routes } from '@angular/router';

import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
    {
        path: 'home',
        component: LayoutComponent,
        children: [
            {
                path: '',
                //path: 'https://dsci551proj-cafe-yelp-b8035.web.app/home',
                component: HomeComponent,
                outlet: 'homecomp'
            },
            {
                path: '',
                component: HeaderComponent,
                outlet: 'header'
            },

        ]
    },
    
    {
        path: 'search',
        component: ContentComponent,
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'header'
            },

        ]
    }
];



