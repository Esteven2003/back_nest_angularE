import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
//import { categoria } from "src/modules/categoria/entities/categoria.entity";
import { Entity, Column, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, JoinColumn } from "typeorm";

@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:'varchar', length:250})
    nombre: string;

    @Column({type:'decimal',precision:10, scale:2})
    precio: number;

    @Column({type:'int'})
    stock:number;

    @Column({type:'varchar', length:250, nullable:true})
    image:string;

    @Column({type:'text', nullable:true})
    description: string;

    @Column({type:'boolean', default:true})
    estado: boolean;

    @ManyToOne(() => Categoria, categoria => categoria.producto)
    categoria: Categoria;

    @JoinColumn({ name: 'categoriaId' })

    @OneToMany(() => PedidoProducto, pedprod => pedprod.producto )
    pedidoProducto: PedidoProducto[];

}