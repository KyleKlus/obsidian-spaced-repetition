import { SrcLoc } from "src/utils/parsers/sr-lang/lexer/src-loc";
import { TokenTypes } from "src/utils/parsers/sr-lang/lexer/types/token-types";
// TODO: Implement this: https://dev.to/jasonsbarr/create-your-own-programming-language-part-i-numbers-13cj
export class Token {
    tokenType: TokenTypes;
    value: string;
    srcLoc: SrcLoc;

    constructor(tokenType: TokenTypes, value: string, srcLoc: SrcLoc) {
        this.tokenType = tokenType;
        this.value = value;
        this.srcLoc = srcLoc;
    }

    static new(tokenType: TokenTypes, value: string, srcLoc: SrcLoc) {
        return new Token(tokenType, value, srcLoc);
    }
}