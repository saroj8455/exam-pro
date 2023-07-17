import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "../pages/home/home.component";
import {AboutComponent} from "../pages/about/about.component";
import {ContactComponent} from "../pages/contact/contact.component";
import {CourseComponent} from "../pages/course/course.component";
import {PagenotfoundComponent} from "../pages/pagenotfound/pagenotfound.component";

const routes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'course',component:CourseComponent},
  {path:'contact',component:ContactComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class  AppRoutingModule {}
