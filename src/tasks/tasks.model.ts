import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface TasksCreationAttrs {
    title: string;
    description: string;
    tag: string;
    sectionId: number;
}

@Table({
    tableName: 'tasks'
})
export class Task extends Model<Task, TasksCreationAttrs> {

    @ApiProperty({example: 1, description: 'Уникальный ID задачи'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'Test task', description: 'Описание задачи'})
    @Column({type: DataType.STRING, unique: false, allowNull: false})
    title: string;

    @ApiProperty({example: 'Это тестовая задача', description: 'Описание задачи'})
    @Column({type: DataType.STRING, allowNull: false})
    description: string;

    @ApiProperty({example: 'Primary', description: 'Тэг задачи'})
    @Column({type: DataType.STRING, allowNull: false})
    tag: string;

    @ApiProperty({example: 1, description: 'ID секции задачи'})
    @Column({type: DataType.INTEGER, allowNull: false})
    sectionId: number;
}