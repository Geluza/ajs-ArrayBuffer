export default class ArrayBufferConverter {

  load(buffer) {
    this.buffer = buffer;
  }


  toString() {
    const uintArr = new Uint16Array(this.buffer)
    let stringView = '';
    for (let i = 0; i < uintArr.length; i += 1) {
      stringView += String.fromCharCode(uintArr[i]);
    }

    return stringView;
  }
}
