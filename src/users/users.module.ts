import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSchema } from './schemas/User';

@Module({
  imports: [MongooseModule.forFeature([{name:'User', schema: UserSchema}])], //create mongoose document
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}