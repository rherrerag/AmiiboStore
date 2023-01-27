import React from 'react';
import {View, Text, Button} from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../../utils/cartUtils';
import {useNavigation} from '@react-navigation/native';
import labels from '../../../constants/labels';

const ErrorScreen = () => {
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
      <Fontisto name="close" size={120} color={colors.nintendo1} />
      <Text fontSize="2xl" mt={4} mb={4} bold color={colors.nintendo1}>
        {labels.ERROR.TITLE}
      </Text>
      <Text color="light.500" textAlign="center" mb={4}>
        {labels.ERROR.DESCRIPTION}
      </Text>
      <Button
        size="lg"
        bgColor={colors.nintendo1}
        style={{color: colors.white}}
        onPress={goToHome}>
        {labels.ERROR.HOME_BACK_BUTTON}
      </Button>
    </View>
  );

  return render();
};

export default ErrorScreen;
