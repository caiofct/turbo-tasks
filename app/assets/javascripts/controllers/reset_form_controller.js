import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["name", "submit"]

  reset() {
    this.element.reset()
    this.submitTarget.disabled = false
    this.nameTarget.focus()
  }
}
