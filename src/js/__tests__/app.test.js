import ArrayBufferConverter from '../app';
import getBuffer from '../getBuffer';

test('проверка метода toString', () => {
  const buffArray = new ArrayBufferConverter();
  buffArray.load(getBuffer());
  const received = buffArray.toString();
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(received).toBe(expected);
});
