# [danielsosa.uy](http://danielsosa.uy) v3
In this repository I'm developing the third version my personal website, making it accessible and open source in every aspect.

## Development
```bash
# To run server 
$ npm run server
# To run Webpack dev
$ npm start
```

## Development
```bash
# To run Webpack pro
$ npm run build
```

## Deploy
Add `.env` file with keys:
```bash
NODE_ENV=[development, production]
SERVER_PORT=...
API_URL=http://localhost:5000
SENDGRID_API_KEY='...'
RE_CAPTCHA_SITE_KEY=...
RE_CAPTCHA_SECRET_KEY=...
```