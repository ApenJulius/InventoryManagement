import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { Customers } from './Users';

@Entity()
export class Products extends BaseEntity {
    constructor() {
        super();
    }
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        identifier: string;

    @Column()
        status: string;

    @ManyToOne(() => Customers, customer => customer.borrowing)
        borrower: string;

    @Column({ type: 'datetime' })
        lendingDate: string;

    @Column({ type: 'datetime' })
        lendingExpiration: string;

    @Column({ type: 'datetime' })
        returnDate: string;

}
