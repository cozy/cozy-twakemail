# cozy-twakemail

## What is it

cozy-twakemail is a container app that embeds [Twake Mail](https://github.com/linagora/tmail-flutter) app. It is a very basic app displaying the cozy-bar and an iframe. By leveraging [cozy-external-bridge](https://github.com/cozy/cozy-libs/tree/master/packages/cozy-external-bridge), it allows history syncing from Twake Mail and exposes APIs to Twake Mail.

## Intents

The manifest declares the `CREATE io.cozy.mails` intent (a new message, for Twake Chat) and `"service_url_flag": "mail.service-url"`: the intent is served by the standalone Twake Mail on its `/intents` page, not by this app. Set the `mail.service-url` flag to the bare origin of Twake Mail (e.g. `https://mail.example.com`) on every context, and publish a version declaring the intent only together with the flag: without it, the stack sends the intent to this app, which does not serve it.

## Install

You can then clone the app repository and install dependencies:

```sh
$ git clone https://github.com/cozy/cozy-twakemail.git
$ cd cozy-twakemail
$ yarn install
```
