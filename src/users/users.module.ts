import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SequelizeAdapter } from 'src/infra/database/SequelizeProvider';

@Module({
  controllers: [UsersController],
  providers: [...SequelizeAdapter, UsersService],
  exports: [...SequelizeAdapter],
})
export class UsersModule {}
