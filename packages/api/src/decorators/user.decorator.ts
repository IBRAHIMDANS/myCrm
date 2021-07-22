import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//  @User
const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
export default User;
