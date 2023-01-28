// 1. 다음 빅오 표현식을 간단히 해보세요.
// 0(n + 10) --- 0(n)

// 2. 다음 빅오 표현식을 간단히 해보세요.
// 0(100 * n) --- 0(n)

// 3. 다음 빅오 표현식을 간단히 해보세요.
// 0(25) --- 0(1)

// 4. 다음 빅오 표현식을 간단히 해보세요.
// O(n^2 + n^3) --- 0(n^3)

// 5. 다음 빅오 표현식을 간단히 해보세요.
// O(n + n + n + n) --- 0(n)

// 6. 아래 함수에 대한 시간 복잡도를 구하세요.
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// --- 0(n)

// 7. 아래 함수에 대한 시간 복잡도를 구하세요.
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// --- 0(1)

// 8. 아래 함수에 대한 시간 복잡도를 구하세요.
function logAtLeast10(n) {
    for (var i = 1; i <= Math.max(n, 10); i++) {
        console.log(i);
    }
}

// --- 0(n)

// 9. 아래 함수에 대한 시간 복잡도를 구하세요.
function onlyElementsAtEvenIndex(array) {
    var newArray = Array(Math.ceil(array.length / 2));
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            newArray[i / 2] = array[i];
        }
    }
    return newArray;
}

// --- 0(n)

// 10. 아래 함수에 대한 시간 복잡도를 구하세요.
function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

// --- 0(n^2)