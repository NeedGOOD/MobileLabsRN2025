import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleRegister = () => {
    console.log({
      email,
      password,
      confirmPassword,
      lastName,
      firstName,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>

      <Text style={styles.label}>Електронна пошта</Text>
      <TextInput
        style={styles.input}
        placeholder="email@example.com"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Пароль</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Пароль (ще раз)</Text>
      <TextInput
        style={styles.input}
        placeholder="********"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Text style={styles.label}>Прізвище</Text>
      <TextInput
        style={styles.input}
        placeholder="Прізвище"
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={styles.label}>Імʼя</Text>
      <TextInput
        style={styles.input}
        placeholder="Імʼя"
        value={firstName}
        onChangeText={setFirstName}
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default RegisterScreen;
