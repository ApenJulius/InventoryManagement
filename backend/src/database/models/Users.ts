import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Products } from './Products';

@Entity()
export class Customers {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column({ unique: true })
        identifier: string;

    @OneToMany(() => Products, product => product.borrower)
        borrowing: Products[];
}
