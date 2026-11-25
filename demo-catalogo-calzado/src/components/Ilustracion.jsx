import { useId } from 'react';

// Dibujos propios en SVG que sirven de imagen mientras no haya fotos reales.
const siluetas = {
  deportivo: {
    cuerpo: 'M40 166 L48 96 Q70 114 98 100 L120 84 Q142 114 190 126 Q248 136 252 166 Z',
    suela: 'M36 166 H256 Q256 188 232 188 H52 Q36 188 36 172 Z',
    detalle: 'M114 100 l22 -8 M126 112 l22 -8 M140 122 l22 -7 M52 148 Q122 162 204 142',
  },
  bota: {
    cuerpo: 'M76 48 H150 L154 112 Q170 128 212 136 Q246 144 248 166 H74 Z',
    suela: 'M70 166 H252 V186 H208 L200 178 H118 V188 H70 Z',
    detalle: 'M80 66 H148 M132 86 h20 M133 102 h21 M137 118 h24',
  },
  sandalia: {
    cuerpo:
      'M68 166 Q92 96 128 106 Q144 114 136 166 H116 Q124 126 109 126 Q96 128 90 166 Z M156 166 Q170 112 204 118 Q228 126 228 166 H208 Q209 138 192 137 Q178 139 176 166 Z',
    suela: 'M40 166 Q150 154 252 166 Q258 188 230 188 H62 Q36 188 40 166 Z',
    detalle: 'M52 176 Q150 167 242 176',
  },
  formal: {
    cuerpo: 'M46 166 Q40 106 68 102 Q96 128 122 108 Q150 128 204 136 Q250 144 254 166 Z',
    suela: 'M42 166 H258 V180 H124 L116 174 H94 V188 H42 Z',
    detalle: 'M120 116 Q140 140 178 144 M64 118 Q76 142 72 164',
  },
};

export default function Ilustracion({ tipo, color, descripcion, className = '' }) {
  const id = useId();
  const forma = siluetas[tipo] ?? siluetas.deportivo;

  return (
    <svg viewBox="0 0 290 232" role="img" aria-label={descripcion} className={className}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor={color} stopOpacity="0.28" />
        </linearGradient>
      </defs>
      <rect width="290" height="232" fill="#ece8e1" />
      <rect width="290" height="232" fill={`url(#${id})`} />
      <ellipse cx="147" cy="197" rx="112" ry="9" fill="#000000" opacity="0.1" />
      <path d={forma.cuerpo} fill={color} stroke="#1c1917" strokeWidth="2.5" strokeLinejoin="round" />
      <path d={forma.suela} fill="#fdfcfa" stroke="#1c1917" strokeWidth="2.5" strokeLinejoin="round" />
      <path d={forma.detalle} fill="none" stroke="#a8a29e" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}
