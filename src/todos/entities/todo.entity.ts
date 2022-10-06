import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class Todo {
    @ApiProperty()
    id: number;
    @ApiProperty()
    title: string;
    @ApiPropertyOptional()
    description?: string;
    @ApiProperty()
    status: boolean;
}
