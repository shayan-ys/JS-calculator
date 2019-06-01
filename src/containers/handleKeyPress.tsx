/**
 * @link https://github.com/ahfarmer/calculator
 */
const Big = require('big.js');

interface State {
    clipboard: any;
    currentVal: any;
    operation: any;
}

export function handleKeyPress(state: State, keyValue: string) : any {
    switch (keyValue) {
        case "AC":
            return {
                clipboard: null,
                currentVal: null,
                operation: null
            };
        case "%":
            if (state.operation && state.currentVal) {
                const result = operate(state.clipboard, state.currentVal, state.operation);
                return {
                    clipboard: Big(result)
                        .div(Big("100"))
                        .toString(),
                    currentVal: null,
                    operation: null
                };
            }
            if (state.currentVal) {
                return {
                    currentVal: Big(state.currentVal)
                        .div(Big("100"))
                        .toString()
                };
            }
            return {};
        case ".":
            if (state.currentVal) {
                // ignore . if the currentVal number already has one
                if (state.currentVal.includes(".")) {
                    return {};
                }
                return { currentVal: state.currentVal + "." };
            }
            return { currentVal: "0." };
        case "=":
            if (state.currentVal && state.operation) {
                return {
                    clipboard: operate(state.clipboard, state.currentVal, state.operation),
                    currentVal: null,
                    operation: null,
                };
            } else {
                // '=' with no operation, nothing to do
                return {};
            }
        case "+/-":
            if (state.currentVal) {
                return { currentVal: (-1 * parseFloat(state.currentVal)).toString() };
            }
            if (state.clipboard) {
                return { clipboard: (-1 * parseFloat(state.clipboard)).toString() };
            }
            return {};
    }

    if (isNumber(keyValue)) {
        if (keyValue === "0" && state.currentVal === "0") {
            return {};
        }
        // If there is an operation, update currentVal
        if (state.operation) {
            if (state.currentVal) {
                return { currentVal: state.currentVal + keyValue };
            }
            return { currentVal: keyValue };
        }
        // If there is no operation, update currentVal and clear the value
        if (state.currentVal) {
            const currentVal = state.currentVal === "0" ? keyValue : state.currentVal + keyValue;
            return {
                currentVal,
                clipboard: null,
            };
        }
        return {
            currentVal: keyValue,
            clipboard: null,
        };
    }

    // Button must be an operation

    // User pressed an operation button and there is an existing operation
    if (state.operation) {
        return {
            clipboard: operate(state.clipboard, state.currentVal, state.operation),
            currentVal: null,
            operation: keyValue,
        };
    }

    // no operation yet, but the user typed one

    // The user hasn't typed a number yet, just save the operation
    if (!state.currentVal) {
        return { operation: keyValue };
    }

    // save the operation and shift 'currentVal' into 'clipboard'
    return {
        clipboard: state.currentVal,
        currentVal: null,
        operation: keyValue,
    };
}

function operate(numberOne: string | null, numberTwo: string | null, operation: string | null) : string {
    const one = Big(numberOne || "0");
    const two = Big(numberTwo || "0");
    switch (operation) {
        case "+":
            return one.plus(two).toString();
        case "−":
            return one.minus(two).toString();
        case "×":
            return one.times(two).toString();
        case "÷":
            if (two === "0") {
                alert("Divide by 0 error");
                return "0";
            } else {
                return one.div(two).toString();
            }
        default:
            throw Error(`Unknown operation '${operation}'`);

    }
}

function isNumber(str: string) {
    return /[0-9]+/.test(str);
}
