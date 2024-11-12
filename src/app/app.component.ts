import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pushNotificationPwa';


  sendNotification() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    } else if (Notification.permission === "granted") {
      // If permission is already granted, display the notification
      this.showNotification();
    } else if (Notification.permission !== "denied") {
      // Ask the user for permission
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          this.showNotification();
        }
      });
    }
  }

  showNotification() {
    new Notification("Hello from the push notification application", {
      body: "This is your desktop notification!",
      icon: "assets/icons/icon-96x96.png", // Path to your app icon
    });
  }
}
