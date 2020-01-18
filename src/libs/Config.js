import dotenv from "dotenv";

export default class Config {

    constructor() {
        this.result = dotenv.config();
        this.config = [];
        if (Object.prototype.hasOwnProperty.call(this.result, "parsed")) {
            this.config = {};
            this.parse();
        }
    }

    init() {
        return this.config;
    }

    parse() {
        Object.entries(this.result.parsed).forEach(([index, envValue]) => {
            const values = envValue.split(",").map(s => s.trim());
            let value = "";
            if (values.length > 0) {
                if (values.length > 0 && values.length === 1) {
                    value = values[0];
                } else if (values.length > 1) {
                    value = values;
                }
            }
            this.config[index] = value;
        });
    }
}
