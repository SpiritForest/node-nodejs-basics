const parseEnv = () => {
    const rssEntries = Object.entries(process.env)
        .map(([key, value]) => {
            if (key.includes('RSS_')) {
                return `${key}=${value}`;
            }
        })
        .filter(Boolean);

    console.log(rssEntries.join('; '));
};

parseEnv();