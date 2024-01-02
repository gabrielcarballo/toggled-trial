export enum Temperature {
  K4 = '#F9F6EE',
  K5 = '#FAF9F6',
  K65 = '#FFFFFF',
};

const temperatures = {
  [Temperature.K4]: 0.15,
  [Temperature.K5]: 0.05,
  [Temperature.K65]: 0,
};

export const handleLightingTemperature = (temperature: Temperature) => {
  return temperatures[temperature];
}