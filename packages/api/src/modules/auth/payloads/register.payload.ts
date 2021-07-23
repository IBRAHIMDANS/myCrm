import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class RegisterPayload {

  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiModelProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  firstName: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  lastName: string;

  @ApiModelProperty({ required: false })
  @IsOptional()
  @IsString()
  @MinLength(10)
  phoneNumber: string;

  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  @MinLength(5)
  password?: string;

}
