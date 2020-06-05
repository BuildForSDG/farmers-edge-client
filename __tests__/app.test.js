import App from '../src/index';

describe('app module', () => {
  test('it exists', async () => {
    expect(App).toBeDefined();
  });

  test('it returns program name with SDGs', async () => {
    const result = await App();
    const sdgPos = (result || '').indexOf('SDG');
    expect(sdgPos).toBeGreaterThanOrEqual(0);
  });
});
