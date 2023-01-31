function validAnagram(a, b) {
  if (a.length != b.length) return false;

  const temp = {};

  for (let i = 0; i < a.length; i++) {
    temp[a[i]] ? (temp[a[i]] += 1) : (temp[a[i]] = 1);
  }

  for (let j = 0; j < b.length; j++) {
    if (!temp[b[j]]) {
      return false;
    }

    temp[b[j]] -= 1;
  }

  return true;
}

// validAnagram("", ""); // true
// validAnagram("aaz", "zza"); // false
// validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false) // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
