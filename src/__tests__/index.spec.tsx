import { createRoot } from 'react-dom/client';
import { Root } from '../app';

const rootMock = {
  render: jest.fn(),
};

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn(() => rootMock),
}));

describe('Root DOM', () => {
  test('renders Root', () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.append(root);

    require('../index.tsx');

    expect(createRoot).toHaveBeenCalledWith(root);
    expect(rootMock.render).toHaveBeenCalledWith(<Root />);
  });
});
