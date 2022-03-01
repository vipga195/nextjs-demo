//cut text bang " ", mac dinh la 6
export const trimContent = (value, num = 6, char = false) => {
    let text = value;
    let isExit = 0;
    if (typeof text == "string") {
        text = text.trim()
        if (text.length > num) {
            if (char) {
                return text.slice(0, num) + "..."
            }
            else {
                for (let i = 0; i < text.length; i++) {
                    if (text[i] === " ") {
                        if (isExit == num) {
                            return text.slice(0, i) + "..."
                        } else {
                            isExit++
                        }
                    }
                }
            }
            return text
        }
        else {
            return text
        }
    }
    return text
}