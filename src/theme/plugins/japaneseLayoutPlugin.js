
/**
 * Tailwind CSS plugin that implements traditional Japanese proportional systems
 * including tatami grid measurements and vertical rhythm
 */

// Traditional Japanese measurements (in relative units)
// 1 sun ≈ 3.03 cm
// 1 shaku = 10 sun ≈ 30.3 cm
// 1 ken = 6 shaku ≈ 1.82 m
// These are approximated and normalized for web use

const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addComponents, addUtilities, theme, e }) {
  // Traditional Japanese spacing scale (approximated to modern usage)
  const tatami = {
    // Smallest unit - subtle details (about 1/8 of a tatami width)
    'sun': '0.5rem',  
    // Medium unit - element spacing (about 1/4 of a tatami width)
    'sun-2': '1rem',  
    // Large unit - component spacing (about 1/2 of a tatami width)
    'shaku': '2rem',  
    // Full tatami width - section spacing
    'tatami': '4rem',  
    // Room-sized spacing
    'ken': '8rem',    
  };

  // Add tatami-based spacing utilities
  const spacingUtilities = {};
  
  Object.entries(tatami).forEach(([key, value]) => {
    // Margin utilities
    spacingUtilities[`.m-${e(key)}`] = { margin: value };
    spacingUtilities[`.mx-${e(key)}`] = { marginLeft: value, marginRight: value };
    spacingUtilities[`.my-${e(key)}`] = { marginTop: value, marginBottom: value };
    spacingUtilities[`.mt-${e(key)}`] = { marginTop: value };
    spacingUtilities[`.mr-${e(key)}`] = { marginRight: value };
    spacingUtilities[`.mb-${e(key)}`] = { marginBottom: value };
    spacingUtilities[`.ml-${e(key)}`] = { marginLeft: value };
    
    // Padding utilities
    spacingUtilities[`.p-${e(key)}`] = { padding: value };
    spacingUtilities[`.px-${e(key)}`] = { paddingLeft: value, paddingRight: value };
    spacingUtilities[`.py-${e(key)}`] = { paddingTop: value, paddingBottom: value };
    spacingUtilities[`.pt-${e(key)}`] = { paddingTop: value };
    spacingUtilities[`.pr-${e(key)}`] = { paddingRight: value };
    spacingUtilities[`.pb-${e(key)}`] = { paddingBottom: value };
    spacingUtilities[`.pl-${e(key)}`] = { paddingLeft: value };
    
    // Gap utilities
    spacingUtilities[`.gap-${e(key)}`] = { gap: value };
  });
  
  // Add tatami-based grid utilities
  const gridUtilities = {
    '.grid-tatami': {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: tatami['shaku'],
    },
    '.grid-tatami-2:1': {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: tatami['shaku'],
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },
    '.grid-tatami-1:2': {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: tatami['shaku'],
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },
    '.grid-tatami-golden': {
      display: 'grid',
      gridTemplateColumns: '1.618fr 1fr',
      gap: tatami['shaku'],
      '@media (max-width: 768px)': {
        gridTemplateColumns: '1fr',
      },
    },
  };

  // Add vertical rhythm utilities
  const verticalRhythmUtilities = {
    '.v-rhythm': {
      '& > * + *': {
        marginTop: tatami['shaku'],
      }
    },
    '.v-rhythm-tight': {
      '& > * + *': {
        marginTop: tatami['sun-2'],
      }
    },
    '.v-rhythm-loose': {
      '& > * + *': {
        marginTop: tatami['tatami'],
      }
    },
  };

  // Japanese aesthetic of "ma" (negative space) utilities
  const maSpaceUtilities = {
    '.ma-space': {
      position: 'relative',
      '&::before': {
        content: '""',
        display: 'block',
        paddingBottom: '56.25%', // 16:9 aspect ratio
      }
    },
    '.ma-space-square': {
      position: 'relative',
      '&::before': {
        content: '""',
        display: 'block',
        paddingBottom: '100%',
      }
    },
    '.ma-asymmetric': {
      display: 'flex',
      '& > *:first-child': {
        flexGrow: 1.618, // Golden ratio
      },
      '& > *:last-child': {
        flexGrow: 1,
      }
    },
  };

  addUtilities(spacingUtilities, ['responsive']);
  addUtilities(gridUtilities, ['responsive']);
  addUtilities(verticalRhythmUtilities, ['responsive']);
  addUtilities(maSpaceUtilities, ['responsive']);
  
  // Add components
  addComponents({
    '.paper-texture': {
      backgroundColor: 'var(--color-paper, #F7F6F1)',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 800 800\'%3E%3Cg fill=\'none\' stroke=\'%23E8E6DD\' stroke-width=\'1\'%3E%3Cpath d=\'M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63\'/%3E%3Cpath d=\'M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764\'/%3E%3Cpath d=\'M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880\'/%3E%3Cpath d=\'M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382\'/%3E%3Cpath d=\'M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269\'/%3E%3C/g%3E%3Cg fill=\'%23E8E6DD\'%3E%3Ccircle cx=\'769\' cy=\'229\' r=\'5\'/%3E%3Ccircle cx=\'539\' cy=\'269\' r=\'5\'/%3E%3Ccircle cx=\'603\' cy=\'493\' r=\'5\'/%3E%3Ccircle cx=\'731\' cy=\'737\' r=\'5\'/%3E%3Ccircle cx=\'520\' cy=\'660\' r=\'5\'/%3E%3Ccircle cx=\'309\' cy=\'538\' r=\'5\'/%3E%3Ccircle cx=\'295\' cy=\'764\' r=\'5\'/%3E%3Ccircle cx=\'40\' cy=\'599\' r=\'5\'/%3E%3Ccircle cx=\'102\' cy=\'382\' r=\'5\'/%3E%3Ccircle cx=\'127\' cy=\'80\' r=\'5\'/%3E%3Ccircle cx=\'370\' cy=\'105\' r=\'5\'/%3E%3Ccircle cx=\'578\' cy=\'42\' r=\'5\'/%3E%3Ccircle cx=\'237\' cy=\'261\' r=\'5\'/%3E%3Ccircle cx=\'390\' cy=\'382\' r=\'5\'/%3E%3C/g%3E%3C/svg%3E")',
    },
    '.washi-texture': {
      backgroundColor: 'var(--color-washi, #FAFAF8)',
      backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'washi\' patternUnits=\'userSpaceOnUse\' width=\'50\' height=\'50\' patternTransform=\'scale(0.5) rotate(0)\'%3E%3Ccircle cx=\'25\' cy=\'25\' r=\'1\' fill=\'%23E6E4DB\' opacity=\'0.4\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23washi)\'/%3E%3C/svg%3E")',
    },
    '.container-ma': {
      maxWidth: '100%',
      width: 'calc(100% - 2rem)',
      marginLeft: 'auto',
      marginRight: 'auto',
      '@screen sm': {
        maxWidth: '640px',
      },
      '@screen md': {
        maxWidth: '768px',
      },
      '@screen lg': {
        maxWidth: '1024px',
      },
      '@screen xl': {
        maxWidth: '1280px',
      },
      '2xl': {
        maxWidth: '1536px',
      },
    },
  });
});
