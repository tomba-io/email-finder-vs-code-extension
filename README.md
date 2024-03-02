<p align="center">
    <a href="https://marketplace.visualstudio.com/items?itemName=tomba-io.email-finder">
      <img src="assets/tomba.png" alt="Tomba logo" width="100px"/>
    </a>
</p>

# Email Finder README

Enhance your development workflow with Tomba Email Tools. This extension allows you to search email domains, verify email addresses, and count emails directly within VSCode, leveraging the powerful Tomba API. It's an essential tool for developers handling email-related data.

## Install

### Manual Install

Go to the [git](https://github.com/tomba-io/email-finder-vs-code-extension) and download  folder, then copy the files in the folder to the path directly:

- Mac: ```/Users/$HOME/Library/Application Support/Code/User/extensions/```
- Windows: ```< your-installed-driver > :\Users\ $HOME \AppData\Roaming\Code\User\extensions\```
- Linux: ```/home/$HOME/.vscode/extensions```

### Through VS Code Extensions

- From website: Go to Visual Studio Code [Marketplace](https://marketplace.visualstudio.com/), and search 'Email Finder', then click the install button.
- From VS Code: click extensions sidebar, and search 'Email Finder', then click the install button.
- From VS Code command: `ext install tomba-io.email-finder`

### Usage

1. Run your command from the Command Palette (Ctrl+Shift+P)
2. type "Tomba", and select your command

### Set the API Key
When users install your extension, they will need to set their API key and API secret in the settings for the extension to work. You might want to include instructions on how to do this in your extension's README file:

1. Open VSCode Settings (File > Preferences > Settings).
2. Search for "Tomba.io API" or the name of your extension.
3. Enter the API key in the "Tomba.io API Key" setting.
4. Enter the API secret in the "Tomba.io API Secret" setting.

### FURTHER READING

Read more about Tomba Email Finder

* [Domain Search](https://tomba.io/domain-search) (Search emails are based on the website You give one domain name and it returns all the email addresses found on the internet.)
* [Email Finder](https://tomba.io/email-finder) (This API endpoint generates or retrieves the most likely email address from a domain name, a first name and a last name..)
* [Author Finder](https://tomba.io/author-finder) (Instantly discover the email addresses of article authors.)
* [Enrichment](https://tomba.io/author-finder) (The Enrichment lets you find the current job title, company, location and social profiles of the person behind the email.)
* [Linkedin Finder](https://tomba.io/author-finder) (The Linkedin lets you find the current job title, company, location and social profiles of the person behind the linkedin URL.)
* [Email Verifier](https://tomba.io/email-verifier) (checks the deliverability of a given email address, verifies if it has been found in our database, and returns their sources.)

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release