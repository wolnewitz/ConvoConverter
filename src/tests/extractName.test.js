import extractName from '../extractName'

const testStringWithStamps =
  "[3/13/17, 10:35:24 AM]David  Yee: how's it pronounced: again? VOL-NEW-ITZ? or WOLE-NEW-ITZ?"

const testStringWithoutStamps = "David  Yee: how's it pronounced: again? VOL-NEW-ITZ? or WOLE-NEW-ITZ?";

test('extractName', () => {
  expect(extractName(testStringWithoutStamps, true)).toBe('David  Yee:');
  expect(extractName(testStringWithStamps, false)).toBe('David  Yee:');
});
