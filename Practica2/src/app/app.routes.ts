import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { VideosComponent } from './videos/videos.component';
import { ContentComponentComponent } from './content-component/content-component.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
    {path:"videos",component:VideosComponent},
    {path:"about", component:AboutComponent},
    {path:"inicio", component:ContentComponentComponent},
    {path:"producto",component:ProductosComponent},
    {path:"",component:ContentComponentComponent}
];
//ng g c nombredelcomponente <----- crear componente
// ng generate c nombredelcomponente <------ otro forma de crear componente