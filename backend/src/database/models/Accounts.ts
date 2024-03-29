import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Accounts {
    @PrimaryGeneratedColumn()
        id: number;

    @Column()
        name: string;

    @Column()
        password: string;

    @Column()
        type: string;
}
