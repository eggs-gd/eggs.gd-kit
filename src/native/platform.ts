import { Capacitor } from '@capacitor/core';

export function isNativePlatform(): boolean {
	return Capacitor.isNativePlatform();
}

export function getNativePlatform(): string {
	return Capacitor.getPlatform();
}
