import * as React from 'react';
import {Pressable, Text, View} from 'react-native';

import {fireEvent, screen} from '@testing-library/react-native';
import {measurePerformance} from 'reassure';

import {SlowList} from './SlowList';

const AsyncComponent = () => {
  const [count, setCount] = React.useState(0);
  const slowList = React.useMemo(() => <SlowList count={200} />, []);

  const handlePress = () => {
    setTimeout(() => setCount(c => c + 1), 10);
  };

  return (
    <View>
      <Pressable accessibilityRole="button" onPress={handlePress}>
        <Text>Action</Text>
      </Pressable>

      <Text>Count: {count}</Text>

      {slowList}
    </View>
  );
};

jest.setTimeout(60_000);

test('Async Component', async () => {
  const scenario = async () => {
    const button = screen.getByText('Action');

    fireEvent.press(button);
    await screen.findByText('Count: 1');

    fireEvent.press(button);
    await screen.findByText('Count: 2');

    fireEvent.press(button);
    fireEvent.press(button);
    fireEvent.press(button);
    await screen.findByText('Count: 5');
  };

  await measurePerformance(<AsyncComponent />, {scenario});
});
