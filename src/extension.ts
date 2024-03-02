import * as vscode from 'vscode';
import tomba from 'tomba';

// This method is called when your extension is activated
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	console.log('Congratulations, your extension "email-finder" is now active!');
	const client = new tomba.Client();
	const apiKey = vscode.workspace.getConfiguration().get('tomba.apiKey');
	const apiSecret = vscode.workspace.getConfiguration().get('tomba.apiSecret');
	if (!apiKey || !apiSecret) {
		vscode.window.showWarningMessage("Please configure your Tomba.io API key and secret in the settings.");
		return;
	}
	client
		.setKey(String(apiKey)) // Your Key
		.setSecret(String(apiSecret)); // Your Secret
	;
	const search = new tomba.Domain(client);
	const verifier = new tomba.Verifier(client);
	const count = new tomba.Count(client);

	let findDomain = vscode.commands.registerCommand('extension.findEmailDomain', async function () {
		const domain = await vscode.window.showInputBox({ prompt: 'Enter a domain to find emails' });
		if (domain) {
			let result = search.domainSearch(domain);
			result
				.then((response: any) => {
					const jsonData = JSON.stringify(response.data, null, 2);
					showDataInNewJsonTab(jsonData).catch(console.error);
				})
				.catch((err: any) => {
					console.error('Error fetching data from Tomba: ', err);
					return null;
				});
		}
	});


	let verifyEmail = vscode.commands.registerCommand('extension.verifyEmail', async () => {
		const email = await vscode.window.showInputBox({ prompt: 'Enter an email address to verify' });
		if (email) {
			let result = verifier.emailVerifier(email);
			result
				.then((response: any) => {
					const jsonData = JSON.stringify(response.data, null, 2);
					showDataInNewJsonTab(jsonData).catch(console.error);
				})
				.catch((err) => {
					console.error('Error fetching data from Tomba: ', err);
					return null;
				});
		}
	});

	let countDomain = vscode.commands.registerCommand('extension.emailCount', async () => {
		const domain = await vscode.window.showInputBox({ prompt: 'Enter a domain to count emails' });
		if (domain) {
			let result = count.emailCount(domain);
			result
				.then((response: any) => {
					const jsonData = JSON.stringify(response.data, null, 2);
					showDataInNewJsonTab(jsonData).catch(console.error);
				})
				.catch((err) => {
					console.error('Error fetching data from Tomba: ', err);
					return null;
				});
		}
	});
	context.subscriptions.push(findDomain);
	context.subscriptions.push(verifyEmail);
	context.subscriptions.push(countDomain);
}
async function showDataInNewJsonTab(jsonData: any) {
	// Create a new untitled JSON file
	const document = await vscode.workspace.openTextDocument({
		language: 'json',
		content: jsonData
	});
	// Show the new document in a new editor tab
	await vscode.window.showTextDocument(document, { preview: false });
}
// This method is called when your extension is deactivated
export function deactivate() {
	console.log('your extension "email-finder" is now deactivate!');
}
