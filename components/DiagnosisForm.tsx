import { StyleSheet, TextInput, View, Text, TouchableOpacity } from 'react-native';

export default function DiagnosisForm({ onSubmit, formData, setFormData }: any) {
  const fields = [
    { label: 'Vehicle Make', key: 'make', placeholder: 'e.g., Toyota' },
    { label: 'Vehicle Model', key: 'model', placeholder: 'e.g., Corolla' },
    { label: 'Year', key: 'year', placeholder: 'e.g., 2015' },
    { label: 'KM Driven', key: 'mileage', placeholder: 'e.g., 60000' },
  ];

  return (
    <View style={styles.formContainer}>
      {fields.map((field) => (
        <View key={field.key} style={styles.inputGroup}>
          <Text style={styles.label}>{field.label}</Text>
          <TextInput
            style={styles.input}
            placeholder={field.placeholder}
            value={formData[field.key]}
            onChangeText={(text) => setFormData({ ...formData, [field.key]: text })}
          />
        </View>
      ))}

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Problem Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          placeholder="Describe the issue..."
          value={formData.problem}
          onChangeText={(text) => setFormData({ ...formData, problem: text })}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Symptoms</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          multiline
          placeholder="List observed symptoms..."
          value={formData.symptoms}
          onChangeText={(text) => setFormData({ ...formData, symptoms: text })}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Text style={styles.buttonText}>Get Recommendations</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    width: '100%',
    padding: 20,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#2196F3',
    borderRadius: 8,
    padding: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});