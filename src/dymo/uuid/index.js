/*
 * Generate a RFC4122(v4) UUID
 *
 * based on https://github.com/broofa/node-uuid
 */

/**
 @public
 @return {string}
 */
const uuid = function () {
  // Use node.js Buffer class if available, otherwise use the Array class
  const BufferClass = Array;

  // Buffer used for generating string uuids
  const _buf = new BufferClass(16);

  // Cache number <-> hex string for octet values
  const toString = [];
  const toNumber = {};
  for (let i = 0; i < 256; i++) {
    toString[i] = (i + 0x100).toString(16).substr(1).toUpperCase();
    toNumber[toString[i]] = i;
  }

  function parse(s) {
    const buf = new BufferClass(16);
    let i = 0;
    const ton = toNumber;
    s.toUpperCase().replace(/[0-9A-F][0-9A-F]/g, function (octet) {
      buf[i++] = toNumber[octet];
    });
    return buf;
  }

  function unparse(buf) {
    const tos = toString;
    const b = buf;
    return `${tos[b[0]] + tos[b[1]] + tos[b[2]] + tos[b[3]]}-${tos[b[4]]}${tos[b[5]]}-${tos[b[6]]}${
      tos[b[7]]
    }-${tos[b[8]]}${tos[b[9]]}-${tos[b[10]]}${tos[b[11]]}${tos[b[12]]}${tos[b[13]]}${tos[b[14]]}${
      tos[b[15]]
    }`;
  }

  function uuid(fmt, buf, offset) {
    const b32 = 0x100000000;
    const ff = 0xff;

    const b = fmt != 'binary' ? _buf : buf || new BufferClass(16);
    let i = (buf && offset) || 0;

    let r = Math.random() * b32;
    b[i++] = r & ff;
    b[i++] = (r >>>= 8) & ff;
    b[i++] = (r >>>= 8) & ff;
    b[i++] = (r >>>= 8) & ff;
    r = Math.random() * b32;
    b[i++] = r & ff;
    b[i++] = (r >>>= 8) & ff;
    b[i++] = ((r >>>= 8) & 0x0f) | 0x40; // See RFC4122 sect. 4.1.3
    b[i++] = (r >>>= 8) & ff;
    r = Math.random() * b32;
    b[i++] = (r & 0x3f) | 0x80; // See RFC4122 sect. 4.4
    b[i++] = (r >>>= 8) & ff;
    b[i++] = (r >>>= 8) & ff;
    b[i++] = (r >>>= 8) & ff;
    r = Math.random() * b32;
    b[i++] = r & ff;
    b[i++] = (r >>>= 8) & ff;
    b[i++] = (r >>>= 8) & ff;
    b[i++] = (r >>>= 8) & ff;

    return fmt === undefined ? unparse(b) : b;
  }

  uuid.parse = parse;
  uuid.unparse = unparse;
  uuid.BufferClass = BufferClass;

  return uuid.toString();
};

export default uuid;
