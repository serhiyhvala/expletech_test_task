export const cropText = (str: string, substrNumber: number) => str.length > substrNumber ? str.substring(0, substrNumber) + "..." : str
