import { IsNotEmpty } from "class-validator";

export class CreateChannelDto {

    @IsNotEmpty()
    readonly name: string;

}