import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export class RegisterPasswordPayload {

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  email: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  password: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  newPassword: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  confirmNewPassword: string;

}
