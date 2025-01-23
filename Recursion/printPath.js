function countWays(n, ans) {
    if (n < 0) {
        return 0;
    }
    if (n === 0) {
        return 1; // This represents one valid way
    }

    let count = 0;

    for (let i = 1; i <= n; i++) {
        count += countWays(n - i, ans + i);
    }

    return count;
}

const totalWays = countWays(3, '');
console.log("Total number of ways:", totalWays);
