# Agus Berois — Portfolio

Sitio personal de Agustín Berois, desarrollador FullStack. SPA de una sola página construida con React y Vite: presentación, sobre mí, proyectos destacados, stack tecnológico y formulario de contacto.

🔗 [agusberois.dev](https://www.agusberois.dev)

## Stack

- [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- CSS plano por componente (sin frameworks de estilos)
- [EmailJS](https://www.emailjs.com/) + Google reCAPTCHA para el formulario de contacto
- [lucide-react](https://lucide.dev/) y [react-icons](https://react-icons.github.io/react-icons/) para iconografía

## Desarrollo local

```bash
npm install
npm run dev
```

Otros scripts disponibles:

```bash
npm run build    # build de producción en /dist
npm run preview  # sirve el build de producción localmente
npm run lint     # corre ESLint
```

## Variables de entorno

El formulario de contacto necesita las siguientes variables en un archivo `.env` en la raíz del proyecto:

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
VITE_RECAPTCHA_SITE_KEY=
```

## Licencia

Código de uso personal — todos los derechos reservados por Agustín Berois.
