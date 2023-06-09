export function getRandomInt(maxValue: number): number {
    return Math.floor(Math.random() * maxValue);
}

// TODO: rewrite to prevent color clash with background (limit color range)
export function getRandomRGBColor(): string {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}