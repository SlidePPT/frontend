importScripts("/frontend/precache-manifest.ec568cdf65551d2d2a21d2401111b4b7.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

if (workbox) {
	console.log(`Workbox is loaded`);

	workbox.precaching.precacheAndRoute(self.__precacheManifest);
} else {
	console.log(`Workbox didn't load`);
}
