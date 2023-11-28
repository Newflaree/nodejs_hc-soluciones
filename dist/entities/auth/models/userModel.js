"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    img: {
        type: String
    },
    location: {
        latitude: {
            type: Number,
            default: 0
        },
        longitude: {
            type: Number,
            default: 0
        }
    },
    tags: [{
            type: String
        }],
    role: {
        type: String,
        enum: [
            'USER_ROLE',
            'NARRATOR_ROLE',
            'ADMIN_ROLE'
        ],
        default: 'USER_ROLE'
    },
    isBlocked: {
        type: Boolean,
        default: false
    },
    isGoogle: {
        type: Boolean,
        default: false,
    },
    isFacebook: {
        type: Boolean,
        default: false
    },
    isApple: {
        type: Boolean,
        default: false
    },
    applicationStatus: {
        type: String,
        enum: [
            'WITHOUT_STATUS',
            'PENDING_STATUS',
            'ACTIVE_STATUS',
            'REJECTED_STATUS'
        ],
        default: 'WITHOUT_STATUS'
    }
});
UserSchema.methods.toJSON = function () {
    const _a = this.toObject(), { __v, password, _id } = _a, user = __rest(_a, ["__v", "password", "_id"]);
    user.uid = _id;
    return user;
};
exports.default = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=userModel.js.map