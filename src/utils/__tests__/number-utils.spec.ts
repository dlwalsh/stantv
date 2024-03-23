import { decrement, increment } from '../number-utils';

describe('Number utils', () => {
  it('should decrement 1 to 0', () => {
    expect(decrement(1)).toEqual(0);
  });

  it('should decrement 0 to -1', () => {
    expect(decrement(0)).toEqual(-1);
  });

  it('should decrement 0 to -59 (base 60)', () => {
    expect(decrement(0)).toEqual(-1);
  });

  it('should increment 0 to 1', () => {
    expect(increment(0)).toEqual(1);
  });

  it('should increment 59 to 0 (base 60)', () => {
    expect(increment(59, 60)).toEqual(0);
  });
});
