/*

Task 1

Imagine a machine that dispenses fruits randomly. Write an algorithm that randomly, but with
different probability returns fruit string values. Also, add a unit test that checks the correctness of
the algorithm.
Probabilities for each fruit:
- apple: 50%
- pear: 20%
- orange: 15%
- peach: 10%
- mango: 5%

*/

export function dispenseFruit() {
  const random = Math.random() * 100;

  if (random < 50) return 'apple';
  if (random < 70) return 'pear';
  if (random < 85) return 'orange';
  if (random < 95) return 'peach';
  return 'mango';
}
