function decrement(value: number, base?: number) {
  if (base === undefined) {
    return value - 1;
  }

  return (value + base - 1) % base;
}

function increment(value: number, base?: number) {
  if (base === undefined) {
    return value + 1;
  }

  return (value + 1) % base;
}

export { decrement, increment };
