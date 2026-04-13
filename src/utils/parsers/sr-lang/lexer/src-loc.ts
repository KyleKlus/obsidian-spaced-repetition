/**
 * A source location for a token in the sr-lang source code
 */
export class SrcLoc {
    pos: number;
    line: number;
    col: number;
    file: string;

    constructor(pos: number, line: number, col: number, file: string) {
        this.pos = pos;
        this.line = line;
        this.col = col;
        this.file = file;
    }

    static new(pos: number, line: number, col: number, file: string): SrcLoc {
        return new SrcLoc(pos, line, col, file);
    }
}