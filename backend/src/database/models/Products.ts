import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';
import { Customers } from './Customers';

@Entity()
export class Products extends BaseEntity {
    constructor() {
        super();
    }
    @PrimaryGeneratedColumn()
        id: number;

    @Column({ nullable: true })
        name: string;

    @Column({ unique: true })
        identifier: string;

    @Column()
        status: string;

    @ManyToOne(() => Customers, customer => customer.borrowing, { nullable: true })
        borrower: Customers;

    @Column({ type: 'datetime', nullable: true })
        lendingDate: string;

    @Column({ type: 'datetime', nullable: true  })
        lendingExpiration: string;

    @Column({ type: 'datetime', nullable: true  })
        returnDate: string;

}
