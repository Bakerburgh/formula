// Copyright 2015 Peter W Moresi

// ISEVEN returns true when the value is even.
export function ISEVEN(value) {
    return !(Math.floor(Math.abs(value)) & 1);
}
