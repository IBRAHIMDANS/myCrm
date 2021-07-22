import { IsEmail } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class EmailPayload {
  @ApiModelProperty({ required: true })
  @IsEmail()
  email: string;
}
