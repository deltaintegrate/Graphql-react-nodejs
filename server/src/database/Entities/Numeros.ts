import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Numeros extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    numero1: String;

    @Column()
    numero2: String;

    @Column()
    ResponseValue: String;
}