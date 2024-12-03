/*

Task 2

Write an asynchronous function that takes another asynchronous function as a parameter. 

The internal function should be retried until it successfully returns a result or throws an error, 
with a maximum of 5 retries.

*/

async function retryAsync(fn, maxRetries = 5) {
  let attempts = 0;

  while (attempts < maxRetries) {
    try {
      attempts++;
      return await fn();
    } catch (error) {
      if (attempts >= maxRetries) {
        throw new Error(
          `Function failed after ${maxRetries} retries: ${error.message}`,
        );
      }
      console.log(`Retrying (${attempts}/${maxRetries})...`);
    }
  }
}

async function testFn() {
  const random = Math.random();

  console.log('Random value:', random);

  if (random < 0.8) {
    throw new Error('Random value is too low!');
  }

  return 'Success!';
}

(async () => {
  try {
    const result = await retryAsync(testFn, 5, 1000);
    console.log('Result:', result);
  } catch (error) {
    console.error('Final Error:', error.message);
  }
})();
