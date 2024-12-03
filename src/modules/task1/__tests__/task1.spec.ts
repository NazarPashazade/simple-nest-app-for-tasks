import { dispenseFruit } from '../task1';

describe('Fruit Dispensing Algorithm', () => {
  test('returns fruits with correct probabilities', () => {
    const iterations = 1000000;
    const counts = {
      apple: 0,
      pear: 0,
      orange: 0,
      peach: 0,
      mango: 0,
    };

    for (let i = 0; i < iterations; i++) {
      const fruit = dispenseFruit();
      counts[fruit]++;
    }

    const appleProbability = (counts.apple / iterations) * 100;
    const pearProbability = (counts.pear / iterations) * 100;
    const orangeProbability = (counts.orange / iterations) * 100;
    const peachProbability = (counts.peach / iterations) * 100;
    const mangoProbability = (counts.mango / iterations) * 100;

    console.log('Probabilities:', {
      apple: appleProbability,
      pear: pearProbability,
      orange: orangeProbability,
      peach: peachProbability,
      mango: mangoProbability,
    });

    expect(appleProbability).toBeCloseTo(50, 1);
    expect(pearProbability).toBeCloseTo(20, 1);
    expect(orangeProbability).toBeCloseTo(15, 1);
    expect(peachProbability).toBeCloseTo(10, 1);
    expect(mangoProbability).toBeCloseTo(5, 1);
  });
});
