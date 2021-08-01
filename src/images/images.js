const WEB_BASE_URL = 'http://localhost:3000';

console.log("INSIDE IMGES WEB_BASE_URL", process.env.REACT_APP_ENV);

export const IMAGES = {
    background: `${WEB_BASE_URL}/images/bg.jpg`,
    lightsaber: `${WEB_BASE_URL}/images/lightsaber.png`
}