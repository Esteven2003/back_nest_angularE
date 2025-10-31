import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";
import { categoria } from "../../categoria/entities/categoria.entity";
//import { categoria } from "src/modules/categoria/entities/categoria.entity";
import { Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('productos')

export class Producto {
    @PrimaryGeneratedColumn()
    id: number;

    nombre: string;

    precio: number;

    stock:number;

    image:string;

    description: string;

    estado: boolean;

    @ManyToOne(() => categoria, (cat) => cat.producto)
    categoria: categoria;

    @OneToMany(() => PedidoProducto, pedprod => pedprod.producto )
    pedidoProducto: PedidoProducto[];

}