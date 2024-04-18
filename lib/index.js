"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class TypeCMS {
    constructor(obj) {
        this.baseUrl = obj.baseUrl;
        this.token = obj.token;
        this.projectId = obj.projectId;
    }
    // Method to fetch entries, properly typed with return type
    getEntries(body_1) {
        return __awaiter(this, arguments, void 0, function* (body, options = {}) {
            const query = toQueryString(options);
            try {
                const response = yield fetch(`${this.baseUrl}/api/projects/${this.projectId}/content${query}`, {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${this.token}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(body),
                });
                const data = yield response.json();
                return data;
            }
            catch (error) {
                // Handle error
                console.error('Failed to fetch entries:', error);
                throw error; // Rethrow or handle accordingly
            }
        });
    }
}
exports.default = TypeCMS;
function toQueryString(params) {
    const query = Object.keys(params)
        // @ts-ignore
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    return query ? `?${query}` : '';
}
