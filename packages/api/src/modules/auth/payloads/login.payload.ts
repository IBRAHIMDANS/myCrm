import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class LoginPayload {
  @ApiModelProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  @MinLength(5)
  password: string;
}
