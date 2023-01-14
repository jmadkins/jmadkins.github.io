import { Controller } from "https://unpkg.com/@hotwired/stimulus/dist/stimulus.js"

export default class extends Controller {
  static classes = ["active"]
  static targets = ["btn", "tab"]
  static values = { defaultTab: String }

  connect() {
    this.tabTargets.map(x => x.hidden = true)

    try {
      let selectedBtn = this.btnTargets.find(element => element.id === this.defaultTabValue)
      let selectedTab = this.tabTargets.find(element => element.id === this.defaultTabValue)
      selectedTab.hidden = false
      selectedBtn.classList.add(this.activeClass)
    } catch { }
  }

  select(event) {
    let selectedTab = this.tabTargets.find(element => element.id === event.currentTarget.id)

    if (selectedTab.hidden) {
      // CLOSE CURRENT TAB
      this.tabTargets.map(x => x.hidden = true)
      this.btnTargets.map(x => x.classList.remove(this.activeClass))
      selectedTab.hidden = false
      event.currentTarget.classList.add(this.activeClass)
    } else {
      // OPEN CURRENT TAB
      this.tabTargets.map(x => x.hidden = true)
      this.btnTargets.map(x => x.classList.remove(this.activeClass))
      selectedTab.hidden = true
      event.currentTarget.classList.remove(this.activeClass)
    }
  }
}
