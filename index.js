function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}

// Example usage:
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // other records...
];

console.log(superbowlWin(record)); // Should output '2015'
