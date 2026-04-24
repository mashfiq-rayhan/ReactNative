import { useLayoutEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import IconButton from '../components/UI/IconButton';
import { Colors } from '../constants/colors';

function MapWeb({ navigation, route }) {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
  };

  useLayoutEffect(() => {
    if (initialLocation) {
      return;
    }

    navigation.setOptions({
      headerRight: ({ tintColor }) => (
        <IconButton
          icon="save"
          size={24}
          color={tintColor}
          onPress={() => {
            Alert.alert(
              'Map unavailable on web',
              'Use the Locate User button in Add Place, or run the app on Android/iOS to pick a spot on the map.'
            );
          }}
        />
      ),
    });
  }, [navigation, initialLocation]);

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Map Picker Is Native Only</Text>
      <Text style={styles.body}>
        This screen uses react-native-maps, which is not supported in this web setup.
      </Text>
      <Text style={styles.body}>
        For web, pick a location via Locate User. For map tap selection, use Android or iOS.
      </Text>
    </View>
  );
}

export default MapWeb;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray700,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary100,
    marginBottom: 12,
    textAlign: 'center',
  },
  body: {
    fontSize: 16,
    lineHeight: 22,
    color: Colors.primary100,
    textAlign: 'center',
    marginBottom: 8,
  },
});
