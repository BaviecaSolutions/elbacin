module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Tema Claro - La Mancha (tierra y sol)
        mancha: {
          tierra: '#D4A574',      // Ocre tierra
          arena: '#E8D4B8',       // Arena suave
          terracota: '#C87E5A',   // Terracota cálido
          dorado: '#D9B382',      // Dorado trigo
          sol: '#F4E4C1',         // Luz solar
          cielo: '#A4C3D2',       // Cielo diurno
          olivo: '#8B8B5C',       // Verde olivo
          campo: '#E5D5AD',       // Campo de trigo
        },
        // Tema Oscuro - Cielo Nocturno
        noche: {
          profundo: '#1A1F35',    // Azul noche profundo
          violeta: '#2D2747',     // Violeta oscuro
          estrella: '#E8E8F0',    // Plateado estrella
          constelacion: '#9BA4C4', // Azul grisáceo
          luna: '#C9D1E8',        // Luz lunar
          horizonte: '#323952',   // Horizonte nocturno
          nebula: '#4A516B',      // Gris azulado
          destello: '#FFE8B3',    // Destello dorado
        }
      },
      backgroundImage: {
        'gradient-mancha': 'linear-gradient(135deg, #F4E4C1 0%, #E8D4B8 50%, #D4A574 100%)',
        'gradient-atardecer': 'linear-gradient(180deg, #A4C3D2 0%, #E8D4B8 50%, #D4A574 100%)',
        'gradient-noche': 'linear-gradient(135deg, #1A1F35 0%, #2D2747 50%, #323952 100%)',
        'gradient-cielo': 'linear-gradient(180deg, #1A1F35 0%, #2D2747 50%, #4A516B 100%)',
      },
      fontFamily: {
        'serif-elegant': ['Crimson Text', 'Georgia', 'serif'],
        'sans-modern': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'tierra': '0 4px 20px rgba(212, 165, 116, 0.15)',
        'noche': '0 4px 20px rgba(26, 31, 53, 0.4)',
        'estrella': '0 0 15px rgba(232, 232, 240, 0.3)',
      }
    },
  },
  plugins: [],
}
