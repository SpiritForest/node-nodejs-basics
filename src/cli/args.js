const parseArgs = () => {
    const args = process.argv.slice(2);
    const argsFormatted = args
        .map((arg, index, arr) => {
            let result = '';

            if (arg.includes('--')) {
                arg.replace('--', '');
                result = `${arg.replace('--', '')} is ${arr[index + 1]}`;
            }

            return result;
        })
        .filter(Boolean);

    console.log(argsFormatted.join(', '));
};

parseArgs();