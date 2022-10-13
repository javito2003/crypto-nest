import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Crypto } from './Crypto'

@Entity({ name: "users" })
export class User {
    @PrimaryGeneratedColumn({ type: "bigint" })
    id: number

    @Column()
    name: string
    
    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToMany(() => Crypto, (crypto) => crypto.user)
    cryptos: Crypto[]
}