import React from 'react';
import {Text, Stack, HStack} from 'native-base';
import PropTypes from 'prop-types';
import {colors} from '../../../utils/cartUtils';

const propTypes = {
  gameLabel: PropTypes.string.isRequired,
  seriesLabel: PropTypes.string.isRequired,
  typeLabel: PropTypes.string.isRequired,
  dateLabel: PropTypes.string.isRequired,
  priceLabel: PropTypes.string.isRequired,
  gameData: PropTypes.string.isRequired,
  seriesData: PropTypes.string.isRequired,
  typeData: PropTypes.string.isRequired,
  dateData: PropTypes.string.isRequired,
  priceData: PropTypes.number.isRequired,
};

const DetailStack = ({
  gameLabel,
  seriesLabel,
  typeLabel,
  dateLabel,
  priceLabel,
  gameData,
  seriesData,
  typeData,
  dateData,
  priceData,
}) => {
  const render = () => (
    <Stack mb={4} alignItems="center">
      <HStack>
        <Text bold color={colors.dark_gray} mb={2}>
          {`${gameLabel}: `}
        </Text>
        <Text color={colors.dark_gray} mb={2}>
          {gameData}
        </Text>
      </HStack>
      <HStack>
        <Text bold color={colors.dark_gray} mb={2}>
          {`${seriesLabel}: `}
        </Text>
        <Text color={colors.dark_gray} mb={2}>
          {seriesData}
        </Text>
      </HStack>
      <HStack>
        <Text bold color={colors.dark_gray} mb={2}>
          {`${typeLabel}: `}
        </Text>
        <Text color={colors.dark_gray} mb={2}>
          {typeData}
        </Text>
      </HStack>
      <HStack>
        <Text bold color={colors.dark_gray} mb={2}>
          {`${dateLabel}: `}
        </Text>
        <Text color={colors.dark_gray} mb={2}>
          {dateData}
        </Text>
      </HStack>
      <HStack>
        <Text bold fontSize="xl" color={colors.nintendo2} mb={2}>
          {`${priceLabel}: `}
        </Text>
        <Text bold fontSize="xl" color={colors.nintendo2} mb={2}>
          {`$${priceData.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`}
        </Text>
      </HStack>
    </Stack>
  );

  return render();
};

DetailStack.propTypes = propTypes;

export default DetailStack;
