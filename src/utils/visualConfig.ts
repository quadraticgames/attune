/**
 * ============================================================================
 * VISUAL EFFECTS & PARTICLE CONFIGURATION
 * ============================================================================
 * Edit this file to customize visual effects, particle densities, and movement
 * randomness across all 9 stages in Attune / Siddhartha's Journey.
 *
 * All particle systems dynamically update based on these settings.
 */

// ----------------------------------------------------------------------------
// 1. GLOBAL VISUAL TUNING (Quick Adjustments)
// ----------------------------------------------------------------------------

export const GLOBAL_VISUAL_CONFIG = {
  /**
   * Density Multiplier across all particle systems:
   * 1.0 = Default current density
   * 2.0 = Double density
   * 0.5 = Half density
   * 0.0 = Disable particles
   */
  densityMultiplier: 2.0,

  /**
   * Movement Randomness Intensity:
   * Controls horizontal sway variance, velocity jitter, and trajectory chaos.
   * 0.0 = Uniform, mechanical movement
   * 1.0 = Balanced organic movement
   * 2.0 = Highly turbulent, unpredictable drift
   */
  movementRandomness: 2.0,

  /**
   * Global Animation Speed Multiplier:
   * 1.0 = Normal serene speed
   * 0.5 = Dreamy, slow-motion flow
   * 2.0 = Fast, energetic flow
   */
  speedMultiplier: 1.0,

  /**
   * Global Particle Size Multiplier:
   * 1.0 = Normal size
   * 1.5 = 50% larger particles
   * 0.75 = 25% smaller, subtler particles
   */
  sizeMultiplier: 1.0,

  /**
   * Delay in milliseconds between completing the final puzzle of a stage and
   * the fanfare / next stage announcement banner appearing.
   * Gives the player a graceful moment to hear the bell note settle.
   */
  stageAnnouncementDelayMs: 1200,
};

// ----------------------------------------------------------------------------
// 2. PER-STAGE THEMES (SKY GRADIENTS, CELESTIAL ORB & FOG COLORS/OPACITY)
// ----------------------------------------------------------------------------

export type StageTheme = {
  isNight?: boolean;
  isWinter?: boolean;
  skyGradient: [string, string, string, string]; // 4-stop sky gradient colors
  farMountain: string;
  midMountain: string;
  slopeMountain: string;
  fogColor: string;
  fogOpacity: number; // 0.0 to 1.0 (Fog wash opacity)
  celestial: {
    cx: number; // Sun/Moon X position in % of width
    cy: number; // Sun/Moon Y position
    r: number;  // Disc radius in px
    fill: string; // Core orb fill color
    glow: string; // Radiant halo flare color
    opacity: number; // 0.0 to 1.0 (Sun/Moon orb opacity)
  };
  sparkleColor: string;
  waterColor: string;
};

export const STAGE_THEMES: Record<number, StageTheme> = {
  // Stage 1: The Brahmin’s Cage - Crisp Pale Morning Mist & Green Bamboo Dawn
  1: {
    isNight: false,
    skyGradient: ['#fbf7ed', '#f4ece1', '#f7eae4', '#eeddd6'],
    farMountain: '#e3dbcc',
    midMountain: '#dbd1bd',
    slopeMountain: '#cfc3af',
    fogColor: '#52b788',
    fogOpacity: 0.12, // 12% opacity
    celestial: { cx: 280, cy: 95, r: 38, fill: '#fff9ee', glow: '#fed7aa', opacity: 0.55 }, // 55% opacity
    sparkleColor: '#a5f3fc',
    waterColor: '#ded4be',
  },
  // Stage 2: The Samana Trials - Frosty Himalayan Winter of Asceticism & Desaturated Snow
  2: {
    isWinter: true,
    isNight: false,
    skyGradient: ['#eef3f8', '#dfe8f1', '#cfdce8', '#b8cadc'],
    farMountain: '#8b9cb0',
    midMountain: '#5c6f84',
    slopeMountain: '#3b4b5e',
    fogColor: '#e2e8f0',
    fogOpacity: 0.32, // 32% opacity
    celestial: { cx: 340, cy: 75, r: 38, fill: '#ffffff', glow: '#dbeafe', opacity: 0.90 }, // 90% opacity
    sparkleColor: '#ffffff',
    waterColor: '#cfdce8',
  },
  // Stage 3: Confronting the Buddha - Sacred Golden Enlightenment Radiance
  3: {
    isNight: false,
    skyGradient: ['#fefce8', '#fef3c7', '#fde68a', '#fcd34d'],
    farMountain: '#e5d19a',
    midMountain: '#d9c283',
    slopeMountain: '#c9b06b',
    fogColor: '#f59e0b',
    fogOpacity: 0.20, // 20% opacity
    celestial: { cx: 500, cy: 105, r: 64, fill: '#fef08a', glow: '#f59e0b', opacity: 0.70 }, // 70% opacity
    sparkleColor: '#fef08a',
    waterColor: '#e0c98f',
  },
  // Stage 4: The Garden of Kamala - Senses Awakening, Blooming Peach & Rose Dusk
  4: {
    isNight: false,
    skyGradient: ['#fdf2f4', '#fce7ed', '#fbcfe8', '#f5d0fe'],
    farMountain: '#e2bccd',
    midMountain: '#d4a9bc',
    slopeMountain: '#c292a8',
    fogColor: '#ec4899',
    fogOpacity: 0.15, // 15% opacity
    celestial: { cx: 720, cy: 90, r: 46, fill: '#fdf2f8', glow: '#f472b6', opacity: 0.65 }, // 65% opacity
    sparkleColor: '#fbcfe8',
    waterColor: '#ddb8ca',
  },
  // Stage 5: Rich Man (Greed) - Opulent Gilded Cinnabar Marketplace & Gilded Sunset
  5: {
    isNight: false,
    skyGradient: ['#fff7ed', '#ffedd5', '#fed7aa', '#ea580c'],
    farMountain: '#d49b78',
    midMountain: '#b8724e',
    slopeMountain: '#9c5a38',
    fogColor: '#f97316',
    fogOpacity: 0.16, // 16% opacity
    celestial: { cx: 780, cy: 85, r: 44, fill: '#fffbeb', glow: '#f59e0b', opacity: 0.85 }, // 85% opacity
    sparkleColor: '#fde047',
    waterColor: '#b8724e',
  },
  // Stage 6: The River of Rebirth (The Dark Night of the Soul) - Radiant Sapphire Midnight & Moonlit Waters
  6: {
    isNight: true,
    skyGradient: ['#162544', '#203762', '#314e86', '#1a2e54'],
    farMountain: '#253b66',
    midMountain: '#1d3055',
    slopeMountain: '#152544',
    fogColor: '#a5b4fc',
    fogOpacity: 0.24, // 24% opacity
    celestial: { cx: 480, cy: 70, r: 44, fill: '#ffffff', glow: '#c7d2fe', opacity: 0.98 }, // 98% opacity
    sparkleColor: '#c7d2fe',
    waterColor: '#253b66',
  },
  // Stage 7: The Ferryman’s Disciple - Sacred Flowing Aqua River & Eternal Current
  7: {
    isNight: false,
    skyGradient: ['#e0f7fa', '#b2ebf2', '#67e8f9', '#06b6d4'],
    farMountain: '#0284c7',
    midMountain: '#0369a1',
    slopeMountain: '#075985',
    fogColor: '#00e5ff',
    fogOpacity: 0.32, // 32% opacity
    celestial: { cx: 280, cy: 95, r: 48, fill: '#ecfeff', glow: '#22d3ee', opacity: 0.90 }, // 90% opacity
    sparkleColor: '#38bdf8',
    waterColor: '#0284c7',
  },
  // Stage 8: The Wound of Love - Celestial Amethyst Twilight Night & Solitary Moon
  8: {
    isNight: true,
    skyGradient: ['#2b1f42', '#3c2b5c', '#533c7c', '#2f2149'],
    farMountain: '#463268',
    midMountain: '#392756',
    slopeMountain: '#2c1c44',
    fogColor: '#d8b4fe',
    fogOpacity: 0.22, // 22% opacity
    celestial: { cx: 640, cy: 75, r: 42, fill: '#ffffff', glow: '#e9d5ff', opacity: 0.96 }, // 96% opacity
    sparkleColor: '#e9d5ff',
    waterColor: '#392756',
  },
  // Stage 9: The Eternal Flow (The Eternal Glow) - Radiant Celestial Winter Snow & Ultimate Oneness
  9: {
    isWinter: true,
    isNight: false,
    skyGradient: ['#f8fafc', '#edf2f7', '#dbeafe', '#b8cadc'],
    farMountain: '#8094aa',
    midMountain: '#586e85',
    slopeMountain: '#3a4e63',
    fogColor: '#f1f5f9',
    fogOpacity: 0.35, // 35% opacity
    celestial: { cx: 885, cy: 80, r: 56, fill: '#ffffff', glow: '#dbeafe', opacity: 0.98 }, // 98% opacity
    sparkleColor: '#ffffff',
    waterColor: '#cfdce8',
  },
};

// ----------------------------------------------------------------------------
// 3. PER-STAGE PARTICLE & MOVEMENT CONFIGURATION
// ----------------------------------------------------------------------------

export const STAGE_PARTICLE_CONFIG = {
  // Stage 1: The Brahmin’s Cage - Morning Mist & Ethereal Cloud Wisps
  stage1: {
    mistMotes: {
      baseCount: 30, // Number of floating mist particles
      sizeRange: [1.7, 3.2] as [number, number],
      opacityRange: [0.45, 0.70] as [number, number], // Opacity: 45% - 70%
      durationRange: [7.2, 11.0] as [number, number], // in seconds
      movementRandomness: 1.0,
      colors: ['#bbf7d0', '#fef3c7', '#e2f5ec'], // Pale Jade (#bbf7d0), Morning Gold (#fef3c7), Ethereal Mist (#e2f5ec)
    },
    cloudWisps: {
      count: 9, // Number of drifting horizontal cloud wisps
      widthRange: [260, 420] as [number, number],
      heightRange: [120, 185] as [number, number],
      opacityRange: [0.55, 0.82] as [number, number], // Opacity: 55% - 82%
      durationRange: [16, 46] as [number, number],
      blurRange: [1.5, 3.5] as [number, number],
      movementRandomness: 1.4,
      colors: ['#ffffff', '#f0fdf4'], // Pure White (#ffffff), Pale Greenish White (#f0fdf4)
    },
  },

  // Stage 2: The Samana Trials - Frosty Himalayan Winter Falling Snow
  stage2: {
    snowflakes: {
      baseCount: 58, // Total falling snowflakes
      sizeRange: [1.6, 4.2] as [number, number],
      opacityRange: [0.45, 0.92] as [number, number], // Opacity: 45% - 92%
      durationRange: [5.0, 9.0] as [number, number], // fall duration in seconds
      movementRandomness: 1.2, // horizontal sway & wobble variance
      swayWidthPx: 28, // max horizontal drift distance in px
      colors: ['#ffffff', '#f1f5f9', '#e2e8f0'], // Crisp White (#ffffff), Soft Frost (#f1f5f9), Icy Silver (#e2e8f0)
    },
  },

  // Stage 3: Confronting the Buddha - Sacred Floating Embers
  stage3: {
    goldenSparks: {
      baseCount: 36, // Floating sacred embers
      sizeRange: [0.2, 1.0] as [number, number],
      opacityRange: [0.55, 0.90] as [number, number], // Opacity: 55% - 90%
      durationRange: [6.5, 10.5] as [number, number],
      movementRandomness: 0.2,
      colors: ['#fef08a', '#fde047', '#f59e0b', '#fb923c', '#ea580c'], // Pale Gold (#fef08a), Warm Gold (#fde047), Amber (#f59e0b), Flame Orange (#fb923c), Deep Ember (#ea580c)
    },
    heatDistortion: {
      streakCount: 0,
      streakWidthRange: [0, 0] as [number, number],
      streakHeightRange: [0, 0] as [number, number],
      streakDurationRange: [0, 0] as [number, number],
      hazeBandCount: 0,
      hazeBandBlurPx: 0,
      heatCoronaRadiusPx: 0,
      movementRandomness: 0,
    },
  },

  // Stage 4: The Garden of Kamala - Awakening of Senses Drifting Peach Petals
  stage4: {
    blossomPetals: {
      baseCount: 28, // Drifting peach & lotus blossom petals
      sizeRange: [5.0, 7.2] as [number, number],
      opacityRange: [0.50, 0.75] as [number, number], // Opacity: 50% - 75%
      durationRange: [8.0, 10.4] as [number, number],
      movementRandomness: 1.3,
      colors: ['#fbcfe8', '#fce7f3', '#f472b6'], // Peach Blossom Pink (#fbcfe8), Soft Petal (#fce7f3), Deep Blossom Rose (#f472b6)
    },
  },

  // Stage 5: Rich Man (Greed) - Opulent Gilded Cinnabar Marketplace Lantern Embers
  stage5: {
    lanternEmbers: {
      baseCount: 24, // Rising warm cinnabar and gold sparks
      sizeRange: [2.0, 3.4] as [number, number],
      opacityRange: [0.65, 0.90] as [number, number], // Opacity: 65% - 90%
      durationRange: [6.0, 8.2] as [number, number],
      movementRandomness: 1.1,
      colors: ['#fb923c', '#fb7185', '#fda4af', '#f43f5e'], // Warm Amber (#fb923c), Rose Ember (#fb7185), Light Cinnabar (#fda4af), Deep Cinnabar (#f43f5e)
    },
  },

  // Stage 6: The River of Rebirth (The Dark Night of the Soul) - Sapphire Night Stars
  stage6: {
    sapphireStars: {
      baseCount: 68, // Twinkling night stars
      sizeRange: [1.3, 4.2] as [number, number],
      opacityRange: [0.50, 0.98] as [number, number], // Opacity: 50% - 98%
      durationRange: [2.9, 5.4] as [number, number], // twinkle period in seconds
      movementRandomness: 1.0,
      majorSparkleRatio: 0.15, // Ratio of stars with 4-point diamond sparkle flare
      colors: ['#ffffff', '#e0f2fe', '#bae6fd'], // Star White (#ffffff), Light Cyan (#e0f2fe), Soft Sapphire Blue (#bae6fd)
      defaultGlow: 'rgba(165, 243, 252, 0.85)', // Sapphire Halo (85% opacity)
    },
  },

  // Stage 7: The Ferryman’s Disciple - Sacred Flowing Aqua River & Bamboo Dew
  stage7: {
    bambooLeaves: {
      baseCount: 24, // Drifting bamboo leaves
      sizeRange: [6.0, 8.2] as [number, number],
      opacityRange: [0.50, 0.70] as [number, number], // Opacity: 50% - 70%
      durationRange: [8.6, 10.8] as [number, number],
      movementRandomness: 1.25,
      colors: ['#38bdf8', '#67e8f9', '#22d3ee', '#a7f3d0', '#34d399'], // Sky Aqua (#38bdf8), Luminous Cyan (#67e8f9), Teal Water (#22d3ee), Soft Mint (#a7f3d0), Fresh Bamboo Green (#34d399)
    },
    aquaRiverOverlay: {
      enabled: true,
      opacity: 0.68, // Overall river overlay opacity: 68%
      shimmerOpacity: 0.45, // Shimmer ripple opacity: 45%
      skyWash: 'rgba(6, 182, 212, 0.45)',      // Luminous aqua cyan (45% opacity)
      midRiverWash: 'rgba(14, 165, 233, 0.58)', // Cerulean river wash (58% opacity)
      deepRiverWash: 'rgba(2, 132, 199, 0.72)', // Deep river water (72% opacity)
      riverbedWash: 'rgba(3, 105, 161, 0.82)',  // Riverbed current (82% opacity)
      waterRippleColor: 'rgba(103, 232, 249, 0.65)', // Ripple highlight (65% opacity)
    },
  },

  // Stage 8: The Wound of Love - Solitary Amethyst Twilight Glowing Stars
  stage8: {
    amethystStars: {
      baseCount: 64, // Twinkling twilight stars
      sizeRange: [1.3, 4.0] as [number, number],
      opacityRange: [0.50, 0.98] as [number, number], // Opacity: 50% - 98%
      durationRange: [2.8, 5.3] as [number, number],
      movementRandomness: 1.0,
      majorSparkleRatio: 0.14,
      colors: ['#ffffff', '#f5d0fe', '#e9d5ff'], // Star White (#ffffff), Light Violet (#f5d0fe), Amethyst Lilac (#e9d5ff)
      defaultGlow: 'rgba(216, 180, 254, 0.85)', // Amethyst Twilight Glow (85% opacity)
    },
  },

  // Stage 9: The Eternal Flow (The Eternal Glow) - Celestial Winter Snow & Radiant Enlightenment
  stage9: {
    snowflakes: {
      baseCount: 60, // Total falling celestial snowflakes
      sizeRange: [1.8, 4.4] as [number, number],
      opacityRange: [0.55, 0.95] as [number, number], // Opacity: 55% - 95%
      durationRange: [4.8, 8.5] as [number, number], // fall duration in seconds
      movementRandomness: 1.25,
      swayWidthPx: 28,
      colors: ['#ffffff', '#f8fafc', '#e0f2fe'], // Pure Celestial White (#ffffff), Ghost White (#f8fafc), Ice Blue (#e0f2fe)
    },
    spiritMotes: {
      baseCount: 22, // Ascending transcendental spirit particles
      sizeRange: [2.0, 3.8] as [number, number],
      opacityRange: [0.55, 0.88] as [number, number], // Opacity: 55% - 88%
      durationRange: [6.2, 9.0] as [number, number],
      movementRandomness: 1.2,
      colors: ['#ffffff', '#e0f2fe', '#bae6fd', '#fef08a'], // Pure White (#ffffff), Soft Celestial Blue (#e0f2fe), Sky Glow (#bae6fd), Enlightenment Gold (#fef08a)
    },
  },
};

// ----------------------------------------------------------------------------
// 3. TYPES
// ----------------------------------------------------------------------------

export type ParticleItem = {
  x: number;
  y?: number;
  size: number;
  opacity: number;
  dur: number;
  delay: number;
  variant: 1 | 2 | 3;
  color?: string;
};

export type GlowingStarItem = {
  x: number;
  y: number;
  size: number;
  opacity: number;
  dur: number;
  delay: number;
  variant: 1 | 2 | 3;
  isMajor?: boolean;
  color?: string;
  glow?: string;
};

export type CloudWispItem = {
  y: number;
  width: number;
  height: number;
  opacity: number;
  dur: number;
  delay: number;
  variant: 1 | 2 | 3;
  blur: number;
};

export type HeatStreakItem = {
  x: number;
  width: number;
  height: number;
  opacity: number;
  dur: number;
  delay: number;
  variant: 1 | 2;
};

export type HeatHazeBandItem = {
  y: number;
  height: number;
  dur: number;
  delay: number;
  variant: 1 | 2;
};

// ----------------------------------------------------------------------------
// 4. DETERMINISTIC PSEUDO-RANDOM NUMBER GENERATOR
// ----------------------------------------------------------------------------
// Ensures consistent, flicker-free rendering while enabling dynamic adjustments.

function createPRNG(seed: number) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function lerp(min: number, max: number, t: number) {
  return min + (max - min) * t;
}

// ----------------------------------------------------------------------------
// 5. PROCEDURAL PARTICLE GENERATORS
// ----------------------------------------------------------------------------

/**
 * Generate Stage 1 Mist Motes
 */
export function getStage1MistMotes(): ParticleItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage1.mistMotes;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(101);
  const items: ParticleItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(3, 97, (i + prng() * 0.8) / count));
    const y = Math.round(lerp(18, 76, prng()));
    const size = +(lerp(cfg.sizeRange[0], cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const speedJitter = lerp(0.85, 1.15, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) * speedJitter / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.2, dur * 0.9, prng())).toFixed(1);
    const variant = (prng() > 0.5 ? 2 : 1) as 1 | 2;
    const color = cfg.colors[Math.floor(prng() * cfg.colors.length)];

    items.push({ x, y, size, opacity, dur, delay, variant, color });
  }

  return items;
}

/**
 * Generate Stage 1 Mountain Cloud Wisps
 */
export function getStage1CloudWisps(): CloudWispItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage1.cloudWisps;
  const count = cfg.count;
  const prng = createPRNG(202);
  const items: CloudWispItem[] = [];

  // Strictly confined to the top half of the game interface (3% to 45%)
  const baseElevations = [4, 9, 15, 21, 27, 33, 39, 44];

  for (let i = 0; i < count; i++) {
    // Keep strictly in the top half (below 48%)
    const rawY = baseElevations[i % baseElevations.length] + lerp(-1.5, 1.5, prng());
    const y = +Math.min(46, Math.max(3, rawY)).toFixed(1);
    const width = Math.round(lerp(cfg.widthRange[0], cfg.widthRange[1], prng()));
    const height = Math.round(lerp(cfg.heightRange[0], cfg.heightRange[1], prng()));
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);

    // Randomize speed with jitter based on movementRandomness
    const speedJitter = lerp(0.72, 1.38, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const baseDur = lerp(cfg.durationRange[0], cfg.durationRange[1], prng());
    const dur = Math.max(12, Math.round((baseDur * speedJitter) / GLOBAL_VISUAL_CONFIG.speedMultiplier));
    const delay = +(-lerp(0.5, dur * 0.95, prng())).toFixed(1);
    const variant = ((i % 3) + 1) as 1 | 2 | 3;
    const blur = Math.round(lerp(cfg.blurRange[0], cfg.blurRange[1], prng()));

    items.push({ y, width, height, opacity, dur, delay, variant, blur });
  }

  return items;
}

/**
 * Generate Stage 2 Falling Snowflakes
 */
export function getStage2Snowflakes(): ParticleItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage2.snowflakes;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(303);
  const items: ParticleItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(2, 98, (i + prng() * 0.85) / count));
    const size = +(lerp(cfg.sizeRange[0], cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const speedJitter = lerp(0.8, 1.2, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) * speedJitter / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.3, dur * 0.95, prng())).toFixed(1);
    const randVar = prng();
    const variant = (randVar < 0.35 ? 1 : randVar < 0.7 ? 2 : 3) as 1 | 2 | 3;

    items.push({ x, size, opacity, dur, delay, variant });
  }

  return items;
}

/**
 * Generate Stage 3 Golden Sparks
 */
export function getStage3GoldenSparks(): ParticleItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage3.goldenSparks;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(404);
  const items: ParticleItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(5, 96, (i + prng() * 0.85) / count));
    const y = Math.round(lerp(5, 24, prng()));
    const size = +(lerp(cfg.sizeRange[0], cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const speedJitter = lerp(0.85, 1.15, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) * speedJitter / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.5, dur * 0.9, prng())).toFixed(1);
    const variant = (prng() > 0.5 ? 2 : 1) as 1 | 2;
    const color = cfg.colors[Math.floor(prng() * cfg.colors.length)];

    items.push({ x, y, size, opacity, dur, delay, variant, color });
  }

  return items;
}

/**
 * Generate Stage 3 Heat Streaks (Disabled - floating embers only)
 */
export function getStage3HeatStreaks(): HeatStreakItem[] {
  return [];
}

/**
 * Generate Stage 3 Heat Haze Bands (Disabled - floating embers only)
 */
export function getStage3HeatHazeBands(): HeatHazeBandItem[] {
  return [];
}

/**
 * Generate Stage 4 Peach Blossom Petals
 */
export function getStage4BlossomPetals(): ParticleItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage4.blossomPetals;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(606);
  const items: ParticleItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(3, 97, (i + prng() * 0.85) / count));
    const size = +(lerp(cfg.sizeRange[0], cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const speedJitter = lerp(0.85, 1.2, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) * speedJitter / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.4, dur * 0.9, prng())).toFixed(1);
    const variant = (prng() > 0.5 ? 2 : 1) as 1 | 2;
    const color = cfg.colors[Math.floor(prng() * cfg.colors.length)];

    items.push({ x, size, opacity, dur, delay, variant, color });
  }

  return items;
}

/**
 * Generate Stage 5 Lantern Embers
 */
export function getStage5LanternEmbers(): ParticleItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage5.lanternEmbers;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(707);
  const items: ParticleItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(5, 96, (i + prng() * 0.85) / count));
    const y = Math.round(lerp(7, 26, prng()));
    const size = +(lerp(cfg.sizeRange[0], cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const speedJitter = lerp(0.85, 1.15, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) * speedJitter / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.5, dur * 0.9, prng())).toFixed(1);
    const variant = (prng() > 0.5 ? 2 : 1) as 1 | 2;
    const color = cfg.colors[Math.floor(prng() * cfg.colors.length)];

    items.push({ x, y, size, opacity, dur, delay, variant, color });
  }

  return items;
}

/**
 * Generate Stage 6 Sapphire Night Stars
 */
export function getStage6NightStars(): GlowingStarItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage6.sapphireStars;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(808);
  const items: GlowingStarItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(3, 98, (i + prng() * 0.85) / count));
    const y = Math.round(lerp(5, 46, prng()));
    const isMajor = prng() < cfg.majorSparkleRatio;
    const size = isMajor
      ? +(lerp(3.2, cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1)
      : +(lerp(cfg.sizeRange[0], 2.8, prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.2, dur * 0.9, prng())).toFixed(1);
    const variant = isMajor ? 3 : (prng() > 0.5 ? 2 : 1);

    items.push({
      x,
      y,
      size,
      opacity,
      dur,
      delay,
      variant: variant as 1 | 2 | 3,
      isMajor,
      color: '#ffffff',
      glow: isMajor ? 'rgba(199, 210, 254, 0.95)' : cfg.defaultGlow,
    });
  }

  return items;
}

/**
 * Generate Stage 7 Whispering Bamboo Leaves
 */
export function getStage7BambooLeaves(): ParticleItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage7.bambooLeaves;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(909);
  const items: ParticleItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(4, 96, (i + prng() * 0.85) / count));
    const size = +(lerp(cfg.sizeRange[0], cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const speedJitter = lerp(0.85, 1.2, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) * speedJitter / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.5, dur * 0.9, prng())).toFixed(1);
    const variant = (prng() > 0.5 ? 2 : 1) as 1 | 2;
    const color = cfg.colors[Math.floor(prng() * cfg.colors.length)];

    items.push({ x, size, opacity, dur, delay, variant, color });
  }

  return items;
}

/**
 * Generate Stage 8 Amethyst Twilight Stars
 */
export function getStage8NightStars(): GlowingStarItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage8.amethystStars;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(1010);
  const items: GlowingStarItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(4, 97, (i + prng() * 0.85) / count));
    const y = Math.round(lerp(6, 45, prng()));
    const isMajor = prng() < cfg.majorSparkleRatio;
    const size = isMajor
      ? +(lerp(3.2, cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1)
      : +(lerp(cfg.sizeRange[0], 2.6, prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.2, dur * 0.9, prng())).toFixed(1);
    const variant = isMajor ? 3 : (prng() > 0.5 ? 2 : 1);

    items.push({
      x,
      y,
      size,
      opacity,
      dur,
      delay,
      variant: variant as 1 | 2 | 3,
      isMajor,
      color: isMajor ? '#f3e8ff' : '#ffffff',
      glow: isMajor ? 'rgba(233, 213, 255, 0.95)' : cfg.defaultGlow,
    });
  }

  return items;
}

/**
 * Generate Stage 9 Celestial Spirit Motes
 */
export function getStage9SpiritMotes(): ParticleItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage9.spiritMotes;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(1111);
  const items: ParticleItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(5, 96, (i + prng() * 0.85) / count));
    const y = Math.round(lerp(7, 24, prng()));
    const size = +(lerp(cfg.sizeRange[0], cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const speedJitter = lerp(0.85, 1.2, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) * speedJitter / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.5, dur * 0.9, prng())).toFixed(1);
    const variant = (prng() > 0.5 ? 2 : 1) as 1 | 2;
    const color = cfg.colors[Math.floor(prng() * cfg.colors.length)];

    items.push({ x, y, size, opacity, dur, delay, variant, color });
  }

  return items;
}

/**
 * Stage 7 Aqua Blue River Overlay Configuration Getter
 */
export function getStage7AquaRiverConfig() {
  return STAGE_PARTICLE_CONFIG.stage7.aquaRiverOverlay;
}

/**
 * Generate Stage 9 Celestial Falling Snowflakes
 */
export function getStage9Snowflakes(): ParticleItem[] {
  const cfg = STAGE_PARTICLE_CONFIG.stage9.snowflakes;
  const count = Math.round(cfg.baseCount * GLOBAL_VISUAL_CONFIG.densityMultiplier);
  const prng = createPRNG(1212);
  const items: ParticleItem[] = [];

  for (let i = 0; i < count; i++) {
    const x = Math.round(lerp(2, 98, (i + prng() * 0.85) / count));
    const size = +(lerp(cfg.sizeRange[0], cfg.sizeRange[1], prng()) * GLOBAL_VISUAL_CONFIG.sizeMultiplier).toFixed(1);
    const opacity = +(lerp(cfg.opacityRange[0], cfg.opacityRange[1], prng())).toFixed(2);
    const speedJitter = lerp(0.8, 1.2, prng() * cfg.movementRandomness * GLOBAL_VISUAL_CONFIG.movementRandomness);
    const dur = +(lerp(cfg.durationRange[0], cfg.durationRange[1], prng()) * speedJitter / GLOBAL_VISUAL_CONFIG.speedMultiplier).toFixed(1);
    const delay = +(-lerp(0.3, dur * 0.95, prng())).toFixed(1);
    const randVar = prng();
    const variant = (randVar < 0.35 ? 1 : randVar < 0.7 ? 2 : 3) as 1 | 2 | 3;

    items.push({ x, size, opacity, dur, delay, variant });
  }

  return items;
}


