export default function manifest() {
  return {
    name: 'Agus | QA Engineer & Web Developer',
    short_name: 'Agus.Dev',
    description: 'Portofolio interaktif Agus, QA Engineer dan Web Developer',
    start_url: '/',
    display: 'standalone',
    background_color: '#f8fafc',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/avatar.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/avatar.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
