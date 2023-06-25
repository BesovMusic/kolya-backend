import { ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    
    @ApiProperty({example: 'user@mail.com', description: 'Email'})
    readonly title: string;

    @ApiProperty({example: 'password', description: 'Пароль'})
    readonly description: string;

    @ApiProperty({example: 'password', description: 'Пароль'})
    readonly tag: string;

    @ApiProperty({example: 'password', description: 'Пароль'})
    readonly sectionId: number;

}