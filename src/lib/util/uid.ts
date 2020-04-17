export const generateId: () => string = ((index = 0) => () => (index++).toString())()
