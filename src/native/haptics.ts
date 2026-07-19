import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

export async function hapticLight(): Promise<void> {
	if (!Capacitor.isNativePlatform()) return;

	try {
		await Haptics.impact({ style: ImpactStyle.Light });
	} catch {}
}

export async function hapticHeavySuccess(): Promise<void> {
	if (!Capacitor.isNativePlatform()) return;

	try {
		await Haptics.impact({ style: ImpactStyle.Heavy });
		await Haptics.notification({ type: NotificationType.Success });
	} catch {}
}
