import { number, object, string, TypeOf } from "zod";

export const CreateUserSchema = object({
    body: object({
        email: string().email("Invalid Email"),
        name: string(),
        phone: string().regex(
            /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
            "Invalid Phone Number",
        ),
    }),
});
export type CreateUserInput = TypeOf<typeof CreateUserSchema>;

