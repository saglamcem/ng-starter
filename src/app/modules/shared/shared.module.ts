import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * NOTE: Try not to include `providers` in the shared module.
 * TL;DR: The services declared in here, or in any module that is
 * imported or re-exported here won't be singleton services.
 * If you need a service to be singleton, provide it in CoreModule.
 * For more, visit the guide at https://angular.io/guide/singleton-services
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class SharedModule {}
