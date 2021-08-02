import { ApiModelProperty } from "@nestjs/swagger/dist/decorators/api-model-property.decorator";
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class MessagePayload {
  @ApiModelProperty({ required: false })
  @IsString()
  @IsOptional()
  id?: string;

  @ApiModelProperty({ required: true })
  @IsNotEmpty()
  content: string;

  @ApiModelProperty({ required: true })
  @IsString()
  @IsOptional()
  userId?: string;

  @ApiModelProperty({ required: true })
  @IsString()
  @IsNotEmpty()
  receiverId: string;

  @ApiModelProperty({ required: true })
  @IsBoolean()
  @IsOptional()
  isRead: boolean;

  @ApiModelProperty({ required: true })
  @IsBoolean()
  @IsOptional()
  isMessage: boolean;
}
