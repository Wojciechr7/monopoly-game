import { Module } from '@nestjs/common';
import { UniqueValueConstraint } from './custom-validators/unique-email.validator';

@Module({
  providers: [UniqueValueConstraint]
})
export class CustomValidatorsModule {
}
