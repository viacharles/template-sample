import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import {AuthInterceptor} from './auth.interceptors';
import {NetworkInterceptor} from './network.interceptor';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({ declarations: [],
    exports: [CommonModule, TranslateModule], imports: [CommonModule], providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: NetworkInterceptor,
            multi: true,
        },
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class CoreModule {}
