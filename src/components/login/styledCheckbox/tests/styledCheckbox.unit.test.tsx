import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { MuiCheckedItemBox } from '../styledCheckbox';

test('it works', () => {
  const tree = renderer.create(<MuiCheckedItemBox />).toJSON();
  expect(tree).toMatchSnapshot();
})
