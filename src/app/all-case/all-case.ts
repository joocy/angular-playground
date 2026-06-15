import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from "@angular/core";
// import { input, output, signal } from "@angular/core";

export type AllCaseOutput = {
    original: string,
    asUpperCase: string,
    asLowerCase: string
};

@Component({
    selector: "app-all-case",
    templateUrl: "./all-case.html",
    styleUrl: "./all-case.css"
})
export class AllCase {
    // This is the 'old' way of handling inputs and outputs
    @Input() placeholder = "";
    @Output() update = new EventEmitter<AllCaseOutput | null>();
    protected value = "";

    // This is the current pattern for handling inputs and outputs
    // placeholder = input("");
    // update = output<AllCaseOutput | null>();
    // value = signal("");

    protected handleInput(event: Event): void {
        if (event.target !== null) {
            const input = (event.target as HTMLInputElement).value;
            this.value = input;
            // this.value.set(input);
            this.update.emit({
                original: input,
                asUpperCase: input.toLocaleUpperCase(),
                asLowerCase: input.toLocaleLowerCase()
            });
        } else {
          this.update.emit(null);
        }
    }

    protected clear(): void {
      this.value = "";
      // this.value.set("");
      this.update.emit(null);
    }
}
