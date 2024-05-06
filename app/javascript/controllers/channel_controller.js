import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log("Hello, Stimulus!")
  }

  selectChannel(event) {
    const channelName = event.target.dataset.channelName;
    alert(`Channel ${channelName} was selected.`);
    // Add your logic here for when a channel is selected
  }
}
