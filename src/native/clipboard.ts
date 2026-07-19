import { Clipboard } from '@capacitor/clipboard';
import { isNativePlatform } from './platform';

export async function writeClipboardText(text: string): Promise<boolean> {
	if (isNativePlatform()) {
		try {
			await Clipboard.write({ string: text });
			return true;
		} catch {
			return false;
		}
	}

	try {
		await navigator.clipboard.writeText(text);
		return true;
	} catch {
		return false;
	}
}
