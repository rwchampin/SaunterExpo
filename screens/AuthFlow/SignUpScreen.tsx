import * as React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  FormControl,
  Input,
  Stack,
  Text,
  Pressable,
  Center,
  Box as NBBox,
  NativeBaseProvider,
  Button,
  Stagger
} from 'native-base';
const Box = (props) => {
  return <NBBox shadow={9} {...props} />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 20,
    width: '100%',
    backgroundColor: '#1C2134'
  },
  btn: {
    height: 55,
    backgroundColor: '#E7C0FF',
    marginTop: 20,
    alignSelf: 'center',
    // flex: 1,
    // width: '100%',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  txt: {
    color: '#1C2134',
    alignSelf: 'center'
  },
  input: {
    height: 55,
    width: '100%'
  },
  label: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: 'bold',
    color: 'white',
    width: '100%'
  },
  formGroup: {
    marginBottom: 20,
    width: '100%',
    flexDirection: 'row',
    display: 'flex'
  }
});

const SignUpScreen = (props) => {
  return (
    <Box style={styles.container}>
      <Stagger
        visible={true}
        initial={{
          opacity: 0,
          scale: 0,
          translateY: 100
        }}
        animate={{
          translateY: 0,
          scale: 1,
          opacity: 1,
          transition: {
            type: 'spring',
            mass: 0.6,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}
        exit={{
          translateY: -100,
          scale: 0.5,
          opacity: 0,
          transition: {
            duration: 100,
            stagger: {
              offset: 30,
              reverse: true
            }
          }
        }}
      >
        <FormControl style={styles.formGroup} isRequired isInvalid={false}>
          <Stack>
            <FormControl.Label _text={styles.label}>First Name</FormControl.Label>
            <Input h={55} style={styles.input} p={2} placeholder="Is it react?" />
            {/* <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText> */}
            <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <FormControl style={styles.formGroup} isRequired isInvalid={false}>
          <Stack>
            <FormControl.Label _text={styles.label}>Last Name</FormControl.Label>
            <Input h={55} style={styles.input} p={2} type="password" placeholder={'Password'} />
            {/* <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText> */}
            <FormControl.ErrorMessage>Something is wrong.</FormControl.ErrorMessage>
          </Stack>
        </FormControl>
        <FormControl style={styles.formGroup} isRequired isInvalid={false}>
          <Stack>
            <FormControl.Label _text={styles.label}>Email</FormControl.Label>
            <Input h={55} style={styles.input} p={2} type="password" placeholder={'Password'} />
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
        <FormControl style={styles.formGroup}>
          <Button
            onPress={() => props.navigation.navigate('Main')}
            w={'100%'}
            style={styles.btn}
            _text={styles.txt}
          >
            Sign In
          </Button>
        </FormControl>
      </Stagger>
    </Box>
  );
};
export default SignUpScreen;
