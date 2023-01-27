import React from 'react';
import {View, Text, Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../../utils/cartUtils';
import {useNavigation} from '@react-navigation/native';
import labels from '../../../constants/labels';

const SuccessScreen = () => {
  const navigation = useNavigation();
  const goToHome = () => navigation.navigate('Home');

  const render = () => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minWidth: '100%',
        flexGrow: 1,
        paddingLeft: 24,
        paddingRight: 24,
      }}>
      <Fontisto name="like" size={120} color={colors.nintendo2} />
      <Text fontSize="2xl" mt={4} mb={4} bold color={colors.nintendo2}>
        {labels.SUCCESS.TITLE}
      </Text>
      <Text color="light.500" textAlign="center" mb={4}>
        {labels.SUCCESS.DESCRIPTION}
      </Text>
      <Button
        size="lg"
        bgColor={colors.nintendo2}
        style={{color: colors.white}}
        onPress={goToHome}>
        {labels.SUCCESS.HOME_BACK_BUTTON}
      </Button>
    </View>
  );

  return render();
};

export default SuccessScreen;
