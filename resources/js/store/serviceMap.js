let ymapsPromise = null;

export function loadYandexMapsAPI() {
    if (ymapsPromise) {
        return ymapsPromise;
    }

    ymapsPromise = new Promise((resolve, reject) => {
        if (typeof ymaps !== 'undefined' && ymaps.ready) {
            ymaps.ready(() => resolve(ymaps));
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=86a0173b-9f43-47a8-81cb-f70b1cf08265';
        script.onload = () => {
            ymaps.ready(() => resolve(ymaps));
        };
        script.onerror = (error) => {
            console.error('Failed to load Yandex Maps API:', error);
            reject(error);
        };
        document.head.appendChild(script);
    });

    return ymapsPromise;
}
