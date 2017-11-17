import figureStore from './figure.store';

describe('Figure Store', () => {
  test('defaults to no feedback', () => {
    expect(figureStore.headMoving).toBe(false);
    expect(figureStore.helmetMoving).toBe(false);
    expect(figureStore.leftArmMoving).toBe(false);
    expect(figureStore.rightArmMoving).toBe(false);
    expect(figureStore.leftHandMoving).toBe(false);
    expect(figureStore.rightHandMoving).toBe(false);
    expect(figureStore.energyOn).toBe(false);
  })
});