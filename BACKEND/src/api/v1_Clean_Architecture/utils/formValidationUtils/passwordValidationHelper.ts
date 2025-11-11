// Detects repeating patterns like "abcabcabc" or "abcdabcdabcd"
export function isPasswordRepeatedPattern(str: string) {
  const len = str.length
  for (let i = 1; i <= len / 2; i++) {
    // check if length is divisible by i
    if (len % i === 0) {
      const pattern = str.slice(0, i)
      const repeated = pattern.repeat(len / i)
      if (repeated === str) return true
    }
  } 
  return false
}

// Detects easy sequences (abc, 1234, etc.)
export function isPasswordSequential(str: string, maxSequential = 3) {
  const sequences = [
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "0123456789",
    "!@#$%^&*()_+-=[]{}|;:',.<>/?`~"
  ]

  // Normalize string (for easier comparison)
  const chars = str.split('');

  // Check for forward or reverse sequences
  for (const seq of sequences) {
    for (let i = 0; i < chars.length - maxSequential; i++) {
      const segment = chars.slice(i, i + maxSequential + 1).join('');

      // Forward
      if (seq.includes(segment)) return true;
      // Reverse
      if (seq.split('').reverse().join('').includes(segment)) return true;
    }
  }

  return false;
}

