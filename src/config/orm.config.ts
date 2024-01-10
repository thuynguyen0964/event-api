import { registerAs } from '@nestjs/config'
import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Attendee } from 'src/events/attendee.entity'
import { Events } from 'src/events/events.entity'

export default registerAs(
  'orm.config',
  (): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    port: Number(process.env.DB_PORT),
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [Events, Attendee],
    synchronize: process.env.NODE_ENV === 'production' ? false : true
  })
)
