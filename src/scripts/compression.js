import pako from "pako";

// pako uses DEFLATE which combines LZ77 and Huffman coding.

export function compress(content) {
    const compressed = pako.deflate(content)
    return String.fromCharCode.apply(null, compressed)
}

export function decompress(content) {
    const decoded = Uint8Array.from(content, c => c.charCodeAt(0))
    return pako.inflate(decoded, {to: 'string'})
}