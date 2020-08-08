
interface Ifn {
    (key: string, value: string): string;
}

const aFn: Ifn = (key, value) => {
    return key + value;
};


const a2Fn: Ifn = (key, value) => {
    return key + value;
};

console.log(aFn('1', '2'));


