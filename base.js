function baseCriteria(chars, base) {
    let output = [];
    const baseLength = base.length;

    if (baseLength !== chars.length) {
        console.log("Not a valid base input");
        return;
    }

    for (const c of base) {
        if (!chars.some(sublist => sublist.includes(c))) {
            console.log("Not a valid base input");
            return;
        }
    }

    let index = -1;
    console.log(base);
    base.sort();

    for (const i of chars) {
        index++;
        const temp = [...base];

        for (let j = 0; j < i.length; j++) {
            if (i[j] !== base[index]) {
                temp[index] = i[j];
                console.log(temp);
                output.push([...temp]);
            }
        }
    }

    console.log(output);
    return output;
}

const chars = [
    ['A1', 'A2', 'A3'],
    ['B1', 'B2', 'B3'],
    ['C1', 'C2']
];
const base = ['B2', 'A1', 'C2'];

baseCriteria(chars, base);
