import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

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

    @Column()
        borrower: string;

    @Column({ type: 'datetime' })
        lendingDate: string;

    @Column({ type: 'datetime' })
        lendingExpiration: string;

    @Column({ type: 'datetime' })
        returnDate: string;

}
