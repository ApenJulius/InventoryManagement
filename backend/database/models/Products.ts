import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    identifier: string

    @Column()
    status: string

    @Column()
    borrower: string

    @Column()
    lendingDate: Date

    @Column()
    lendingExpiration: Date

    @Column()
    returnDate: Date

}