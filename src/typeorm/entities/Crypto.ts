import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "user_crypto" })
export class Crypto {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number

    @Column()
    cryptoId: string

    @Column()
    changeObjective: number

    @Column({ type: 'double' })
    price: number

    @Column()
    layoutName: string

    @ManyToOne(() => User, (user) => user.cryptos)
    user: User
}