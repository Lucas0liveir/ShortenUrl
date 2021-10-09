"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoConnection = void 0;
const Constants_1 = require("../config/Constants");
const mongoose_1 = __importDefault(require("mongoose"));
class MongoConnection {
    async Connect() {
        try {
            await mongoose_1.default.connect(Constants_1.config.MONGO_CONNECTION);
            console.log('data base connect');
        }
        catch (err) {
            console.log(err);
            process.exit(1);
        }
    }
}
exports.MongoConnection = MongoConnection;
//# sourceMappingURL=MongoConnection.js.map