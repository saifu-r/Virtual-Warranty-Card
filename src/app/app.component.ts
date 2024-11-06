import { Component, inject, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Messaging, getToken, onMessage, deleteToken, getMessaging } from '@angular/fire/messaging'

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

 

  constructor(
    private msg: Messaging
  ) {
    Notification.requestPermission().then(
      (notificationPermissions: NotificationPermission) => {
        if (notificationPermissions === "granted") {
          console.log("Granted");
        }
        if (notificationPermissions === "denied") {
          console.log("Denied");
        }
      });
    navigator.serviceWorker
      .register("/assets/firebase-messaging-sw.js", {
        type: "module",
      })
  }


  ngOnInit() {
    // this.createMessage()
  }

  async createMessage() {

    // let token = getToken.prototype();
    // console.log(token);
    // const message = {
    //   notification: notificationProps,
    //   token: userData.mobileToken,
    // };
    // const promise = admin.messaging().send(message);


    const messaging = getMessaging();

    getToken(messaging, { vapidKey: 'BC9kX7GpKzOoavhys4JRvFdoyE-bbFA9UMAfJ1fENycrdE56iyeH3E7VckOGGRlxJ8uG4sTdS2GG8m0dX1LWEhg' })
      .then((token) => {
        console.log('Token received: ', token);
      })
      .catch((error) => {
        console.error('Error fetching token: ', error);
      });

  }
}
