import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CryptoUtil } from '../../utils/crypto.util'
import { ResultUtil } from '../../utils/result.util'
import { CreateUserDto } from './dto/create-user.dto'
import { UserEntity } from './entities/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userEntity: Repository<UserEntity>,
    private readonly cryptoUtil: CryptoUtil
  ) {}

  async findOneByUserName(username) {
    return await this.userEntity.findOne(username)
  }

  async create(createUserDto: CreateUserDto): Promise<ResultUtil> {
    const existing = await this.findOneByUserName(createUserDto.username)
    if (existing)
      throw new HttpException('该用户名已经注册', HttpStatus.BAD_REQUEST)

    // 密码加盐
    createUserDto.password = this.cryptoUtil.encryptPassword(
      createUserDto.password
    )
    // 插入用户
    await this.userEntity.create(createUserDto)
    return { statusCode: 201, message: '注册成功' }
  }
}
