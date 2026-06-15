import { Component } from '@angular/core';
import { AllCase, AllCaseOutput } from "./all-case/all-case";

@Component({
  selector: 'app-root',
  imports: [AllCase],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected original = "";
  protected uppercase = "";
  protected lowercase = "";

  protected onUpdate(result: AllCaseOutput) {
    if (result !== null) {
      this.original = result.original;
      this.uppercase = result.asUpperCase;
      this.lowercase = result.asLowerCase;
    }
  }
}
