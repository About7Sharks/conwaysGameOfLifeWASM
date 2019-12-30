import * as wasm from './wasm_game_of_life_bg.wasm';

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }
/**
*/
export const Cell = Object.freeze({ Dead:0,Alive:1, });
/**
*/
export class Universe {

    static __wrap(ptr) {
        const obj = Object.create(Universe.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_universe_free(ptr);
    }
    /**
    * Set the width of the universe.
    *
    * Resets all cells to the dead state.
    * @param {number} width
    */
    set_width(width) {
        wasm.universe_set_width(this.ptr, width);
    }
    /**
    * Set the height of the universe.
    *
    * Resets all cells to the dead state.
    * @param {number} height
    */
    set_height(height) {
        wasm.universe_set_height(this.ptr, height);
    }
    /**
    * @param {number} row
    * @param {number} column
    */
    toggle_cell(row, column) {
        wasm.universe_toggle_cell(this.ptr, row, column);
    }
    /**
    */
    tick() {
        wasm.universe_tick(this.ptr);
    }
    /**
    * @returns {Universe}
    */
    static new() {
        var ret = wasm.universe_new();
        return Universe.__wrap(ret);
    }
    /**
    * @returns {string}
    */
    render() {
        try {
            wasm.universe_render(8, this.ptr);
            var r0 = getInt32Memory0()[8 / 4 + 0];
            var r1 = getInt32Memory0()[8 / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * @returns {number}
    */
    width() {
        var ret = wasm.universe_width(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    height() {
        var ret = wasm.universe_height(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number}
    */
    cells() {
        var ret = wasm.universe_cells(this.ptr);
        return ret;
    }
}

export const __widl_f_time_with_label_ = function(arg0, arg1) {
    console.time(getStringFromWasm0(arg0, arg1));
};

export const __widl_f_time_end_with_label_ = function(arg0, arg1) {
    console.timeEnd(getStringFromWasm0(arg0, arg1));
};

export const __wbg_random_40717e477b6813d8 = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');

export const __wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

