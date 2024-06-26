import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlogComponent } from './pages/blog/blog.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'admin', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
