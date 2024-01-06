import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from "typeorm"

@Entity()
export class History {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    type: string

    @CreateDateColumn()
    entryDate: date

    @Column()
    item: string

    @Column()
    borrower: string

    @Column()
    byAccount: string

}