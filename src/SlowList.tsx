import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
interface Props {
  count: number;
}

export const SlowList = ({count}: Props) => {
  const data = Array.from({length: count}, (_, index) => index);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <SlowListItem title={`Item ${item}`} />}
      keyExtractor={item => `${item}`}
    />
  );
};

interface ItemProps {
  title: string;
}

const SlowListItem = ({title}: ItemProps) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};
