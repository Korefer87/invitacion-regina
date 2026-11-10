import React from 'react';
import { CalendarPlus, X, Check, Crown, CalendarHeart, MapPin, Shirt, Heart } from 'lucide-react';
import { EVENTO } from './config';

const FECHA = new Date(EVENTO.fechaISO);

function useCuentaRegresiva() {
  const [ahora, setAhora] = React.useState(() => Date.now());
  React.useEffect(() => {
    const id = window.setInterval(() => setAhora(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);
  const resta = Math.max(0, FECHA.getTime() - ahora);
  return {
    dias: Math.floor(resta / 86400000),
    horas: Math.floor((resta / 3600000) % 24),
    minutos: Math.floor((resta / 60000) % 60),
    segundos: Math.floor((resta / 1000) % 60),
  };
}

const enlaceCalendario = () => {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `XV Años de ${EVENTO.nombreCorto}`,
    dates: '20270522T180000/20270523T020000',
    ctz: 'America/Mexico_City',
    details: `Misa ${EVENTO.misa.hora} hrs en ${EVENTO.misa.direccion} · Recepción ${EVENTO.fiesta.hora} hrs en ${EVENTO.fiesta.lugar}`,
    location: `${EVENTO.fiesta.lugar}, ${EVENTO.fiesta.direccion}`,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};

/* ---------- Íconos de línea ---------- */

const Corona = ({ className = '', color = 'currentColor' }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 54 36" fill="none" stroke={color} strokeWidth="1.6" aria-hidden="true">
    <path d="M5 32 L3 10 L16 20 L27 3 L38 20 L51 10 L49 32 Z" />
    <path d="M5 32 H49" />
    <circle cx="27" cy="3" r="2" />
    <circle cx="3" cy="10" r="1.8" />
    <circle cx="51" cy="10" r="1.8" />
    <circle cx="27" cy="25" r="2.4" />
  </svg>
);

const IconoTemplo = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M12 2v4M10 4h4" />
    <path d="M6 22V11l6-5 6 5v11" />
    <path d="M10 22v-5a2 2 0 0 1 4 0v5" />
    <path d="M3 22h18" />
  </svg>
);

const IconoCopa = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
    <path d="M7 3h10l-1 7a4 4 0 0 1-8 0z" />
    <path d="M12 14v6M8 21h8" />
  </svg>
);

const IconoSobre = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <rect x="3" y="6" width="18" height="13" rx="1" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);

const Perlas = () => (
  <div className="flex justify-center gap-2" aria-hidden="true">
    <span className="h-1.5 w-1.5 rounded-full bg-perla" />
    <span className="h-1.5 w-1.5 rounded-full bg-arco" />
    <span className="h-1.5 w-1.5 rounded-full bg-perla" />
  </div>
);

const Tiara = ({ className = '', color = 'currentColor' }: { className?: string; color?: string }) => (
  <svg className={className} viewBox="0 0 80 46" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" aria-hidden="true">
    <path d="M6 42 Q40 33 74 42" />
    <path d="M6 42 C8 30 14 24 19 28 C21 20 27 15 31 19 C33 10 37 5 40 3 C43 5 47 10 49 19 C53 15 59 20 61 28 C66 24 72 30 74 42" />
    <path d="M40 13 C36 21 36 28 40 34 C44 28 44 21 40 13 Z" />
    <path d="M31 24 C29 28 30 32 33 35 M49 24 C51 28 50 32 47 35" />
    <path d="M19 32 C18 35 19 37 21 39 M61 32 C62 35 61 37 59 39" />
    <circle cx="40" cy="7.5" r="2.6" fill={color} stroke="none" />
    <circle cx="31" cy="20" r="1.6" fill={color} stroke="none" />
    <circle cx="49" cy="20" r="1.6" fill={color} stroke="none" />
    <circle cx="19" cy="29" r="1.3" fill={color} stroke="none" />
    <circle cx="61" cy="29" r="1.3" fill={color} stroke="none" />
    <circle cx="40" cy="24" r="1.8" />
  </svg>
);

/* Separador de filigrana simétrico */
const Filigrana = ({ className = '' }: { className?: string }) => (
  <svg className={`mx-auto h-6 w-[220px] max-w-full text-perla ${className}`} viewBox="0 0 220 24" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden="true">
    <g id="fil-izq">
      <path d="M100 12 C92 12 88 18 82 16 C77 14 79 8 84 9 C88 10 87 14 84 14" />
      <path d="M82 16 C68 22 52 4 36 12 C30 15 22 12 14 12" />
      <path d="M60 11 C56 6 50 6 48 9" />
      <circle cx="10" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </g>
    <use href="#fil-izq" transform="matrix(-1 0 0 1 220 0)" />
    <path d="M110 5 L116 12 L110 19 L104 12 Z" />
    <circle cx="110" cy="12" r="1.6" fill="currentColor" stroke="none" />
  </svg>
);

const Destello = ({ style }: { style: React.CSSProperties; key?: React.Key }) => (
  <svg className="xv-destello absolute" style={style} viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
    <path d="M12 0c.7 6.3 5.7 11.3 12 12-6.3.7-11.3 5.7-12 12-.7-6.3-5.7-11.3-12-12C6.3 11.3 11.3 6.3 12 0z" />
  </svg>
);

// [left %, top %, tamaño px] alrededor del arco
const DESTELLOS = [
  [-6, 8, 16], [96, 4, 12], [104, 30, 18], [-10, 40, 11], [100, 62, 13],
  [-4, 72, 15], [18, -3, 10], [78, -2, 14], [50, -6, 9], [104, 88, 10], [-8, 92, 12],
];

/* ---------- Ilustración: princesa de espaldas con vestido azul cielo ---------- */

const BRILLOS_VESTIDO = [
  [100, 200, 1.1], [60, 250, 1.2], [140, 250, 1.2], [40, 300, 1], [160, 300, 1.1], [100, 300, 1.3],
  [80, 330, 1.1], [120, 330, 1.1], [24, 336, 0.9], [176, 336, 1], [100, 240, 1], [70, 214, 0.9],
  [130, 214, 0.9], [52, 342, 1], [148, 342, 1], [100, 344, 1.2], [88, 270, 0.9], [112, 270, 0.9],
];

// Flores aplicadas a lo largo de la sobrefalda: [x, y, radio]
const FLORES_IZQ = [
  [16, 302, 3], [30, 307, 3.4], [46, 307, 3], [62, 302, 3.6], [76, 294, 3], [88, 282, 3.4],
  [94, 266, 2.8], [97, 248, 3], [98.5, 228, 2.6], [99.4, 208, 2.4], [99.8, 188, 2.2], [56, 310, 2], [38, 313, 1.8],
];
const FLORES = [...FLORES_IZQ, ...FLORES_IZQ.map(([x, y, r]) => [200 - x, y, r])];


function Princesa(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 360" role="img" aria-label="Ilustración de una princesa de espaldas con tiara y vestido de gala azul cielo" {...props}>
      <defs>
        <linearGradient id="pf-falda" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#CDE6FA" />
          <stop offset="0.5" stopColor="#A6D0F2" />
          <stop offset="1" stopColor="#7DB2E2" />
        </linearGradient>
        <linearGradient id="pf-drapeado" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#B4D8F5" />
          <stop offset="1" stopColor="#6FA6DA" />
        </linearGradient>
        <linearGradient id="pf-panel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E3F1FC" />
          <stop offset="1" stopColor="#B9DAF2" />
        </linearGradient>
        <linearGradient id="pf-corset" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8FC0EA" />
          <stop offset="0.5" stopColor="#B4D8F5" />
          <stop offset="1" stopColor="#8FC0EA" />
        </linearGradient>
        <linearGradient id="pf-manga" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8FC0EA" />
          <stop offset="0.5" stopColor="#C6E2F8" />
          <stop offset="1" stopColor="#8FC0EA" />
        </linearGradient>
        <linearGradient id="pf-cabello" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#6B4230" />
          <stop offset="0.5" stopColor="#8A5840" />
          <stop offset="1" stopColor="#5E3A29" />
        </linearGradient>
        <linearGradient id="pf-piel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#F6D6C0" />
          <stop offset="1" stopColor="#EBBC9E" />
        </linearGradient>
        <filter id="pf-suave" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="0.8" />
        </filter>
        <filter id="pf-difuso" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.2" />
        </filter>
      </defs>

      {/* Sombra en el piso */}
      <ellipse cx="100" cy="352" rx="84" ry="6" fill="#3E6E95" opacity="0.2" filter="url(#pf-difuso)" />

      {/* Falda de gala de quince años */}
      <path d="M82 150 C54 196 16 272 0 350 Q100 366 200 350 C184 272 146 196 118 150 Z" fill="url(#pf-falda)" />
      <g fill="none" strokeWidth="1">
        <path d="M86 170 C70 230 46 290 24 352" stroke="#5E97CC" strokeOpacity="0.3" />
        <path d="M114 170 C130 230 154 290 176 352" stroke="#5E97CC" strokeOpacity="0.3" />
        <path d="M94 180 C88 240 78 300 66 356" stroke="#FFFFFF" strokeOpacity="0.4" />
        <path d="M106 180 C112 240 122 300 134 356" stroke="#FFFFFF" strokeOpacity="0.4" />
        <path d="M100 190 V358" stroke="#5E97CC" strokeOpacity="0.25" />
      </g>
      {/* Holanes del bajo */}
      <path d="M2 348 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0 q6 7 12 0" stroke="#FFFFFF" strokeOpacity="0.8" strokeWidth="1.1" fill="none" />
      {/* Sobrefalda abierta en V con aplicaciones */}
      <path
        d="M82 150 C60 198 30 258 12 300 C40 314 70 302 90 282 C96 262 98 222 100 168 C102 222 104 262 110 282 C130 302 160 314 188 300 C170 258 140 198 118 150 Z"
        fill="url(#pf-panel)"
        opacity="0.7"
      />
      <path
        d="M12 300 C40 314 70 302 90 282 C96 262 98 222 100 168 C102 222 104 262 110 282 C130 302 160 314 188 300"
        stroke="#FFFFFF" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeDasharray="0.1 3.2"
      />
      {FLORES.map(([x, y, r], i) => (
        <g key={i} fill="#FFFFFF">
          {[0, 72, 144, 216, 288].map((a) => (
            <circle key={a} cx={x + Math.cos((a * Math.PI) / 180) * r} cy={y + Math.sin((a * Math.PI) / 180) * r} r={r * 0.75} opacity="0.92" />
          ))}
          <circle cx={x} cy={y} r={r * 0.55} fill="#B9DAF2" />
        </g>
      ))}
      {BRILLOS_VESTIDO.map(([x, y, r], i) => (
        <circle key={`b${i}`} className="xv-chispa" cx={x} cy={y} r={r} fill="#FFFFFF" style={{ animationDelay: `-${i * 0.3}s` }} />
      ))}

      {/* Espalda descubierta */}
      <path d="M66 100 C74 92 90 90 100 90 C110 90 126 92 134 100 L131 124 Q100 117 69 124 Z" fill="url(#pf-piel)" />
      <path d="M84 102 C80 108 82 114 88 117 M116 102 C120 108 118 114 112 117" stroke="#D59F7E" strokeOpacity="0.5" strokeWidth="0.8" fill="none" />
      <path d="M100 95 V118" stroke="#D59F7E" strokeOpacity="0.3" strokeWidth="0.8" />

      {/* Brazos descubiertos */}
      <path d="M66 104 C58 118 54 140 56 164 C57 178 58 190 60 198 C63 201 67 199 66 194 C64 180 64 166 66 150 C68 134 72 120 73 110 Z" fill="url(#pf-piel)" />
      <path d="M59 196 C57 204 59 210 62 212 C66 210 67 204 66 196 Z" fill="url(#pf-piel)" />
      <path d="M60 130 C58 144 58 156 59 168" stroke="#D59F7E" strokeOpacity="0.5" strokeWidth="0.8" fill="none" />
      <path d="M134 104 C144 116 150 134 146 150 C144 156 138 158 124 156 L124 150 L138 147 C140 136 136 122 127 110 Z" fill="url(#pf-piel)" />
      <path d="M124 149 C118 149 116 155 120 159 C124 159 126 155 126 151 Z" fill="url(#pf-piel)" />

      {/* Corset de espalda baja con agujetas y aplicaciones */}
      <path d="M69 123 Q100 116 131 123 L120 150 L100 160 L80 150 Z" fill="url(#pf-corset)" />
      <path d="M69 123 Q100 116 131 123" stroke="#FFFFFF" strokeWidth="1.6" fill="none" strokeDasharray="0.1 2.6" strokeLinecap="round" />
      <path d="M80 150 L100 160 L120 150" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
      <g fill="none" strokeLinecap="round">
        <path d="M96 121 V157 M104 121 V157" stroke="#6FA6DA" strokeWidth="0.7" />
        <path d="M96 122 L104 128 L96 134 L104 140 L96 146 L104 152 L96 157" stroke="#FFFFFF" strokeWidth="0.9" />
        <path d="M104 122 L96 128 L104 134 L96 140 L104 146 L96 152" stroke="#FFFFFF" strokeWidth="0.9" opacity="0.8" />
      </g>
      {[[80, 132, 2.2], [86, 142, 1.8], [120, 132, 2.2], [114, 142, 1.8], [76, 126, 1.5], [124, 126, 1.5]].map(([x, y, r], i) => (
        <g key={i} fill="#FFFFFF">
          {[0, 72, 144, 216, 288].map((a) => (
            <circle key={a} cx={x + Math.cos((a * Math.PI) / 180) * r} cy={y + Math.sin((a * Math.PI) / 180) * r} r={r * 0.7} opacity="0.9" />
          ))}
          <circle cx={x} cy={y} r={r * 0.5} fill="#B9DAF2" />
        </g>
      ))}
      {/* Moño de las agujetas */}
      <path d="M100 156 C94 150 88 152 90 157 C92 161 97 159 100 156 Z M100 156 C106 150 112 152 110 157 C108 161 103 159 100 156 Z" fill="#6FA6DA" />
      <path d="M99 157 L95 172 L98 170 L100 175 Z M101 157 L105 172 L102 170 L100 175 Z" fill="#5E97CC" />
      <circle cx="100" cy="156.5" r="2" fill="#5E97CC" />

      {/* Mangas caídas con holán */}
      <path d="M60 106 C53 106 50 116 55 122 C59 128 68 128 73 122 C77 116 74 107 67 106 Z" fill="url(#pf-manga)" />
      <path d="M58 116 C55 122 58 130 64 130 C70 130 75 126 74 120" fill="url(#pf-manga)" opacity="0.9" />
      <path d="M140 106 C147 106 150 116 145 122 C141 128 132 128 127 122 C123 116 126 107 133 106 Z" fill="url(#pf-manga)" />
      <path d="M142 116 C145 122 142 130 136 130 C130 130 125 126 126 120" fill="url(#pf-manga)" opacity="0.9" />
      <path d="M57 112 C60 118 66 122 72 118 M143 112 C140 118 134 122 128 118" stroke="#FFFFFF" strokeWidth="0.8" fill="none" opacity="0.9" />

      <g transform="matrix(0.82 0 0 0.88 18 2.4)">
      {/* Cabello largo cayendo por la espalda */}
      <path
        d="M82 30 C78 20 122 20 118 30 C124 46 125 66 127 88 C129 108 125 124 127 138 C123 146 118 142 116 148 C112 144 106 150 100 146 C94 150 88 144 84 148 C82 142 77 146 73 138 C75 124 71 108 73 88 C75 66 76 46 82 30 Z"
        fill="url(#pf-cabello)"
      />
      <path d="M84 34 C77 54 80 74 76 94 C74 108 78 122 76 136 C80 132 84 128 86 120 C88 104 86 86 88 66 C89 52 88 42 90 34 Z" fill="#5E3A29" />
      <path d="M91 34 C87 56 93 76 89 96 C87 112 91 126 92 142 C95 132 96 118 96 104 C97 84 95 60 97 36 Z" fill="#7C4F38" />
      <path d="M97 36 C96 60 101 80 98 100 C96 116 100 130 100 144 C104 130 104 114 104 100 C104 80 102 58 103 36 Z" fill="#8C5A40" />
      <path d="M103 36 C106 58 104 80 108 100 C110 116 107 130 108 142 C111 130 112 114 111 98 C110 78 112 56 109 34 Z" fill="#744832" />
      <path d="M110 34 C112 42 111 52 112 66 C114 86 112 104 114 120 C116 128 120 132 124 136 C122 122 126 108 124 94 C120 74 123 54 116 34 Z" fill="#5E3A29" />
      <g fill="none" strokeLinecap="round">
        <path d="M88 40 C84 58 88 74 84 92 C82 104 85 116 83 128" stroke="#2A170F" strokeOpacity="0.35" strokeWidth="0.7" />
        <path d="M100 40 C99 60 103 78 100 96 C98 110 101 124 100 138" stroke="#2A170F" strokeOpacity="0.3" strokeWidth="0.7" />
        <path d="M112 40 C116 58 112 74 116 92 C118 104 115 116 117 128" stroke="#2A170F" strokeOpacity="0.35" strokeWidth="0.7" />
        <path d="M90 36 C86 52 90 66 87 80" stroke="#C99A7C" strokeOpacity="0.8" strokeWidth="1.8" filter="url(#pf-suave)" />
        <path d="M101 36 C103 54 99 68 102 84" stroke="#D8AA8A" strokeOpacity="0.75" strokeWidth="2" filter="url(#pf-suave)" />
        <path d="M111 38 C113 52 111 64 114 76" stroke="#C08A68" strokeOpacity="0.6" strokeWidth="1.4" filter="url(#pf-suave)" />
        <path d="M94 100 C92 110 95 120 93 130 M107 100 C109 110 106 120 108 130" stroke="#B07D5F" strokeOpacity="0.5" strokeWidth="1" />
        {/* Rizos de las puntas */}
        <path d="M74 136 C72 142 76 146 80 143" stroke="#5E3A29" strokeWidth="1.3" />
        <path d="M86 146 C84 152 88 155 92 152" stroke="#7C4F38" strokeWidth="1.3" />
        <path d="M114 146 C116 152 112 155 108 152" stroke="#744832" strokeWidth="1.3" />
        <path d="M126 136 C128 142 124 146 120 143" stroke="#5E3A29" strokeWidth="1.3" />
        {/* Medio recogido */}
        <path d="M82 38 C88 44 95 46 100 46 M118 38 C112 44 105 46 100 46" stroke="#2A170F" strokeOpacity="0.55" strokeWidth="2.2" />
        <path d="M83 39 C89 44 95 45 100 45 M117 39 C111 44 105 45 100 45" stroke="#A87558" strokeOpacity="0.7" strokeWidth="0.8" />
      </g>
      <path d="M100 46 C94 40 89 44 92 48 C94 51 98 49 100 46 Z M100 46 C106 40 111 44 108 48 C106 51 102 49 100 46 Z" fill="#9CCAF0" />
      <path d="M99 47 L96 58 L99 56 L100 60 Z M101 47 L104 58 L101 56 L100 60 Z" fill="#86BAE6" />
      <circle cx="100" cy="46.5" r="1.8" fill="#6FA6DA" />
      <ellipse cx="100" cy="27" rx="12" ry="4" fill="#E2B595" opacity="0.4" filter="url(#pf-difuso)" />

      </g>

      {/* Tiara plateada con gema azul */}
      <path d="M86 30 L89 22 L93 27 L97 17 L100 12 L103 17 L107 27 L111 22 L114 30 Q100 25 86 30 Z" fill="#EEF5FC" stroke="#A9C4DC" strokeWidth="0.6" />
      <circle cx="100" cy="20" r="2.2" fill="#5E97CC" stroke="#FFFFFF" strokeWidth="0.5" />
      <circle cx="93" cy="26" r="0.9" fill="#8FBCE0" />
      <circle cx="107" cy="26" r="0.9" fill="#8FBCE0" />
      <circle className="xv-chispa" cx="100" cy="12" r="1.2" fill="#FFFFFF" />
    </svg>
  );
}

/* ---------- Sobre de entrada ---------- */

// Chispas que salen disparadas al romper el sello: [ángulo°, distancia px, tamaño px]
const ESTALLIDO = Array.from({ length: 18 }, (_, i) => [i * 20 + (i % 2) * 8, 70 + (i % 4) * 26, 8 + (i % 3) * 5]);

function Sobre({ revelar, abrir }: { revelar: () => void; abrir: () => void }) {
  const [abriendo, setAbriendo] = React.useState(false);
  const click = () => {
    if (abriendo) return;
    const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducido) {
      revelar();
      abrir();
      return;
    }
    setAbriendo(true);
    window.setTimeout(revelar, 2150);
    window.setTimeout(abrir, 2900);
  };
  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 overflow-hidden bg-fondo bg-damasco px-6 ${abriendo ? 'xv-abriendo' : ''}`}>
      <p className="xv-intro-texto font-cinzel text-xs tracking-[0.3em] text-acento">HAS RECIBIDO UNA INVITACIÓN REAL</p>

      <div className="xv-sobre relative aspect-[3/2] w-[min(320px,86vw)] [perspective:900px]">
        {/* Fondo interior del sobre */}
        <div className="xv-sobre-parte absolute inset-0 rounded-md bg-[#9EC8EA] shadow-[0_18px_40px_-18px_rgba(36,56,79,0.45)]" />

        {/* Carta que sale del sobre */}
        <div className="xv-carta absolute inset-x-[6%] top-[6%] bottom-[4%] flex flex-col items-center justify-center gap-1 rounded bg-white shadow-[0_4px_18px_rgba(36,56,79,0.18)]">
          <Tiara className="h-6 w-10 text-perla" />
          <span className="font-script text-[44px] leading-none text-acento">{EVENTO.nombreCorto}</span>
          <span className="font-cinzel text-[10px] tracking-[0.3em] text-tinta-suave">MIS XV AÑOS</span>
        </div>

        {/* Frente del sobre (bolsillo) */}
        <div className="xv-sobre-parte absolute inset-0 rounded-md bg-arco [clip-path:polygon(0_0,50%_54%,100%_0,100%_100%,0_100%)]" />
        <div className="xv-sobre-parte absolute inset-0 rounded-md bg-perla/35 [clip-path:polygon(0_100%,50%_54%,100%_100%)]" />

        {/* Solapa */}
        <div className="xv-solapa absolute inset-x-0 top-0 z-10 h-[62%] origin-top rounded-t-md bg-[#A9CFEC] [backface-visibility:hidden] [clip-path:polygon(0_0,100%_0,50%_100%)]" />

        {/* Sello de cera */}
        <button
          onClick={click}
          aria-label="Abrir invitación"
          className="xv-sello absolute left-1/2 top-[62%] z-20 grid h-20 w-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-acento text-white shadow-[inset_0_0_0_4px_rgba(255,255,255,0.18),0_6px_16px_rgba(36,56,79,0.35)] transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-acento"
        >
          <span className="font-script text-4xl leading-none">{EVENTO.nombreCorto[0]}</span>
        </button>

        {/* Estallido de chispas */}
        <div className="pointer-events-none absolute left-1/2 top-[62%] z-30" aria-hidden="true">
          {ESTALLIDO.map(([ang, dist, tam], i) => {
            const rad = (ang * Math.PI) / 180;
            return (
              <svg
                key={i}
                className="xv-chispa-estallido absolute -translate-x-1/2 -translate-y-1/2"
                viewBox="0 0 24 24"
                fill={i % 3 === 0 ? '#F8DFE6' : i % 3 === 1 ? '#FFFFFF' : '#B9DAF2'}
                style={{
                  width: tam,
                  height: tam,
                  ['--dx' as string]: `${Math.cos(rad) * dist}px`,
                  ['--dy' as string]: `${Math.sin(rad) * dist}px`,
                  animationDelay: `${(i % 4) * 30}ms`,
                }}
              >
                <path d="M12 0c.7 6.3 5.7 11.3 12 12-6.3.7-11.3 5.7-12 12-.7-6.3-5.7-11.3-12-12C6.3 11.3 11.3 6.3 12 0z" />
              </svg>
            );
          })}
        </div>
      </div>

      <button onClick={click} className="xv-intro-texto xv-latido min-h-12 rounded-full border border-acento px-7 font-cinzel text-sm tracking-[0.2em] text-acento hover:bg-acento hover:text-white">
        ABRIR INVITACIÓN
      </button>

      {/* Destello de luz que da paso a la invitación */}
      <div className="xv-luz pointer-events-none absolute inset-0 opacity-0 [background:radial-gradient(circle_at_50%_45%,#FFFFFF_0%,rgba(255,255,255,0.95)_35%,rgba(248,223,230,0.6)_60%,rgba(244,249,253,0)_80%)]" aria-hidden="true" />
    </div>
  );
}

/* Lluvia de destellos y pétalos al revelar la invitación */
const LLUVIA = Array.from({ length: 42 }, (_, i) => ({
  x: (i * 37) % 100,
  tam: 6 + ((i * 7) % 10),
  dur: 2.6 + ((i * 13) % 20) / 10,
  delay: ((i * 11) % 14) / 10,
  petalo: i % 3 === 0,
  color: ['#FFFFFF', '#B9DAF2', '#F8DFE6', '#8FBCE0'][i % 4],
}));

function Lluvia() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {LLUVIA.map((p, i) =>
        p.petalo ? (
          <span
            key={i}
            className="xv-caer absolute -top-8 rounded-[60%_0_60%_0]"
            style={{ left: `${p.x}%`, width: p.tam, height: p.tam * 1.3, background: p.color === '#FFFFFF' ? '#F8DFE6' : p.color, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }}
          />
        ) : (
          <svg
            key={i}
            className="xv-caer absolute -top-8 drop-shadow-[0_0_4px_rgba(143,188,224,0.9)]"
            viewBox="0 0 24 24"
            fill={p.color}
            style={{ left: `${p.x}%`, width: p.tam, height: p.tam, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }}
          >
            <path d="M12 0c.7 6.3 5.7 11.3 12 12-6.3.7-11.3 5.7-12 12-.7-6.3-5.7-11.3-12-12C6.3 11.3 11.3 6.3 12 0z" />
          </svg>
        ),
      )}
    </div>
  );
}

/* ---------- Secciones ---------- */

/* Entrada de puerta ancha de palacio, en un lienzo de 340×480 */
const ABERTURA = 'M26 480 V150 A144 120 0 0 1 314 150 V480 Z';

function Portada() {
  return (
    <header id="inicio" className="flex scroll-mt-24 flex-col items-center gap-7 pt-8">
      <div className="xv-ventana relative w-[min(330px,84vw)] aspect-[340/480]">
        {DESTELLOS.map(([x, y, s], i) => (
          <Destello key={i} style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, animationDelay: `-${i * 0.45}s` }} />
        ))}

        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 340 480" role="img" aria-label="Entrada de palacio con la quinceañera al centro">
          <defs>
            <clipPath id="pz-abertura">
              <path d={ABERTURA} />
            </clipPath>
            <linearGradient id="pz-muro" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#DCEEFB" />
              <stop offset="1" stopColor="#B9DAF2" />
            </linearGradient>
            <radialGradient id="pz-luz" cx="0.5" cy="0.4" r="0.55">
              <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="pz-piso" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#E3F1FC" />
              <stop offset="1" stopColor="#C6E2F8" />
            </linearGradient>
            <linearGradient id="pz-marmol" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#F4F9FD" />
              <stop offset="0.5" stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#E6F1FA" />
            </linearGradient>
            <linearGradient id="pz-hoja" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#FFFFFF" />
              <stop offset="1" stopColor="#CFE6F9" />
            </linearGradient>
          </defs>

          {/* Interior del salón */}
          <g clipPath="url(#pz-abertura)">
            <rect x="0" y="0" width="340" height="480" fill="url(#pz-muro)" />
            {/* Ventanal del fondo */}
            <path d="M130 400 V230 A40 40 0 0 1 210 230 V400 Z" fill="#FFFFFF" opacity="0.55" />
            <path d="M170 190 V400 M130 300 H210" stroke="#B9DAF2" strokeWidth="1.5" />
            <ellipse cx="170" cy="250" rx="150" ry="170" fill="url(#pz-luz)" />
            {/* Candil */}
            <g opacity="0.85">
              <path d="M170 30 V70" stroke="#A9C4DC" strokeWidth="1" />
              <path d="M146 78 Q170 96 194 78" stroke="#A9C4DC" strokeWidth="1.4" fill="none" />
              {[146, 158, 170, 182, 194].map((x) => (
                <circle key={x} className="xv-chispa" cx={x} cy={x === 170 ? 86 : 80 + Math.abs(170 - x) / 6} r="2" fill="#FFFFFF" />
              ))}
            </g>
            {/* Piso de mármol en perspectiva */}
            <rect x="0" y="400" width="340" height="80" fill="url(#pz-piso)" />
            <path d="M170 360 L-80 480 M170 360 L20 480 M170 360 L95 480 M170 360 L170 480 M170 360 L245 480 M170 360 L320 480 M170 360 L420 480 M0 418 H340 M0 444 H340" stroke="#A9D0EF" strokeWidth="1" opacity="0.7" />
            {/* Puertas abiertas hacia adentro */}
            <path d="M26 480 V150 C34 116 52 104 74 110 V440 Z" fill="url(#pz-hoja)" stroke="#A9D0EF" strokeWidth="1" />
            <path d="M314 480 V150 C306 116 288 104 266 110 V440 Z" fill="url(#pz-hoja)" stroke="#A9D0EF" strokeWidth="1" />
            <path d="M36 200 L64 190 V290 L36 300 Z M36 320 L64 312 V420 L36 434 Z M304 200 L276 190 V290 L304 300 Z M304 320 L276 312 V420 L304 434 Z" fill="none" stroke="#A9D0EF" strokeWidth="1" />
            <circle cx="66" cy="300" r="2" fill="#8FBCE0" />
            <circle cx="274" cy="300" r="2" fill="#8FBCE0" />
            {/* Título */}
            <g transform="translate(150 50) scale(0.5)" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round">
              <path d="M6 42 Q40 33 74 42" />
              <path d="M6 42 C8 30 14 24 19 28 C21 20 27 15 31 19 C33 10 37 5 40 3 C43 5 47 10 49 19 C53 15 59 20 61 28 C66 24 72 30 74 42" />
              <circle cx="40" cy="7.5" r="2.6" fill="#FFFFFF" stroke="none" />
            </g>
            <text x="170" y="92" textAnchor="middle" fontFamily="Cinzel, Georgia, serif" fontSize="12.5" letterSpacing="4" fill="#1E3550">MIS XV AÑOS</text>
            {/* Quinceañera */}
            <Princesa x="74" y="112" width="192" height="346" />
            {/* Reflejo que cruza la entrada */}
            <rect className="xv-reflejo" x="0" y="-40" width="100" height="560" fill="url(#pz-luz)" opacity="0.5" style={{ transformBox: 'fill-box' }} />
          </g>

          {/* Marco: pilastras, archivolta con dovelas, perlas y clave */}
          <g>
            <path d="M0 480 V150 A170 140 0 0 1 340 150 V480 H314 V150 A144 120 0 0 0 26 150 V480 Z" fill="url(#pz-marmol)" stroke="#8FBCE0" strokeWidth="1.2" />
            {Array.from({ length: 15 }, (_, i) => {
              const a = Math.PI - ((i + 1) * Math.PI) / 16;
              return (
                <path
                  key={i}
                  d={`M${170 + 144 * Math.cos(a)} ${150 - 120 * Math.sin(a)} L${170 + 170 * Math.cos(a)} ${150 - 140 * Math.sin(a)}`}
                  stroke="#BFDDF3"
                  strokeWidth="1"
                />
              );
            })}
            {/* Acanalado de las pilastras */}
            <path d="M8 168 V462 M13 168 V462 M18 168 V462 M322 168 V462 M327 168 V462 M332 168 V462" stroke="#D3E6F5" strokeWidth="1" />
            {/* Capiteles y basas */}
            <rect x="-5" y="146" width="36" height="12" rx="1.5" fill="#FFFFFF" stroke="#8FBCE0" />
            <rect x="309" y="146" width="36" height="12" rx="1.5" fill="#FFFFFF" stroke="#8FBCE0" />
            <rect x="-5" y="466" width="36" height="14" rx="1.5" fill="#FFFFFF" stroke="#8FBCE0" />
            <rect x="309" y="466" width="36" height="14" rx="1.5" fill="#FFFFFF" stroke="#8FBCE0" />
            {/* Collar de perlas siguiendo el arco */}
            <path d="M13 146 A157 130 0 0 1 327 146" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeDasharray="0 10" />
            <path d="M13 146 A157 130 0 0 1 327 146" fill="none" stroke="#8FBCE0" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="0 10" />
            {/* Clave con tiara */}
            <path d="M156 4 L184 4 L180 34 L160 34 Z" fill="#FFFFFF" stroke="#8FBCE0" />
            <g transform="translate(160 12) scale(0.25)" fill="none" stroke="#8FBCE0" strokeWidth="4" strokeLinecap="round">
              <path d="M6 42 C8 30 14 24 19 28 C21 20 27 15 31 19 C33 10 37 5 40 3 C43 5 47 10 49 19 C53 15 59 20 61 28 C66 24 72 30 74 42 Z" />
            </g>
          </g>
        </svg>
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="font-script text-[clamp(64px,20vw,84px)] leading-none text-acento [text-shadow:0_2px_16px_rgba(143,188,224,0.6)]">
          {EVENTO.nombreCorto}
        </h1>
        <p className="font-cinzel text-[13px] tracking-[0.16em] text-tinta-fuerte">GLORIA REGINA RAMOS FERNÁNDEZ</p>
      </div>
      <Filigrana />
      <p className="max-w-[310px] text-center font-cinzel text-[15px] leading-[1.8] text-tinta-media">
        Como en los cuentos, este día llega una sola vez. Mis padres y yo tenemos el honor de invitarte a celebrar mis quince años.
      </p>
    </header>
  );
}

function Fecha() {
  const { dias, horas, minutos, segundos } = useCuentaRegresiva();
  const items = [
    [dias, 'Días'],
    [horas, 'Horas'],
    [minutos, 'Min'],
    [segundos, 'Seg'],
  ] as const;
  return (
    <section id="fecha" className="flex scroll-mt-24 flex-col items-center gap-5 text-center" aria-label="Fecha">
      <div className="flex flex-col items-center gap-1">
        <p className="font-cinzel text-[13px] tracking-[0.3em] text-acento">SÁBADO</p>
        <p className="font-cinzel text-[clamp(32px,10vw,40px)] font-medium tracking-[0.06em]">22 · V · 2027</p>
      </div>
      <div className="grid w-full grid-cols-4 rounded-lg border border-borde bg-white py-4 outline outline-1 outline-offset-4 outline-borde">
        {items.map(([valor, etiqueta], i) => (
          <div key={etiqueta} className={`flex flex-col gap-0.5 ${i > 0 ? 'border-l border-borde' : ''}`}>
            <span className="font-cinzel text-2xl font-medium tabular-nums">{String(valor).padStart(2, '0')}</span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-tinta-suave">{etiqueta}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TarjetaArco({ icono, titulo, hora, lugar, detalle, mapa }: {
  icono: React.ReactNode; titulo: string; hora: string; lugar: string; detalle: string; mapa: string;
}) {
  return (
    <div className="relative flex min-w-0 flex-col drop-shadow-[0_10px_14px_rgba(62,110,149,0.14)]">
      {/* Remate de ventana de palacio */}
      <div className="relative">
        <svg className="block w-full" viewBox="0 0 200 76" aria-hidden="true">
          <path d="M0 76 V50 C0 36 40 33 62 24 C82 16 95 10 100 1 C105 10 118 16 138 24 C160 33 200 36 200 50 V76 Z" fill="#FFFFFF" />
          <path d="M0.75 76 V50 C0.75 36 40 33 62 24 C82 16 95 10 100 1 C105 10 118 16 138 24 C160 33 199.25 36 199.25 50 V76" fill="none" stroke="#D3E6F5" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          <path d="M9 76 V53 C9 42 44 40 66 31 C84 24 96 18 100 11 C104 18 116 24 134 31 C156 40 191 42 191 53 V76" fill="none" stroke="#B9DAF2" strokeOpacity="0.7" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <circle cx="100" cy="2" r="2.5" fill="#8FBCE0" />
        </svg>
        <span className="absolute inset-x-0 bottom-1 flex justify-center text-acento">{icono}</span>
      </div>
      <div className="relative flex flex-1 flex-col items-center gap-1.5 rounded-b-lg border-x-[1.5px] border-b-[1.5px] border-borde bg-white px-3.5 pb-5 pt-2 text-center">
        <span className="pointer-events-none absolute inset-x-[calc(4.5%-1.5px)] bottom-1.5 top-0 rounded-b-md border-x border-b border-arco/70" aria-hidden="true" />
      <h2 className="font-cinzel text-base font-semibold">{titulo}</h2>
      <p className="text-xl font-bold">{hora} hrs</p>
      <p className="text-[13px] font-bold text-tinta-media">{lugar}</p>
      <p className="text-xs leading-snug text-tinta-suave">{detalle}</p>
      <a
        href={mapa}
        target="_blank"
        rel="noreferrer"
        className="mt-1 inline-flex min-h-11 items-center border-b border-perla font-cinzel text-xs tracking-[0.14em] text-acento hover:text-tinta"
      >
        CÓMO LLEGAR
      </a>
      </div>
    </div>
  );
}

/* Mapa incrustado de Google Maps con las dos ubicaciones */
const VISTAS_MAPA = [
  { id: 'templo', etiqueta: 'Templo', src: `https://maps.google.com/maps?q=${encodeURIComponent(EVENTO.misa.busqueda)}&z=16&output=embed` },
  { id: 'fiesta', etiqueta: 'Casa Amada', src: `https://maps.google.com/maps?q=${encodeURIComponent(EVENTO.fiesta.busqueda)}&z=15&output=embed` },
  {
    id: 'ruta',
    etiqueta: 'Ruta',
    src: `https://maps.google.com/maps?saddr=${encodeURIComponent(EVENTO.misa.busqueda)}&daddr=${encodeURIComponent(EVENTO.fiesta.busqueda)}&output=embed`,
  },
] as const;

function Mapa() {
  const [vista, setVista] = React.useState<(typeof VISTAS_MAPA)[number]['id']>('templo');
  const actual = VISTAS_MAPA.find((v) => v.id === vista)!;
  return (
    <div className="flex flex-col gap-3 rounded-lg border border-borde bg-white p-3 shadow-[0_10px_30px_-18px_rgba(62,110,149,0.45)]">
      <div className="grid grid-cols-3 gap-1 rounded-full bg-fondo p-1" role="tablist" aria-label="Ubicaciones en el mapa">
        {VISTAS_MAPA.map((v) => (
          <button
            key={v.id}
            role="tab"
            aria-selected={vista === v.id}
            onClick={() => setVista(v.id)}
            className={`min-h-11 rounded-full font-cinzel text-xs tracking-[0.1em] transition-colors ${
              vista === v.id ? 'bg-acento text-white' : 'text-tinta-media hover:text-tinta'
            }`}
          >
            {v.etiqueta}
          </button>
        ))}
      </div>
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-fondo">
        <iframe
          key={actual.id}
          title={`Mapa: ${actual.etiqueta}`}
          src={actual.src}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="text-center text-xs text-tinta-suave">
        {vista === 'ruta' ? 'Del templo a Casa Amada' : vista === 'templo' ? EVENTO.misa.direccion : EVENTO.fiesta.direccion}
      </p>
    </div>
  );
}

function Programa() {
  return (
    <section id="lugares" className="flex scroll-mt-24 flex-col gap-3" aria-label="Programa">
      <div className="grid grid-cols-2 gap-3">
        <TarjetaArco
          icono={<IconoTemplo />}
          titulo="Misa"
          hora={EVENTO.misa.hora}
          lugar={EVENTO.misa.lugar}
          detalle={EVENTO.misa.direccion}
          mapa={EVENTO.misa.mapa}
        />
        <TarjetaArco
          icono={<IconoCopa />}
          titulo="Recepción"
          hora={EVENTO.fiesta.hora}
          lugar={EVENTO.fiesta.lugar}
          detalle={EVENTO.fiesta.direccion}
          mapa={EVENTO.fiesta.mapa}
        />
      </div>
      <Mapa />
      <a
        href={enlaceCalendario()}
        target="_blank"
        rel="noreferrer"
        className="flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-tinta px-5 font-cinzel text-sm tracking-[0.14em] text-white hover:bg-acento"
      >
        <CalendarPlus className="h-4 w-4 text-perla" aria-hidden="true" />
        AGREGAR A MI CALENDARIO
      </a>
    </section>
  );
}

function Padres() {
  return (
    <section className="flex flex-col items-center gap-2 text-center">
      <h2 className="font-script text-3xl text-acento">Mis padres</h2>
      <p className="font-cinzel text-[15px] leading-[1.8] tracking-[0.06em]">
        {EVENTO.padres[0]}
        <br />
        {EVENTO.padres[1]}
      </p>
    </section>
  );
}

function Vestimenta() {
  return (
    <section id="vestimenta" className="flex scroll-mt-24 flex-col items-center gap-3.5 text-center">
      <h2 className="font-cinzel text-[15px] tracking-[0.2em]">CÓDIGO DE VESTIMENTA</h2>
      <p className="text-sm text-tinta-suave">Formal</p>
      <div className="flex gap-6">
        {EVENTO.vestimenta.map((v) => (
          <div key={v.nombre} className="flex flex-col items-center gap-1.5">
            <div className="h-12 w-[34px] rounded-b rounded-t-[17px]" style={{ background: v.color }} />
            <span className="text-xs">{v.nombre}</span>
          </div>
        ))}
      </div>
      <p className="text-xs text-tinta-suave">El azul cielo queda reservado para la quinceañera.</p>
    </section>
  );
}

function Regalo() {
  return (
    <section id="regalo" className="flex scroll-mt-24 flex-col items-center gap-2 text-center">
      <span className="text-acento"><IconoSobre /></span>
      <h2 className="font-cinzel text-base tracking-[0.12em]">LLUVIA DE SOBRES</h2>
      <p className="max-w-[300px] text-sm leading-relaxed text-tinta-suave">
        Tu presencia es mi mejor regalo; si deseas tener un detalle, con gusto recibiré un sobre.
      </p>
    </section>
  );
}

function Confirmar({ abierto, cerrar }: { abierto: boolean; cerrar: () => void }) {
  const [nombre, setNombre] = React.useState('');
  const [personas, setPersonas] = React.useState(1);
  const [asiste, setAsiste] = React.useState(true);
  const dialogo = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    const d = dialogo.current;
    if (!d) return;
    if (abierto && !d.open) d.showModal();
    if (!abierto && d.open) d.close();
  }, [abierto]);

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = asiste
      ? `¡Hola! Soy ${nombre.trim()} y confirmo mi asistencia a los XV años de ${EVENTO.nombreCorto} el 22 de mayo. Seremos ${personas} persona${personas > 1 ? 's' : ''}.`
      : `¡Hola! Soy ${nombre.trim()}. Muchas gracias por la invitación a los XV años de ${EVENTO.nombreCorto}; lamentablemente no podré asistir.`;
    window.open(`https://wa.me/${EVENTO.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
    cerrar();
  };

  return (
    <dialog
      ref={dialogo}
      onClose={cerrar}
      className="m-auto w-[calc(100%-32px)] max-w-md rounded-t-[120px] rounded-b-2xl bg-white p-0 text-tinta backdrop:bg-tinta/60"
    >
      <form onSubmit={enviar} className="flex flex-col gap-5 px-6 pb-6 pt-12">
        <button type="button" onClick={cerrar} aria-label="Cerrar" className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-borde">
          <X className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center gap-2 text-center">
          <Tiara className="h-7 w-12" color="#3E6E95" />
          <h2 className="font-cinzel text-lg tracking-[0.12em]">CONFIRMAR ASISTENCIA</h2>
          <p className="text-sm text-tinta-suave">Se abrirá WhatsApp con tu mensaje listo para enviar.</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {[true, false].map((v) => (
            <button
              key={String(v)}
              type="button"
              onClick={() => setAsiste(v)}
              aria-pressed={asiste === v}
              className={`flex min-h-12 items-center justify-center gap-2 rounded-lg border text-sm font-bold ${
                asiste === v ? 'border-acento bg-acento text-white' : 'border-borde'
              }`}
            >
              {asiste === v && <Check className="h-4 w-4" aria-hidden="true" />}
              {v ? 'Sí asistiré' : 'No podré ir'}
            </button>
          ))}
        </div>

        <label htmlFor="rsvp-nombre" className="flex flex-col gap-1.5 text-sm font-bold">
          Tu nombre
          <input
            id="rsvp-nombre"
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre y apellido"
            className="min-h-12 rounded-lg border border-borde px-4 text-base font-normal outline-none focus:border-acento"
          />
        </label>

        {asiste && (
          <label htmlFor="rsvp-personas" className="flex flex-col gap-1.5 text-sm font-bold">
            Número de personas
            <select
              id="rsvp-personas"
              value={personas}
              onChange={(e) => setPersonas(Number(e.target.value))}
              className="min-h-12 rounded-lg border border-borde bg-white px-4 text-base font-normal outline-none focus:border-acento"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>
          </label>
        )}

        <button type="submit" className="min-h-[54px] rounded-full bg-acento font-cinzel text-[15px] tracking-[0.16em] text-white hover:bg-tinta">
          ENVIAR POR WHATSAPP
        </button>
      </form>
    </dialog>
  );
}

/* ---------- Header rosa y navegación tipo app ---------- */

function Encabezado() {
  return (
    <header className="xv-header sticky top-[env(safe-area-inset-top)] z-30 border-b border-rosa-borde bg-rosa/95 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-md items-center justify-between px-[max(16px,env(safe-area-inset-left))]">
        <a href="#inicio" className="flex min-h-11 items-center gap-2" aria-label="Ir al inicio">
          <Tiara className="h-5 w-8 text-rosa-tinta" />
          <span className="font-script text-2xl leading-none text-tinta">{EVENTO.nombreCorto}</span>
          <span className="font-cinzel text-xs tracking-[0.2em] text-rosa-tinta">XV</span>
        </a>
        <span className="rounded-full border border-rosa-borde bg-white/70 px-3 py-1 font-cinzel text-[11px] tracking-[0.14em] text-tinta">
          22 · 05 · 2027
        </span>
      </div>
    </header>
  );
}

const SECCIONES = [
  { id: 'inicio', etiqueta: 'Inicio', Icono: Crown },
  { id: 'fecha', etiqueta: 'Fecha', Icono: CalendarHeart },
  { id: 'lugares', etiqueta: 'Lugares', Icono: MapPin },
  { id: 'vestimenta', etiqueta: 'Vestir', Icono: Shirt },
] as const;

function useSeccionActiva() {
  const [activa, setActiva] = React.useState<string>('inicio');
  React.useEffect(() => {
    const ids = [...SECCIONES.map((s) => s.id), 'regalo'];
    const obs = new IntersectionObserver(
      (entradas) => {
        const visible = entradas.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiva(visible.target.id === 'regalo' ? 'vestimenta' : visible.target.id);
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  return activa;
}

function Navegacion({ confirmar }: { confirmar: () => void }) {
  const activa = useSeccionActiva();
  return (
    <nav
      aria-label="Secciones de la invitación"
      className="xv-nav-entrar fixed inset-x-0 bottom-0 z-40 px-[max(12px,env(safe-area-inset-left))] pb-[max(12px,env(safe-area-inset-bottom))]"
    >
      <div className="mx-auto flex max-w-md items-center gap-1 rounded-[26px] border border-white/70 bg-white/80 p-1.5 shadow-[0_12px_32px_-12px_rgba(36,56,79,0.35)] backdrop-blur-xl">
        {SECCIONES.map(({ id, etiqueta, Icono }) => {
          const on = activa === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-current={on ? 'true' : undefined}
              className={`flex min-h-[52px] flex-1 flex-col items-center justify-center gap-0.5 rounded-[20px] text-[10px] font-bold uppercase tracking-[0.08em] transition-colors ${
                on ? 'bg-rosa text-tinta' : 'text-tinta-suave hover:text-tinta'
              }`}
            >
              <Icono className={`h-5 w-5 transition-transform ${on ? 'scale-110 text-rosa-tinta' : ''}`} strokeWidth={1.7} aria-hidden="true" />
              {etiqueta}
            </a>
          );
        })}
        <button
          onClick={confirmar}
          className="flex min-h-[52px] flex-[1.3] flex-col items-center justify-center gap-0.5 rounded-[20px] bg-acento text-[10px] font-bold uppercase tracking-[0.08em] text-white hover:bg-tinta"
        >
          <Heart className="h-5 w-5" strokeWidth={1.7} aria-hidden="true" />
          Confirmar
        </button>
      </div>
    </nav>
  );
}

export default function App() {
  const [rsvp, setRsvp] = React.useState(false);
  // ?abierta en la URL salta el sobre (útil para revisar o compartir directo)
  const saltarSobre = new URLSearchParams(window.location.search).has('abierta');
  const [sobreAbierto, setSobreAbierto] = React.useState(saltarSobre);
  const [revelado, setRevelado] = React.useState(saltarSobre);
  const [lluvia, setLluvia] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.style.overflow = sobreAbierto ? '' : 'hidden';
  }, [sobreAbierto]);

  const revelar = () => {
    setRevelado(true);
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLluvia(true);
      window.setTimeout(() => setLluvia(false), 6000);
    }
  };

  return (
    <div className={`min-h-screen bg-fondo bg-damasco font-sans text-tinta ${revelado ? 'xv-revelado' : 'xv-oculto'}`}>
      {!sobreAbierto && <Sobre revelar={revelar} abrir={() => setSobreAbierto(true)} />}
      {lluvia && <Lluvia />}
      <div aria-hidden="true" className="fixed inset-x-0 top-0 z-30 h-[env(safe-area-inset-top)] bg-rosa" />
      <Encabezado />
      <main className="xv-escena mx-auto flex max-w-md flex-col gap-10 px-6 pb-[calc(110px+env(safe-area-inset-bottom))]">
        <Portada />
        <Fecha />
        <Filigrana />
        <Programa />
        <Padres />
        <Filigrana />
        <Vestimenta />
        <Filigrana />
        <Regalo />
        <div className="flex flex-col items-center gap-5">
          <button
            onClick={() => setRsvp(true)}
            className="min-h-[54px] w-full rounded-full bg-acento font-cinzel text-[15px] tracking-[0.18em] text-white transition-colors hover:bg-tinta focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acento"
          >
            CONFIRMAR ASISTENCIA
          </button>
          <Perlas />
          <p className="font-script text-4xl text-acento">Te espero</p>
          <Tiara className="h-6 w-10 text-perla" />
        </div>
      </main>

      {sobreAbierto && <Navegacion confirmar={() => setRsvp(true)} />}
      <Confirmar abierto={rsvp} cerrar={() => setRsvp(false)} />
    </div>
  );
}
