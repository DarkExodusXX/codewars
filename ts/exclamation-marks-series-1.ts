export const remove = (s: string): string => s[s.length - 1] === '!' ? s.slice(0, s.length - 1) : s;
