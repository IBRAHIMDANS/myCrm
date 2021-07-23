import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//  @User
const Users = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);
export default Users;
