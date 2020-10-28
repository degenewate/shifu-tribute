import * as zalgo from "to-zalgo"

export function zalgofy(text: string): string{
    return zalgo(text) as string
}