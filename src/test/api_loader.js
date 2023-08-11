export const mockAPILoader = jest.fn();

const mock = jest.fn.mockImplementation(() => {
  const shows = ['Under the Dome', 'Person fo interest', 'Bitten', 'The Strain'];
  return shows;
});

export default mock;