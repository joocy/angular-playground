import { Component } from '@angular/core';
// import { signal } from '@angular/core';
import { AllCase, AllCaseOutput } from "./all-case/all-case";

@Component({
  selector: 'app-root',
  imports: [AllCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // This will work if change detection is triggered or manually started
  protected original = "";
  protected uppercase = "";
  protected lowercase = "";

  // protected original = signal("");
  // protected uppercase = signal("");
  // protected lowercase = signal("");

  protected onUpdate(result: AllCaseOutput | null) {
    if (result !== null) {
      this.original = result.original;
      this.uppercase = result.asUpperCase;
      this.lowercase = result.asLowerCase;

      // this.original.set(result.original);
      // this.uppercase.set(result.asUpperCase);
      // this.lowercase.set(result.asLowerCase);
    }
  }
}
