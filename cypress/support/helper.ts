export function randomString(): string {
    let s = '!$%&*'
    let randomstring =
        Math.random().toString(36).toUpperCase().slice(2) +
        Math.random().toString(36).slice(-8) +
        s.substr(Math.floor(s.length * Math.random()), 1)
    return randomstring
}

export function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
