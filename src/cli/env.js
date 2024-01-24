const parseEnv = () => {
    for (let property in process.env) {
        if (property.substring(0, 4) === "RSS_") {
            console.log(`${property}=${process.env[property]}`)
        }
    }
};

parseEnv();