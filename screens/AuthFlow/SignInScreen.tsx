import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  FormControl,
  Input,
  Stack,
  Text,
  Pressable,
  Center,
  Box,
  NativeBaseProvider,
  Button
} from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#1C2134'
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    height: 55,
    backgroundColor: '#E7C0FF',
    marginTop: 20
  },
  txt: {
    color: '#1C2134'
  },
  input: {
    height: 55,
    width: '100%'
  },
  label: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'bold',
    color: 'white'
  },
  formGroup: {
    marginBottom: 20
  }
});

const SignInScreen = () => {
  return (
    <Box style={styles.container}>
      <FormControl style={styles.formGroup} isRequired isInvalid={false}>
        <Stack>
          <FormControl.Label _text={styles.label}>Username</FormControl.Label>
          <Input h={55} style={styles.input} p={2} placeholder="Is it react?" />
          {/* <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText> */}
          <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      <FormControl style={styles.formGroup} isRequired isInvalid={false}>
        <Stack>
          <FormControl.Label _text={styles.label}>Password</FormControl.Label>
          <Input h={55} style={styles.input} p={2} type="password" placeholder={'Password'} />
          {/* <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText> */}
          <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
        </Stack>
      </FormControl>
      <FormControl style={styles.formGroup} isRequired isInvalid={false}>
        <Stack>
          <Button
            w="100%"
            h={55}
            style={styles.btn}
            _text={styles.txt}
            size="lg"
            onPress={() => console.log('hello world')}
          >
            Sign In
          </Button>
          <Pressable my={5}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Forgot Password?</Text>
          </Pressable>
        </Stack>
      </FormControl>
    </Box>
  );
};
export default SignInScreen;
