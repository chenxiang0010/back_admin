import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CryptoUtil } from '../../utils/crypto.util'
import { BaseController } from './base.controller'
import { UserEntity } from './entities/user.entity'
import { UserService } from './user.service'
import { UserController } from './user.controller'

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController, BaseController],
  providers: [UserService, CryptoUtil],
  exports: [UserService]
})
export class UserModule {}
