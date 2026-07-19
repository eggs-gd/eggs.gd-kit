import { Share } from '@capacitor/share';
import { isNativePlatform } from './platform';

export interface ShareTextOptions {
	title?: string;
	text: string;
	url?: string;
	dialogTitle?: string;
}

/**
 * Share text via the system sheet.
 * Returns true if the share sheet was presented (including user cancel).
 * Returns false when sharing is unavailable — callers should fall back
 * (e.g. download / copy preview).
 *
 * Web/PWA: always returns false. Capacitor's web Share maps to
 * `navigator.share`, which is a poor fit for archive export (cancel was
 * previously treated as success and skipped app-level fallbacks).
 */
export async function shareText(options: ShareTextOptions): Promise<boolean> {
	if (!isNativePlatform()) return false;

	try {
		if (!(await Share.canShare()).value) return false;
		await Share.share(options);
		return true;
	} catch (err) {
		if (err instanceof Error && err.name === 'AbortError') return true;
		return false;
	}
}
