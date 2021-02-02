import { Route } from '@angular/compiler/src/core';
import { Routes } from '@angular/router';
import { HomeRoutes } from './home/home.router';
import { IndexRoutes } from './index/index.router';
import { NoPageRoutes } from './no-page/no-page.routes';


// Delete const routes in AppRoutingModule
// Check
export const routes: Route[] = [...HomeRoutes, ...IndexRoutes, ...NoPageRoutes];