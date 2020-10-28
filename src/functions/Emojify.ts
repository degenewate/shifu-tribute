import emojiFromWord from "emoji-from-word";
import emojifyText from 'emojify-text';

export function Emojify(text: string) {
    let ew = text.split(" ")
    for (let i = 0; i < ew.length; i++) {
        let bruh = emojiFromWord(ew[i]) as emojiFromWordResult
        if (bruh.Match.score >= 0.5) {
            ew[i] = bruh.Match.emoji.char
        }
    }
    return ew.join(" ")
}

export function EmojiArtify(text: string) {
    return emojifyText({
        background: '🍏',
        foreground: '🍎',
        row: true
    }, text)
}