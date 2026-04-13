import { SrcLoc } from "src/utils/parsers/sr-lang/lexer/src-loc";
import { TokenTypes } from "src/utils/parsers/sr-lang/lexer/token-types";

export class Token {
    type: TokenTypes;
    value: string;
    srcLoc: SrcLoc;

    constructor(type: TokenTypes, value: string, srcLoc: SrcLoc) {
        this.type = type;
        this.value = value;
        this.srcLoc = srcLoc;
    }

    static new(type: TokenTypes, value: string, srcLoc: SrcLoc) {
        return new Token(type, value, srcLoc);
    }
}