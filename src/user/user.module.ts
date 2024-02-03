import { Module } from '@nestjs/common';
import { UserControllerController } from './controller/user-controller.controller';

@Module({
  controllers: [UserControllerController],
})
export class UserModule {}
