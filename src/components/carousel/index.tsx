import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {HEIGHT, WIDTH} from '../../theme/commonStyle';
import {Images} from '../../constants';

type Props = {};

const Carousel = (props: Props) => {
  const [ind, setInd] = useState<number>(0);
  const flatRef = useRef<FlatList>(null);
  const timerRef = useRef<any>(null);

  let timer: any = null;

  const data = ['', '', '', '', ''];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (ind === data.length - 1) {
        flatRef.current?.scrollToIndex({
          index: 0,
          animated: true,
        });
        setInd(0);
      } else {
        flatRef.current?.scrollToIndex({
          index: ind + 1,
          animated: true,
        });
        setInd(ind + 1);
      }
    }, 2000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [ind, data.length]);

  return (
    <View style={{height: HEIGHT / 4, width: WIDTH}}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        initialScrollIndex={0}
        getItemLayout={(_, index) => ({
          length: WIDTH,
          offset: WIDTH * index,
          index,
        })}
        ref={flatRef}
        onScroll={e => {
          let ind = Math.floor(e.nativeEvent.contentOffset.x / WIDTH);
          setInd(ind);
        }}
        pagingEnabled
        renderItem={({item, index}) => {
          return (
            <Image
              source={Images.car}
              resizeMode="cover"
              style={{
                height: HEIGHT / 4.5,
                width: WIDTH / 1.08,
                marginLeft: index == 0 ? 0 : 30,
                marginTop: 10,
                borderRadius: 5,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
