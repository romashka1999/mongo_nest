import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Environment } from './config';

@Module({
  imports: [UsersModule, MongooseModule.forRoot(Environment.mongo_uri)], // connect to mongodb
  controllers: [],
  providers: [],
})
export class AppModule {}
