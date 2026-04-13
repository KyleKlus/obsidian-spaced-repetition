export function isDivider(text: string): boolean {
    return text === "---";
}

export function isSectionStart(text: string): boolean {
    return text === "---";
}

export function isSectionEnd(text: string): boolean {
    return text === "---";
}

export function isText(text: string): boolean {
    return !isDivider(text) && !isSectionStart(text) && !isSectionEnd(text);
}