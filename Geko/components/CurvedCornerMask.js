import React from 'react';
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CurvedCornerMask = ({ children }) => {
  return (
    <View style={{ overflow: 'hidden', borderRadius: 10 }}>
      <View style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
        <LinearGradient
          colors={['transparent', 'white']}
          style={{
            width: 30,
            height: 30,
            borderTopRightRadius: 10,
            transform: [{ rotate: '45deg' }],
          }}
          start={[0, 0]}
          end={[1, 1]}
        />
      </View>
      {children}
    </View>
  );
};

export default CurvedCornerMask;