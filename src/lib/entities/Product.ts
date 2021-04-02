import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ProductImage } from "./ProductImage";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  purchases: number;

  @OneToMany(() => ProductImage, image => image.product)
  images: ProductImage[];
}