export default expenses => {
    if (expenses.length === 0) {
        return 0;
    } else {
        const allAmount = expenses.map(exp => exp.amount);
        return allAmount.reduce((pre, curr) => pre + curr, 0);
    }
};
