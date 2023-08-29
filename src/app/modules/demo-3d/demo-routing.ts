import {
    Route
} from '@angular/router';
import {
    DemoRootComponent
} from './demo-root/demo-root.component';
import {
    DemoResolver
} from './demo.resolver';
import { RemipayVerifikComponent } from './remipay-verifik/remipay-verifik.component';

export const DemoRoutes: Route[] = [
    /* { path: 'remipay-verifik', component: RemipayVerifikComponent }, */
    {
        path: '',
        component: RemipayVerifikComponent,
        resolve: {},
    },
    {
        path: ':id',
        component: RemipayVerifikComponent,
        resolve: {
            token: DemoResolver
        }
    }
];