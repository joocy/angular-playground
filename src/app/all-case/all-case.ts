import { Component, EventEmitter, input, Input, output, Output } from "@angular/core";

export type AllCaseOutput = {
    original: string,
    asUpperCase: string,
    asLowerCase: string
} | null;

@Component({
    selector: "app-all-case",
    templateUrl: "./all-case.html",
    styleUrl: "./all-case.css"
})
export class AllCase {
    // This is the 'old' way of handling inputs and outputs
    @Input() placeholder = "";
    @Output() update = new EventEmitter<AllCaseOutput>();

    // This is the current pattern for handling inputs and outputs
    // placeholder = input("");
    // update = output<AllCaseOutput>();

    protected handleInput(event: Event): void {
        if (event.target !== null) {
            const input = (event.target as HTMLInputElement).value;
            this.update.emit({
                original: input,
                asUpperCase: input.toLocaleUpperCase(),
                asLowerCase: input.toLocaleLowerCase()
            });
        }
        this.update.emit(null);
    }
}