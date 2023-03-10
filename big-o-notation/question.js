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

// space complexity
// 11. 아래 함수에 대한 공간 복잡도를 구하세요.
function logUpTo(n) {
    for (var i = 1; i <= n; i++) {
        console.log(i);
    }
}

// --- 0(1)

// 12. 아래 함수에 대한 공간 복잡도를 구하세요.
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// --- 0(1)

// 13. 아래 함수에 대한 공간 복잡도를 구하세요.
function logAtMost10(n) {
    for (var i = 1; i <= Math.min(n, 10); i++) {
        console.log(i);
    }
}

// --- 0(1)

// 14. 아래 함수에 대한 공간 복잡도를 구하세요.
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

// 15. 아래 함수에 대한 공간 복잡도를 구하세요.
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

// --- 0(n)


// 16. 오브젝트에 키와 값을 추가하기 위한 빅오는 무엇일까요?
// --- o(1)

// 17. 오브젝트의 키에 접근하기 위한 빅오는 무엇일까요?
// --- o(1)

// 18. 오브젝트의 키를 제거하기 위한 빅오는 무엇일까요?
// --- o(1)

// 19. 배열 안에 데이터를 삽입하는 빅오는 무엇일까요?
// --- o(1)

// 20. 배열 안에 데이터를 이동하는 빅오는 무엇일까요?
// --- o(n)

// 21. forEach 함수를 위한 빅오는 무엇일까요?
// --- o(n)