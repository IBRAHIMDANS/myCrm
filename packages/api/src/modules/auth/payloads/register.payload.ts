import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class RegisterPayload {

  @ApiModelProperty({ required: true })
  @IsEmail()
  email: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  firstName: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  lastName: string;

  // @ApiModelProperty()
  // @IsString()
  // slug: string;

  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  @MinLength(5)
  password?: string;

  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  role?: string;

}
